function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateAmount(amount) {
  const amountRegex = /^\d+(\.\d{1,2})?$/;
  return amountRegex.test(amount);
}

function validateIBAN(iban) {
  const ibanRegex = /^[A-Z0-9]{15,34}$/;
  return ibanRegex.test(iban);
}

module.exports = { validateEmail, validateAmount, validateIBAN };
