import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomNavbar from './Navbar.jsx';
import SubReddits from '../SubDirects/Main.jsx';
import Categories from '../Category/Main.jsx';
import { UserContextApi } from '../Context/UserContext.jsx';
import Topics from '../Topics/Main.jsx';
import { useParams } from 'react-router-dom';
import Posts from '../Posts/Main.jsx'
export default function Router() {
  const { Category } = useContext(UserContextApi);
   const loc=useLocation();
   const data=loc.pathname.split('/')
 
  return (
    <React.Fragment>
      {Category && Category.length > 0 && (data.length!=4&&<CustomNavbar />)}
      <Routes>
        <Route path="/" element={<Categories />} />
        
          <React.Fragment>
              <Route path="/subreddits/:category" element={<SubReddits />} />
              <Route path="/:category/topics" element={<Topics />} />
              <Route path="/:category/topics/:selectedtopic" element={<Posts/>} />
          </React.Fragment>
        
      </Routes>
    </React.Fragment>
  );
}
