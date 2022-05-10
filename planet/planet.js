
import { planets } from '../planets.js';
import { findById } from '../render.js';
const parm = new URLSearchParams(window.location.search);
const planet = findById(parm.get('id'), planets);
console.log(planet);

const solar = document.getElementById('solar');
console.log(planet.type);
//const renderPlanet = renderListItem(planet);
//solar.append(renderPlanet);
const img = document.getElementById('planetImg');
const pText = document.getElementById('planetText');
pText.textContent = planet.says;
img.src = `../assets/${planet.type}.jpg`;
solar.textContent = planet.name;
