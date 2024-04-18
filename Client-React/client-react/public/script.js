const uploadProceedBtn = document.getElementById("upload_nextstep1");
const detailsStep = document.getElementById("detailsstep");
const uploadStep = document.getElementById("uploadstep");
const previousStepBtn = document.getElementById("upload_prevstep");

function uploadProceed() {
  uploadStep.setAttribute("hidden", true);
  detailsStep.removeAttribute("hidden");
}

function uploadPreviousStep() {
  uploadStep.removeAttribute("hidden");
  detailsStep.setAttribute("hidden", true);
}

uploadProceedBtn.onclick = uploadProceed;

previousStepBtn.onclick = uploadPreviousStep;
