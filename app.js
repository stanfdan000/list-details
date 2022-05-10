import { renderListItem } from './render.js';
import { planets } from './planets.js';

// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const solar = document.getElementById('solar');
for (let planet of planets) {
    const renderPlanet = renderListItem(planet);
    solar.append(renderPlanet);
}
