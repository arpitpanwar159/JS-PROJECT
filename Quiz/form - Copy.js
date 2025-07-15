const nextBtn = document.querySelector(".next-btn");
const formSteps = document.querySelectorAll(".form-step");
const sidebarSteps = document.querySelectorAll(".sidebar .step");

let currentStep = 0;

nextBtn.addEventListener("click", () => {
  if (currentStep < formSteps.length - 1) {
    formSteps[currentStep].classList.remove("active");
    sidebarSteps[currentStep].classList.remove("active");
    currentStep++;
    formSteps[currentStep].classList.add("active");
    sidebarSteps[currentStep].classList.add("active");
  }
});
