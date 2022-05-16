const vets = document.querySelectorAll('.vet');
vets.forEach(vet => {
    const vetText = vet.textContent.trim().length;
    if(vetText >= 16) {
        const vetSlice = vet.textContent.trim();
        const newVet = vetSlice.substring(0, 16) + '...';
        vet.textContent = newVet;
    }
});

const views = document.querySelectorAll('.view');
views.forEach(view => {
    // onmouseover
    view.addEventListener('mouseover', (e) => {
        console.log('it works');
    });
});