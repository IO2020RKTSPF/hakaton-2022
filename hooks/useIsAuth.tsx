import { getToken } from "@redux/reducers/auth/selectors";
import { useSelector } from "react-redux";

import isString from "../lib/isString";

function useIsAuth() {
  const token = useSelector(getToken);

  return isString(token);
}

export default useIsAuth;
