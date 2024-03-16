import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
function Frontend() {
  return (
    <>
      <div className="homepage text-white xl:pt-[15%] pt-[65%] sm:pt-[35%] sm:text-center md:text-left sm:px-[17%] md:px-10  md:pt-[30%] lg:pt-[20%] px-7 frontend">
        <h1 className="font-bold tracking-wide sm:leading-10 text-3xl md:hidden">
          DISCOVER NEW AND EXCITING
        </h1>
        <h1 className="font-bold tracking-wider hidden sm:leading-10 text-3xl md:block">
          Unleash Culinary Magic with <br></br>
          My Kitchen Power!
        </h1>
        <p className="mt-6 md:hidden">
          Classic and mouth-watering meals and side dishes for all season.
        </p>
        <p className="mt-4 hidden md:block md:pr-[25%] xl:pr-[50%]">
          Dive into a world of flavours with AI-powerder kitchen assitant.
          Whether you are craving classics or looking to experiement, we got the
          perfect recipe waiting for you.
        </p>
        <button className="bg-[rgb(52,22,26)] md:hidden p-2 px-7 mt-5 text-sm rounded-xl">
          Search for meal
        </button>
        <button className="bg-[rgb(157,79,74)] hidden md:block p-2 px-7 mt-5 text-sm rounded-xl">
          Find My Next Recipe
        </button>
      </div>
      <Main />
    </>
  );
}
function Main() {
  return (
    <div className="px-7 py-5 pt-10 main md:px-3">
      <main className="flex justify-between how sm:justify-normal">
        <div className="flex shadow-lg p-2 w-[17rem] rounded-2xl px-4">
          <input
            type="text"
            placeholder="How to cook bolognese"
            className="text-sm outline-none"
          />
          <FaLocationArrow className="mt-1 ml-3 text-gray-500" />
        </div>
        <div className=" shadow-lg p-2 w-[2rem] rounded-2xl sm:ml-5">
          <GiSelfLove className="mt-1 text-[rgb(157,79,74)]" />
        </div>
      </main>
      <section className="mt-6 mb-8">
        <div>
          <p className="font-semibold text-slate-600 text-center">
            LATEST RECIPES
          </p>
          <div className="px-5 sm:px-2 md:px-0 container sm:flex sm:flex-wrap sm:justify-between">
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 7.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-14 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">PASTA TOMATO SAUCE WITH CHICKEN</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 8.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">
                  FRESH BAKED CHICKEN WINGS IN ASIAN STYLE AND TOMATO SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 9.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-14 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">PASTA TOMATO SAUCE WITH CHICKEN</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 10.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">GRILLED SALMON WITH SALAD</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-slate-600 text-center">
            FRESH FROM OUR COMMUNITY
          </p>
          <div className="px-5 container sm:flex sm:flex-wrap sm:justify-between">
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 14.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">
                  SOUR CURRY WITH SNAKEHEAD FISH SPICY SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 16.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">
                  STUFFED EGGPLANT WITH GROUND BEEF AND VEGETABLE WITH BAKED
                  TOMATO SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 18.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-14 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">TASTY MEXICAN BURRITO</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 20.png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">PIZZA MARGATIA</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-slate-600 text-center">
            EXPLORE NIGERIA RECIPES
          </p>
          <div className="px-5 container sm:flex sm:flex-wrap sm:justify-between">
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 7 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-14 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">
                  WHITE RICE,CHICKEN AND CURRY SAUCE
                </p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 8 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">BEANS AND DODO (FRIED PLANTAIN)</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 9 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-14 text-center py-3 pb-14 xl:pb-5">
                <p className="text-[0.8rem]">ABACHA</p>
              </div>
            </aside>
            <aside className="mt-6 shadow-lg rounded-xl p-1 contain sm:w-[48%] md:w-[32%] xl:w-[23%]">
              <Image
                src="/Rectangle 10 (1).png"
                alt="rec1"
                width={320}
                height={100}
                className="h-[17rem] w-[100%]"
              />
              <div className="px-5 text-center py-3 pb-14 xl:pb-5">
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
