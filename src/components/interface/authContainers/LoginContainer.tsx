"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Link from "next/link";
import IllustrationContainer from "./IllustrationContainer";

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordView, setPasswordView] = useState(false);

  return (
    <main className="font-sans min-h-screen grid grid-cols-2 bg-[#F9FAFB]">
      <div className="flex flex-col justify-center">
        <div className="w-[50%] mx-auto 2xl:w-100">
          <div className="plain-flex gap-2 mb-6 w-fit mx-auto">
            <Icon
              icon="fluent:chat-multiple-28-filled"
              className="text-primary text-[1.6rem]"
            />
            <p className="font-semibold text-black">
              Chadda
            </p>
          </div>

          <motion.h1
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0}
            className="text-black text-center font-semibold text-[1.4rem] mb-1"
          >
            Welcome back!
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
            Sign in to continue your conversations.
          </motion.p>

          <form action="" className="mb-5">
            <div className="flex flex-col gap-1 mb-5">
              <label className="text-smaller font-medium" htmlFor="email">
                Email address
              </label>
              <input
                required
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="Enter your email"
                className="text-small custom-shadow3 placeholder:text-smaller p-2 rounded-lg bg-white border-[0.1em] border-[#d3d3d3]"
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <div className="custom-flex">
                <label className="text-smaller font-medium" htmlFor="email">
                  Password
                </label>
                <button
                  type="button"
                  className="text-primary text-smaller font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  required
                  type={passwordView ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
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

      <IllustrationContainer
        title="Connect with anyone, anywhere."
        description="Experience seamless conversations with real-time messaging. Stay connected with the people that matter most."
      />
    </main>
  );
}
