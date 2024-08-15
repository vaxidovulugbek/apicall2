import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../services/api";

// DELETE so'rovi yuboradigan mutatsiya funksiyasini yozing
const deleteFn = async (id) => {
  const { data: responseData } = await httpClient.delete(`posts/${id}`);
  return responseData;
};

export const useDeleteData = (queryOptions = {}) => {
  return useMutation({
    mutationFn: deleteFn, // mutatsiya funksiyasi
    ...queryOptions, // qo'shimcha konfiguratsiya
  });
};
