import React, { useEffect,useState } from 'react'
import Exampledata from './data.js'
import Ui from './Ui';
import Loader from './Loader.jsx';
import Data from './data.jsx'
import Aos from 'aos';
import {Toaster} from 'react-hot-toast'
export default function App() {
    const [posts, setPosts] = useState([]);
    const [loader,setloader]=useState(false)
   useEffect(()=>{
   Aos.init();
   },[])
  return (
    <React.Fragment>
    <Ui posts={posts} setPosts={setPosts} loader={loader} setloader={setloader} />
    <div className='container'>
    <div className='row mt-3'>
    {
      loader &&<Loader/>
      }
    {
      posts.length>0 && posts.map((post,index)=>{
        return (
          <Data post={post.data} key={index} />
        )
      })
    }
    
    </div>
    <Toaster position='top-center'/>  
    </div>
    </React.Fragment>
  )
}
