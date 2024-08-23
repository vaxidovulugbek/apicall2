import { keepPreviousData, useQuery } from "@tanstack/react-query";
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
    queryFn:
      customQueryFn || (() => httpClient.get(url, { params: urlSearchParams })),
    queryKey: [dataKey, url, urlSearchParams],
    ...queryOptions,
    retry: 0,
    keepPreviousData: true, // bizga malumotlar keshda qolishi muhim, aytaylik paginationda birinchi 2,3,4 page o'tdik va har safar pagedan pagega next qilib otganda serverga zapros yuboradi, orqaga prev qilib qaytganda ham odatda serverga zapros yuboradi bu esa ortga qaytganda vaqtni koaytiradi, react-query bir martda pagenation qilganda malumotlarni keshda saqlaydi va ortga qaytayotganimizda ortiqcha zapros yubormaydi.
    //cacheTime: 0, // cacheTime: 0 - Ma'lumotlarni keshda saqlamaydi, so'rov har safar yangilanadi.React Query ma'lumotlarni keshda saqlaydi va keshda qancha vaqt davomida qolishini cacheTime orqali belgilaysiz.
  });
};
