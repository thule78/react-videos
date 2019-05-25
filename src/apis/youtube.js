import axios from 'axios';


const KEY ='AIzaSyBalMXwUQ1aKDdNOwPi6w21pWMHksp6Gos';
 export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }

 });
