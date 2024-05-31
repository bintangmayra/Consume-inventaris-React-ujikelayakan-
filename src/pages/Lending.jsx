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
        axios.get('http://localhost:8000/lendings', {
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

    const columnDatabase= {
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
        "store": "http://localhost:8000/lendings/store",
        "delete": "http://localhost:8000/lendings/delete/{id}",
        "detail": "http://localhost:8000/lendings/{id}"

    }
    const coloumnDetailModalDelete = 'name'

    const judulModalEdit = 'lending'

    const inputData = {
        "date_time": {
            "type": "datetime-local",
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
            "type": "nomor",
            "options": null,
        },

        "stuff_id": {
            "type": "text",
            "options": null,
        },
       
    }





    return(
    <>
    <Navbar/>
    <div className="bg-blue-100 min-h-screen p-10">
    <div className="bg-white p-6 rounded-lg shadow-md">

    <div className="p-10">
    
                <Table dataTh={dataThParent}
                    dataTd={lending}
                    columnDb={columnDatabase}//propps//variabel
                    buttonData={button}
                    endpoints={endpoints}
                    coloumnDetail={coloumnDetailModalDelete}
                    judulModalEdit={judulModalEdit}
                    inputData={inputData}
                ></Table>
            </div>
</div>
    </div>
    
    
    
    </>)
}