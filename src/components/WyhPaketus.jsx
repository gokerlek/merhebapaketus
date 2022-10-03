import { Container, Label } from "./index.js";
import wyhPaketus from "../data/wyhPaketus.jsx";
import clsx from "clsx";
import Icon from "./Icon.jsx";

const WhyPaketus = () => {
  return (
    <Container medium>
      <div className="flex flex-col w-full gap-4 items-center justify-center ">
        <Label className="text-[38px] font-bold text-secondary text-center max-w-[510px] w-full h-fit mx-auto">
          Neden Paketus
        </Label>

        {wyhPaketus.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex max-w-[770px] min-h-[200px] h-fit items-center justify-between  w-full gap-4 bg-body px-[50px] py-8 rounded-lg",
                "phone:flex-col",
                {
                  "flex-row-reverse": index % 2 !== 0,
                }
              )}
            >
              <div className="min-w-[100px] w-[100px] min-h-[100px] flex items-center justify-center bg-primary rounded-full">
                <Icon purpose={item.icon} />
              </div>

              <div className="max-w-[510px]">
                <Label className="text-2xl font-semibold mb-4 phone:text-center">
                  {item.title}
                </Label>

                <Label className="phone:text-center  ">{item.info}</Label>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default WhyPaketus;
