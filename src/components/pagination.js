import { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props){


    const {data} = props
const itemsPerPage=5;
    const [itemOffset, setItemOffset] = useState(0);


    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  



