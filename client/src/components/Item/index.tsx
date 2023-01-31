import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "@/api/apiItems";
import { Item as ItemType } from "@/models";

type Props = {};

const Item = ({}: Props) => {
  const { id } = useParams();
  const [item, setItem] = useState<ItemType>({} as ItemType);

  const getData = () => {
    getItem(id).then((res) => {
      setItem(res.item);
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  return <Suspense>{item && item.title}</Suspense>;
};

export default Item;
