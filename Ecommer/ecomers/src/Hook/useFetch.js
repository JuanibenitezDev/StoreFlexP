import { useEffect, useState } from "react";

import axios from "axios";
const baseURL = "http://localhost:1337/api";
const KEY_API =
  "59a87d0ed4a84a2d1786c305f978ddfe9c858baac705eba3279fd656728f3e064790cd1381a6b907c075fbf592c21c4ee3e2d5ffca78e5563c181598db32bdb0ac9f900411ade069b64cc5c3694be47c9f121f1c9c6096395e8fb2fe94359d09e1eed9d73a5bbf18b1e85d06557fa6c534736212f4c73f3ada047c4665de522f";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(baseURL + url, {
          headers: {
            Authorization: "bearer " + KEY_API,
          },
        });
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
