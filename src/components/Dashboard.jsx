import React, {useState, useEffect} from 'react';
import style from '../components/Dashboard.module.css'
import axios from 'axios'

const Dashboard = () =>
{
    const [data, setData] = useState([]);


      const fetchData =  (currentPage) => {
        axios
            .get(
                "https://pinto1232.github.io/bOnline/Data.json"
            )
            .then((response) => {
                console.log(response); 
                const getData = response.data;
                const total = response.headers['set-cookie']
                console.log(total);
                
                setData(getData);
            });
    };
    useEffect(() => fetchData(null), []);
    console.log('From dashboard', data);

    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
};

export default Dashboard;