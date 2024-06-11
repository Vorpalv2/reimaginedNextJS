import Link from "next/link";
import React from "react";

function Card() {
  const blog = {
    title: "title",
    body: "If a dog chews shoes whose shoes does he choose?",
    slug: "slug",
  };

  return (
    <div>
      <div className="card w-70 mx-4 my-4 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.body}</p>
          <div className="card-actions justify-end">
            <Link href={`/${blog.slug}`} className="btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
