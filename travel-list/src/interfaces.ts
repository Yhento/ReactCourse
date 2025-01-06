export interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export interface ItemProps {
  item: Item;
}
