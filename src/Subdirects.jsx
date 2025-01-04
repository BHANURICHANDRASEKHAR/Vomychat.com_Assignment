import React, { useEffect, useState } from 'react';
import { Select,Empty } from 'antd';
import Loader from './Loader';
import GetRedirects from './data.js'
const App = ({setSelectedValue,selectedValue}) => {
    const [SubDirects, setSubreddit] = useState([]);
    const [Loading, SetLoading] = useState(false);
    
    useEffect(() => {
      if(SubDirects.length==0)
      {
        GetRedirects(SetLoading,setSubreddit)
      }
      
    }, []);
    const handleChange = (value) => {
        setSelectedValue(value);
    };
    return (
        <React.Fragment>
            <Select
                showSearch
                mode='tags'
                className='w-100 border border-0 border-dark'
                placeholder="Search to Select"
                optionFilterProp="children"
                filterSort={(optionA, optionB) =>
                    (optionA?.children ?? '').toLowerCase().localeCompare((optionB?.children ?? '').toLowerCase())
                }
                value={selectedValue} // Bind the selected value to the Select component
                onChange={handleChange}
                notFoundContent={Loading? <Loader/>:<Empty/>}
                loading={Loading}  
                options={SubDirects.map((subreddit, index) => ({
                    value: subreddit,
                    label: subreddit,
                }))}
            />
        </React.Fragment>
    );
};

export default App;
