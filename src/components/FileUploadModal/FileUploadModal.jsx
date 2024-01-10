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
      <div className="fixed flex justify-center items-center h-screen w-full bg-slate-400/15">
        <div className="w-[300px] h-[500px] bg-white rounded-md">
          <input type="file" onChange={getVideo} />
          <button onClick={handleInput}>submit</button>
        </div>
      </div>
    </>
  );
}

export default FileUploadModal;
