import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

import data from "./data.json";
const Main2 = () => {
  const columns = [
    {
      name: "Company",
      selector: (row) => (
        <div className="flex flex-row p-2 font-Nuni">
          <div>
            <img
              width={58}
              height={39}
              className="rounded-xl"
              src={row.logo}
              alt="owner"
            />
          </div>
          <div className="flex flex-col pt-1 ">
            <div>
              <p className="text-xs  px-2 font-bold text-black">
                {row.brand_name}
              </p>
            </div>
            <div>
              <p className="text-xs px-2 font-thin text-gray-500">{row.item}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Active Orders",
      selector: (row) => row.active_orders,
    },

    {
      name: "Amount",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Placed on",
      selector: (row) => row.placed_on,
      sortable: true,
    },

    {
      name: "Options",
      cell: () => (
        <div className="flex flex-row gap-1">
          <div className="group relative cursor-pointer">
            <span className="underline hover:cursor-pointer">
              <AiOutlineEdit />
            </span>
          </div>

          <div className="group relative cursor-pointer">
            <span className="underline hover:cursor-pointer">
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

  return (
    <div className="main-content flex flex-row flex-grow p-4">
      <div className="p-4" style={{ width: "1100px" }}>
        <DataTable
          globalFilterFields={["brand_name", "quantity", "price", "status"]}
          className="font-Nuni"
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
