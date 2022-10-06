import { Container, Icon, Label } from "./index.js";

const Footer = () => {
  return (
    <div className="min-h-[455px] bg-footer ">
      <Container medium>
        <div className=" flex justify-between w-full h-full py-10 px-10 min-h-[160px] ">
          <div className="">
            <Icon purpose="logo-white" width={150} />
          </div>

          <div className="flex w-full justify-between max-w-[800px] gap-8 ">
            <div className="w-full border-r-[1px] border-[#5a5a5a]">
              <Label className="text-white text-sm font-light  mb-2">
                Paketus Elektronik İletişim Gıda Lojistik AŞ
              </Label>

              <Label className="text-white text-sm font-light ">
                Vergi No 719 045 6404
              </Label>

              <Label className="text-white text-sm font-light ">
                Mersis No 07190455640400001
              </Label>

              <Label className="text-white text-sm font-light ">
                Anadolu Caddesi No 543 12 Karşıyaka İzmir
              </Label>
            </div>

            <div className="max-w-[250px]  w-full ">
              <Label className="text-white text-sm font-light  mb-2">
                Akıllı telefonun var mı
              </Label>

              <Label className="text-white text-sm font-light ">
                Paketus akıllı telefonunda her zaman yanında
              </Label>
              <div className="flex gap-4 items-center mt-4">
                <a
                  href="https://apps.apple.com/tr/app/paketus/id1459438549?l=tr"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    src="/images/appleWhite.png"
                    width="130"
                    alt="app store button"
                    className="image-31"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.paketus&amp;hl=tr"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    src="/images/googleWhite.png"
                    width="130"
                    alt="Play store button"
                    className="image-13"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="shadow-inner w-full h-60 bg-white">
        <Container></Container>
      </div>
    </div>
  );
};

export default Footer;
