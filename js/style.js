// for radio btns with inputs 
function toggleInput(type) {
  const barcodeInput = document.getElementById('barcodeInput');
  const serialInput = document.getElementById('serialInput');
  // Hide both inputs initially
  barcodeInput.classList.add('hidden');
  serialInput.classList.add('hidden');


  // Show the selected input based on the radio button
  if (type === 'barcode') {
    barcodeInput.classList.remove('hidden');

  } else if (type === 'serial') {
    serialInput.classList.remove('hidden');
  }

}
// function toggle(type) {
//   const again = document.getElementById('again');
//   const telling = document.getElementById('telling');

//   // Hide both inputs initially
//   again.classList.add('hidden');
//   telling.classList.add('hidden');

//   // Show the selected input based on the radio button
//   if (type === 'again') {
//     again.classList.remove('hidden');

//   } else if (type === 'telling') {
//     telling.classList.remove('hidden');
//   }

// }
// ------
function data() {
  return {
    showModal: false,
    firstCheckbox: false,
    showAdditionalCheckboxes: false,
  };
}

function showContent(filePath) {
  const contentDisplay = document.getElementById('contentDisplay');
  contentDisplay.innerHTML = `<iframe src="${filePath}" width="100%" height="400px"></iframe>`;
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('printButton').style.display = 'block';
}

function showImage(imagePath) {
  const contentDisplay = document.getElementById('contentDisplay');
  contentDisplay.innerHTML = `<img src="${imagePath}" alt="Image" width="100%" />`;
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('printButton').style.display = 'none'; // Hide print button for images
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
// for show files 
function printContent() {
  const content = document.getElementById('contentDisplay').innerHTML;
  const printWindow = window.open('', '', 'height=600,width=1200');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}
// modal code
// Get modal elements
const modal = document.getElementById("exampleModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when close buttons are clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
closeModalFooterBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
