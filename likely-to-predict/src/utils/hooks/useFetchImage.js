import Axios from "axios";
import { useState, useEffect } from "react";

const api = process.env.REACT_APP_UNSPLASH_API;
const access_key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage({ page, inputQuery }) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchSearch() {
    setIsLoading(true);
    Axios.get(
      `${api}search/photos?client_id=${access_key}&page=${page}&query=${inputQuery}`
    )
      .then((res) => {
        if (page > 1) {
          setImages([...images, ...res.data.results]);
        } else {
          setImages([...res.data.results]);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
      });
  }

  function fetchRandom() {
    setIsLoading(true);
    Axios.get(`${api}photos?client_id=${access_key}&page=${page}`)
      .then((res) => {
        setImages([, ...res.data]);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (inputQuery !== null) {
      fetchSearch();
    } else {
      fetchRandom();
    }
  }, [page]);

  useEffect(() => {
    if (inputQuery === null) {
      return;
    }
    fetchSearch();
  }, [inputQuery]);

  return [images, setImages, errors, isLoading];
}
