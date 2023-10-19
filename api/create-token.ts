import type { VercelRequest, VercelResponse } from '@vercel/node'
import { StreamVideoServerClient } from '@stream-io/video-client'

const client = new StreamVideoServerClient(
  process.env.API_KEY as string,
  {
    secret: process.env.API_SECRET
  }
);

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(400).json({
      message: "allow only POST"
    })
  }

  const apiKey = req.headers['api-key']
  if (!apiKey || Array.isArray(apiKey) || apiKey.trim() !== process.env.API_KEY) {
    return res.status(401).json({
      message: "api key is missing, empty, or not a valid api key."
    })
  }

  const userId = req.body.userId
  if (!userId || Array.isArray(userId) || userId.trim() === '') {
    return res.status(400).json({
      message: "User ID is missing, empty, or not a valid string."
    })
  }

  const token = client.createToken(userId)

  return res.status(200).json({
    userId: userId,
    token: token,
  })
}
