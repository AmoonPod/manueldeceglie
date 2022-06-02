import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import manuel from "../public/manuel.png";
import Instagram from "../public/instagram.png";
import manuel_gang from "../public/manuel_gang.jpg";
import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import React, { useState } from "react";
import Logo from "../public/Logo.png";
export default function Home() {
  var highlightColor = "#fbc2eb";
  var midtoneColor = "#00EAFF";
  var lowlightColor = "#F067B4";
  var baseColor = "#a6c1ee3";
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 800);
  };
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: highlightColor,
          midtoneColor: midtoneColor,
          lowlightColor: lowlightColor,
          baseColor: baseColor,
          blurFactor: 0.3,
          speed: 2,
          zoom: 0.4,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className=" justify-center flex select-none overflow-hidden cursor-none"
      ref={vantaRef}
    >
      <Head>
        <title>Manuel De Ceglie</title>
        <link rel="shortcut icon" href="/Logo.ico" />
      </Head>

      <motion.div
        className="  absolute left-0 top-0 w-4 h-4 rounded-2xl  bg-gradient-to-r from-[#00EAFF] via-[#fbc2eb] to-[#a6c1ee] text-transparent bg-grosso animate-[wiggle_1s_ease-in-out_infinite] "
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <main className="h-screen flex">
        <div className="table">
          <motion.div
            className="table-cell align-middle table-auto "
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
          >
            <div className="flex justify-center ">
              <div className="relative">
                <motion.div
                  style={{
                    height: imageLoading ? "256px" : "auto",
                    borderRadius: 30,
                    backgroundColor: "#fff",
                  }}
                  drag
                  dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  dragTransition={{
                    bounceStiffness: 2000,
                    bounceDamping: 15,
                  }}
                  className="lg: w-[256px]"
                  initial={{ height: "256px", opacity: 0 }}
                  animate={{
                    height: imageLoading ? "256px" : "auto",
                    opacity: imageLoading ? 1 : 1,
                  }}
                  transition={
                    ({ height: { delay: 0.1, duration: 0.1 } },
                    { opacity: { delay: 0.1, duration: 0.1 } })
                  }
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Image
                    src={manuel_gang}
                    layout="intrinsic"
                    width={500}
                    height={500}
                    alt="Manuel De Ceglie"
                    className=" rounded-2xl shadow-md"
                    draggable={false}
                  />
                </motion.div>
              </div>
            </div>
            <div className="mt-14">
              <motion.h1
                /* style={{ color: "#fff" }} */
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                  textShadow: "0px 0px 0px 0px",
                }}
                className=" 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl  text-3xl text-center mt-5 font-Azonix font-light bg-clip-text hover: bg-gradient-to-r from-[#00EAFF] via-[#fbc2eb] to-[#a6c1ee] text-transparent bg-grosso animate-wiggle"
              >
                Manuel De Ceglie
              </motion.h1>
            </div>
            <div>
              <h3 className="mt-2 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-lg text-center font-Azonix font-light text-white">
                FRONT-END DEVELOPER
              </h3>
            </div>
            {/* <motion.div
              className=" w-10 h-10 bg-white flex justify-center rounded-full"
              initial={{ x: -200 }}
              animate={{ x: 200 }}
              transition={{
                type: "spring",
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.1,
              }}
            /> */}
            {/* <motion.ul className="flex justify-evenly mt-2">
              <li>
                <a href="https://www.instagram.com/manudeceglie">
                  <Image
                    src={Instagram}
                    layout="intrinsic"
                    width={64}
                    height={64}
                    alt="Manuel De Ceglie"
                    className=""
                    draggable={false}
                    style={{ cursor: "none" }}
                  ></Image>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/manudeceglie">
                  <Image
                    src={Instagram}
                    layout="intrinsic"
                    width={64}
                    height={64}
                    alt="Manuel De Ceglie"
                    className=""
                    draggable={false}
                    style={{ cursor: "none" }}
                  ></Image>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/manudeceglie">
                  <Image
                    src={Instagram}
                    layout="intrinsic"
                    width={64}
                    height={64}
                    alt="Manuel De Ceglie"
                    className=""
                    draggable={false}
                    style={{ cursor: "none" }}
                  ></Image>
                </a>
              </li>
            </motion.ul> */}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
