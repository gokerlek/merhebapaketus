/*
1. We are using the useFormContext hook to get access to the methods object.
2. We are destructuring the methods object to get access to the register method, which we will use to register our input fields.
3. We are destructuring the inputPropsByPurpose object to get access to the inputProps object that corresponds with the purpose prop that is passed into our Input component.
4. We are destructuring the inputProps object to get access to its name property, which we will use as an argument for our register method.
5. We are destructuring the return value of our register method and assigning it to a ref variable, which we will pass into our input element as a ref prop.
*/

import { useController } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import useInputValue from "./useInputValue";
import useInputHelpers from "./useInputClassNames";
import { Label } from "../index.js";

const Input = ({ purpose, control, mask }) => {
  const { name, title, placeholder, type, disabled } = useInputValue(purpose);

  console.log(name, title, placeholder, type, disabled, purpose);
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: purpose,
  });

  const {
    inputClassName,
    inputTileClassName,
    inputContainerClassName,
    titleConditions,
  } = useInputHelpers({
    purpose,
    type,
    error,
    title,
  });

  const Title = () =>
    titleConditions && <Label className={inputTileClassName}>{title}</Label>;

  return (
    <div className={inputContainerClassName}>
      <Title />

      {!mask && (
        <input
          type={type}
          placeholder={placeholder}
          className={inputClassName}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}

      {mask && (
        <PatternFormat
          placeholder={placeholder}
          className={inputClassName}
          value={value}
          onChange={onChange}
          disabled={disabled}
          format={mask}
          mask="_"
        />
      )}
    </div>
  );
};

export default Input;
