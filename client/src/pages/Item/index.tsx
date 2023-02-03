import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "@/context";
import { ItemDetails } from "@/components";
import ItemsLayout from "../ItemsLayout";

type Props = {};

const Item = ({}: Props) => {
  const { item, getItem } = useContext(ItemsContext);
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <ItemsLayout>
      <ItemDetails item={item} />
    </ItemsLayout>
  );
};

export default Item;
