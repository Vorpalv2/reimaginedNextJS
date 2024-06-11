"use client";
import { useParams } from "next/navigation";
import React from "react";

function Post() {
  let params = useParams();
  console.log(params.post[0]);

  return <h1>Current Blog : {params.post[0]}</h1>;
}

export default Post;
