import Card from "@/components/Card";
import React from "react";

function AllPosts() {
  return (
    <div className="container grid md:grid-cols-3 grid-cols-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default AllPosts;
