import React,{useState,useEffect} from 'react'
import  io  from 'socket.io-client';
import { On_Error,On_Success } from './helper';
const socket = io('https://backend-6wmne0ffa-chandus-projects-6613bcee.vercel.app');

export default function Ui({posts, setPosts,loader,setloader}) {
    const [subreddit, setSubreddit] = useState('');
    const [keyword, setKeyword] = useState('');
  useEffect(() => {
    const handlePosts = (data) => {
      if (data.length > 0) {
        setPosts(data);
        setloader(false);
        On_Success('Posts fetched successfully');
      } else {
        setloader(false);
        On_Error('No posts found');
      }
    };

    const handleError = (data) => {
      console.error('Error received from server:', data);
      setloader(false);
      On_Error(data);
    };

    socket.on('posts', handlePosts);
    socket.on('error', handleError);

    return () => {
      socket.off('posts', handlePosts);
      socket.off('error', handleError);
    };
  }, []);

  const fetchPosts = () => {
    if (subreddit.trim().length > 0) {
      setloader(true);
      socket.emit('fetchPosts', { subreddit, keyword });
    } else {
      On_Error('Please enter a subreddit');
    }
  };
  return (
    <div className='container mt-3'>
      <div className='row'>
      <div className='col-sm-5'>
      <Input value={subreddit} onchange={setSubreddit} placeholder='Subreddit' label='Enter Subreddit' />
      </div>
      <div className='col-sm-5'>
      <Input value={keyword} onchange={setKeyword} placeholder='keyword' label='Enter Keyword' />
      </div>
      <div className='col-sm-2'>
      <button className='btn btn-primary mt-4' onClick={()=>{fetchPosts()}}>Fetch Posts</button>
      </div>
      </div>
    </div>
  )
}
const Input=({value,onchange,placeholder,label})=>{
   return(
    <div className="form-group">
    <label>{label}</label>
    <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={(e)=>{onchange(e.target.value)}} />
    </div>

   )
}