import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPostById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
};

const PostDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Post Details</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default PostDetail;
