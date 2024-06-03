export const isValidName = ({ name }: { name: string }): boolean => {
  return name.length > 0 && name.length <= 15;
};

export const isValidUserName = ({
  username,
}: {
  username: string;
}): boolean => {
  return (
    username.length > 0 &&
    username.length <= 15 &&
    !(username.indexOf(" ") >= 0)
  );
};

export const isValidEmail = ({ email }: { email: string }): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/*
    Should contain atleast one digit, lowercase, uppercase, special character & atleast 8 characters long
*/
export const isValidPassword = ({
  password,
}: {
  password: string;
}): boolean => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
  return passwordRegex.test(password);
};

export const isValidPhoneNumber = ({
  phoneNumber,
}: {
  phoneNumber: string;
}): boolean => {
  const phoneNumberPattern = /^\d{10}$/;
  return phoneNumberPattern.test(phoneNumber);
};
