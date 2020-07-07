import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

import database from "~/utils/firebase";
import { slugify } from "~/utils/utils";

export default async function BusinessController(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  try {
    switch (req.method) {
      case "GET":
        await GET_Handler(database, req.query.category, res);
        break;

      case "POST":
        await POST_Handler(database, req.body, res);
        break;

      default:
        res.status(404).send("Method not allowed");
        break;
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
}

async function GET_Handler(database, category, res) {
  const response = (
    await database.ref(`directorio-armenia/businesses/${category}`).once("value")
  ).val();

  res.status(200).send(
    Object.values(response || {}).sort(
      (a: Record<string, unknown>, b: Record<string, unknown>) => {
        return a.created_at > b.created_at ? 1 : -1;
      },
    ),
  );
}

async function POST_Handler(database, body, res) {
  const slug = slugify(body.name);

  await database.ref(`directorio-armenia/TO_APPROVE/${slug}`).set({
    ...body,
    categories: ["empty"],
    created_at: Date.now(),
    facebook: body.facebook.toLowerCase(),
    id: uuid(),
    instagram: body.instagram.toLowerCase(),
    logo: "",
    menu: "",
    slug,
  });

  res.status(200).json({ success: true });
}
