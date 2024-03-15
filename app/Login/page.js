"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
function Login() {
  // const basicSchema = yup.object().shape({
  //   email: yup.string().email("Please enter your email").required("required"),
  //   password: yup.string().min(5).required("required"),
  // });
  // const onSubmit = () => {
  //   console.log("submitted");
  // };
  // const formik = useFormik({
  //   initialvalues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: basicSchema,
  //   onSubmit,
  // });
  function handleSubmit() {
    const pass = document.querySelector("#pass").value;
    const email = document.querySelector("#email").value;
    const passerr = document.querySelector(".passerr");
    const emailerr = document.querySelector(".emailerr");
    if (pass == "") {
      console.log("enter password");
      passerr.style.display = "block";
    } else {
      console.log("submitted");
      passerr.style.display = "none";
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
    <div className="bg-[rgb(157,79,74)] p-4 px-6">
      <main className="bg-white p-3 pt-7 px-5 rounded-xl pb-10">
        <p className="font-semibold">Login your account</p>

        <p className="text-[0.8rem] mt-8 font-semibold">Email</p>
        <input
          type="text"
          id="email"
          className="border-2 text-[0.8rem] border-[rgb(157,79,74)] px-2 outline-none w-[100%] h-[2.3rem] mt-2 rounded-lg"
        />
        <p className="text-[0.7rem] text-red-600 float-right mt-2 emailerr  hidden ">
          enter email
        </p>
        <p className="text-[0.8rem] mt-4 font-semibold">Password</p>
        <input
          type="password"
          id="pass"
          className="border-2 border-[rgb(157,79,74)] px-2 outline-none w-[100%] h-[2.3rem] mt-2 rounded-lg"
        />
        <p className="text-[0.7rem] text-red-600 float-left mt-2 passerr  hidden ">
          enter valid password
        </p>
        <p className="text-[0.7rem] text-slate-400 mt-2 float-right cursor-pointer">
          Forgot password?
        </p>

        <button
          onClick={handleSubmit}
          className="bg-[rgb(157,79,74)]  text-[0.8rem] text-slate-100 w-[100%] mt-5 py-2 font-semibold rounded-lg tracking-wide"
        >
          Continue
        </button>
        <p className="mt-3 text-[0.7rem]">
          New user?{" "}
          <span className="text-[rgb(157,79,74)]">
            <Link href="/Signup">Sign Up</Link>
          </span>
        </p>
      </main>
    </div>
  );
}

export default Login;
