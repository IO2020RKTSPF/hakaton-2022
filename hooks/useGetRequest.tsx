import api from "@api/index";
import { getToken } from "@redux/reducers/auth/selectors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface IUseGetRequestProps {
  pathname: string;
}

function useGetRequest<TResponse>({ pathname }: IUseGetRequestProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<TResponse>();
  const [error, setError] = useState<unknown>();

  const token = useSelector(getToken);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      try {
        const { data } = token
          ? await api.get<TResponse>(pathname, {
              headers: { Authorization: `Bearer ${token}` },
            })
          : await api.get<TResponse>(pathname);

        setResponse(data);
      } catch (e) {
        setError(e);
        console.error(e);
      }

      setLoading(false);
    };

    fetch();
    // eslint-disable-next-line
  }, [pathname]);

  return { response, error, loading };
}

export default useGetRequest;
