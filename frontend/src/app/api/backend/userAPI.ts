import { NextApiRequest, NextApiResponse } from "next";
import { withAuthMiddleware } from "../../middleware/authMiddleware"; // Adjust the path as per your project structure

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Your API route logic here
};

export default withAuthMiddleware(handler);
