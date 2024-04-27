function NoItemsFound({ title }) {
  return (
    <div className=" relative p-4">
      <div
        // style={{ border: "3px solid red" }}
        className=" absolute top-[40%] left-[10%] w-[25rem] h-[5rem] text-2xl   md:w-[35rem] md:h-[7rem] md:text-3xl bg-red-400 text-white   flex items-center justify-center   font-bold shadow-lg rounded-lg"
      >
        <span className="">No {title} Item's Found</span>
      </div>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544943.jpg?size=626&ext=jpg&ga=GA1.1.453334623.1714042499&semt=ais"
        alt=""
        className="h-[30rem] w-[60rem] object-cover shadow-lg rounded-lg"
      />
    </div>
  );
}

export default NoItemsFound;
