/**
 * @summary  useInputValue hook is used to get the input name label and placeholder from the inputValues object.
 * @param {string} purpose - purpose of the input. It is used to match the "name", "label" and "purpose" props.
 * @return {object} - returns the input name, label and placeholder.
 */

const useInputValue = (purpose) => {
  const inputValues = {
    tableName: {
      name: purpose,
      title: "Tabela İsmi",
      placeholder: "Tabela İsmi Giriniz",
      type: "text",
    },

    name: {
      name: purpose,
      title: "Yetkili Ad Soyad",
      placeholder: "Yetkili Ad Soyad Giriniz",
      type: "text",
    },

    email: {
      name: purpose,
      title: "E Posta",
      placeholder: "örnek@gmail.com",
      type: "email",
    },

    phone: {
      name: purpose,
      title: "Yetkili Cep Telefonu",
      placeholder: "534 123 45 67",
      type: "text",
    },
    street: {
      name: purpose,
      placeholder: "Sokak Numarası / Cadde Adı",
      type: "text",
    },
    building: {
      name: purpose,
      placeholder: "Bina Numarası",
      type: "text",
    },
  };

  const { name, title, placeholder, type } = inputValues[purpose];

  return { name, title, placeholder, type };
};

export default useInputValue;
