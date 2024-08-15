import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useDeleteData } from "../hooks/useDelete";

function DeleteRequest() {
  const [postId, setPostId] = useState(1); // DELETE uchun yuboriladigan ID

  const client = useQueryClient();

  const { mutate, isLoading, isError, error, data } = useDeleteData({
    onSuccess: (data) => {
      client.invalidateQueries({ queryKey: ["all-datas"] }); // ma'lumotni avtomatik yangilash
      console.log("Data received:", data);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
    },
  });

  const handleDelete = () => {
    mutate(postId); // DELETE so'rovini yuborish
  };

  return (
    <div>
      its delete request
      <button onClick={handleDelete}>
        send delete request {isLoading ? "Deleting..." : "Send delete request"}
      </button>
    </div>
  );
}

export default DeleteRequest;
