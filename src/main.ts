const text = document.querySelector(".sec-text");
if (text) {
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Ahmed Mansour";
    }, 0);
    setTimeout(() => {
      text.textContent = "Frontend Developer";
    }, 3000);
    setTimeout(() => {
      text.textContent = "Freelancer";
    }, 6000); //1s = 1000 milliseconds
  }
  textLoad();
  setInterval(textLoad, 9000);
}