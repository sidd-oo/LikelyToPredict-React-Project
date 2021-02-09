import Axios from 'axios';
import { useState , useEffect } from 'react'

const api = process.env.REACT_APP_UNSPLASH_API;
const access_key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage({page, inputQuery}) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
        setIsLoading(true);
        Axios.get(`${api}/search/photos?client_id=${access_key}&page=${page}&query=${inputQuery}`
        ).then((res) => {
          setImages([...images, ...res.data.results]);
          setIsLoading(false);
          console.log(`INput query${inputQuery}`);
        }).catch(e =>{
            setErrors(e.response.data.errors);
            console.log(e.reponse.data.errors)
            setIsLoading(false);
        })
     }, [page,inputQuery]); 

     return [images, setImages, errors, isLoading];
}
