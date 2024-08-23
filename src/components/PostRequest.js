import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { usePostData } from "../hooks/usePost";

function PostRequest() {
  const [postData, setPostData] = useState({
    title: "foo",
    body: "bar",
    userId: 1,
  }); // POST uchun yuboriladigan ma'lumot

  const client = useQueryClient();

  const { mutate, isLoading, isError, error, data } = usePostData({
    onSuccess: (data) => {
      client.invalidateQueries({ queryKey: ["all-datas"]}); // bu narsa post request qilganda get qilib olgan datani aftomatik abnovit qiladi va .map qilayotganimizga yana yangi datani olish uchun ozimiz zapros yuborishimizni hojati yo'q. aynan qaysi datani aftomatik abnovit qilish kerakligini queryKey orqali aniqlaymiz.
      console.log("Data received:", data);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
    },
  });

  const handlePost = () => {
    mutate(postData); // POST so'rovini yuborish
  };

  return (
    <div>
      its post request
      <button onClick={handlePost}>send post request</button>
    </div>
  );
}

export default PostRequest;
