import { useQuery } from "react-query";
import { fetchData } from "./api";

const useLogAPI = (parms) => {
  return useQuery({
    queryKey: ["/posts"],
    queryFn: fetchData(parms),
  });
};
