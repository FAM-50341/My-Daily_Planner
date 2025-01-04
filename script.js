document.addEventListener('DOMContentLoaded', () => {
    const glassesContainer = document.querySelector('.glasses');
    const emptyGlassSrc = "/empty.png";
    const filledGlassSrc = "/filledupglass.png";

    // Create 8 glasses dynamically
    for (let i = 0; i < 8; i++) {
        const glass = document.createElement('img');
        glass.src = emptyGlassSrc;
        glass.alt = 'Empty Glass';
        glass.dataset.index = i;

        // Add click event listener to each glass
        glass.addEventListener('click', () => {
            if (glass.src.includes(emptyGlassSrc)) {
                // Fill the clicked glass
                glass.src = filledGlassSrc;

                // Fill all previous glasses
                let prevGlass = glass.previousElementSibling;
                while (prevGlass) {
                    prevGlass.src = filledGlassSrc;
                    prevGlass = prevGlass.previousElementSibling;
                }
            } else {
                // Empty the clicked glass
                glass.src = emptyGlassSrc;

                // Empty all subsequent glasses
                let nextGlass = glass.nextElementSibling;
                while (nextGlass) {
                    nextGlass.src = emptyGlassSrc;
                    nextGlass = nextGlass.nextElementSibling;
                }
            }
        });

        // Append the glass to the container
        glassesContainer.appendChild(glass);
    }
});
