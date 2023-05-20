import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { GrStatusGood } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import FileManager from "./main1";

const Main2 = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => (
        <a className="" href={row.Name}>
          Sample file
        </a>
      ),
    },
    {
      name: "Owner",

      selector: (row) => (
        <img
          width={30}
          height={30}
          className="rounded-full"
          src={row.Owner}
          alt="owner"
        />
      ),
    },
    {
      name: "Label",

      selector: (row) => row.Labels,
    },
    {
      name: "Type",

      selector: (row) => row.Type,
    },
    {
      name: "Modified",

      selector: (row) => row.ModifietAt,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex flex-row gap-1">
          <div class="group relative cursor-pointer">
            <div class="absolute invisible bottom-5 group-hover:visible w-40 bg-white text-black px-4 mb-3 py-2 text-sm rounded-md shadow-lg shadow-gray-400">
              <p class=" leading-2 text-gray-400 pt-2 pb-2 flex flex-row gap-1 ">
                {" "}
                Edit
              </p>
              <svg
                class="absolute z-10  bottom-[-10px] "
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
              </svg>
            </div>
            <span class="underline hover:cursor-pointer">
              <AiOutlineEdit />
            </span>
          </div>

          <div class="group relative cursor-pointer">
            <div class="absolute invisible bottom-5 group-hover:visible w-40 bg-white text-black px-4 mb-3 py-2 text-sm rounded-md shadow-lg shadow-gray-400">
              <p class=" leading-2 text-gray-400 pt-2 pb-2 flex flex-row gap-1 ">
                {" "}
                Are you sure?
                <div className="flex flex-row pt-1">
                  <RxCrossCircled />
                  <GrStatusGood />
                </div>
              </p>
              <svg
                class="absolute z-10  bottom-[-10px] "
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
              </svg>
            </div>
            <span class="underline hover:cursor-pointer">
              <AiFillDelete type="button" onClick={(e) => handleDelete(e.id)} />
            </span>
          </div>
        </div>
      ),
    },
  ];
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const fetchApiFile = async () => {
    try {
      const res = await axios.get(
        "https://646312614dca1a661353d0ee.mockapi.io/api/Files"
      );

      setItems(res.data);
      setFilteredFiles(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFile();
  }, []);

  useEffect(() => {
    const result = items.filter((item) => {
      return item.Name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredFiles(result);
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
      <div className="flex flex-col flex-grow p-6">
        <div className="flex flex-row gap-2">
          <span className="uppercase font-bold font-Nuni">Categories</span>
          <IoIosSettings className="text-xl pt-0.5" />
        </div>
        <FileManager />
      </div>
      <div className="">
        {/* <span class="leading-10 text-gray-700 text-2xl font-bold ml-1 p-3 font-Nuni">
          All Items
        </span>{" "} */}
        <DataTable
          className="font-Nuni uppercase"
          columns={columns}
          data={filteredFiles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="350px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          title={<span className="font-Nuni">All items</span>}
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
        ></DataTable>
      </div>
    </div>
  );
};

export default Main2;
