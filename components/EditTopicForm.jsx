"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const router = useRouter();
  const updateBtn = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) {
        throw new Error("CAnt fetch");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={updateBtn} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}
