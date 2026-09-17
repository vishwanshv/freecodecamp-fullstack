function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const firstChar = email[0];
  const lastChar = email[atIndex - 1];

  const maskedPart = "*".repeat(atIndex - 2);

  const domain = email.slice(atIndex);

  return firstChar + maskedPart + lastChar + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));