import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "@/context";
import { ItemDetails } from "@/components";
import ItemsLayout from "../ItemsLayout";

const Item = (): JSX.Element => {
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
