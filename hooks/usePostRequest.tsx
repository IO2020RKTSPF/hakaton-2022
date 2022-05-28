import api from "@api/index";
import { getToken } from "@redux/reducers/auth/selectors";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

export interface IUsePostRequestProps {
  pathname: string;
}

function usePostRequest<TBody, TResponse>({ pathname }: IUsePostRequestProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<TResponse>();
  const [error, setError] = useState<unknown>();

  const token = useSelector(getToken);

  const fetch = useCallback(
    async (body: TBody) => {
      setLoading(true);

      try {
        const { data } = token
          ? await api.post<TResponse>(pathname, body, {
              headers: { Authorization: `Bearer ${token}` },
            })
          : await api.post<TResponse>(pathname, body);

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

export default usePostRequest;
