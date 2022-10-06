import Icon from "./Icon.jsx";
import { Label } from "./index.js";
import { scrollTo } from "../utils";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  purpose = "orange",
  toId,
  toRef,
  duration,
  scrollMode,
  className,
  disabled,
}) => {
  const leftIconElement = {
    purpose: typeof leftIcon === "object" ? leftIcon.purpose : leftIcon,
    width: leftIcon?.width ?? null,
    height: leftIcon?.height ?? null,
    color: leftIcon?.color ?? null,
  };

  const rightIconElement = {
    purpose: typeof rightIcon === "object" ? rightIcon.purpose : rightIcon,
    width: rightIcon?.width,
    height: rightIcon?.height,
    color: rightIcon?.color,
  };

  const containerClassName = {
    orange: clsx(
      "bg-secondary hover:bg-secondarySoft rounded px-8 py-3 text-white font-bold cursor-pointer text-center",
      "transform transition duration-300 ease-in-out hover:scale-105",
      {
        "opacity-50 cursor-not-allowed hover:": disabled,
      }
    ),
  };

  const scroll = () => scrollTo({ id: toId, ref: toRef, duration });

  return (
    <div
      className={className ?? containerClassName[purpose]}
      onClick={disabled ? null : scrollMode ? scroll : onClick}
    >
      <Icon {...leftIconElement} />
      <Label>{children}</Label>
      <Icon {...rightIconElement} />
    </div>
  );
};

export default Button;
