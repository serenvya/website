# Serenvya Survey Setup

The survey is hosted from `public/survey` and is available at `/survey/` after deployment.

## Google Apps Script

1. Open the Google Sheet that contains the `Survey` tab.
2. Go to Extensions > Apps Script.
3. Paste the code from `google-app-script/survey-mail-and-sheet.gs`.
4. Save the project.
5. Deploy it as a Web App.
6. Set Execute as: Me.
7. Set Who has access: Anyone.
8. Copy the Web App URL ending with `/exec`.

The Apps Script appends every completed survey to the `Survey` tab and sends a personalized readiness report to the participant with `info@serenvya.com` in CC.

## Vercel Environment Variable

Add this environment variable in Vercel:

```text
SURVEY_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Redeploy the website after saving the environment variable.

## Sheet Columns

The first three columns are preserved as:

```text
Name | Email Id | Mobile Number
```

The script fills the remaining headers automatically for company, role, scores, bands, generated date, and full report JSON.
