import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useFetchOne } from "../hooks/useGet";

function GetRequest() {
  const { data, isLoading, isError } = useFetchOne({
    dataKey: ["all-datas"],
    url: "posts/1/",
    queryOptions: {
      refetchOnWindowFocus: false, // bu narsa har safar vscode abnovit bolganda datani qayta olib keladi consolega qara, React Query default bo'yicha har safar brauzer oynasi yoki tab sahifasiga qaytilganda ma'lumotlarni qayta yuklaydi. Bu refetchOnWindowFocus opsiyasidan kelib chiqadi.

      //enabled: true, // so'rov avtomatik ravishda yuborilmaydi,  Agar so'rov avtomatik ravishda yuborilmasligini xohlasangiz, masalan, faqatgina biror tugmani bosganingizda yoki boshqa bir voqea sodir bo'lganda so'rov yuborilishini xohlasangiz, enabled: false parametrini ishlatishingiz mumkin. Agar query ma'lum bir shart bajarilgandan keyin ishlatilishi kerak bo'lsa, masalan, foydalanuvchi biror forma maydonini to'ldirgandan keyin yoki tugmani bosgandan keyin ma'lumot olish kerak bo'lsa.
    },
    urlSearchParams: { include: "commenttt" }, // So'rov URL'siga include=comments qidiruv parametri qo'shiladi. https://jsonplaceholder.typicode.com/posts/1?include=commenttt
  });
  useEffect(() => {
    console.log(data?.data, isLoading);
  }, [data]);
  return <div>its get request</div>;
}

export default GetRequest;
