const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let i = 1;

setInterval(() => {
    const el1: HTMLImageElement = document.querySelector('.main-image');
    const el2: HTMLImageElement = document.querySelector('.main-image-fade');
    let ni = 0;

    do {
        ni = getRandomInt(1, 7);
    }while (i === ni)
    i = ni;
    //  const i = getRandomInt(1, 7);
    el2.src = `assets/img/fade-in-out/${i}.jpg`;
    el2.style.opacity = '1';

    el1.style.opacity = '0';

    setTimeout(() => {
        el1.src = el2.src;
        el1.style.opacity = '1';


        setTimeout(() => {
            el2.style.opacity = '0';
        }, 2000);
    }, 1500);

}, 10000);
