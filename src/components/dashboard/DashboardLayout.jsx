import React from 'react';

const DashboardLayout = (props) => {
    const {items} = props;
    return (
        <div>
            <p>{items.first_name}</p>
            
            <div>
                <h2>{ items.business_name}</h2>
            </div>
         
        </div>
    );
};

export default DashboardLayout;