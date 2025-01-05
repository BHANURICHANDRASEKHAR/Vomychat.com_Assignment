import React, { useEffect, useState, useContext } from 'react';
import Loader from '../../Loader.jsx';
import Card from './Cards.jsx';
import './index.css';
import { useParams } from 'react-router-dom';
import data from './data.js';
import { UserContextApi } from '../Context/UserContext.jsx';

export default function Main() {
    const [subDirects, setSubdirects] = useState([]);
    const [loader, setLoader] = useState(false);
    const { SetCategory } = useContext(UserContextApi);
    const { category } = useParams();
    SetCategory(category);
    useEffect(() => {
        setLoader(true);
       
        SetCategory(category);


        setTimeout(() => {
            setSubdirects(data[category] || []);
            setLoader(false);
        }, 500);

    }, [category, SetCategory]);

    if (loader) {
        return <Loader />;
    }

    return (
        <div className="container text-light" style={{ marginTop: '1.5cm' }}>
            <div className='row'>
                {subDirects.map((subdirect, index) => (
                    <div className='col-12 col-md-6 col-lg-3 my-2' key={index}>
                        <Card data={subdirect} />
                    </div>
                ))}
            </div>
        </div>
    );
}
