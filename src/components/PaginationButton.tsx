import React from "react";

interface IProps {
    page: number;
    contentPerPage: number,
    offset: number,
    setOffset: any,
}

export function PaginationButton(props: IProps) {
    const currentPage = props.offset/props.contentPerPage + 1;

    return (
        <button 
            className={`page ${props.page === currentPage ? "isActive" : ""}`} 
            onClick={() => props.setOffset(props.contentPerPage * (props.page-1))}
        >
            {props.page}
        </button>
    )
}