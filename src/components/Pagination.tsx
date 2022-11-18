import React, {useState} from "react";
import { FaCaretLeft, FaCaretRight, FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import {PaginationButton} from "./PaginationButton";
import './paginationStyles.scss';

interface IProps {
    contentPerPage: number;
    offset: number;
    total: number;
}

export function Pagination(props: IProps) {
    // initialize
    // const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    const contentPerPage = props.contentPerPage;
    const total = props.total ? props.total : 0;
    const from = Math.min(offset + 1, total);
    const to = Math.min(offset + contentPerPage, total);
    const totalPage = Math.ceil(total / contentPerPage);
    const currentPage = offset / contentPerPage + 1;

    const pageArray = [-2, -1, 0, 1, 2].map((v) => currentPage + v).filter((page) => page > 0 && page <= totalPage);

    function goToNextPage() {
        // setOffset(contentPerPage * (totalPage - 1));
        setOffset((prev) => Math.min(prev + contentPerPage, contentPerPage * (totalPage - 1)));
    }

    function gotToPreviousPage() {
        // setOffset(0);
        setOffset((prev) => Math.max(prev - contentPerPage, 0));
    }

    return (
        <div className="container">
            <div className="page-info">
                Showing {from} to {to} of {total} items
            </div>

            {total > 0 && (
                <div className="page-container">
                    <button onClick={gotToPreviousPage} disabled={currentPage === 1}><FaCaretLeft className="page-left-icon" /></button>

                    {!pageArray.includes(1) && (
                        <>
                            <PaginationButton 
                                key={1} 
                                page={1} 
                                offset={offset} 
                                contentPerPage={contentPerPage} 
                                onClick={() => {setOffset(0)}} 
                            />
                            <div>...</div>
                        </>
                    )}

                    {/* for each page in page array, set offset relative to page number */}
                    {pageArray.map((page) => {
                        return (
                            <PaginationButton 
                                key={page} 
                                page={page} 
                                offset={offset} 
                                contentPerPage={contentPerPage} 
                                onClick={() => {setOffset(contentPerPage * (page-1))}} 
                            />
                        );
                    })}

                    {!pageArray.includes(totalPage) && (
                        <>
                            <div>...</div>
                            <PaginationButton 
                                key={totalPage} 
                                page={totalPage} 
                                offset={offset} 
                                contentPerPage={contentPerPage} 
                                onClick={() => {setOffset(contentPerPage * (totalPage - 1))}} 
                            />
                        </>
                    )}

                    <button onClick={goToNextPage} disabled={currentPage === totalPage}><FaCaretRight className="page-right-icon" /></button>
                </div>
            )}
        </div>
    );
}