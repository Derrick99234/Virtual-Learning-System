import { useState } from "react";
import { storage, db } from "./../../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { v4 } from "uuid";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

function FileUploadModal({ setOpenModal }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sections: "",
    howLong: "",
    createdAt: Timestamp.now().toDate(),
    video: "",
  });
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function uploadVideo() {
    if (!formData.title || !formData.video || !formData.description) {
      alert("please fill all fields");
      return;
    }

    const videoRef = ref(
      storage,
      `uploadedVideos/${Date.now()}${formData.video.name}`
    );
    const videoUpload = uploadBytesResumable(videoRef, formData.video);

    videoUpload.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (error) => {
        console.error("Error during file upload:", error);
        toast("An error occurred during file upload", { type: "error" });
      },
      async () => {
        try {
          // File upload is complete, get the download URL
          const downloadURL = await getDownloadURL(videoRef);

          // Update Firestore with video details
          const uploadRef = collection(db, "Videos");
          await addDoc(uploadRef, {
            title: formData.title || "No video title",
            description: formData.description,
            sections: formData.sections || "",
            createdAt: Timestamp.now().toDate(),
            videoUrl: downloadURL,
            howLong: formData.howLong,
          });

          // Reset form data and progress
          setFormData({
            title: "",
            description: "",
            video: "",
            howLong: "",
          });
          setProgress(0);
          alert('"Video uploaded successfully"');
          // Show success toast
          toast("Video uploaded successfully", { type: "success" });
        } catch (error) {
          console.error(
            "Error updating Firestore or getting download URL:",
            error
          );
          toast(
            "An error occurred while updating Firestore or getting download URL",
            { type: "error" }
          );
          alert("An error occurred while updating Video");
        }
      }
    );
  }

  return (
    <>
      <section className="fixed bg-black/50 top-0 left-0 bottom-0 right-0">
        <span
          className="font-bold text-white text-lg absolute top-[20px] right-[20px] cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          X
        </span>
        <div className="w-[300px] h-[500px] bg-white rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] items-center p-3 overflow-hidden pt-7">
          <span
            className="font-bold text-lg absolute top-[20px] right-[20px] cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            X
          </span>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              className="w-full p-2 border-2 border-gray-400 block rounded-md mb-2"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="howLong">
              Video length{" "}
              {/*<em className="text-xs">(only number allowed)</em>*/}
            </label>
            <input
              name="howLong"
              type="text"
              className="w-full p-2 border-2 border-gray-400 block rounded-md mb-2"
              value={formData.howLong}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="description" classame="">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              className="w-full p-2 border-2 border-gray-400 block rounded-md mb-2 h-[150px]"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              setFormData({ ...formData, video: e.target.files[0] })
            }
            name="video"
          />
          {progress === 0 ? null : (
            <div
              className="m-1 text-white bg-blue-400 p-3 text-center rounded-lg"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          )}
          <button
            onClick={uploadVideo}
            className="bg-blue-500 rounded-md p-2 w-full text-white font-bold mt-4"
          >
            submit
          </button>
        </div>
      </section>
    </>
  );
}

export default FileUploadModal;
