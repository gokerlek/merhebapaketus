import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as AppStore } from "../assets/icons/apple.svg";
import { ReactComponent as GoodOneWin } from "../assets/icons/wyh-paketus/GoodOneWin.svg";
import { ReactComponent as Messages } from "../assets/icons/wyh-paketus/Messages.svg";
import { ReactComponent as NoIncrease } from "../assets/icons/wyh-paketus/NoIncrease.svg";
import { ReactComponent as Percentage } from "../assets/icons/wyh-paketus/Percentage.svg";
import { ReactComponent as Point } from "../assets/icons/wyh-paketus/Point.svg";
import { ReactComponent as Rating } from "../assets/icons/wyh-paketus/Rating.svg";
import { ReactComponent as TakeControl } from "../assets/icons/wyh-paketus/TakeControl.svg";
import { ReactComponent as Touch } from "../assets/icons/wyh-paketus/Touch.svg";
import { ReactComponent as Image } from "../assets/icons/Image.svg";

const iconList = (purpose, { width, height, color }) => {
  switch (purpose) {
    case "logo":
      return <Logo />;
    case "app-store":
      return <AppStore />;

    case "upload":
      return <Image />;

    // Why Paketus
    case "good-one-win":
      return <GoodOneWin />;
    case "messages":
      return <Messages />;
    case "no-increase":
      return <NoIncrease />;
    case "percentage":
      return <Percentage />;
    case "point":
      return <Point />;
    case "rating":
      return <Rating />;
    case "take-control":
      return <TakeControl />;
    case "touch":
      return <Touch />;

    default:
      return null;
  }
};

export default iconList;
