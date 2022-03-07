import React, {useState, useEffect} from "react";
import styled from '../dashboard/Dashboard.module.css';
import axios from 'axios';
import datas from "../../../Data";
import DashboardLayout from "./DashboardLayout";
    

const Dashboard = () =>{
    const [data, setData] = useState([]); 
   /*  const [ ...data ] = dataProduct;
    console.log('Product pinto', data);
    
    const [account_id,  first_name] = data;
    console.log('Account id:', account_id,  first_name); */

    

      const fetchData =  () => {
        axios
            .get(
                "https://pinto1232.github.io/bOnline/Data.json"
            )
            .then((response) => {
                console.log(response); 
                const getData = response.data;     
                setData(getData);
            });
    };
    useEffect(() => fetchData(), []);
    console.log(data);
    

    
  

    return (
        <div className={styled.dashboard}>
            {data.map((item, index) => (
                <div key={index}>
                    <DashboardLayout items={item } />
                </div>
            ))}
        </div>
    );
};

export default Dashboard;