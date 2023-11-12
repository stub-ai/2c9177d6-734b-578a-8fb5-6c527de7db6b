import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  links: Array<{ title: string; url: string }>;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    links: [
      { title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
      { title: 'Tailwind CSS Documentation', url: 'https://tailwindcss.com/docs' },
      // Add more links as needed
    ],
  });
}