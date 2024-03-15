"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Frontend from "../Frontend/page";
function Homepage() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav((nav) => !nav);
    console.log(nav);
  }
  const [Front, setFront] = useState(true);
  function handleFront() {
    setFront(false);
    console.log(Front);
    setNav(false);
  }
  function handleFronts() {
    setFront(true);
    setNav(false);
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="relative">
      <div className="bg-white py-2 px-5 flex justify-between">
        <Link href="/">
          <h1
            className="font-semibold tracking-wide mt-2"
            onClick={handleFronts}
          >
            MyKitchenPower
          </h1>
        </Link>
        <Image
          src="/Group 87.png"
          width={35}
          height={20}
          alt="navbar"
          className="cursor-pointer"
          onClick={handleNav}
        />
        {nav && (
          <ul className="absolute bg-white left-0 text-slate-500 top-12 w-[100%] text-center pt-7 pb-5">
            <Link href="/Recipes">
              <li className="cursor-pointer" onClick={handleFront}>
                Recipes
              </li>
            </Link>
            <li className="mt-6 cursor-pointer">Popular</li>
            <li className="mt-6 cursor-pointer">Cusines</li>
            <li className="mt-6 cursor-pointer">Kitchen Tips</li>
            <li className="mt-6 cursor-pointer">About Us</li>
            <Link href="/Contact">
              <li className="mt-6 cursor-pointer" onClick={handleFront}>
                Contact Us
              </li>
            </Link>
            <Link href="/Login">
              <li className="mt-10 cursor-pointer" onClick={handleFront}>
                Log in
              </li>
            </Link>
            <Link href="/Signup">
              <button
                onClick={handleFront}
                className="bg-[rgb(52,22,26)] cursor-pointer p-2 px-4 text-[0.7rem] mt-6 text-slate-100 rounded-xl"
              >
                Sign Up
              </button>
            </Link>
          </ul>
        )}
      </div>
      {Front && <Frontend />}
    </div>
  );
}

export default Homepage;
