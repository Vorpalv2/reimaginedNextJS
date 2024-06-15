"use server";
import { slugReverser } from "@/config/functions";
import db from "@/database/sqDatabase";

export async function fetchPostsFromDB(): Promise<Post[]> {
  // Use async/await to make the function asynchronous.
  return new Promise((resolve, reject) => {
    const posts: Post[] = []; // Create an array to hold post data.
    const statement = "SELECT title, body FROM postData";

    db.each(
      statement,
      (err, row: any) => {
        if (err) {
          // Handle potential errors
          console.error("Error fetching post data:", err);
          reject(err); // Reject the promise on error.
          return;
        } else {
          posts.push(row); // Add each row to the array.
          console.log(posts, "posts");
          resolve(posts); // Resolve the promise with the posts array.
        }
      },
      () => {
        // Called after all rows are processed.
      }
    );
  });
}

// Interface to define the shape of your post data
interface Post {
  title: string;
  BODY: string;
}

export async function fetchSpecificPost(
  postSlugTitle: string
): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    const post: Post[] = [];

    console.log(postSlugTitle, "slug title");

    const statement = `SELECT title,body FROM postData WHERE title = ${slugReverser(
      postSlugTitle
    )}`;

    db.each(
      statement,
      (err, row: any) => {
        if (err) {
          console.error("Error fetching post data:", err);
          reject(err); // Reject the promise on error.
          return;
        }
        console.log(row, "row");
        post.push(row);
      },
      () => {
        resolve(post);
      }
    );
  });
}

interface post {
  title: string;
  BODY: string;
}
