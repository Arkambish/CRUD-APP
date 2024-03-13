"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useParams, useRouter } from "next/navigation";
import { Router } from "next/router";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const deleteBtn = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button onClick={deleteBtn} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
