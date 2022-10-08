/*
1.  We are creating a function called shapeByPurpose that takes in a purpose as an argument.
2. We are using a switch statement to determine which shape to return based on the purpose.
3. For each case, we are returning an object with the keys being the field names and the values being yup validations.
4. The default case is just returning an object with email and password fields.
*/

import * as yup from "yup";

const shapeByPurpose = (purpose) => {
  switch (purpose) {
    case "search":
      return {
        search: yup.string().min(3, "Search must be at least 3 characters"),
      };

    default:
      return {
        email: yup.string().email().min(3).required(),
        phone: yup.string().min(3).required(),
        tableName: yup.string().min(3).required(),
        name: yup.string().min(3).required(),
        street: yup.string().min(3).required(),
        building: yup.string().min(3).required(),
      };
  }
};

export default shapeByPurpose;
