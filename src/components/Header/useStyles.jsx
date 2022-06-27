const useStyles = () => {
  return {
    container:
      "w-full h-[50px] flex justify-between items-center px-4 bg-black/70 text-gray-200 absolute top-0",
    logoImg: "w-[60px]",
    menu: " hidden md:flex ",
    menuText: "hover:text-emerald-500",
    hamburgerIcon: "md:hidden",
    responsiveMenu:
      "absolute top-0 left-0 w-full h-screen bgNav flex flex-col  items-center",
    closeIcon: "flex justify-end w-full mr-8 py-6",
    responsiveMenuText: "py-6 text-4xl",
  };
};

export default useStyles;
