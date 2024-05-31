import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
    const [dataProfile, setDataProfile] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/profile', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
        .then(res => {
            setDataProfile(res.data.data);
        })
        .catch(err => {
            console.log(err);
            navigate('/login');
        });
    }, []);

    function handleLogout() {
        axios.get('http://localhost:8000/logout', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
        .then(res => {
            // After successful logout, remove token from local storage
            localStorage.removeItem('access_token');
            // Navigate to login page
            navigate('/login');
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <Navbar />
            
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl m-4">
                        <img src="../public/book.jpg" className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="Profile Picture" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white tracking-tight text-center">{dataProfile.username}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{dataProfile.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* Add another card here if needed */}
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl p-4">
                    <Link to="/dashboard" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition ease-in-out duration-150 mb-2 md:mb-0 md:mr-4">Dashboard</Link>
                    <button onClick={handleLogout} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition ease-in-out duration-150">Logout</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl m-4">
                        <img src="../public/book.jpg" className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="Profile Picture" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white tracking-tight text-center">{dataProfile.username}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{dataProfile.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* Add another card here if needed */}
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl p-7">
                    <Link to="/dashboard" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition ease-in-out duration-150 mb-5 md:mb-0 md:mr-4">Dashboard</Link>
                    <button onClick={handleLogout} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition ease-in-out duration-150">Logout</button>
                </div>
            </div>
        </>
    );
}
