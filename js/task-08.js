const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", getSubmitForm);

function getSubmitForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email.length === 0 || password.length === 0) {
    alert("You have a blank field");
  } else {
    const userData = { email: `${email}`, password: `${password}` };
    console.log(userData);
  }
  form.reset();
}
