# CloudFunctions

## Overview

This repository contains a collection of Cloud Functions for use with the [Google Cloud Functions](https://cloud.google.com/functions/) service.
This is the cloud part of the project IoT-LPDIM.

Access to the GCP function page :
[https://console.cloud.google.com/functions/list?project=iot-lpdim](https://console.cloud.google.com/functions/list?project=iot-lpdim)

Requirements :
- Node.js
- npm
- gcloud (Google Cloud SDK) : [https://cloud.google.com/sdk/docs/quickstart-macos](https://cloud.google.com/sdk/docs/quickstart-macos)

Command to deploy functions:
```bash
gcloud functions deploy insert --env-vars-file .env --trigger-http --runtime nodejs16 --allow-unauthenticated --entry-point=insert
```

