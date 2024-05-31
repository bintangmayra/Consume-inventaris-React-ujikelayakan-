import React, { useState } from "react";
import axios from "axios";

export default function ModalAdd({ isOpen, closeModal, inputData, judulModal, endpoints, onDataAdded }) {
    console.log(endpoints)
    if (!isOpen) {
        return null;
    }

    const [dataDetail, setDataDetail] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setDataDetail(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleStore(e) {
        e.preventDefault();
        axios.post(endpoints['store'], dataDetail, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
            .then(res => {
                onDataAdded();  // Inform parent component that new data was added
                closeModal();  // Close the modal after successful submission
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 401) {
                    navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
                }
            });
    }

    return (
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Add Data {judulModal}
                        </h3>
                        <button type="button" onClick={closeModal} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleStore}>
                            {Object.entries(inputData).map(([key, item]) => (
                                <div className="mb-6" key={key}>
                                    {item.type === "select" ? (
                                        <div>
                                            <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{key}</label>
                                            <select name={key} id={key} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500" onChange={handleChange}>
                                                <option hidden selected disabled>Select {key}</option>
                                                {item['options'].map((opt, index) => (
                                                    <option key={index} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <div>
                                            <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{key}</label>
                                            <input type={item.type} name={key} id={key} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white" onChange={handleChange} />
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add data</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
