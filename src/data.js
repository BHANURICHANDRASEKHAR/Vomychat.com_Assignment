import axios from 'axios';
import { On_Success,On_Error } from './helper';
export const fetchTopKeywords = async (setIsLoading, setKeywords, category) => {
  try {
    setIsLoading(true);
    const options = {
      method: 'GET',
      url: 'https://reddit-com.p.rapidapi.com/search-communities',
      params: {query: category},
      headers: {
        'x-rapidapi-key': '0480c11929msh80c307a53902b53p192c60jsn3b1ca5068d75',
        'x-rapidapi-host': 'reddit-com.p.rapidapi.com'
      }
    };
    
    
      const response = await axios.request(options);
      if(response.data.status)
      {
       
        On_Success('Data Fetched Successfully')
        setKeywords(response.data.data);
      }
      else{
        On_Error('Error while fetching  keywords');
      }
  } catch (error) {
    console.error('Error fetching top keywords:', error);
    On_Error('Error fetching top keywords')
  } finally {
    setIsLoading(false);
  }
};



export const FetchData = async (setIsLoading, setSubreddits,subreddit,keyword) => {
  // try {
  //    console.log(subreddit, keyword);
  //     setIsLoading(true); 
  //     const response = await axios.get('http://localhost:3000/fetchPosts',{
  //       params: {
  //         subreddit: subreddit,
  //         keyword: keyword
  //       },
       
  //     });
  //     if(response.data.status)
  //     {
        // console.log(response.data.data)
        // setSubreddits(response.data.data);  
        // On_Success('Data fetched successfully');

  //     }
  //     else{
  //        On_Error(response.data.msg);
  //     }
  // } catch (error) {
  //     console.error('Error fetching subreddits:', error);
  //     On_Error('Error fetching subreddits');
  // } finally {
  //     setIsLoading(false); 
  // }
  setIsLoading(true)

  const options = {
    method: 'GET',
    url: 'https://reddit3.p.rapidapi.com/v1/reddit/search',
    params: {
      search: keyword,
      subreddit: 'wallstreetbets',
      filter: 'posts',
      timeFilter: 'year',
      sortType: 'relevance'
    },
    headers: {
      'x-rapidapi-key': '0480c11929msh80c307a53902b53p192c60jsn3b1ca5068d75',
      'x-rapidapi-host': 'reddit3.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
   
    setSubreddits(response.data.body);
    setIsLoading(false)
  
    On_Success('Data fetched successfully');
  } catch (error) {
    console.error(error);
    setIsLoading(false)

    On_Error('Error fetching subreddits');
  }
  setIsLoading(false)
};


