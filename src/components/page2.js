import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";

import "../styles/page2.css";

function GlobalFilter({ filter, setFilter }) {
    return (
        <span>
            Search:{" "}
            <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
        </span>
    );
}

export default function SampleTable() {

    const columns = useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "First Name", accessor: "first_name" },
            { Header: "Last Name", accessor: "last_name" },
            { Header: "Country", accessor: "country" },
            { Header: "Status", accessor: "status" },
            { Header: "Phone", accessor: "phone" },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                id: "1",
                first_name: "Dianne",
                last_name: "Russell",
                country: "USA",
                status: "Active",
                phone: "0123456789",
            },
            {
                id: "2",
                first_name: "Anurag",
                last_name: "Bhatt",
                country: "India",
                status: "Active",
                phone: "8171882311",
            },
            {
                id: "3",
                first_name: "Jack",
                last_name: "Ma",
                country: "Japan",
                status: "None",
                phone: "0123456789",
            },
            {
                id: "4",
                first_name: "Warren",
                last_name: "Alwa",
                country: "UK",
                status: "Active",
                phone: "0123456789",
            },
            {
                id: "5",
                first_name: "Sine",
                last_name: "Ben",
                country: "Kenya",
                status: "None",
                phone: "0123456789",
            },
            {
                id: "6",
                first_name: "Sine",
                last_name: "Ben",
                country: "Kenya",
                status: "None",
                phone: "0123456789",
            },
            {
                id: "7",
                first_name: "Sine",
                last_name: "Ben",
                country: "Kenya",
                status: "None",
                phone: "0123456789",
            },
            {
                id: "8",
                first_name: "Sine",
                last_name: "Ben",
                country: "Kenya",
                status: "None",
                phone: "0123456789",
            },
            {
                id: "9",
                first_name: "Sine",
                last_name: "Ben",
                country: "Kenya",
                status: "None",
                phone: "0123456789",
            },
            {
                id: "10",
                first_name: "Sine",
                last_name: "Ben",
                country: "Kenya",
                status: "None",
                phone: "0123456789",
            },
        ],
        []
    );

    const tableInstance = useTable(
        { columns, data },
        useGlobalFilter,
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state,
    } = tableInstance;

    const { globalFilter } = state;

    return (
        <div>
            <h6 className="dashHead">BLOG POSTS</h6>
            <h3 className="blogHead">Add New Post</h3>
            <div className="searchTab">
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <div className="Table">
                <table className="sampleTable" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr
                                className="tableHeading"
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.slice(0, 10).map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}