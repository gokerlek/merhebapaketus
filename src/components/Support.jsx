import { Container, Label } from "./index.js";
import Icon from "./Icon.jsx";

const Support = () => {
  return (
    <div className="flex w-full h-fit relative items-end justify-start min-h-[300px] mt-40 phone:mt-20">
      <Icon purpose="shape" />
      <div className="absolute inset-0">
        <Container medium>
          <div className="flex items-end justify-between w-full z-1 min-h-[300px] ">
            <img
              id="why-paketus"
              src="/images/itman.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, 97vw"
              alt="paketus-icon-community"
              srcSet="/images/itman-500.png 500w,
          /images/itman-800.png 800w,"
              className={`w-full max-w-[500px] h-auto other:hidden `}
            />
            <div className="flex flex-col items-end gap-2 other:items-center w-full mb-8">
              <Label className="text-[32px] font-bold text-end mb-8">
                Destek için buradayız
              </Label>
              <div className="flex other:flex-col">
                <Label className="text-xl text-end phone:text-center">
                  Ayrıntılı bilgi için
                </Label>

                <Label className="text-xl font-bold text-end phone:text-center text-neutral-900">
                  0850 305 44 94
                </Label>
              </div>
              <div className="flex other:flex-col">
                <Label className="text-xl text-end phone:text-center">
                  WhatsApp Üye İşyeri Danışma Hattı
                </Label>

                <Label className="text-xl font-bold text-end phone:text-center text-neutral-900">
                  90 531 727 87 82
                </Label>
              </div>

              <Label className="text-neutral-900 text-xl font-bold">
                destekpaketuscom
              </Label>

              <Label className="text-end underline text-sm mt-5 other:text-center">
                Uygulama ve web sitemizi deneyimlemek için kullanıcı adı ve
                şifreniz cep telefonunuza gönderilecektir
              </Label>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Support;
