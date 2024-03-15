"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Frontend from "../Frontend/page";
import Recipes from "../Recipes/page";
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
      <div className="bg-white lg:text-[rgb(157,79,74)] py-2 px-5 lg:pb-3 xl:px-10 flex justify-between">
        <Link href="/">
          <h1
            className="font-semibold tracking-wide mt-2 lg:mt-4"
            onClick={handleFronts}
          >
            MyKitchenPower
          </h1>
        </Link>
        <div className={"hidden lg:block  " + (nav && "show")}>
          <ul className="absolute lg:relative lg:text-[0.9rem]  lg:flex bg-white  left-0 lg:text-[rgb(157,79,74)] text-slate-500 top-12 lg:top-0 w-[100%] text-center pt-7 lg:pt-3 lg:pb-0 pb-5">
            <Link href="/Recipes">
              <li
                className="cursor-pointer lg:mt-1 hover:text-[rgb(157,79,74)]"
                onClick={handleFront}
              >
                Recipes
              </li>
            </Link>
            <li className="mt-6 lg:mt-1 lg:ml-3 xl:ml-7 hover:text-[rgb(157,79,74)] cursor-pointer">
              Popular
            </li>
            <li className="mt-6  lg:mt-1 lg:ml-3  xl:ml-7 hover:text-[rgb(157,79,74)] cursor-pointer">
              Cusines
            </li>
            <li className="mt-6  lg:mt-1 lg:ml-3  xl:ml-7 hover:text-[rgb(157,79,74)] cursor-pointer">
              Kitchen Tips
            </li>
            <li className="mt-6  lg:mt-1 lg:ml-3  xl:ml-7 hover:text-[rgb(157,79,74)] cursor-pointer">
              About Us
            </li>
            <Link href="/Contact">
              <li
                className="mt-6  lg:mt-1 lg:ml-4  xl:ml-7 hover:text-[rgb(157,79,74)] cursor-pointer"
                onClick={handleFront}
              >
                Contact Us
              </li>
            </Link>
            <Link href="/Login">
              <li
                className="mt-10  lg:mt-1 lg:ml-4  xl:ml-7 hover:text-[rgb(157,79,74)] cursor-pointer"
                onClick={handleFront}
              >
                Log in
              </li>
            </Link>
            <Link href="/Signup">
              <button
                onClick={handleFront}
                className="bg-[rgb(52,22,26)]  lg:mt-0 lg:ml-2  xl:ml-7 cursor-pointer p-2 px-4 text-[0.7rem] mt-6 text-slate-100 rounded-xl"
              >
                Sign Up
              </button>
            </Link>
          </ul>
        </div>
        <Image
          src="/Group 87.png"
          width={35}
          height={20}
          alt="navbar"
          className="cursor-pointer lg:hidden"
          onClick={handleNav}
        />
      </div>
      {Front && <Frontend />}
    </div>
  );
}

export default Homepage;
