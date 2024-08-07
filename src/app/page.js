import Image from "next/image";
import { Featured } from "./components/featured/Featured";
import { CategoryList } from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import { Menu } from "./components/menu/Menu";

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
        <Featured />
        <CategoryList />
        <div className="flex gap-12 my-12">
           <CardList page={page}/>
           <Menu />
        </div>
    </div>
  );
}
