'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
function Home() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div
          className="bg-orange-400/90 w-1/2 h-screen
         flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src="/home2.png" alt="home logo" height={500} width={500} />
          </motion.div>
        </div>

        <div className=" w-1/2 flex flex-col items-center justify-evenly">
          <div className="lg:text-[55px] text-orange text-[40px] top-2] ">
            <h5 className="mb-0 space-y-0 font-thin text-orange-400">
              WARDROBE WONDERS
            </h5>
            <p className="font-normal text-sm text-center">
              Your digital wardrobe, all in one place
            </p>
          </div>
          <div className="mt-0 flex flex-col gap-4 items-center justify-center">
            <Button
              variant="outline"
              size="xlg"
              className="bg-orange-400 rounded-xl"
            >
              Sign up
            </Button>
            <p>Already have an account?</p>
            <Button
              variant="outline"
              size="xlg"
              className="bg-orange-400 rounded-xl"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
