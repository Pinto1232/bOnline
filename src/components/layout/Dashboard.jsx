import React, {
    useState,
    useEffect
} from "react";
import axios from 'axios';
import styled from '../layout/Dashboard.module.css';
import DashboardLayout from '../layout/DashboardLayout'




const Dashboard = () => {
        const [data, setData] = useState([]);



        const fetchData = () => {
            axios.get("Data.json")
                .then((response) => {
                    console.log(response);
                    const getData = response.data;
                    setData(getData);
                });

            };
            useEffect(() => fetchData(), []);
            console.log(data);





    return (
        <div className={styled.dashboard} > {data.map((item, index) => (
            <div key = {index} >
                        <DashboardLayout items = {item}
                        /> </div>
                    ))
           }
        </div>
     );
        };

export default Dashboard;