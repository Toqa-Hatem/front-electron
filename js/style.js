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

function data() {
    return {
        showModal: false,
        firstCheckbox: false,
        showAdditionalCheckboxes: false,
    };
}
