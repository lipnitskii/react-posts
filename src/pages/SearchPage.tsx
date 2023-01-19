import { Link } from "react-router-dom";
import { Search } from "../components/Search";

export function SearchPage() {
  return (
    <>
      <Search />
      <Link to="/">
        <div className="py-2 px-4 border bg-blue-500 mx-auto w-20"> Назад </div>
      </Link>
    </>
  );
}
