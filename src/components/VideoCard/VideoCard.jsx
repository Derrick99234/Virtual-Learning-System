// import { useState } from "react";
import DeleteVideo from "../DeleteVideo";
// import VideoPopUp from "../VideoPopUp";

function VideoCard({
  thumbnail,
  title,
  alt = title,
  howLong,
  id,
  openVideoPopUp,
}) {
  // const navigate = useNavigate()
  // const playideo = () => {
  //   // console.log(thumbnail);
  //   window.open(`${thumbnail}`, "_blank");
  // };

  return (
    <>
      <div className="shadow-lg bg-white h-[230px] w-[220px] flex items-end justify-center mt-10 rounded-lg relative p-2 ">
        <video
          src={thumbnail}
          alt={alt}
          className="w-[200px] h-[130px] object-fill absolute top-[-30px] rounded-md "
        ></video>
        <div>
          <h2 className="whitespace-nowrap text-ellipsis w-[200px] overflow-hidden font-semibold mb-2">
            {title}
          </h2>
          {/* <p className="text-sm">
            {totalVideo.seconds} seconds, {totalVideo.nanoseconds} nanoseconds
            lessons
          </p> */}

          <p className="text-sm">{howLong}</p>
          <div className="flex gap-2 mt-2">
            <button
              className="rounded-md bg-purple-400 text-white w-full py-2 "
              onClick={openVideoPopUp}
            >
              Play
            </button>
            <DeleteVideo id={id} videoUrl={thumbnail} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
