import { validationMessages } from "./constant";

export const validateEmail = (email) => {
  // Check if the email is empty
  if (!email) {
    return validationMessages.emailReq;
  }

  // Email validation regex (basic; consider more robust options or libraries)
  const basicEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!basicEmailRegex.test(email)) {
    return validationMessages.validEmail;
  }

  // Check for repeated characters (three or more times in a row)
  const repeatedCharRegex = /(.)\1{2,}/;
  if (repeatedCharRegex.test(email)) {
    return validationMessages.noRepeatedChars;
  }

  // If all validations pass, return an empty string indicating no error
  return "";
};

export const isValid = (errors) => {
  let keys = Object.keys(errors);
  let countError = keys.reduce(
    (acc, curr) => (errors[curr] ? acc + 1 : acc),
    0
  );
  return countError === 0;
};

export const validateName = (name) => {
  if (!name) {
    return validationMessages.name; // assuming this message is for 'Name is required'
  }

  if (!/^[a-zA-Z\s]*$/.test(name)) {
    return validationMessages.allowAlphabets; // assuming this message is for 'Use letters only'
  }

  if (name.length < 5 || name.length > 50) {
    return `Name must be between 5 and 50 characters, including spaces.`;
  }

  return "";
};

export const validateQueryMessage = (val) => {
  const errMsg = !val ? validationMessages.reqQueryMessage : "";
  return errMsg;
};

export const validateRequirePass = (val) => {
  const errMsg = !val ? `${validationMessages.passwReq}` : "";
  return errMsg;
};

export const validateMobile = (Mobile) => {
  console.log(/\D/g.test(Mobile));
  const errMsg = !Mobile
    ? validationMessages.phoneReq
    : // ? validationMessages.phoneReq
    /\D/g.test(Mobile)
    ? // : !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(Mobile)
      validationMessages.validMobile
    : Mobile.length < 10 || Mobile.length > 12
    ? validationMessages.validMobile
    : "";
  return errMsg;
};

export const validateOTP = (otp) => {
  console.log(otp);
  const errMsg = !otp
    ? validationMessages.otpEnter
    : otp && otp.length < 6
    ? validationMessages.validOtp
    : "";
  return errMsg;
};

export const validateRequire = (val, text = "") => {
  const errMsg = !val ? `${validationMessages.require}` : "";
  return errMsg;
};

export const validateTermAndPrivacyRequire = (val) => {
  const errMsg = !val ? `${validationMessages.reqTermAndPrivacy}` : "";
  return errMsg;
};
