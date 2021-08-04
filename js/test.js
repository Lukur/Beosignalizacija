const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


const modalBtn2 = document.getElementById('modal-btn2');
const modal2 = document.getElementById('modal2')
const closeBtn2 = document.getElementById('close-btn2')

modalBtn2.addEventListener("click", function () {
  modal2.classList.add("open-modal");
});
closeBtn2.addEventListener("click", function () {
  modal2.classList.remove("open-modal");
});
