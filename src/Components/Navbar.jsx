import { motion } from 'framer-motion';
import { memo, useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = memo(() => {
  const [active, setActive] = useState(false);
  

  const links = [
    {
      id: 1,
      link: "New arrival",
    },
    {
      id: 2,
      link: "Shop",
    },
    {
      id: 3,
      link: "Product",
    },
    {
      id: 4,
      link: "Sale",
    },
    {
      id: 5,
      link: "Blog",
    },
  ];

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <>
      <motion.nav className="mx-auto my-4 flex h-20 w-[90%] items-center justify-between rounded-xl bg-whiteColor px-6 py-2 shadow-lg" initial={{y:-100}} animate={{y:0,transition:{ease: [0.6, 0.01, -0.05, 0.95],duration:2}}}>
        <div className="flex items-center gap-1">
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-[900] text-purpleColor">I</h1>
          <p className="text-lg font-[700] text-purpleColor">terot</p>
        </div>
        <div
          onClick={handleClick}
          className="z-30 cursor-pointer rounded-md p-2 duration-[0.2s] ease-linear hover:scale-[1.1] hover:bg-purpleColor hover:text-white hover:opacity-[0.8] md:hidden"
        >
          {active ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center ml-12">
            {links.map(({ id, link }) => (
              <li key={id}  className="md:mx-[10px] lg:mx-[20px] text-center font-bold">
                <a href="gg" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-pinkColor after:scale-x-0 after:origin-right after:transition-transform duration-[1s] hover:after:scale-x-100 hover:after:origin-left">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center md:w-[150px] md:h-8 lg:w-[220px] h-10 relative rounded-lg bg-slate-200">
          <div className="flex items-center rounded-lg m-2 gap-2 w-[190px] cursor-pointer">
            <BiSearchAlt2 size={30} color='grey'/>
            <input placeholder="search" type='search' className="outline:none border-0 w-full bg-transparent "/> 
          </div>
          <div className="bg-purpleColor text-whiteColor md:h-8  lg:h-full  md:w-[60px] lg:w-[40px] rounded-lg flex justify-center items-center cursor-pointer">
            <BsFillCartFill  size={20} color="white"/>
          </div> 
        </div>
        {active && (
          <ul
            className={
              active
                ? "menu absolute top-0 left-0 flex h-screen w-full flex-col  items-center  justify-center bg-purpleColor  duration-[0.6s] ease-linear lg:hidden z-20"
                : "absolute flex h-screen w-full flex-col items-center justify-center bg-purpleColor duration-[0.6s] ease-linear lg:hidden z-20"
            }
          >
            {links.map(({ id, link }) => (
              <li key={id} className="mx-8 text-4xl font-bold text-whiteColor ">
                <a
                  href="gh"
                  className="relative before:absolute before:bottom-1 before:left-0 before:h-[8px] before:w-0 before:bg-pinkColor before:duration-[0.3s] before:ease-linear before:content-['']  hover:before:w-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.nav>
    </>
  );
});

export default Navbar;
