import React, { useEffect,useState } from 'react'
// import Ui from './Ui';
// import Loader from './Loader.jsx';
// import Data from './data.jsx';
import SubDirects from './Components/SubDirects/Main';
import Aos from 'aos';
import './App.css'
import Router from './Components/Navbar/Router';
import {Toaster} from 'react-hot-toast'
export default function App() {
    const [posts, setPosts] = useState([]);
    const [loader,setloader]=useState(false)
   useEffect(()=>{
   Aos.init();
   },[])
  return (
    <React.Fragment>
    <Router/>
    <Toaster position='top-center'/>  
    </React.Fragment>
  )
}
// <Ui posts={posts} setPosts={setPosts} loader={loader} setloader={setloader} />
// <div className='container'>
// <div className='row mt-3'>
// {
//   loader &&<Loader/>
//   }
// {
//   posts.length>0 && posts.map((post,index)=>{
//     return (
//       <Data post={post.data} key={index} />
//     )
//   })
// }

// </div>

// </div>