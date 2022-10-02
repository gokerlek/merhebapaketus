import Icon from "./Icon.jsx";
import { Label } from "./index.js";

const Button = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  purpose = "orange",
  className,
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
    orange:
      "bg-secondary hover:bg-secondarySoft rounded px-8 py-3 text-white font-bold cursor-pointer text-center",
  };

  return (
    <div className={className ?? containerClassName[purpose]} onClick={onClick}>
      <Icon {...leftIconElement} />
      <Label>{children}</Label>
      <Icon {...rightIconElement} />
    </div>
  );
};

export default Button;
