import * as Yup from "yup";

const loginValidation = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default loginValidation;
