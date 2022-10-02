import { Label } from "./index.js";
import { useForm } from "react-hook-form";

const SendUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="h-[1050px] w-full">
      <div className="h-fit w-full bg-white rounded-2xl p-10 gap-2">
        <Label className="text-[28px] font-bold text-secondary text-center  w-full h-fit mx-auto">
          Hemen Başla
        </Label>

        <div className="send-us__container">
          <div className="send-us__container__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Tabela İsmi"
                {...register("Tabela İsmi", { min: 3 })}
              />
              <input
                type="email"
                placeholder="E-Posta"
                {...register("E-Posta", { required: true })}
              />
              <input
                type="text"
                placeholder="Yetkili Ad - Soyad"
                {...register("Yetkili Ad - Soyad", { required: true, min: 3 })}
              />
              <input
                type="tel"
                placeholder="Yetkili Cep Telefonu"
                {...register("Yetkili Cep Telefonu", { required: true })}
              />
              <input
                type="text"
                placeholder="sokak no"
                {...register("sokak no", {})}
              />
              <input
                type="text"
                placeholder="bina no"
                {...register("bina no", {})}
              />

              <input type="submit" />
            </form>
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
