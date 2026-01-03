"use client";
import Image from "next/image";
import phoneImg from "@/assets/images/xxx.png";
import clouds from "@/assets/images/sky.jpg";
import gradient from "@/assets/images/blurry-gradient.svg";
import collaboration from "@/assets/images/collaboration.svg";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import googleIcon from "@/assets/images/google-icon.svg";

export default function LoginContainer() {
  return (
    <main className="font-sans min-h-screen max-width grid grid-cols-2 bg-white">
      <div className="py-35">
        <div className="w-[60%] mx-auto">
          <motion.h1
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0}
            className="text-black text-center font-semibold text-[1.3rem] mb-1"
          >
            Welcome Back!
          </motion.h1>
          <motion.p
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0.5}
            className="text-text-gray mb-3 text-center text-smaller"
          >
            Enter your credentials to continue your conversations.
          </motion.p>
          {/* <div className="mb-4">
            <motion.button
              initial="init"
              whileInView="slide"
              viewport={{
                once: true,
              }}
              custom={1}
              className="plain-flex mb-4 justify-center gap-3 py-2 w-full border-[0.1em] border-[#cbcbcb] rounded-lg"
            >
              <Image className="w-5" src={googleIcon} alt="google icon" />
              <p className="text-smaller font-medium text-black">
                Log in with Google
              </p>
            </motion.button>
            <motion.div
              initial="init"
              whileInView="slide"
              viewport={{
                once: true,
              }}
              custom={1.5}
              className="flex items-center gap-3"
            >
              <span className="h-[0.08em] bg-[#cbcbcb] flex-1"></span>
              <p className="text-smaller text-black">or continue with</p>
              <span className="h-[0.08em] bg-[#cbcbcb] flex-1"></span>
            </motion.div>
          </div> */}

          <form action=""></form>
        </div>
      </div>

      <div className="overflow-hidden py-35 px-20 relative p-2 bg-primary">
        <div className="relative z-3 text-center">
          <h1 className="text-white font-medium text-[1.7rem]">
            Connect with anyone, anywhere.
          </h1>
          <p className="text-gray-200 text-small mb-12">
            Experience seamless conversations with real-time messaging. <br />{" "}
            Stay connected with the people that matter most.
          </p>
          {/* <div className="flex gap-5">
            <Image className="w-35" src={phoneImg} alt="image of a phone" />
          </div> */}

          <div className="rounded-lg bg-black/20 backdrop-blur-sm overflow-hidden">
            <div className="bg-[#E9E9E9] h-9 mb-6 plain-flex gap-3 px-3">
              <span className="w-3 h-3 rounded-full bg-[#FC5C58]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FDBE46]"></span>
              <span className="w-3 h-3 rounded-full bg-[#39C84D]"></span>
            </div>

            <div className="h-80 px-3">
              <div className="w-60 bg-white plain-flex flex-col items-start gap-2 rounded-xl p-3 mb-5">
                <span className="w-[80%] h-3 rounded-full bg-gray-300"></span>
                <span className="w-[30%] h-3 rounded-full bg-gray-300"></span>
              </div>
              <div className="w-60 bg-white plain-flex gap-2 rounded-xl p-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={clouds}
          alt="gradient image"
        />
      </div>
    </main>
  );
}
