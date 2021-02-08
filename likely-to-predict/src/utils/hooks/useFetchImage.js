import Axios from 'axios';
import { useState , useEffect } from 'react'

const url = process.env.REACT_APP_UNSPLASH_URL;
const access_key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

     useEffect(() => {
        Axios.get(`${url}client_id=${access_key}&page=${page}`).then((res) => {
          setImages([...images, ...res.data]);
        }).catch(e =>{
            setErrors(e.response.data.errors);
        })
     }, [page]); 

     return [images, setImages, errors];
}
