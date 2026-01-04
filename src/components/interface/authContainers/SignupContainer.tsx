"use client";
import Image from "next/image";
import clouds from "@/assets/images/sky.jpg";
import avatar1 from "@/assets/images/avatar1.svg";
import avatar2 from "@/assets/images/avatar2.svg";
import chatImg from "@/assets/images/chat-img.png";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import googleIcon from "@/assets/images/google-icon.svg";
import Link from "next/link";

export default function SignupContainer() {
  return (
    <main className="font-sans min-h-screen grid grid-cols-2 bg-[#F9FAFB]">
      <div className="flex flex-col justify-center">
        <div className="w-[50%] mx-auto 2xl:w-100">
          <motion.h1
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0}
            className="text-black text-center font-semibold text-[1.3rem] mb-1"
          >
            Create an account
          </motion.h1>
          <motion.p
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0.5}
            className="text-gray-600 mb-6 text-center text-smaller"
          >
            Join users and start chatting.
          </motion.p>

          <form action="" className="mb-5">
            <div className="flex flex-col gap-1 mb-5">
              <label className="text-smaller font-medium" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="text-small placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3]"
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <div className="custom-flex">
                <label className="text-smaller font-medium" htmlFor="email">
                  Password
                </label>
                <button type="button" className="text-primary text-smaller">
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="text-small placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3]"
              />
            </div>

            <button className="w-full py-2 bg-primary border-primary border-[0.1em] text-small text-white rounded-lg font-medium">
              Sign in
            </button>
          </form>

          <div className="mb-5">
            <motion.div
              initial="init"
              whileInView="slide"
              viewport={{
                once: true,
              }}
              custom={1.5}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-[0.08em] bg-[#e1e1e1] flex-1"></span>
              <p className="text-smaller text-gray-600">or continue with</p>
              <span className="h-[0.08em] bg-[#e1e1e1] flex-1"></span>
            </motion.div>

            <div className="custom-flex gap-4">
              <motion.button
                initial="init"
                whileInView="slide"
                viewport={{
                  once: true,
                }}
                custom={1}
                className="plain-flex justify-center gap-2 py-2 w-full border-[0.05em] border-[#d3d3d3] rounded-lg"
              >
                <Image className="w-5" src={googleIcon} alt="google icon" />
                <p className="text-smaller font-medium text-black">Google</p>
              </motion.button>
              <motion.button
                initial="init"
                whileInView="slide"
                viewport={{
                  once: true,
                }}
                custom={1}
                className="plain-flex justify-center gap-2 py-2 w-full border-[0.05em] border-[#d3d3d3] rounded-lg"
              >
                <Image className="w-5" src={googleIcon} alt="google icon" />
                <p className="text-smaller font-medium text-black">Google</p>
              </motion.button>
            </div>
          </div>

          <div>
            <p className="text-center text-smaller text-gray-600">
              Don't have an account?{" "}
              <span>
                <Link
                  href="/signup"
                  className="text-primary text-smaller font-medium"
                >
                  Sign up for free
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden flex flex-col justify-center relative p-2">
        <div className="relative z-3 text-center w-[70%] mx-auto">
          <h1 className="text-white leading-7.5 mb-3 font-medium text-[1.7rem]">
            Start your journey today.
          </h1>
          <p className="text-gray-100 text-small mb-12">
            Create your free account and discover a new way to connect <br /> with
            friends, family, and colleagues around the world.
          </p>

          <div className="rounded-xl relative bg-black/30 w-[86%] 2xl:w-100 mx-auto shadow-sm border- pb-5">
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
              <div className="mb-3">
                <div className="mb-3 relative w-60 bg-[#E9E9E9] plain-flex flex-col items-start gap-2 rounded-xl p-3">
                  <div className="flex items-end justify-center w-9 h-9 overflow-hidden bg-[#c1c5cb] border-[0.1em] border-black/80 rounded-full absolute -bottom-2 -left-1">
                    <Image className="w-7.5" src={avatar1} alt="male avatar" />
                  </div>
                  <span className="w-[90%] h-2 rounded-full bg-[#c1c5cb]"></span>
                  <span className="w-[40%] h-2 rounded-full bg-[#c1c5cb]"></span>
                </div>
                <Icon
                  icon="icon-park-outline:check-one"
                  className="text-small text-primary"
                />
              </div>

              <div className="mb-4">
                <div className="relative w-60 ml-auto bg-[#E9E9E9] plain-flex flex-col items-start gap-2 rounded-xl p-3 mb-3">
                  <div className="flex items-end justify-center w-9 h-9 overflow-hidden bg-[#c1c5cb] border-[0.1em] border-black/80 rounded-full absolute -bottom-2 -right-1">
                    <Image
                      className="w-7"
                      src={avatar2}
                      alt="image of a phone"
                    />
                  </div>
                  <span className="w-[25%] h-2 rounded-full bg-[#c1c5cb]"></span>
                  <span className="w-[55%] h-2 rounded-full bg-[#c1c5cb]"></span>
                  <span className="w-[85%] h-2 rounded-full bg-[#c1c5cb]"></span>
                </div>
                <Icon
                  icon="icon-park-outline:check-one"
                  className="text-small text-primary ml-auto"
                />
              </div>

              <div className="bg-white/20 rounded-lg px-3 custom-flex">
                <div className="plain-flex gap-2 py-4">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-20 h-2 rounded-full bg-gray-300"></span>
                </div>
                <Icon
                  icon="material-symbols:send-rounded"
                  className="text-[1.5rem] text-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full">
          <span className="absolute inset-0 w-full h-full bg-black/20"></span>
          <Image
            className="w-full h-full object-cover"
            src={clouds}
            alt="image of clouds and sea"
          />
        </div>
      </div>
    </main>
  );
}
