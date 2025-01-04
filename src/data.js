import axios from 'axios';
import { On_Success,On_Error } from './helper';
const fetchSubreddits = async (setIsLoading, setSubreddits) => {
  try {
      setIsLoading(true); 
      const response = await axios.get('https://www.reddit.com/subreddits/popular.json');
      
      const subreddits = response.data.data.children.map(subreddit => subreddit.data.display_name);
      setSubreddits(subreddits);  
  } catch (error) {
      console.error('Error fetching subreddits:', error);
  } finally {
      setIsLoading(false);  // Stop loading state
  }
};

export default fetchSubreddits;
export const FetchData = async (setIsLoading, setSubreddits,subreddit,keyword) => {
  try {
      setIsLoading(true); 
      const response = await axios.get('http://localhost:3000/fetchPosts',{
        params: {
          subreddit: subreddit[0],
          keyword: keyword
        },
       
      });
      if(response.data.status)
      {
        console.log(response.data.data)
        setSubreddits(response.data.data);  
        On_Success('Data fetched successfully');

      }
      else{
         On_Error(response.data.msg);
      }
  } catch (error) {
      console.error('Error fetching subreddits:', error);
      On_Error('Error fetching subreddits');
  } finally {
      setIsLoading(false); 
  }
};
