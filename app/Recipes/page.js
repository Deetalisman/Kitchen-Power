import { GoSearch } from "react-icons/go";
function Recipes() {
  return (
    <div className="p-5 mb-9 border-t-2 border-gray">
      <p className="font-semibold">Recipes</p>
      <div className="flex shadow-lg p-2 w-[100%] rounded-2xl mt-5 px-3">
        <GoSearch className=" text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="text-[0.8rem] outline-none ml-3"
        />
      </div>
      <p className="mt-5 text-center font-semibold">Yesterday</p>
      <div className="flex shadow-lg p-2 px-4 w-[100%] rounded-2xl mt-5 text-[0.8rem]">
        <input
          type="text"
          placeholder="Pounded yam and efo riro"
          className="outline-none"
        />
      </div>
      <p className="mt-5 text-center font-semibold">Previous 7 days</p>
      <textarea className="shadow-lg w-[100%] border-2 border-gray p-2  outline-none rounded-lg h-[9rem] mt-4 text-[0.8rem]" />

      <p className="mt-5 text-center font-semibold">Previous 30 days</p>
      <textarea className="shadow-xl w-[100%] border-2 border-gray p-2 outline-none rounded-lg h-[14rem] mt-4 text-[0.8rem]" />
    </div>
  );
}

export default Recipes;
