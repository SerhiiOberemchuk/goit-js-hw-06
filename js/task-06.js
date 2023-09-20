const formInput = document.querySelector("#validation-input");
const dataLength = Number(formInput.getAttribute("data-length"));

formInput.addEventListener("blur", addClass);
function addClass(ivent) {
  if (ivent.currentTarget.value.length === dataLength) {
    formInput.classList.add("valid");
    formInput.classList.remove("invalid");
  } else {
    formInput.classList.add("invalid");
    formInput.classList.remove("valid");
  }
}
