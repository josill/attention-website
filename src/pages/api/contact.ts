import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from './utils/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      await sendEmail({
        to: "jonathan@attention.ee",
        subject: "Contact Form Submission from " + name + " with email: " + email,
        html: message,
      });

      res.status(200).json({ success: true })      
    } catch (error) {
      res.status(500).json({ error: "Error sending email" })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}