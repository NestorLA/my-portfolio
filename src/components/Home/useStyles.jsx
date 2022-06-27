const useStyles = () => {
  return {
    container:
      "w-full h-screen  max-w-[1200px] mx-auto px-8 flex flex-col justify-center  ",
    subContainer: "h-full mt-[50px] ",
    hi: "text-emerald-500 mt-[40px] font-semibold text-xl",
    textTitle: "text-4xl sm:text-7xl ",
    socialIcons: " flex flex-wrap  mt-8 mb-8",
    iconBox:
      " w-[40px] h-[40px] flex justify-between items-center rounded-md  mr-2 text-white hover:scale-110 ",
    icon: "flex justify-center  w-full ",
    btn: "text-white  border-2 px-4 py-3 my-2 flex items-center hover:bg-emerald-500 rounded-lg ",
    arrow: "ml-3 ",
  };
};

export default useStyles;
