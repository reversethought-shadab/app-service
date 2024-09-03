

import React from 'react';
import { motion } from 'framer-motion';
interface P {
  data: any;
}
const Cta: React.FC<P> = ({ data }) => {
    const waveVariants = {
        initial: { d: "M0,160L30,170.7C60,181,120,203,180,186.7C240,171,300,117,360,112C420,107,480,149,540,160C600,171,660,149,720,133.3C780,117,840,107,900,101.3C960,96,1020,96,1080,122.7C1140,149,1200,203,1260,197.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z" },
        animate: {
            d: [
                "M0,160L30,170.7C60,181,120,203,180,186.7C240,171,300,117,360,112C420,107,480,149,540,160C600,171,660,149,720,133.3C780,117,840,107,900,101.3C960,96,1020,96,1080,122.7C1140,149,1200,203,1260,197.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z",
                "M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,144C600,139,660,149,720,160C780,171,840,181,900,170.7C960,160,1020,128,1080,117.3C1140,107,1200,117,1260,128C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z",
            ],
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3, 
                ease: "easeInOut",
            }
        }
    };

    console.log("data",data);

    return (
        <section className=' max-w-7xl  py-20 mx-auto px-4 sm:px-2 lg:px-8 flex flex-col px-6 md:flex-row items-start py-16 bg-white'>
            <div className="relative bg-black max-w-7xl rounded-[2rem] text-white flex flex-col items-center justify-center ">
                <div className="text-center mb-20 p-[110px] " style={{zIndex:'1'}}>
                    <h1 className="text-4xl font-bold mb-4 ">{data.title}</h1> {/* Adjusted font size */}
                    <p className="text-lg mb-6">{data.description}</p>
                    <button
                        type="button"
                        className="bg-white cursor-pointer text-black py-3 px-6 rounded-full transition duration-300 hover:bg-gray-200"
                    >
                        {data.link}
                    </button>
                </div>
                <motion.img
                    src={data.icon}
                    className='absolute bottom-2 right-0 rounded-[2rem]'
                    alt=""
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <motion.svg
                    className="absolute bottom-0  left-0 w-full rounded-[2rem] "
                    viewBox="0 0 1440 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="initial"
                    animate="animate"
                    style={{
                        zIndex:'0'
                    }}
                >
                    <motion.path
                        variants={waveVariants}
                        fill="url(#gradient)"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FF7E5F', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
        </section>
    );
};

export default Cta;
