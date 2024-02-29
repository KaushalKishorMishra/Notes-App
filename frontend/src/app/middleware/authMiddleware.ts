import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getSession, Session } from '@auth0/nextjs-auth0';

// Define a custom property 'session' on NextApiRequest
declare module 'next' {
  interface NextApiRequest {
    session: Session;
  }
}

export const withAuthMiddleware = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = await getSession(req, res);
      if (!session) {
        res.status(401).json({ error: 'User not authenticated' });
        return;
      }
      req.session = session;
      return handler(req, res);
    } catch (error) {
      console.error("Authentication error:", error);
      res.status(500).json({ error: 'Authentication error' });
    }
  };
};
