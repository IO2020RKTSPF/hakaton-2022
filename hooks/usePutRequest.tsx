import api from "@api/index";
import { useCallback, useState } from "react";

export interface IUsePostRequestProps {
  pathname: string;
}

function usePutRequest<TBody, TResponse>({ pathname }: IUsePostRequestProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<TResponse>();
  const [error, setError] = useState<unknown>();

  const fetch = useCallback(
    async (body: TBody) => {
      setLoading(true);

      try {
        const { data } = await api.put<TResponse>(pathname, body);
        setResponse(data);
      } catch (e) {
        setError(e);
        console.error(e);
      }

      setLoading(false);
    },
    [pathname]
  );

  return { fetch, response, error, loading };
}

export default usePutRequest;
