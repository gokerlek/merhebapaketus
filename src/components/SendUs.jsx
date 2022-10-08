import { Button, Label } from "./index.js";
import { useController, useForm } from "react-hook-form";
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
    resolver: yupResolver(yup.object().shape(shapeByPurpose())),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      tableName: "",
      street: "",
      building: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors, isValid);

  const ImageUpload = ({ control, onClick, purpose, size = 30 }) => {
    const {
      field: { value, onChange },
    } = useController({
      control,
      name: purpose,
    });

    return (
      <>
        <div
          onClick={onClick}
          className="flex items-center text-gray-400 hover:cursor-pointer hover:text-gray-300   justify-center w-full h-20 border-gray-300 border-2 border-dashed "
        >
          <Icon purpose="upload" width={size} />
        </div>

        <input value={value} onChange={onChange} className="hidden" />
      </>
    );
  };

  return (
    <div className="h-[1050px] w-full">
      <div className="h-fit w-full bg-white rounded-2xl p-10 other:p-4 gap-2">
        <Label className="text-[28px] font-bold text-secondary text-center  w-full h-fit mx-auto mb-5">
          Hemen Başla
        </Label>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 phone:flex-col">
            <Input control={control} purpose="tableName" />
            <Input control={control} purpose="email" />
          </div>

          <div className="flex gap-2 phone:flex-col">
            <Input control={control} purpose="name" />
            <Input control={control} purpose="phone" mask="### ### ## ##" />
          </div>

          <Input control={control} purpose="street" />

          <Input control={control} purpose="building" />

          <div className="flex gap-2 ">
            <ImageUpload
              purpose={"logo"}
              onClick={() => {}}
              control={control}
              size={50}
            />
            <ImageUpload
              purpose={"menu"}
              onClick={() => {}}
              control={control}
              size={50}
            />
          </div>

          <Label className="font-semibold text-neutral-700">
            Seçilen Menü Fotoğrafları
          </Label>

          <div className="flex items-center justify-between gap-2">
            <ImageUpload
              purpose={"menu1"}
              onClick={() => {}}
              control={control}
            />

            <ImageUpload
              purpose={"menu2"}
              onClick={() => {}}
              control={control}
            />
            <ImageUpload
              purpose={"menu3"}
              onClick={() => {}}
              control={control}
            />
            <ImageUpload
              purpose={"menu4"}
              onClick={() => {}}
              control={control}
            />
          </div>

          <div className="text-xs text-gray-400 max-w-[95%]">
            Paketus Üye İşyeri Sözleşmesi e-posta adresinize gönderilecektir.
            Cep telefonu numaranızı onayladıktan sonraki tüm işlemlerinizde
            gerekli bilgilendirme ve onayları bu numara üzerinden
            gerçekleştireceğiz. Bir adres üzerinde en fazla iki
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

      <Label className="text-sm text-center font-bold text-white mt-4">
        Formu doldur sözleşmeyi kargola işlemlerin hemen başlasın
      </Label>
    </div>
  );
};

export default SendUs;
