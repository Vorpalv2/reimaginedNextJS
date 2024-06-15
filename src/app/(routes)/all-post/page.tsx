import { fetchPostsFromDB } from "@/actions/fetchData";
import Card from "@/components/Card";
import { slugAdjuster } from "@/config/functions";
import React from "react";

async function AllPosts() {
  const postsFromDatabase = await fetchPostsFromDB();
  console.log(postsFromDatabase[1]);

  if (!postsFromDatabase || postsFromDatabase.length === 0) {
    return <p>Loading posts... or No posts found</p>;
  }

  return (
    <div className="container grid md:grid-cols-3 grid-cols-2">
      <h1>Blogposts</h1>
      {postsFromDatabase.map((element, index) => {
        return (
          <Card
            key={index}
            title={element.title}
            blog={element.BODY}
            linkhref={`post/${slugAdjuster(element.title)}`}
          />
        );
      })}
    </div>
  );
}

export default AllPosts;
