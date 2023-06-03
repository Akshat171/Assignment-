import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

import data from "./data.json";
const Main2 = () => {
  const columns = [
    {
      name: "Logo",
      selector: (row) => (
        <img
          width={30}
          height={30}
          className="rounded-full"
          src={row.logo}
          alt="owner"
        />
      ),
    },
    {
      name: "Brand Name",
      selector: (row) => row.brand_name,
      sortable: true,
    },
    {
      name: "Model Name",
      selector: "item",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Quantity",
      selector: "quantity",
      sortable: true,
    },
    {
      name: "Amount",
      selector: "price",
      sortable: true,
    },
    {
      name: "Placed on",
      selector: "placed_on",
      sortable: true,
    },

    {
      name: "Action",
      cell: () => (
        <div className="flex flex-row gap-1">
          <div class="group relative cursor-pointer">
            <span class="underline hover:cursor-pointer">
              <AiOutlineEdit />
            </span>
          </div>

          <div class="group relative cursor-pointer">
            <span class="underline hover:cursor-pointer">
              <AiFillDelete type="button" onClick={(e) => handleDelete(e.id)} />
            </span>
          </div>
        </div>
      ),
    },
  ];

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filteredItems = data.filter((item) => {
      return item.brand_name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredData(filteredItems);
  }, [search]);

  function handleDelete(id) {
    const newList = items.filter((li) => li.id !== id);
    setItems(newList);
  }
  const deleteRow = (number) => {
    const copy = [...items];
    copy = copy.filter((item, index) => number != index);
    setItems(copy);
  };
  return (
    <div className="main-content flex flex-row flex-grow p-4">
      <div className="p-4" style={{ width: "1100px" }}>
        <DataTable
          globalFilterFields={["brand_name", "quantity", "price", "status"]}
          className="font-Nuni uppercase"
          columns={columns}
          data={filteredData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          title={<span className="font-Nuni">All orders</span>}
          subHeader
          delRow={deleteRow}
          subHeaderComponent={
            <input
              className="shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
          responsive
        ></DataTable>
      </div>
    </div>
  );
};

export default Main2;
