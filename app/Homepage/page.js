"use client";
import Image from "next/image";
import { useState } from "react";
function Homepage() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav((nav) => !nav);
    console.log(nav);
  }
  return (
    <div className="relative">
      <div className="bg-white py-2 px-5 flex justify-between">
        <h1 className="font-semibold tracking-wide mt-2">MyKitchenPower</h1>
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
            <li>Recipes</li>
            <li className="mt-6">Popular</li>
            <li className="mt-6">Cusines</li>
            <li className="mt-6">Kitchen Tips</li>
            <li className="mt-6">About US</li>
            <li className="mt-10">Log in</li>
            <button className="bg-[rgb(52,22,26)] p-2 px-4 text-[0.7rem] mt-6 text-slate-100 rounded-xl">
              Sign Up
            </button>
          </ul>
        )}
      </div>
      <div className="homepage text-white pt-[65%] px-7">
        <h1 className="font-bold tracking-wide text-3xl">
          DISCOVER NEW AND EXCITING
        </h1>
        <p className="mt-6">
          Classic and mouth-watering meals and side dishes for all season.
        </p>
        <button className="bg-[rgb(52,22,26)] p-2 px-7 mt-5 text-sm rounded-xl">
          Search for meal
        </button>
      </div>
      <Main />
      <Foot />
    </div>
  );
}

function Main() {
  return (
    <div className="px-7 py-5 pt-10">
      <main className="flex justify-between">
        <div className="flex shadow-lg p-2 w-[15rem] rounded-2xl">
          <input
            type="text"
            placeholder="How to cook bolognese"
            className="text-sm"
          />
          <Image
            src="/vector.png"
            alt="vector"
            width={20}
            height={10}
            className="h-[15px] mt-1"
          />
        </div>
        <div className=" shadow-lg p-2 w-[2rem] rounded-2xl ">
          <Image
            src="/vector (1).png"
            alt="vector1"
            width={22}
            height={10}
            className="h-[17px] mt-1"
          />
        </div>
      </main>
      <section className="mt-6 mb-8">
        <div>
          <p className="font-semibold text-slate-600 text-center">
            LATEST RECIPES
          </p>
          <div className="px-5">
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 7.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-14 text-center py-3 pb-14">
                <p className="text-[0.8rem]">PASTA TOMATO SAUCE WITH CHICKEN</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 8.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">
                  FRESH BAKED CHICKEN WINGS IN ASIAN STYLE AND TOMATO SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 9.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-14 text-center py-3 pb-14">
                <p className="text-[0.8rem]">PASTA TOMATO SAUCE WITH CHICKEN</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 10.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">GRILLED SALMON WITH SALAD</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-slate-600 text-center">
            FRESH FROM OUR COMMUNITY
          </p>
          <div className="px-5">
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 14.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">
                  SOUR CURRY WITH SNAKEHEAD FISH SPICY SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 16.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">
                  STUFFED EGGPLANT WITH GROUND BEEF AND VEGETABLE WITH BAKED
                  TOMATO SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 18.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-14 text-center py-3 pb-14">
                <p className="text-[0.8rem]">TASTY MEXICAN BURRITO</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 20.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">PIZZA MARGATIA</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-slate-600 text-center">
            EXPLORE NIGERIA RECIPES
          </p>
          <div className="px-5">
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 7 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-14 text-center py-3 pb-14">
                <p className="text-[0.8rem]">
                  WHITE RICE,CHICKEN AND CURRY SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 8 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[15rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">BEANS AND DODO (FRIED PLANTAIN)</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 9 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[15rem]"
              />
              <div className="px-14 text-center py-3 pb-14">
                <p className="text-[0.8rem]">ABACHA</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1">
              <Image
                src="/Rectangle 10 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem]"
              />
              <div className="px-5 text-center py-3 pb-14">
                <p className="text-[0.8rem]">ASARO (YAM PORRIGDE)</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Foot() {
  return (
    <div className="bg-black text-slate-200 px-10 py-14">
      <section className="text-[0.8rem] leading-6">
        <p className="font-semibold tracking-wider mb-2">Recipes</p>
        <p>Quick and Easy</p>
        <p>In the Kitchen</p>
        <p>Holiday and Seasons</p>
      </section>
      <section className="mt-8 text-[0.8rem] leading-6">
        <p className="font-semibold tracking-wider mb-2">Resources</p>
        <p>About Us</p>
        <p>Terms of Service</p>
        <p>How it Works</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </section>
      <section className="mt-8 text-[0.8rem] leading-6">
        <p className="font-semibold tracking-wider mb-2">Other</p>
        <p>Careers</p>
        <p>Webiners & events</p>
        <p>Our partners</p>
        <p>Cookies Policy</p>
      </section>
      <section className="mt-8 text-[0.8rem] leading-5">
        <p className="font-semibold tracking-wider mb-2">
          Ready to have fun in the kitchen
        </p>
        <p>Sign up for weekly Newslryyrt</p>
      </section>
    </div>
  );
}
export default Homepage;
