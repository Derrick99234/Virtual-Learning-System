import { useState } from "react";
import { Axios } from "axios";

function FileUploadModal() {
  const [video, setVideo] = useState("");
  function getVideo(e) {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    setVideo(e.target.files[0]);
  }

  function handleInput() {
    const formData = new FormData();

    formData.append("video", video);
    Axios.post(
      "url",
      formData.then((res) => {
        console.log(res);
      })
    );
  }
  return (
    <>
      <div className="w-[300px] h-[500px] bg-white rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] items-center z-10">
          <input type="file" onChange={getVideo} />
          <button onClick={handleInput} className="bg-blue-500 rounded-md p-2 w-full text-white font-bold">submit</button>
      </div>
    </>
  );
}

export default FileUploadModal;
