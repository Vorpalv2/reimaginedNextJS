"use server";

import db from "@/database/sqDatabase";

export default async function handleFormSubmit(formdata: FormData) {
  const input = formdata.get("input");
  const bio = formdata.get("bio");

  const statement = `INSERT INTO postData (title,BODY) VALUES (?,?)`;

  db.run(statement, [input, bio]);

  // console.log(input, bio);
}
