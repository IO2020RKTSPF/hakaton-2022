import api from "@api/index";
import { useEffect, useState } from "react";

export interface IUseGetRequestProps {
  pathname: string;
}

function useGetRequest<TResponse>({ pathname }: IUseGetRequestProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<TResponse>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      try {
        const { data } = await api.get<TResponse>(pathname);
        setResponse(data);
      } catch (e) {
        setError(e);
        console.error(e);
      }

      setLoading(false);
    };

    fetch();
  }, [pathname]);

  return { response, error, loading };
}

export default useGetRequest;
