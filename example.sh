curl --location --request POST 'https://onesignal.com/api/v1/notifications' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic PUT HERE YOUR KEY' \
--data-raw '{
  "app_id": "8d86cc23-d5ac-45d6-84ee-3c76021b2c0e",
  "include_external_user_ids": ["909291"],
  "data": {"foo": "bar"},
  "contents": {"en": "Hello! Friend"}
}
'