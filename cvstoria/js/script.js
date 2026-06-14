const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (carouselContainer && prevBtn && nextBtn) {

    let items = [...document.querySelectorAll(".carousel-item")];

    const firstClone = items[0].cloneNode(true);
    const secondClone = items[1].cloneNode(true);
    
    const lastClone = items[items.length - 1].cloneNode(true);
    const secondLastClone = items[items.length - 2].cloneNode(true);

    carouselContainer.appendChild(firstClone);
    carouselContainer.appendChild(secondClone);
    carouselContainer.insertBefore(secondLastClone, items[0]);
    carouselContainer.insertBefore(lastClone, items[0]);

    items = [...document.querySelectorAll(".carousel-item")];

    let currentIndex = 2;
    let cooldown = false;

    carouselContainer.scrollLeft = currentIndex * 690;

    nextBtn.addEventListener("click", () => {
        if (cooldown) return;
        
        cooldown = true;
        currentIndex++;

        items[currentIndex].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });

        if (currentIndex === items.length - 2) {
            setTimeout(() => {
                currentIndex = 2;

                items[currentIndex].scrollIntoView({
                    behavior: "instant",
                    inline: "center",
                    block: "nearest"
                });
            }, 500);
        }

        setTimeout(() => {
            cooldown = false;
        }, 500);
    });

    prevBtn.addEventListener("click", () => {
        if (cooldown) return;
        
        cooldown = true;
        currentIndex--;

        items[currentIndex].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });

        if (currentIndex === 1) {
            setTimeout(() => {
                currentIndex = items.length - 3;

                items[currentIndex].scrollIntoView({
                    behavior: "instant",
                    inline: "center",
                    block: "nearest"
                });
            }, 500);
        }

        setTimeout(() => {
            cooldown = false;
        }, 500);
    });
}
