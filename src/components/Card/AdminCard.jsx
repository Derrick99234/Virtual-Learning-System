import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import UserContext from "../../contexts/UserContext";

const AdminCard = () => {
  return <TiltCard />;
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // const { setLogin } = useContext(UserContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/adminLogin");
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      x
      className="relative h-[200px] w-72 rounded-xl bg-gradient-to-br from-orange-400 to-purple-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg bg-gradient-to-br from-orange-400 to-purple-500 text-white"
        onClick={handleClick}
      >
        <h3 className="text-2xl text-center">Login as Admin</h3>
        <span className="text-center text-[10px]">
          To view your progress an to achieve more on what you do{" "}
        </span>
      </div>
    </motion.div>
  );
};

export default AdminCard;
