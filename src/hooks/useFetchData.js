import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(url)
        .then((res) => res.json())
        .catch((err) => alert(err));
      setIsLoading(false);
      res && setData(res.products);
    };

    getData();
  }, [url]);

  return { data, isLoading };
};
