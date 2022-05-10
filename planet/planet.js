
import { planets } from '../planets.js';
import { findById } from '../render.js';
const parm = new URLSearchParams(window.location.search);
const planet = findById(parm.get('id'), planets);


const solar = document.getElementById('solar');


//img.src = `../assets/${planets.type}.jpg`;
solar.textContent = planet.name;
