import Link from "next/link";
import React from "react";

function Card({ title, blog, linkhref }: any) {
  // const blog = {
  //   title: "title",
  //   body: "If a dog chews shoes whose shoes does he choose?",
  //   slug: "slug",
  // };

  return (
    <div>
      <div className="card w-70 mx-4 my-4 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{blog}</p>
          <div className="card-actions justify-end">
            <Link href={`/${linkhref}`} className="btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
