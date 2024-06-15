"use client";
import { slugReverser } from "@/config/functions";
import { fetchSpecificPost } from "@/actions/fetchData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Post() {
  let params = useParams();

  const searchTerm = slugReverser(params.post[0]);

  const [data, setData] = useState([]);

  (async () => {
    const dat = await fetchSpecificPost(searchTerm);
    console.log(dat, "dat");
  })();

  return (
    <div>
      <h1>Current Parameter : {searchTerm}</h1>
      <h3>Title : {data.title}</h3>
      <h3>Body : {data.body}</h3>
    </div>
  );
}

export default Post;
