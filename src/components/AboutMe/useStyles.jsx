const useStyles = () => {
  return {
    container:
      "w-full h-full  text-gray-200 flex flex-col justify-center items-center ",
    ring: "ring-2 rounded-md bg-black/70 px-5 m-5 mt-[100px] pb-2 ",
    about:
      "max-w-[1000px] w-full grid grid-cols-2  gap-8 items-center text-center ",
    aboutText: "text-4xl font-bold inline border-b-4 border-emerald-500 ",
    hi: "  text-3xl font-bold  md:text-justify",
    imgContainer: "grid justify-center ",
    img: "rounded-lg w-[12rem] my-2",
    colum: "max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 ",
    columText: " sm:text-center text-2xl font-bold  ",
    pText: "mb-2"
  };
};

export default useStyles;
