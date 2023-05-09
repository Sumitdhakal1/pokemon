import Searchbar from "./Searchbar";
import PokemonName from "./PokemonName";
import { useState, useEffect } from "react";
import Pageination from "./Pageination";
function Apicall() {
  const [items, setItems] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      );
      const data = await response.json();
      const item = data.results;
      setItems(item);
    }
    fetchdata();
  }, []);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

  const pagination = (pageNumbers) => {
    SetCurrentPage(pageNumbers);
  };
  return (
    <div>
      <span>sumit</span>
      <Searchbar />
      <div>
        <PokemonName user={currentItem} />
        <Pageination
          itemPerPage={itemPerPage}
          totalItem={items.length}
          pagination={pagination}
        ></Pageination>
      </div>
    </div>
  );
}
export default Apicall;
