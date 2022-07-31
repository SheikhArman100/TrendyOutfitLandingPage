import { motion } from "framer-motion";

import flower from "../assets/blossom.png";

import star from "../assets/icons8-collision-96.png";
import leaf from "../assets/icons8-maple-leaf-96.png";

import Users from "../Components/Users";
import ImageSlider from "../Components/ImageSlider";
import { NumberContext } from "../Contexts/NumberContext";
import { useContext } from "react";

const Home = () => {
  const { number, setNumber } = useContext(NumberContext);

  const gender = ["Male", "Female", "Child"];

  return (
    <>
      <section className="relative mx-auto my-9 flex max-w-[90%] flex-col items-center justify-start">
        {/* Title starts */}
        <div className="text-center">
          <motion.h1
            className="text-[1.8rem] font-[500] leading-10 sm:text-4xl md:text-5xl lg:text-[4.5rem]"
            initial={{ scale: 0, y: 100 }}
            animate={{
              scale: 1,
              y: 0,
              transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2.4 },
            }}
          >
            Confuse Your Mirror By <br /> Our Trendy Outfits!
          </motion.h1>
        </div>
        {/* Title end */}
        {/* ---------leaf start---------- */}
        <motion.div
          className="absolute -right-4 top-[2.5rem] h-[3.5rem] w-[3.5rem]"
          initial={{ scale: 0, x: 100 }}
          animate={{
            scale: 1,
            x: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2.4 },
          }}
        >
          <img src={leaf} alt="leaf" />
        </motion.div>
        {/* -----leaf end------- */}
        {/* ---------star start---------- */}
        <motion.div
          className="absolute -right-4 top-[8rem] h-[4rem] w-[4rem]"
          initial={{ scale: 0, x: 100 }}
          animate={{
            scale: 1,
            x: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2.4 },
          }}
        >
          <img src={star} alt=""/>
        </motion.div>
        {/* -----star end------- */}
        {/* ---------sunflower start---------- */}
        <motion.div
          className="absolute -left-5 top-[3rem] h-[4rem] w-[4rem]"
          initial={{ scale: 0, x: -100 }}
          animate={{
            scale: 1,
            x: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2.4 },
          }}
        >
          <img src={flower} alt='' />
        </motion.div>
        {/* -----sunflower end------- */}
        {/* filter start */}
        <motion.div
          className="absolute left-1 top-[8rem]"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2.4 } }}
        >
          <ul>
            {gender.map((value, index) => (
              <li
                className={
                  index === number
                    ? "text-2xl font-[600] text-orangeColor"
                    : "text-gray-500"
                }
              >
                {value}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* filter end */}
        {/* -------imagebox----- */}
        <ImageSlider />

        {/* all the avatars profile */}
        <Users />

        <motion.div
          className="absolute -bottom-[6.5rem] right-[0.5rem] text-right font-medium sm:right-[1rem] sm:-bottom-[6rem] md:right-1 md:-bottom-[5.7rem] md:text-lg md:font-semibold xl:right-[5rem]"
          initial={{ scale: 0, x: 100 }}
          animate={{
            scale: 1,
            x: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2.4 },
          }}
        >
          <p>12,560</p>
          <p>Happy Customer</p>
        </motion.div>
        <motion.div
          className="absolute -bottom-[6.2rem] -left-[0.4rem] w-[140px] sm:left-[1rem] sm:w-[180px] md:-bottom-[5.2rem] md:w-[220px] lg:-bottom-[5.7rem] lg:left-[3rem] lg:text-xl xl:left-[8rem] xl:w-[240px]"
          initial={{ scale: 0, x: -100 }}
          animate={{
            scale: 1,
            x: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2.4 },
          }}
        >
          <p className="first-letter:text-2xl md:first-letter:text-4xl">
            "Lorem, ipsum dolsiteer amet conse ctetur adipisicing "
          </p>
          <p className="text-center text-lg font-bold">-Alex</p>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
