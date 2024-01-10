function VideoCard({ thumbnail, title, alt = title, howLong, totalVideo }) {
  return (
    <>
      <div className="shadow-lg bg-white h-[230px] w-[220px] flex items-end justify-center m-10 rounded-lg relative p-2">
        <img
          src={thumbnail}
          alt={alt}
          className="w-[200px] h-[130px] object-fill absolute top-[-30px] rounded-md"
        />
        <div>
          <h2 className="whitespace-nowrap text-ellipsis w-[200px] overflow-hidden font-semibold mb-2">
            {title}
          </h2>
          <p className="text-sm">{totalVideo} lessons</p>
          <p className="text-sm">{howLong}</p>
          <button className="rounded-md bg-blue-400 text-white w-full px-10 py-2 mt-2">
            View course
          </button>
        </div>
      </div>
    </>
  );
}
export default VideoCard;
