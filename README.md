# RW Lab — SAT Reading & Writing

Static site (no build). Vercel serves the repo root.

- `index.html` — app
- `lessons/<id>.html` — video lessons (scenes + EN/KO/ZH subtitles)
- `lessons/<id>.narr.json` — narration text extracted from the lesson (generated)
- `audio/<id>.<lang>.json` + `audio/<id>/<lang>/<n>.mp3` — recorded narration (generated)

If a lesson has no recorded audio for a language, the player falls back to the device voice.

## Generate narration (Google Chirp 3 HD)
GitHub → Actions → **Generate lesson audio** → Run workflow (lessons `all`, langs `en,ko,zh`).
Needs either repository variables `GCP_WIF_PROVIDER`, `GCP_SA_EMAIL`, `GCP_PROJECT_ID` (same as TeensMBA)
or a secret `GOOGLE_TTS_API_KEY`.
