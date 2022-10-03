import clsx from "clsx";

const useInputHelpers = ({ purpose, type, error, title }) => {
  const inputClassName = clsx(
    {
      "text-red-600 border-red-600 placeholder:text-red-300": error,
      "border-slate-300": !error,
    },
    " px-3 py-4 bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
  );

  const inputTileClassName = clsx("mb-2 font-semibold text-neutral-700 ", {
    "text-red": error,
  });

  const inputContainerClassName = clsx("w-full");

  const titleConditions = !!title;

  return {
    inputClassName,
    inputTileClassName,
    inputContainerClassName,
    titleConditions,
  };
};

export default useInputHelpers;
