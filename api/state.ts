import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    status: "unchanged",
    headline: "Course unchanged.",
    subtitle: "This does not alter the plan."
  });
}
