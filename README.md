# IoT Function

Command to deploy functions:

```bash
gcloud functions deploy insert --env-vars-file .env --trigger-http --runtime nodejs16 --allow-unauthenticated --entry-point=insert
```