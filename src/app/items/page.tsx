import { pagesPath } from "@/lib/$path";
import Link from "next/link";

type Item = { name: string };
export default function ItemsIndexPage() {
  const items: Item[] = [{ name: "a" }, { name: "b" }, { name: "c" }];
  return (
    <>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link href={pagesPath.items._itemId(item.name).$url()}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
