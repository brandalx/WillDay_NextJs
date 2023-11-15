// "use client";
import React from "react";

const OrganizationIdPage = () => {
  async function create(formData: FormData) {
    "use server";

    console.log("triggered on server");
  }
  console.log("I am logged in the browser");

  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
