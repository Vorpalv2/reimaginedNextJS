"use client";
import { slugReverser } from "@/config/functions";
import { fetchSpecificPost } from "@/actions/fetchData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Post() {
  let params = useParams();

  const searchTerm = slugReverser(params.post[0]);

  const [data, setData] = useState([]);

  // console.log(params);

  useEffect(() => {
    async function fetchPost() {
      console.log(await fetchSpecificPost(searchTerm));
      let dat: [] = await fetchSpecificPost(searchTerm);
      setData(dat);
      console.log(dat);
    }

    fetchPost();
  }, [searchTerm]);

  // console.log(data);

  // // console.log(params.post[1]);

  return (
    <div>
      <h1>Current Parameter : {searchTerm}</h1>
      <h3>Title : {data.title}</h3>
      <h3>Body : {data.body}</h3>
    </div>
  );
}

export default Post;
