import './css/locomotiveBase.css';
import './css/main.css';
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: .7
});
