import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import axios from "axios";

export default function Lending() {

    const dataThParent = [
        "#",
        "Time",
        "username",
        "Note",
        "Total Use",
        "Stuff_id",
        "Action"

    ]

    const [lending, setlending] = useState({});



     

    useEffect(() => {
        axios.get('http://localhost:8000/lending', {
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token'),
            }
        })
            .then(res => {
                setlending(res.data.data);
            })
            
            .catch(err => {
                console.log(err);
            });
    }, []);

    const coloumDataBase = {
        "date_time": null,
        "name": null,
        "notes": null,
        "total_stuff":null,
        "stuff_id": null
        

    }

    const button = [
        "create",
        "delete",
        "detail",

    ]

    const endpoints = {
        "create": "http://localhost:8000/lending/store",
        "delete": "http://localhost:8000/lending/delete/{id}",
        "detail": "http://localhost:8000/lending/{id}"

    }
    const coloumnDetailModalDelete = 'name'

    const judulModalEdit = 'lending'

    const inputData = {
        "date_time": {
            "type": "text",
            "options": null,

        },
        
        "name": {
            "type": "text",
            "options": null,
        },

        "notes": {
            "type": "text",
            "options": null,
        },

        "total_stuff": {
            "type": "unique",
            "options": null,
        },

        "stuff_id": {
            "type": "unique",
            "options": null,
        },
       
    }





    return(
    <>
    <Navbar/>

    <div className="p-10">
    <div className="bg-blue-100 min-h-screen p-10">
    <div className="bg-white p-6 rounded-lg shadow-md">

                <Table dataTh={dataThParent}
                    dataTd={lending}
                    coloumDB={coloumDataBase}
                    buttonData={button}
                    endpoints={endpoints}
                    coloumnDetail={coloumnDetailModalDelete}
                    judulModalEdit={judulModalEdit}
                    inputData={inputData}
                    s
                ></Table>
            </div>
</div>
</div>
    
    
    
    
    </>)
}