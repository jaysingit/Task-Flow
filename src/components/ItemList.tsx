import Button from "./Button";
import type { Items, ReactSetState } from "../types/utils.ts";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

export default function ItemList({ items, setItems }: ItemList) {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return items.map((data, index) => (
    <div
      key={data.id}
      className="flex justify-between items-center
                bg-gray-200 rounded-sm p-1 border-2"
    >
      <p className="font-black">
        {index + 1} - {data.title}
      </p>

      <Button
        title="Delete"
        className="bg-blue-500 hover:bg-red-500 text-white h-7"
        onClick={() => handleDelete(data.id)}
      ></Button>
    </div>
  ));
}
