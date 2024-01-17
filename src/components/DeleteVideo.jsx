import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db, storage } from '../firebaseConfig'
import { toast } from 'react-toastify'
import { deleteObject, ref } from 'firebase/storage'

const DeleteVideo = ({ id, videoUrl }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Videos", id));
      toast("Video deleted Succesfully", { type: "success" });
      const storageRef = ref(storage, videoUrl);
      await deleteObject(storageRef);
    } catch (e) {
      alert(e.message);
      toast("Error deleting article", { type: "error" });
    }
  };
  return (
    <>
      <button
        className="bg-red-500/70 py-2 w-full text-white rounded-md "
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteVideo