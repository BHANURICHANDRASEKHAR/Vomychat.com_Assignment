import React, { useContext } from 'react'
import data from './data'
import './main.css'
import { Alert } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { UserContextApi } from '../Context/UserContext'
export default function Main() {
    const {Category,SetCategory}=useContext(UserContextApi)
  return (
    <div className='container mt-3'>
    <h4 className='text-white webname'>Audiences</h4>
    <Alert  variant='warning' className='text-dark alert-msg fs-5'>
          <b>Select any one of the following Audiences</b>
        </Alert>
    <div className='row'>
        {
        data.map((cat,index)=>{
            return(
                <div className='col-sm-4 rounded rounded-3' key={index} onClick={()=>{SetCategory(cat.name)}}>
                    <NavLink to={`/subreddits/${cat.name}`} ><div className='card m-1'>
                    <div className='card-body img-con'>
                        <img src={cat.img} className='card-img-top rounded rounded-3'  alt={cat.name} />
                        <h5 className='card-title text-center mt-1'>{cat.name}</h5>
                    </div>
                </div></NavLink>
                </div>
            )
        })
        }
    </div>
    </div>
  )
}
