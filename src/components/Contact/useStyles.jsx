const useStyles = () => {
  return {
    container:
      "w-full h-full mt-14  flex justify-center items-center p-8 md:p-4",
    form: "flex flex-col max-w-[600px] w-full",
    textContact:
      "md:text-4xl text-2xl font-bold inline border-b-4 border-emerald-500 text-gray-100 ",
    textEmail: "text-gray-100 py-4",
    inputName:
      " bg-[#ccd6f6] p-2 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 placeholder:italic placeholder:text-slate-500",
    inputEmail:
      "mt-4 p-2 bg-[#ccd6f6] rounded-md peer  focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-emerald-500 placeholder:italic placeholder:text-slate-500",
    invalidEmail:
      "mt-1 mb-4 invisible peer-invalid:visible text-gray-300 text-sm",
    textarea:
      'resize-none bg-[#ccd6f6] p-2 rounded-md after:content-["*"] after:ml-0.5 after:text-red-500 focus:outline-none placeholder:italic placeholder:text-slate-500',
    btn: "text-white border-2 hover:bg-pink-600 hover:scale-110  px-4 py-3 my-8 mx-auto flex items-center rounded-full",
  };
};

export default useStyles;
