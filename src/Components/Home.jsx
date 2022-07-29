import { motion } from 'framer-motion';
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillPlayCircleFill
} from "react-icons/bs";
import flower from "../assets/blossom.png";
import centerImage from "../assets/centerbutton.png";
import star from "../assets/icons8-collision-96.png";
import leaf from "../assets/icons8-maple-leaf-96.png";
import image11 from "../assets/image11_11_11.png";
import image12 from "../assets/image12_12_12.png";
import profile1 from "../assets/image1_resize.jpg";
import image2 from "../assets/image2_2_2.png";
import image3 from "../assets/image3_3_3.png";
import profile2 from "../assets/image3_resize.jpg";
import image5 from "../assets/image5_5_5.png";
import profile3 from "../assets/image5_resize.jpg";
import image6 from "../assets/image6_6_6.png";
import image7 from "../assets/image7_7_7.png";
import profile4 from "../assets/image7_resize.jpg";
import image8 from "../assets/image8_8_8.png";
import image9 from "../assets/image9_9_9.png";
import profile5 from "../assets/image9_resize.jpg";
const Home = () => {
  
  
  const middleImages = [image12, image5, image8];
  const leftImages = [image3, image11, image7];
  const rightImages = [image2, image6, image9];
  const [number, setNumber] = useState(0);
  const nextImage = () => {
    number === 2 ? setNumber(0) : setNumber((prev) => prev + 1);
  };

  const prevImage = () => {
    number === 0 ? setNumber(2) : setNumber((prev) => prev - 1);
  };

//animation variants
const middleImage={
  hidden:{
    scale:0,
     },
  show:{
    scale:1,
    transition:{
      ease: [0.6, 0.01, -0.05, 0.95],
      duration:2.8,

    } 
  }
}
const leftImage={
  hidden:{
    scale:0,
    x:-100,
  },
  show:{
    scale:1,
    x:0,
    transition:{
      ease: [0.6, 0.01, -0.05, 0.95],
      duration:2.2,

    } 
  }
}
const rightImage={
  hidden:{
    scale:0,
    x:100,
  },
  show:{
    scale:1,
    x:0,
    transition:{
      ease: [0.6, 0.01, -0.05, 0.95],
      duration:2,

    } 
  }
}


  return (
    <>
      <section className="relative mx-auto my-9 flex max-w-[90%] flex-col items-center justify-start">
        {/* Title starts */}
        <div className="text-center">
          <motion.h1 className="text-[1.8rem] font-[500] leading-10 sm:text-4xl md:text-5xl lg:text-[4.5rem]"
          initial={{scale:0,y:100}} animate={{scale:1 ,y:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
            Confuse Your Mirror By <br /> Our Trendy Outfits!
          </motion.h1>
        </div>
        {/* Title end */}
        {/* ---------leaf start---------- */}
        <motion.div className="absolute -right-4 top-[2.5rem] h-[3.5rem] w-[3.5rem]" initial={{scale:0,x:100}} animate={{scale:1 ,x:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
          <img src={leaf} alt="leaf" />
        </motion.div>
        {/* -----leaf end------- */}
        {/* ---------star start---------- */}
        <motion.div className="absolute -right-4 top-[8rem] h-[4rem] w-[4rem]" initial={{scale:0,x:100}} animate={{scale:1 ,x:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
          <img src={star} />
        </motion.div>
        {/* -----star end------- */}
        {/* ---------sunflower start---------- */}
        <motion.div className="absolute -left-5 top-[3rem] h-[4rem] w-[4rem]" initial={{scale:0,x:-100}} animate={{scale:1 ,x:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
          <img src={flower} />
        </motion.div>
        {/* -----sunflower end------- */}
        {/* filter start */}
        <motion.div className="absolute left-1 top-[8rem]" initial={{scale:0}} animate={{scale:1 ,transition:{duration:2.4}}}>
          <ul>
            <li className="text-xl font-[500]">Men</li>
            <li>Women</li>
            <li>Children</li>
          </ul>
        </motion.div>

        {/* filter end */}
        {/* -------imagebox----- */}

        <div className="relative mt-[4rem] ml-1 flex items-center justify-between">
          <motion.button onClick={prevImage} initial={{scale:0}} animate={{scale:1,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
            <BsFillArrowLeftCircleFill
              size={40}
              className="mr-5 mt-[5rem] cursor-pointer text-purpleColor duration-[0.5s] hover:scale-[120%]  sm:mr-10 md:mr-5 lg:mr-5"
              
            />
          </motion.button>
          <motion.div className="relative mr-3 hidden h-[270px] w-[210px] md:block lg:mr-7 lg:h-[330px] lg:w-[250px]  xl:h-[400px] xl:w-[310px]" variants={leftImage} initial='hidden' animate="show">
            <img
              src={leftImages[number]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div className="relative mb-3 h-[260px]  w-[200px] sm:h-[350px] sm:w-[270px] md:h-[270px] md:w-[210px] lg:h-[330px] lg:w-[250px] xl:h-[400px] xl:w-[320px]" variants={middleImage} initial='hidden' animate="show">
            <img
              src={middleImages[number]}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* center button */}
            <div className="absolute top-[13rem] left-[3rem] h-[100px] w-[100px] cursor-pointer duration-500 hover:scale-110 sm:top-[18rem] sm:left-[5rem] md:top-[13.5rem] md:left-[3rem] md:h-[120px] md:w-[120px] lg:top-[15.5rem] lg:left-[3.5rem] lg:h-[140px] lg:w-[140px] xl:top-[19.5rem]   xl:left-[5rem] xl:h-[170px] xl:w-[170px]">
              <img src={centerImage} alt="" className="object-cover" />
              <button className="absolute bottom-[2.1rem] left-9 text-purpleColor md:bottom-[2.5rem] md:left-[2.5rem] lg:bottom-[2.8rem] lg:left-[2.8rem] xl:left-[3.2rem] xl:bottom-[3rem]">
                <BsFillPlayCircleFill className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[70px] xl:w-[70px]" />
              </button>
            </div>
            {/* center button */}
          </motion.div>
          <motion.div className="relative ml-3 hidden h-[270px] w-[210px] md:block lg:ml-8 lg:h-[330px] lg:w-[250px] xl:h-[400px] xl:w-[310px]" variants={rightImage} initial='hidden' animate="show">
            <img
              src={rightImages[number]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.button
            onClick={nextImage}
            className="ml-3 mt-[5rem] cursor-pointer text-purpleColor sm:ml-8 md:ml-3 lg:ml-5"
            initial={{scale:0}} animate={{scale:1,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}
          >
            <BsFillArrowRightCircleFill size={40} className='duration-[0.5s] hover:scale-[120%]' />
          </motion.button>
        </div>
        {/* -----imagebox end ------- */}
        {/* all the avatars profile */}
        <motion.div className="absolute top-[27.2rem] -right-[0.2rem] flex sm:top-[31.8rem] sm:right-[1rem] md:top-[28rem] lg:right-[1rem] lg:top-[34rem] xl:top-[38rem] xl:right-[5rem]" initial={{scale:0,x:100}} animate={{scale:1 ,x:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
          {/* single avatar */}
          <div className="z-[6] flex h-10 w-10 items-center justify-center rounded-lg bg-profile bg-no-repeat object-cover sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]">
            <p className="text-whiteColor">+5k </p>
          </div>
          <div className="z-[5] -ml-4 -mt-1 md:-ml-5 ">
            <img
              src={profile1}
              alt=""
              className="shadow-[ 0_0_0_4px_#000] h-10 w-10 rounded-lg object-cover sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </div>
          {/* sinfle avatar */}
          <div className="z-[4] -ml-4 -mt-2 md:-ml-5 ">
            <img
              src={profile2}
              alt=""
              className="shadow-[ 0_0_0_4px_#000] h-10 w-10 rounded-lg object-cover sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </div>
          {/* sinfle avatar */}
          <div className="z-[3] -ml-4 -mt-3 md:-ml-5 ">
            <img
              src={profile3}
              alt=""
              className="shadow-[ 0_0_0_4px_#000] h-10 w-10 rounded-lg object-cover sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </div>




          {/* sinfle avatar */}
          <div className="z-[2] -ml-[8px] -mt-4  hidden md:-ml-5 md:block">
            <img
              src={profile4}
              alt=""
              className="shadow-[ 0_0_0_4px_#000] h-10 w-10 rounded-lg object-cover sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </div>
          {/* sinfle avatar */}

          <div className="z-[1] -ml-[8px] -mt-5  hidden md:-ml-5 md:block">
            <img
              src={profile5}
              alt=""
              className="shadow-[ 0_0_0_4px_#000] h-10 w-10 rounded-lg object-cover sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </div>
        </motion.div>


        <motion.div className="absolute -bottom-[6.5rem] right-[0.5rem] text-right font-medium sm:right-[1rem] sm:-bottom-[6rem] md:right-1 md:-bottom-[5.7rem] md:text-lg md:font-semibold xl:right-[5rem]" initial={{scale:0,x:100}} animate={{scale:1 ,x:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
          <p>12,560</p>
          <p>Happy Customer</p>
        </motion.div>
        <motion.div className="absolute -bottom-[6.2rem] -left-[0.4rem] w-[140px] sm:left-[1rem] sm:w-[180px] md:-bottom-[5.2rem] md:w-[220px] lg:-bottom-[5.7rem] lg:left-[3rem] lg:text-xl xl:left-[8rem] xl:w-[240px]" initial={{scale:0,x:-100}} animate={{scale:1 ,x:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
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
