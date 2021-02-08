import Axios from 'axios';
import { useState , useEffect } from 'react'

const url = process.env.REACT_APP_UNSPLASH_URL;
const access_key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage() {
    const [images, setImages] = useState([]);

     useEffect(() => {
        Axios.get(`${url}client_id=${access_key}`).then((res) => {
          setImages(res.data);
        });
     }, [])

     return [images, setImages];
}
