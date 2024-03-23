import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



function Search({ searchTerm, setSearchTerm, setSerarchResults }) {
  return (
    <div  className="w-[12rem] md:w-[25rem] lg:w-[35rem] xl:w-[45rem]">
      {/* Input field */}
      <div className="border-2 border-gray-300  h-[3rem] flex items-center justify-between p-3 rounded-full shadow-lg">
        {!searchTerm && <SearchIcon />}
        <input
          // style={{ border: "3px solid red" }}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="outline-none text-md text-gray-600 font-medium w-full"
        />

        {searchTerm && (
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSearchTerm("");
              setSerarchResults([]);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Search