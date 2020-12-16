import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY ||
    "pk_202977d013880e80bf4c7bee293b54c062c768d11453e",
  true
);
