function Recipes() {
  return (
    <div className="p-5 mb-9">
      <p className="font-semibold">Recipes</p>
      <div className="flex shadow-lg p-2 w-[100%] rounded-2xl mt-5 px-3">
        <input
          type="text"
          placeholder="search"
          className="text-[0.8rem] outline-none"
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
      <textarea className="shadow-lg w-[100%] outline-none rounded-lg h-[9rem] mt-4 text-[0.8rem]" />

      <p className="mt-5 text-center font-semibold">Previous 30 days</p>
      <textarea className="shadow-xl w-[100%] outline-none rounded-lg h-[14rem] mt-4 text-[0.8rem]" />
    </div>
  );
}

export default Recipes;
