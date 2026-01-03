"use client";
import Image from "next/image";
import phoneImg from "@/assets/images/xxx.png";
import clouds from "@/assets/images/sky2.jpg";
import avatar1 from "@/assets/images/avatar1.svg";
import avatar2 from "@/assets/images/avatar2.svg";
import chatImg from "@/assets/images/chat-img.png";
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

      <div className="overflow-hidden py-35 relative p-2 bg-primary">
        <div className="relative z-3 text-center w-[70%] mx-auto">
          <h1 className="text-white font-medium text-[1.7rem]">
            Connect with anyone, anywhere.
          </h1>
          <p className="text-gray-100 text-small mb-12">
            Experience seamless conversations with real-time messaging. <br />{" "}
            Stay connected with the people that matter most.
          </p>

          <div className="rounded-xl relative bg-black/20 shadow-lg backdrop-blur-sm pb-5">
            <Image
              draggable={false}
              className="w-35 absolute -right-15 top-3 -scale-x-100"
              src={chatImg}
              alt="chat 3d icon"
            />
            <Image
              draggable={false}
              className="w-35 absolute bottom-10 -left-15"
              src={chatImg}
              alt="chat 3d icon"
            />

            <div className="rounded-tr-lg rounded-tl-lg bg-[#E9E9E9] h-9 mb-6 plain-flex gap-3 px-5">
              <span className="w-3 h-3 rounded-full bg-[#FC5C58]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FDBE46]"></span>
              <span className="w-3 h-3 rounded-full bg-[#39C84D]"></span>
            </div>

            <div className="px-4">
              <div className="relative w-60 bg-white plain-flex flex-col items-start gap-2 rounded-xl p-3 mb-5">
                <div className="flex items-end justify-center w-9 h-9 overflow-hidden bg-gray-300 border-[0.1em] border-black/80 rounded-full absolute -bottom-2 -left-1">
                  <Image className="w-8" src={avatar1} alt="male avatar" />
                </div>
                <span className="w-[90%] h-2 rounded-full bg-gray-200"></span>
                <span className="w-[40%] h-2 rounded-full bg-gray-200"></span>
              </div>

              <div className="relative w-60 ml-auto bg-white plain-flex flex-col items-start gap-2 rounded-xl p-3 mb-6">
                <div className="flex items-end justify-center w-9 h-9 overflow-hidden bg-gray-300 border-[0.1em] border-black/80 rounded-full absolute -bottom-2 -right-1">
                  <Image className="w-8" src={avatar2} alt="image of a phone" />
                </div>
                <span className="w-[85%] h-2 rounded-full bg-gray-200"></span>
                <span className="w-[55%] h-2 rounded-full bg-gray-200"></span>
                <span className="w-[25%] h-2 rounded-full bg-gray-200"></span>
              </div>

              <div className="bg-white/20 rounded-lg px-3 custom-flex">
                <div className="plain-flex gap-2 py-4">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-20 h-2 rounded-full bg-gray-300"></span>
                </div>
                <div className="">
                  <Icon
                    icon="material-symbols:send-rounded"
                    className="text-[1.6rem] text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={clouds}
          alt="image of clouds and sea"
        />
      </div>
    </main>
  );
}
