
// get form and input elements
const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

// helpers to show and clear error messages
function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  input.classList.add("invalid");
}

function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
  input.classList.remove("invalid");
}

// field validation functions
function validateEmail() {
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    return false;
  }
  if (!email.value.includes("@")) {
    showError(email, "Enter a valid email");
    return false;
  }
  clearError(email);
  return true;
}

function validateCountry() {
  if (country.value.trim() === "") {
    showError(country, "Country is required");
    return false;
  }
  clearError(country);
  return true;
}

function validatePostal() {
    if (postal.value.trim() === "") {
      showError(postal, "Postal code is required");
      return false;
    }
    if (postal.value.length < 4 || postal.value.length > 10) {
        showError(postal, "Postal code must be between 4 and 10 characters");
        return false;
    }
    clearError(postal);
    return true;
  }

function validatePassword() {
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    return false;
  }
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    return false;
  } 
    clearError(password);
    return true;
}

function validatePasswordConfirm() {
  if (passwordConfirm.value.trim() === "") {
    showError(passwordConfirm, "Please confirm your password");
    return false;
  }
  if (passwordConfirm.value !== password.value) {
    showError(passwordConfirm, "Passwords do not match");
    return false;
  }
  clearError(passwordConfirm);
  return true;
}

// form submit event listener, validte on input and blur (live validation)
email.addEventListener("input", validateEmail);
email.addEventListener("blur", validateEmail);

country.addEventListener("input", validateCountry);
postal.addEventListener("input", validatePostal);

password.addEventListener("input", validatePassword);
passwordConfirm.addEventListener("input", validatePasswordConfirm);

// on form submit, validate all fields
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateEmail() &
    validateCountry() &
    validatePostal() &
    validatePassword() &
    validatePasswordConfirm();

  if (isValid) {
    alert ("Form submitted successfully!");
    form.reset(); 
  } else {
    alert ("Please fix the errors in the form.");
  }
});