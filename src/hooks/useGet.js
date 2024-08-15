import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";
import { httpClient } from "../services/api";

// const getFn = async ({ queryKey }) => {
//   const [url, urlSearchParams] = queryKey;
//   const { data: responseData } = await httpClient.get(url, { params: urlSearchParams });
//   return responseData;
// };

export const useFetchOne = ({
  url,
  dataKey = "data",
  customQueryFn,
  queryOptions = {},
  urlSearchParams,
}) => {
  return useQuery({
    // queryFn: () => axios.get(config.baseUrl),
    queryFn: customQueryFn || (() => httpClient.get(url, { params: urlSearchParams })),
    queryKey: [dataKey, url, urlSearchParams],
    ...queryOptions,
    refetchOnWindowFocus: false, // React Query default bo'yicha har safar brauzer oynasi yoki tab sahifasiga qaytilganda ma'lumotlarni qayta yuklaydi. Bu refetchOnWindowFocus opsiyasidan kelib chiqadi.
    retry: 0,
    //cacheTime: 0, // cacheTime: 0 - Ma'lumotlarni keshda saqlamaydi, so'rov har safar yangilanadi.React Query ma'lumotlarni keshda saqlaydi va keshda qancha vaqt davomida qolishini cacheTime orqali belgilaysiz.
  });
};
 