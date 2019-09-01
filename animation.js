// this is to get the total length of each letter

const logo = document.querySelectorAll('#logo path');
for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
