const useStyles = () => {
  return {
    container: "w-full md:h-full text-gray-100 mt-[70px]",
    subContainer: " max-w-[1200px] mx-auto p-4 flex flex-col justify-center ",
    workText:
      "text-3xl font-bolt inline border-b-4 text-gray-100 border-emerald-500 ",
    text: "py-6",
    containerWorks: "grid  sm:grid-cols-2 md:grid-cols-2 gap-4  ",
    workBox: "ring-1 ring-emerald-500 bg-black/70 p-5 rounded-md ",
    bg: "  group container rounded-md flex justify-center items-center mx-auto content-div ",
    hover: "opacity-0 group-hover:opacity-100",
    title: "text-2xl font-bold text-white grid justify-center ",
    Btns: "pt-8 text-center",
    DemoBtn:
      "text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
    foot: "m-2 pt-2 ",
    CodeBtn:
      "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
  };
};

export default useStyles;
