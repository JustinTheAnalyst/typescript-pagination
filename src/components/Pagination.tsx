import React, {useState} from "react";
import {PaginationButton} from "./PaginationButton";
import './paginationStyles.scss';

interface IProps {
    contentPerPage: number;
    offset: number;
    total: number;
}

export function Pagination(props: IProps) {
    // initialize
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    const contentPerPage = props.contentPerPage;
    const total = props.total ? props.total : 0;
    const from = Math.min(offset + 1, total);
    const to = Math.min(offset + contentPerPage, total);
    const totalPage = Math.ceil(total / contentPerPage);

    const pageArray = [-2, -1, 0, 1, 2].map((v) => currentPage + v).filter((page) => page > 0 && page <= totalPage);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function gotToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    console.log(currentPage);

    return (
        <div className="container">
            <div className="page-info">
                Showing {from} to {to} of {total} items
            </div>
            {total > 0 && (
                <div className="page-container">
                    <button onClick={gotToPreviousPage} disabled={currentPage === 1}>&lt;&lt;</button>

                    {/* for each page in page array, set offset relative to page number */}
                    {pageArray.map((page) => {
                        return (
                            <PaginationButton key={page} page={page} currentPage={currentPage} contentPerPage={contentPerPage} setOffset={setOffset} />
                        );
                    })}

                    <button onClick={goToNextPage} disabled={currentPage === totalPage}>&gt;&gt;</button>
                </div>
            )}
        </div>
    );
}