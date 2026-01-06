"use client";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Link from "next/link";
import IllustrationContainer from "./IllustrationContainer";
import { useState } from "react";

export default function SignupContainer() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  return (
    <main className="font-sans min-h-screen grid grid-cols-2 bg-[#F9FAFB]">
      <div className="flex flex-col justify-center py-20">
        <div className="w-[50%] mx-auto 2xl:w-100">
          <div className="plain-flex gap-2 mb-6 w-fit mx-auto">
            <Icon
              icon="fluent:chat-multiple-28-filled"
              className="text-primary text-[1.6rem]"
            />
            <p className="font-semibold text-black">Chadda</p>
          </div>

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
              <label className="text-smaller font-medium" htmlFor="fullname">
                Full name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value.trim())}
                className="text-small custom-shadow3 placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3]"
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label className="text-smaller font-medium" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value.trim())}
                className="text-small custom-shadow3 placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3]"
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <div className="custom-flex">
                <label className="text-smaller font-medium" htmlFor="email">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={passwordView ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-small custom-shadow3 placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3] w-full pr-9"
                />
                <button
                  onClick={() => setPasswordView((prev) => !prev)}
                  type="button"
                  className="top-0 bottom-0 rounded-md grid place-items-center text-[1.2rem] absolute px-2 right-0"
                >
                  <Icon
                    className="text-black"
                    icon={
                      passwordView
                        ? "iconoir:eye-closed"
                        : "fluent:eye-24-regular"
                    }
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <div className="custom-flex">
                <label className="text-smaller font-medium" htmlFor="email">
                  Confirm password
                </label>
              </div>
              <div className="relative">
                <input
                  type={confirmPasswordView ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-small custom-shadow3 placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3] w-full pr-9"
                />
                <button
                  onClick={() => setConfirmPasswordView((prev) => !prev)}
                  type="button"
                  className="top-0 bottom-0 rounded-md grid place-items-center text-[1.2rem] absolute px-2 right-0"
                >
                  <Icon
                    className="text-black"
                    icon={
                      confirmPasswordView
                        ? "iconoir:eye-closed"
                        : "fluent:eye-24-regular"
                    }
                  />
                </button>
              </div>
            </div>

            <button className="w-full py-2 bg-primary border-primary border-[0.1em] text-small text-white rounded-lg font-medium">
              Create account
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
                <Icon icon="akar-icons:google-fill" className="text-[1rem]" />
                {/* <Image className="w-5" src={googleIcon} alt="google icon" /> */}
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
                <Icon icon="akar-icons:github-fill" className="text-[1rem]" />
                <p className="text-smaller font-medium text-black">GitHub</p>
              </motion.button>
            </div>
          </div>

          <div>
            <p className="text-center text-smaller text-gray-600">
              Already have an account?{" "}
              <span>
                <Link
                  href="/signup"
                  className="text-primary text-smaller font-medium"
                >
                  Sign in
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <IllustrationContainer
        title="Start your journey today."
        description="Create your free account and discover a new way to connect with friends, family, and colleagues around the world."
      />
    </main>
  );
}
