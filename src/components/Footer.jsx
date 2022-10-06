import { Container, Icon, Label } from "./index.js";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/all.js";

const Footer = () => {
  return (
    <div className="min-h-[455px] bg-footer ">
      <Container medium>
        <div className=" flex justify-between w-full h-full py-10 px-10 min-h-[160px] ">
          <div className="">
            <Icon purpose="logo-white" width={150} />
          </div>

          <div className="flex w-full justify-between max-w-[800px] gap-8 ">
            <div className="w-full border-r-[1px] border-gray-600">
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
                    className="hover:scale-105 transform transition duration-300 ease-in-out"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.paketus&amp;hl=tr"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    src="/images/googleWhite.png"
                    width="130"
                    alt="Play store button"
                    className="hover:scale-105 transform transition duration-300 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container medium>
        <div className="border-t border-gray-600 py-8 w-full flex">
          <div className="flex flex-1 justify-start gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-white text-sm font-light hover:transform hover:scale-105 cursor-pointer transform transition duration-300 ease-in-out">
                ParaPuan Nedir?
              </div>

              <div className="text-white text-sm font-light hover:transform hover:scale-105 cursor-pointer transform transition duration-300 ease-in-out ">
                Restoran Puan Sistemi
              </div>

              <div className="text-white text-sm font-light hover:transform hover:scale-105 cursor-pointer transform transition duration-300 ease-in-out">
                Restoranınız mı var?
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-white text-sm font-light hover:transform hover:scale-105 cursor-pointer transform transition duration-300 ease-in-out">
                Kullanıcı Sözleşmesi
              </div>

              <div className="text-white text-sm font-light hover:transform hover:scale-105 cursor-pointer transform transition duration-300 ease-in-out">
                Gizlilik Politikası
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-6 ">
            <div className="flex flex-col gap-2">
              <div className="text-white text-sm">Bizi Takip Et!</div>

              <div className="text-white text-sm ">
                Kampanya ve yeniliklerden haberdar ol.
              </div>

              <div className="flex gap-6 my-4">
                <a className="w-8 text-white hover:text-secondary cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out">
                  <SiFacebook size="100%" />
                </a>

                <a className=" w-8 text-white hover:text-secondary cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out ">
                  <SiInstagram size="100%" />
                </a>

                <a className=" w-8 text-white hover:text-secondary cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out ">
                  <SiTwitter size="100%" />
                </a>
              </div>
            </div>

            <div className="min-w-[80px] min-h-[80px] h-full flex items-end">
              <img
                className="min-w-[80px] min-h-[80px]"
                width={80}
                height={80}
                src={"/images/sertifika.png"}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
