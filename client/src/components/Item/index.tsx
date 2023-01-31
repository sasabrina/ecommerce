import { useEffect, Suspense, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "@/context";

type Props = {};

const Item = ({}: Props) => {
  const { item, getItem } = useContext(ItemsContext);
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);

  return <Suspense>{item && item.title}</Suspense>;
};

export default Item;
