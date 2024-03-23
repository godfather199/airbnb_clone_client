import { useEffect, useState } from 'react'
import {Search, SearchResult} from '../../'
import toast from 'react-hot-toast'
import { fetch_Search_Bar_Results_Service } from '../../../services/propertyService'


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSerarchResults] = useState([])


  // Fetch search results on every keypress
  useEffect(() => {
    const fetch_Data = async () => {
      const {result_Properties} = await fetch_Search_Bar_Results_Service(searchTerm)

      setSerarchResults(result_Properties)
    }

    if (searchTerm) {
      fetch_Data();
    }
    else {
      setSerarchResults([])
    }

  }, [searchTerm])

  
  // const handle_User_Search = () => {
  //   if(!searchTerm) {
  //     return toast.error('Search field is empty', {
  //       duration: 1500,
  //       position: 'bottom-center'
  //     })
  //   }

  //   setSearchTerm('')
  // }


  return (
    <div  className="relative ">
      {/* Search Input field */}
      <div className="">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSerarchResults={setSerarchResults}
          // handle_User_Search={handle_User_Search}
        />
      </div>

      {/* Display search results */}
      {searchResult && (
        <div className="absolute top-[3rem]">
          <SearchResult
            setSerarchResults={setSerarchResults}
            searchResult={searchResult}
            setSearchTerm={setSearchTerm}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar