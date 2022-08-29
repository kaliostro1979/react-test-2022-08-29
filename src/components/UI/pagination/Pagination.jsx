import React from 'react';
import {useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";

const Pagination = ({totalPages, callBack, itemsPerPage}) => {
    const dispatch = useDispatch()

    const handlePageClick = (event)=>{
       const {selected} = event
        dispatch(callBack(selected, itemsPerPage))
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={"pagination-list"}
            pageClassName={"pagination-list__item"}
            activeClassName={"pagination-list__item-active"}
        />
    );
};

export default Pagination;
