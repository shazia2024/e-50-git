function displayEvenNumbers() {
    const evenNumbersContainer = document.getElementById("evenNumbers");
    evenNumbersContainer.innerHTML = ""; // Clear previous content

    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            evenNumbersContainer.innerHTML += i + " ";
        }
    }
}
