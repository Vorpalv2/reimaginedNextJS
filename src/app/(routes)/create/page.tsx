import handleFormSubmit from "@/actions/createFormHandler";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import React from "react";

function Create() {
  return (
    <form className="flex flex-col gap-4" action={handleFormSubmit}>
      <Input />
      <TextArea />
      <button className="btn mt-4 btn-primary">Submit</button>
    </form>
  );
}

export default Create;
