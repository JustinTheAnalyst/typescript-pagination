import React from "react";

interface IProps {
    page: number;
    contentPerPage: number,
    offset: number,
    onClick: any,
}

export function PaginationButton(props: IProps) {
    const currentPage = props.offset/props.contentPerPage + 1;

    return (
        <>
            <button 
                className={`page ${props.page === currentPage ? "isActive" : ""}`} 
                onClick={props.onClick}
            >
                {props.page}
            </button>            
        </>
    )
}