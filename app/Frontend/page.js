import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
function Frontend() {
  return (
    <>
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
    </>
  );
}
function Main() {
  return (
    <div className="px-7 py-5 pt-10">
      <main className="flex justify-between">
        <div className="flex shadow-lg p-2 w-[15rem] rounded-2xl px-4">
          <input
            type="text"
            placeholder="How to cook bolognese"
            className="text-sm"
          />
          <FaLocationArrow className="mt-1 text-gray-500" />

          {/* <Image
            src="/vector.png"
            alt="vector"
            width={20}
            height={10}
            className="h-[15px] mt-1"
          /> */}
        </div>
        <div className=" shadow-lg p-2 w-[2rem] rounded-2xl ">
          {/* <Image
            src="/vector (1).png"
            alt="vector1"
            width={22}
            height={10}
            className="h-[17px] mt-1"
          /> */}
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

export default Frontend;
