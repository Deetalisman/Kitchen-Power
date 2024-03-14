function Contact() {
  return (
    <div>
      <main className="bg-[#34161a] h-[15rem] rounded-bl-2xl rounded-br-2xl flex justify-center">
        <button className="bg-[rgb(205,110,90)] h-[2.5rem] text-sm font-semibold text-[#34161a] p-1 rounded-lg px-4 mt-10">
          CONTACT US
        </button>
      </main>
      <div className="p-3 px-5 mt-3">
        <p className="text-sm">Firstname</p>
        <input
          type="text"
          className="shadow-lg w-[100%] rounded-xl mt-2 outline-none text-[0.8rem] p-3"
        />
        <p className="text-sm mt-5">Lastname</p>
        <input
          type="text"
          className="shadow-lg w-[100%] rounded-xl mt-2 outline-none text-[0.8rem] p-3"
        />
        <p className="text-sm mt-5">Email</p>
        <input
          type="text"
          className="shadow-lg w-[100%] rounded-xl mt-2 outline-none text-[0.8rem] p-3"
        />
        <p className="text-sm mt-5">Phone</p>
        <input
          type="text"
          className="shadow-lg w-[100%] rounded-xl mt-2 outline-none text-[0.8rem] p-3"
        />
        <p className="text-sm mt-5">Subject</p>
        <input
          type="text"
          className="shadow-lg w-[100%] rounded-xl mt-2 outline-none text-[0.8rem] p-3"
        />
        <p className="text-sm mt-5">Message</p>
        <textarea
          type="text"
          className="shadow-lg w-[100%] h-[10rem] rounded-xl mt-2 outline-none text-[0.8rem] p-3"
        />
        <button className="bg-[#34161a] text-slate-200 w-[10rem] py-2 px-5 text-center mt-3 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
