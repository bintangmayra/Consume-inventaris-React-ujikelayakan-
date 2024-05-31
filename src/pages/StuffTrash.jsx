import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function StuffTrash() {
    const dataThParent = [
        "#",
        "Name",
        "Category",
        "Action"
        ]

  const [stuffs, setStuffs] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/stuffs/trash", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        }
      })
      .then((res) => {
        setStuffs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // Navigate('/login');
      })
  }, []);

  const columnDatabase = {
    "name": null,
    "category": null,
   
  };

  const buttons = [
    "restore",
    "permanent-delete"
  ]

  const endpoints = {
    "restore" : "http://localhost:8000/stuffs/trash/restore/{id}",
    "permanent-delete" : "http://localhost:8000/stuffs/trash/permanent-delete/{id}",


  }
  const columnDetailModalDelete = ''

  const judulModalEdit = ''

  const inputData = {}
  
    return (
        <>
        <Navbar />
                     <div className="flex justify-end">
                     <Link to={'/stuff'}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex-justify-end ">Stuff</button>
                        </Link>
                        </div>   
                    
                   
      <Table dataTh={dataThParent} dataTd={stuffs} columnDb={columnDatabase} buttonData={buttons} endpoints={endpoints} columnDetail={columnDetailModalDelete} judulModalEdit={judulModalEdit} inputData={inputData}></Table>
        </>
    )
}