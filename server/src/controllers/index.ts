import { Request, Response } from "express";
import { getItem, getItems } from "../services";

export const itemsList = async (req: Request, res: Response) => {
  const query = req.query.q;
  console.log(`Controller ${query}`);

  const items = await getItems(query).then((res) => res);

  return res.json(items);
};

export const item = async (req: Request, res: Response) => {
  const id = req.params.id;
  const item = await getItem(id).then((res) => res);

  return res.json(item);
};
