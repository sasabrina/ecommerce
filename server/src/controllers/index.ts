import { Request, Response } from "express";
import { getItem, getItems } from "../services";
import { logInfo } from "../utils/logger";

export const itemsList = async (req: Request, res: Response) => {
  const query = req.query.q;
  const items = await getItems(`${query}`).then((res) => res);
  logInfo(`GET: http:/localhost:8000/api/items?q=${query}`);

  return res.json(items);
};

export const item = async (req: Request, res: Response) => {
  const id = req.params.id;
  const item = await getItem(id).then((res) => res);
  logInfo(`GET: http:/localhost:8000/api/items/${id}`);

  return res.json(item);
};
