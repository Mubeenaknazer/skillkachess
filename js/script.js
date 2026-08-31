const sliders = document.querySelectorAll(".feature-slider");

console.log("Sliders found:", sliders.length);


sliders.forEach(slider => {

    const images = JSON.parse(slider.dataset.images);

    let index = 0;


    setInterval(() => {

        index++;

        if (index >= images.length) {
            index = 0;
        }

        slider.src = images[index];

        console.log("Changing image:", images[index]);

    }, 3000);

});
function showClassMessage(classType) {

    if (classType === "Online") {
        alert("Thank you for your interest in our Online Chess Classes!");
    }

    if (classType === "Offline") {
        alert("Thank you for your interest in our Offline Chess Classes!");
    }

}