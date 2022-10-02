import { Container, Label, SendUs } from "./index.js";
import Icon from "./Icon.jsx";

const Welcome = () => {
  return (
    <div
      className="w-full h-full
      max-h-[1160px] mediumTablet:max-h-[1900px] tablet:max-h-[1900px] phone:max-h-[1900px]
      bg-cover bg-center bg-background bg-cover bg-no-repeat bg-top    "
    >
      <Container medium>
        <div className="flex items-center justify-center columns-2  py-12 gap-3">
          <div className="flex flex-col w-full h-full items-center justify-center gap-4">
            <Label className="text-white text-[36px] text-center font-bold ">
              Turkiyenin en yeni Yemek Siparişi ve Müşteri Sadakati Uygulaması
              ilk olarak İzmirde
            </Label>

            <img
              className="w-full h-full"
              src="/images/phone/phone.png"
              alt="screenshot of apps front page"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 100vw, (max-width: 991px) 600px, 49vw"
              data-w-id="567fe2ae-ad71-304d-4fcc-50c254d74e9f"
              loading="eager"
              srcSet="
                /images/phone/phone500.png 500w,
                /images/phone/phone800.png 800w,
                /images/phone/phone.png 1221w"
            />

            <div className="flex gap-6">
              <a
                href="https://apps.apple.com/tr/app/paketus/id1459438549?l=tr"
                target={"_blank"}
                rel={"noreferrer, noopener"}
              >
                <Icon purpose="app-store" width={120} />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.paketus&hl=tr"
                target={"_blank"}
                rel={"noreferrer, noopener"}
              >
                <Icon purpose="play-store" width={120} />
              </a>
            </div>
          </div>

          <SendUs />
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
