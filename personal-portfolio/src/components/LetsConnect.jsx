const LetsConnect = () => {
  return (
    <div className="w-[90%] h-screen border border-red-500 flex flex-col items-center ml-auto mr-auto gap-[15px]">
      <h1 className="text-[40px] font-bold">Let's Connect</h1>
      <p className="text-[24px]">
        Please fill out the following form and I will get back to you shortly.
      </p>
      <form className="w-[50%] flex flex-col gap-[15px] border border-red-500">
        <input
          placeholder="Enter your name..."
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          placeholder="Enter your email address..."
          className="border border-gray-300 rounded-md p-2"
        />
        <div>
          <textarea
            className="w-full h-[400px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                           placeholder-shown:top-0 placeholder-shown:text-gray-400 placeholder-shown:text-sm
                           placeholder-shown:transition-all duration-300"
            placeholder="Type your text here..."
            style={{ lineHeight: "1.5" }} // Adjusts the line height for better readability
          ></textarea>
        </div>
        <button className="w-[100%] h-[80px] bg-black text-white rounded-full">
          Submit
        </button>
      </form>
      <h1>Made with 🖤 by AV</h1>
    </div>
  );
};

export default LetsConnect;
