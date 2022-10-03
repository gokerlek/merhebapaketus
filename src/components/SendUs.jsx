import { Button, Label } from "./index.js";
import { useForm } from "react-hook-form";
import Input from "./Inputs/Input.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "./Icon.jsx";
import shapeByPurpose from "./Inputs/shapeByPurpose.jsx";

const SendUs = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors, isValid);

  return (
    <div className="h-[1050px] w-full">
      <div className="h-fit w-full bg-white rounded-2xl p-10 gap-2">
        <Label className="text-[28px] font-bold text-secondary text-center  w-full h-fit mx-auto">
          Hemen Başla
        </Label>

        <div className="send-us__container">
          <div className="send-us__container__form">
            <div
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-2">
                <Input control={control} purpose="tableName" />
                <Input control={control} purpose="email" />
              </div>

              <div className="flex gap-2">
                <Input control={control} purpose="name" />
                <Input control={control} purpose="phone" mask="### ### ## ##" />
              </div>

              <Input control={control} purpose="street" />

              <Input control={control} purpose="building" />

              <Label className="font-semibold text-neutral-700">
                Seçilen Menü Fotoğrafları
              </Label>

              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-24 h-20 border-gray-300 border-2 border-dashed ">
                  <Icon purpose="upload" />
                </div>
                <div className="flex items-center justify-center w-24 h-20 border-gray-300 border-2 border-dashed ">
                  <Icon purpose="upload" />
                </div>
                <div className="flex items-center justify-center w-24 h-20 border-gray-300 border-2 border-dashed ">
                  <Icon purpose="upload" />
                </div>
                <div className="flex items-center justify-center w-24 h-20 border-gray-300 border-2 border-dashed ">
                  <Icon purpose="upload" />
                </div>
              </div>

              <div className="text-xs text-gray-400 max-w-[95%]">
                Paketus Üye İşyeri Sözleşmesi e-posta adresinize
                gönderilecektir. Cep telefonu numaranızı onayladıktan sonraki
                tüm işlemlerinizde gerekli bilgilendirme ve onayları bu numara
                üzerinden gerçekleştireceğiz. Bir adres üzerinde en fazla iki
                <strong>"Tabela İsmi"</strong> için başvuru yapabilirsiniz.
              </div>

              <Button
                purpose="orange"
                onClick={handleSubmit(onSubmit)}
                disabled={!isValid}
              >
                Gonder
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Label className="text-sm text-center font-bold text-white mt-4">
        Formu doldur sözleşmeyi kargola işlemlerin hemen başlasın
      </Label>
    </div>
  );
};

export default SendUs;
