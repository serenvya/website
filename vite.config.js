import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import contactHandler from "./api/contact.js";
import auditsuitePaymentLinkHandler from "./api/auditsuite-payment-link.js";

function parseJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function apiRouteDevMiddleware(routePath, handler, label) {
  return {
    name: `serenvya-api-dev:${routePath}`,
    configureServer(server) {
      server.middlewares.use(routePath, async (request, response) => {
        try {
          request.body = await parseJsonBody(request);
          response.status = (statusCode) => {
            response.statusCode = statusCode;
            return response;
          };
          response.json = (payload) => {
            if (!response.headersSent) response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(payload));
            return response;
          };
          await handler(request, response);
        } catch (error) {
          console.error(`Local ${routePath} route failed`, { message: error?.message || "Unknown route error" });
          if (!response.headersSent) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "application/json");
          }
          response.end(JSON.stringify({ error: `Unable to process ${label} request.` }));
        }
      });
    },
  };
}

export default defineConfig({
  envPrefix: ["VITE_", "NEXT_PUBLIC_"],
  plugins: [
    apiRouteDevMiddleware("/api/contact", contactHandler, "contact"),
    apiRouteDevMiddleware("/api/auditsuite-payment-link", auditsuitePaymentLinkHandler, "AuditSuite checkout"),
    react(),
    tailwindcss(),
  ],
});
