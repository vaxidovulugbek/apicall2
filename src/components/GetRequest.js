import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useFetchOne } from "../hooks/useGet";

function GetRequest() {
  const funcGet = () => {};
  const { data, isLoading, isError } = useFetchOne({
    dataKey: ["all-datas"],
    url: "posts/1/",
    // refetchOnWindowFocus: false, // bu narsa har safar vscode abnovit bolganda datani qayta olib keladi consolega qara
    // queryOptions: {
    //     enabled: false, // so'rov avtomatik ravishda yuborilmaydi,  Agar so'rov avtomatik ravishda yuborilmasligini xohlasangiz, masalan, faqatgina biror tugmani bosganingizda yoki boshqa bir voqea sodir bo'lganda so'rov yuborilishini xohlasangiz, enabled: false parametrini ishlatishingiz mumkin.
    // },
    urlSearchParams: { include: "commenttt" }, // So'rov URL'siga include=comments qidiruv parametri qo'shiladi. https://jsonplaceholder.typicode.com/posts/1?include=commenttt
  });
  useEffect(() => {
    console.log(data?.data, isLoading);
  }, [data]);
  return <div>its get request</div>;
}

export default GetRequest;
