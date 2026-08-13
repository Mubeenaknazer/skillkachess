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