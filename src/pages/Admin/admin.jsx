import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import { Link } from "react-router-dom";
import lasu from "../../Images/lasu.png";
import { useState } from "react";
import FileUploadModal from "../../components/FileUploadModal/FileUploadModal";

const Admin = () => {
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    setOpenModal((prev) => !prev);
  }
  return (
    <>
      <section className="p-3 bg-white relative h-screen flex justify-around">
        <aside className="bg-blue-400 w-[20%]  rounded-md mr-5 p-4 flex flex-col items-center ">
          <img src={lasu} alt="lasu logo" className="w-[150px] h-[150px]" />
          <div className="h-40 flex flex-col text-white/50 font-semibold text-lg my-10 gap-4 items-start w-4/5">
            <Link to="/admin" className="hover:text-white active:text-white">
              Home
            </Link>
            <Link to="courses" className="hover:text-white active:text-white">
              Course
            </Link>
          </div>
        </aside>
        <main className="p-5 w-[78%] rounded-lg">
          <header className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498_640.jpg"
                alt=""
                className="w-12 h-12 rounded-full m-1"
              />
              <div>
                <small className="text-gray-400">Welcome</small>
                <h2 className="m-0 font-bold">Olatunbosun Olashubomi</h2>
              </div>
            </div>

            <div>
              <input
                type="text"
                className="w-[300px] rounded-md border-2 border-blue-500 p-3 h-10"
                placeholder="search course here"
              />
            </div>

            <div className="buttons">
              <button className="bg-blue-400 py-2 font-semibold m-1 px-5 text-white rounded-lg">
                0
              </button>
              <button className="bg-blue-400 py-2 font-semibold m-1 px-5 text-white rounded-lg">
                Log out
              </button>
            </div>
          </header>
          <div className="bg-slate-100 h-[180px] rounded-md mt-4">
            <div className="flex justify-between p-2 items-center">
              <h2 className=" text-blue-500 font-bold">Active course</h2>
              <Link
                className="border-2 border-blue-400 px-10 py-2 bg-transparent font-bold text-blue-400 rounded-xl"
                to="courses"
              >
                See all
              </Link>
            </div>
            <div className="cards flex">
              <VideoCard
                thumbnail="https://images.pexels.com/photos/18410627/pexels-photo-18410627/free-photo-of-istanbul-besiktas.jpeg?"
                title="Python Course knlksdloilosloe"
                howLong="72 hours"
                totalVideo={30}
              />
              <VideoCard
                thumbnail="https://images.pexels.com/photos/18410627/pexels-photo-18410627/free-photo-of-istanbul-besiktas.jpeg?"
                title="Python Course knlksdloilosloe"
                howLong="72 hours"
                totalVideo={30}
              />

              <VideoCard
                thumbnail="https://images.pexels.com/photos/18410627/pexels-photo-18410627/free-photo-of-istanbul-besiktas.jpeg?"
                title="Python Course knlksdloilosloe"
                howLong="72 hours"
                totalVideo={30}
              />
            </div>
          </div>
          <button
            className="border-2 border-blue-400 w-10 h-10 font-bold rounded-md text-2xl text-blue-400 bg-white absolute bottom-5 right-5"
            onClick={showModal}
          >
            +
          </button>
          {openModal && <FileUploadModal />}
        </main>
      </section>
    </>
  );
};

export default Admin;
