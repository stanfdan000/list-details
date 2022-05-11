import { renderListItem } from './render.js';
import { planets } from './planets.js';


const solar = document.getElementById('solar');
for (let planet of planets) {
    const renderPlanet = renderListItem(planet);
    solar.append(renderPlanet);
}
