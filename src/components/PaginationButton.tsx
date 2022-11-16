import React from "react";

interface IProps {
    page: number;
    currentPage: number,
    setOffset: any,
    contentPerPage: number,
}

export function PaginationButton(props: IProps) {
    return (
        <button className={`page ${props.page === props.currentPage ? "isActive" : ""}`} onClick={() => props.setOffset(props.contentPerPage * props.page)}>{props.page}</button>
    )
}