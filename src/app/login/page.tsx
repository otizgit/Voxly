import Image from "next/image";
import phoneImg from "@/app/assets/images/xxx.png";
import clouds from "@/app/assets/images/clouds.png";
import gradient from "@/app/assets/images/blurry-gradient.svg";
import collaboration from "@/app/assets/images/collaboration.svg";
import { Icon } from "@iconify/react";

export default function page() {
  return (
    <main className="font-sans min-h-screen max-width grid grid-cols-2 bg-white">
      <div className="py-25 px-10">

      </div>
      <div className="rounded-tl-2xl rounded-bl-2xl overflow-hidden py-25 px-12 relative p-2 bg-primary">
        <div className="relative z-3">
          <h1 className="text-white font-medium text-[2rem]">Simple, real-time messaging.</h1>
          <p className="text-gray-200 text-medium mb-6">
            Send messages instantly, stay organized, and keep conversations <br />
            flowing without distractions.
          </p>
          {/* <Image
            className="w-55"
            src={collaboration}
            alt="image of a phone"
          /> */}
        </div>
        <Image className="w-55 justify-self-center relative z-3" src={phoneImg} alt="image of a phone" />
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={gradient}
          alt="gradient image"
        />
      </div>
    </main>
  );
}
