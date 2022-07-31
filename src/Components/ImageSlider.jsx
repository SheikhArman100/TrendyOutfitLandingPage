import { motion } from 'framer-motion';

//import image
import image11 from "../assets/image11_11_11.png";
import image12 from "../assets/image12_12_12.png";
import image2 from "../assets/image2_2_2.png";
import image3 from "../assets/image3_3_3.png";

import image5 from "../assets/image5_5_5.png";

import image6 from "../assets/image6_6_6.png";
import image7 from "../assets/image7_7_7.png";

import image8 from "../assets/image8_8_8.png";
import image9 from "../assets/image9_9_9.png";
import centerImage from "../assets/centerbutton.png";

//import icons
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
    BsFillPlayCircleFill
  } from "react-icons/bs";
import { memo, useContext } from 'react';
import {NumberContext} from '../Contexts/NumberContext'

const ImageSlider =memo(() => {
const {number,setNumber} =useContext(NumberContext)
//image list
const middleImages = [image12, image5, image8];
const leftImages = [image3, image11, image7];
const rightImages = [image2, image6, image9];

//onclick nextimage function
const nextImage = () => {
    number === 2 ? setNumber(0) : setNumber((prev) => prev + 1);
};

//onclick previousImage functions
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
    <div className="relative mt-[4rem] ml-1 flex items-center justify-between">
          <motion.button onClick={prevImage} initial={{scale:0}} animate={{scale:1,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2.4}}}>
            <BsFillArrowLeftCircleFill
              size={40}
              className="mr-5 mt-[5rem] cursor-pointer text-purpleColor duration-[0.5s] hover:scale-[120%]  sm:mr-10 md:mr-5 lg:mr-5"
              
            />
          </motion.button>
          <motion.div className="relative mr-3 hidden h-[270px] w-[210px] md:block lg:mr-7 lg:h-[330px] lg:w-[250px]  xl:h-[400px] xl:w-[310px]" variants={leftImage} initial='hidden' animate="show">
            {leftImages.map((value,index)=>(
              <img
              src={value}
              alt=""
              className={index===number?"h-full w-full object-cover transform scale-100 transition":"hidden  transform scale-0 transition"}
            />

            ))}
            
          </motion.div>
          
          <motion.div className="relative mb-3 h-[260px]  w-[200px] sm:h-[350px] sm:w-[270px] md:h-[270px] md:w-[210px] lg:h-[330px] lg:w-[250px] xl:h-[400px] xl:w-[320px]" variants={middleImage} initial='hidden' animate="show">
          {middleImages.map((value,index)=>(
              <img
              src={value}
              alt=""
              className={index===number?"h-full w-full object-cover scale-100":"hidden scale-0"}
            />

            ))}
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
  )
})

export default ImageSlider