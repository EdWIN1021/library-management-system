import { useEffect, useState } from "react";
import { Book } from "../types";
import { Borrow } from "@prisma/client";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200) {
          const data = await res.json();
          setData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, data };
};

export default useFetch;
