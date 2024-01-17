import React, { useContext } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import { Link, useNavigate } from "react-router-dom";
import lasu from "../../Images/lasu.png";
import { useState } from "react";
import FileUploadModal from "../../components/FileUploadModal/FileUploadModal";
import UserContext from "../../contexts/UserContext";
// import Course from "./../Courses/Course"
import VideoPopUp from "../../components/VideoPopUp"; // Import the VideoPopUp component

const Admin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // State to store the selected video for pop-up

  // const { videoLists } = useContext(UserContext);
  const { videoDetails } = useContext(UserContext);
  const { currentUser, logOut } = useContext(UserContext);

  const openVideoPopUp = (video) => {
    setSelectedVideo(video);
  };

  // Function to close the video pop-up
  const closeVideoPopUp = () => {
    setSelectedVideo(null);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videoDetails.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(currentUser);
  const handleLogOut = async () => {
    await logOut();
    alert("Your are currently Log Out");
    navigate("/home");
  };
  return (
    <>
      <section className="p-3 bg-white relative h-screen flex justify-around">
        <aside className="bg-purple-400 w-[20%]  rounded-md mr-5 p-4 flex flex-col items-center ">
          <img src={lasu} alt="lasu logo" className="w-[150px] h-[150px]" />
          <div className="h-40 flex flex-col text-white/50 font-semibold text-lg my-10 gap-4 items-start w-4/5">
            <Link to="/admin" className="hover:text-white active:text-white">
              Home
            </Link>
            <Link
              to="/admin-courses"
              className="hover:text-white active:text-white"
            >
              Course
            </Link>
            <Link to="/" className="hover:text-white active:text-white">
              Add Account
            </Link>
          </div>
        </aside>
        <main className="p-5 w-[78%] rounded-lg overflow-x-scroll">
          <header className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498_640.jpg"
                alt=""
                className="w-12 h-12 rounded-full m-1"
              />
              <div>
                <small className="text-gray-400">Welcome</small>
                <h2 className="m-0 font-bold">{currentUser?.email}</h2>
              </div>
            </div>

            <div>
              <input
                type="text"
                className="w-[300px] rounded-md border-2 border-purple-500 p-3 h-10"
                placeholder="Search course here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="buttons">
              {/* <small className="text-gray-400">Hi {currentUser?.email}</small> */}
              <button className="bg-purple-400 py-2 font-semibold m-1 px-5 text-white rounded-lg">
                0
              </button>
              <button
                className="bg-purple-400 py-2 font-semibold m-1 px-5 text-white rounded-lg"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          </header>
          <div className="bg-slate-100 h-[180px] rounded-md mt-4">
            <div className="flex justify-between p-2 items-center">
              <h2 className=" text-purple-500 font-bold">Active course</h2>
              <Link
                className="border-2 border-purple-400 px-10 py-2 bg-transparent font-bold text-purple-400 rounded-xl"
                to="/admin-courses"
              >
                See all
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {filteredVideos.length === 0 ? (
                <p className="text-center">No Videos Found</p>
              ) : (
                filteredVideos
                  .slice(0, 4)
                  .map(
                    ({
                      createdAt,
                      title,
                      howLong,
                      id,
                      videoUrl,
                      description,
                    }) => {
                      return (
                        <VideoCard
                          key={id}
                          id={id}
                          thumbnail={videoUrl}
                          title={title}
                          howLong={howLong}
                          totalVideo={createdAt}
                          openVideoPopUp={() =>
                            openVideoPopUp({
                              id,
                              title,
                              howLong,
                              videoUrl,
                              description,
                            })
                          }
                        />
                      );
                    }
                  )
              )}
            </div>
          </div>
          <button
            className="border-2  border-purple-400 w-10 h-10 font-bold  rounded-md text-2xl text-purple-400 bg-white fixed bottom-5 right-5"
            onClick={() => setOpenModal(true)}
            title="Upload video"
            // onMouseOver={() => setShowToolTip(true)}
          >
            +
          </button>
        </main>
      </section>
      {openModal && <FileUploadModal setOpenModal={setOpenModal} />}
      {/* Render the VideoPopUp component when a video is selected */}
      {selectedVideo && (
        <VideoPopUp video={selectedVideo} closePopUp={closeVideoPopUp} />
      )}
    </>
  );
};

export default Admin;
