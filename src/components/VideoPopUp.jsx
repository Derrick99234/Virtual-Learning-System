import React from "react";

const VideoPopUp = ({ video, closePopUp, description }) => {
  const { title, howLong, videoUrl } = video;

  return (
    <>
      <div
        className="fixed bg-black/50 top-0 left-0 bottom-0 right-0"
        // onClick={closePopUp}
      >
        <span
          className="font-bold text-white text-lg absolute top-[20px] right-[20px] cursor-pointer"
          onClick={closePopUp}
        >
          X
        </span>
        <div
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[600px] bg-white h-[600px]"
          //   onClick={(e) => e.stopPropagation()}
        >
          <video src={videoUrl} controls autoPlay loop></video>
          <div className="absolute top-2 right-2">
            <button
              className="bg-purple-400 text-white px-3 py-1 rounded-md"
              onClick={closePopUp}
            >
              Close
            </button>
          </div>
          <div className="text-black absolute bottom-4 left-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm">{howLong}</p>
            <p className="text-sm">Description: {description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPopUp;
