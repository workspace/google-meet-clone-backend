# Stream Video Serverless

## Setup

1. Deploy this serverless function using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=stream-video-serverless):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https://github.com/workspace/stream-video-serverless&project-name=stream-video-serverless&repository-name=stream-video-serverless)

2. Set Environment Variables with your Stream Video SDK's `API_KEY` and `API_SECRET`.
<img width="1585" alt="image" src="https://github.com/workspace/stream-video-serverless/assets/7759511/aa4c3de9-6917-4323-951d-8f11ffe760d8">

## Create Token API

### Description

This api allows for the creation of a token for the specified user. The token might be used for authentication, session management, or other purposes (as dictated by the underlying service).

It's crucial to ensure you provide the correct API key in the header and specify the appropriate user ID in the request body to successfully create a token.

### Request
- Method

  POST
- URL

  `{your vercel app endpoint}`/api/create-token

- Headers
  - content-type: `application/json`
  - api-key: `{your api key}`

- Body (JSON):
  ```json
  {
    "userId": "USER_ID_TO_LOGIN"
  }
  ```
  Replace `USER_ID_TO_LOGIN` with the appropriate user ID value.

### Expected Responses:
- 200 OK: Success! Returns token details.
  ```json
  {
	  "userId": "userId",
	  "token": "created token"
  }
  ```
- 400 Bad Request: Malformed request or validation errors.
- 401 Unauthorized: Invalid or missing API key.
- 500 Internal Server Error: Unexpected errors on the server side.
