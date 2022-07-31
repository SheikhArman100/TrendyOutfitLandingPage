import { motion } from 'framer-motion';
import { memo } from 'react';
import profile1 from "../assets/image1_resize.jpg";
import profile2 from "../assets/image3_resize.jpg";
import profile3 from "../assets/image5_resize.jpg";
import profile4 from "../assets/image7_resize.jpg";
import profile5 from "../assets/image9_resize.jpg";

const Users =memo(() => {
  return (
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
  )
})

export default Users