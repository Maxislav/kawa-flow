import './style/main.less';
import './random-background';

import { Greeter } from './greeter';

const g = new Greeter('Juri');
g.greet();
const ww = document.querySelector('.container .ww>div:first-child');
const dd = document.querySelector('.container .dd>div:first-child');
const hh = document.querySelector('.container .hh>div:first-child');
const mm = document.querySelector('.container .mm>div:first-child');
const ss = document.querySelector('.container .ss>div:first-child');
const ms = document.querySelector('.container .ms>div:first-child');
const wwLine: HTMLElement = document.querySelector('.container .line-ww');
const ddLine: HTMLElement = document.querySelector('.container .line-dd');
const hhLine: HTMLElement = document.querySelector('.container .line-hh');
const mmLine: HTMLElement = document.querySelector('.container .line-mm');
const ssLine: HTMLElement = document.querySelector('.container .line-ss');
const msLine: HTMLElement = document.querySelector('.container .line-ms');

const dateEnd = new Date('2022-03-01T00:00:00').getTime();

const calc = () => {
    const dif: number = (dateEnd - new Date().getTime());
    const timeLeft = secondsToDhms(dif);

    ww.innerHTML = timeLeft.ww.toString();
    wwLine.style.width = dif / (3600 * 24 * 7 * 1000) % 1 * 100 + '%';

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
};

const recursion = () => {
    calc();
    window.requestAnimationFrame(recursion);
};
recursion();

function secondsToDhms(msrc: number) {
    msrc = Number(msrc);
    const ww = Math.floor(msrc / 1000 / (3600 * 24 * 7));
    const dd = Math.floor(msrc / 1000 / (3600 * 24));
    const hh = Math.floor(msrc / 1000 % (3600 * 24) / 3600);
    const mm = Math.floor(msrc / 1000 % 3600 / 60);
    const ss = Math.floor(msrc / 1000 % 60);
    const ms = Math.floor(msrc % 1000);

    return {
        ww,
        dd,
        hh,
        mm,
        ss,
        ms
    };
}
