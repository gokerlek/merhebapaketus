import clsx from "clsx";

const Container = ({ children, medium, full }) => {
  return (
    <div
      className={clsx("my-0 mx-auto px-5", {
        "w-full": full,
        "max-w-[1240px]": medium,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
