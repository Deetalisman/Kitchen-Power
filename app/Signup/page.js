"use client";
import Image from "next/image";
import Link from "next/link";
function Signup() {
  function handleSubmit() {
    const pass = document.querySelector("#pass").value;
    const compass = document.querySelector("#compass").value;
    const email = document.querySelector("#email").value;
    const passerr = document.querySelector(".passerr");
    const compasserr = document.querySelector(".compasserr");
    const emailerr = document.querySelector(".emailerr");
    if (pass == "") {
      console.log("enter password");
      passerr.style.display = "block";
    } else {
      console.log("submitted");
      passerr.style.display = "none";
    }
    if (compass == "") {
      console.log("enter password");
      compasserr.style.display = "block";
    } else {
      console.log("submitted");
      compasserr.style.display = "none";
    }
    if (email == "") {
      console.log("enter password");
      emailerr.style.display = "block";
    } else {
      console.log("submitted");
      emailerr.style.display = "none";
    }
  }
  return (
    <div className="bg-[rgb(157,79,74)] md:py-20 p-4 px-6 sm:px-[20%] lg:flex  lg:px-[5%] xl:px-[12%] lg:justify-between">
      <Image
        src="/pexels-jan-n-g-u-y-e-n-_-699953-removebg-preview 1.png"
        width={450}
        height={100}
        alt="login"
        className="hidden lg:block h-[25rem] mt-8"
      />
      <main className="bg-white p-3 pt-7 px-5 rounded-xl pb-10 ">
        <p className="font-semibold">Create your account</p>

        <p className="text-[0.8rem] mt-8 font-semibold">Email</p>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className="border-2 text-[0.8rem] border-[rgb(157,79,74)] px-2 outline-none w-[100%] h-[2.3rem] mt-2 rounded-lg"
        />
        <p className="text-[0.7rem] text-red-600 float-right mt-2 emailerr  hidden ">
          enter email
        </p>
        <p className="text-[0.8rem] mt-4 font-semibold">Password</p>
        <input
          type="password"
          id="pass"
          placeholder="********"
          className="border-2 border-[rgb(157,79,74)] px-2 outline-none w-[100%] h-[2.3rem] mt-2 rounded-lg"
        />
        <p className="text-[0.7rem] text-red-600 float-right mt-2 passerr  hidden ">
          enter valid password
        </p>
        <p className="text-[0.8rem] mt-4 font-semibold">Confirm Password</p>
        <input
          type="password"
          id="compass"
          placeholder="********"
          className="border-2 border-[rgb(157,79,74)] px-2 outline-none w-[100%] h-[2.3rem] mt-2 rounded-lg"
        />
        <p className="text-[0.7rem] text-red-600 float-left mt-2 compasserr  hidden ">
          enter valid password
        </p>
        <p className="text-[0.7rem] text-slate-400 mt-2 float-right cursor-pointer">
          Forgot password?
        </p>

        <button
          onClick={handleSubmit}
          className="bg-[rgb(157,79,74)] text-[0.8rem] text-white w-[100%] mt-5 py-2 font-semibold rounded-lg tracking-wide"
        >
          Continue
        </button>
        <p className="mt-3 text-[0.7rem]">
          Already have an account?{" "}
          <span className="text-[rgb(157,79,74)]">
            <Link href="/Login">Login</Link>
          </span>
        </p>
      </main>
    </div>
  );
}

export default Signup;
