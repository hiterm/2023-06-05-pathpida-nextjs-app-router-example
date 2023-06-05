import { pagesPath } from "@/lib/$path";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Hello</div>
      <Link href={pagesPath.items.$url()}>Items</Link>
    </main>
  );
}
