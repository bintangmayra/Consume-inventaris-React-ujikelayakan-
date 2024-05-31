import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const [errorData, setErrorData] = useState([]);
    const navigate = useNavigate();

    function handleLogin() {
        axios.post('http://localhost:8000/login', inputData)
            .then(res => {
                console.log(res);
                localStorage.setItem('access_token', res.data.data.access_token);
                navigate('/profile');
            })
            .catch(err => {
                setErrorData(err.response.data);
            });
    }

    return (
        <>
            <Navbar />
            <div className="bg-gray-200 min-h-screen flex items-center justify-center">
                <form className="max-w-2xl mx-auto p-8 bg-white border border-gray-300 rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    {
                        Object.keys(errorData).length > 0 && (
                            <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Danger</span>
                                <div>
                                    <span className="font-medium">Gagal Login:</span>
                                    <ul className="mt-1.5 list-disc list-inside">
                                        {
                                            Object.entries(errorData).map(([index, value]) => (
                                                <li key={index}>{value}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }

                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./public/gin.jpg" alt="" />
                        <div className="flex flex-col justify-between p-8 leading-normal w-full">
                            <div className="mb-5 w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" onChange={e => setInputData({ ...inputData, email: e.target.value })} required />
                            </div>
                            <div className="mb-5 w-full">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*" onChange={e => setInputData({ ...inputData, password: e.target.value })} required />
                            </div>
                            <button onClick={handleLogin} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
