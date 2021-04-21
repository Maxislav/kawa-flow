import './style/main.less';

import { Greeter } from './greeter';

const g = new Greeter('Juri');
g.greet();
const dd = document.querySelector('.container .dd>div:first-child');
const hh = document.querySelector('.container .hh>div:first-child');
const mm = document.querySelector('.container .mm>div:first-child');
const ss = document.querySelector('.container .ss>div:first-child');
const ms = document.querySelector('.container .ms>div:first-child');
const ddLine: HTMLElement = document.querySelector('.container .line-dd');
const hhLine: HTMLElement = document.querySelector('.container .line-hh');
const mmLine: HTMLElement = document.querySelector('.container .line-mm');
const ssLine: HTMLElement = document.querySelector('.container .line-ss');
const msLine: HTMLElement = document.querySelector('.container .line-ms');


const dateEnd = new Date(2021, 6, 8).getTime();
setInterval(() => {
    const dif = (dateEnd - new Date().getTime());
    const timeLeft = secondsToDhms(dif);
    dd.innerHTML = timeLeft.dd.toString();
    hh.innerHTML = timeLeft.hh.toString();

    ddLine.style.width = Math.round(timeLeft.hh * 100 / 24) + '%';

    mm.innerHTML = timeLeft.mm.toString();

    hhLine.style.width = Math.round(timeLeft.mm * 100 / 60) + '%';

    ss.innerHTML = timeLeft.ss.toString();

    mmLine.style.width = ((timeLeft.ss + timeLeft.ms / 1000) * 100 / 60).toFixed(1) + '%';
    ms.innerHTML = timeLeft.ms.toString();
    ssLine.style.width = (timeLeft.ms * 100 / 1000).toFixed(1) + '%';

    msLine.style.opacity = (timeLeft.ms % 2 ? 0 : 1).toString();
}, 50);

function secondsToDhms(msrc: any) {
    msrc = Number(msrc);
    const dd = Math.floor(msrc / 1000 / (3600 * 24));
    const hh = Math.floor(msrc / 1000 % (3600 * 24) / 3600);
    const mm = Math.floor(msrc / 1000 % 3600 / 60);
    const ss = Math.floor(msrc / 1000 % 60);
    const ms = Math.floor(msrc % 1000);

    return {
        dd,
        hh,
        mm,
        ss,
        ms
    };
}
