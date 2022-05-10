export function renderListItem(planets) {
    const div = document.createElement('div');

    const a = document.createElement('a');
    a.href = `./planet/?id=${planets.id}`;
    a.textContent = `More Info`;
    div.classList.add('planets');
    

    const img = document.createElement('img');
    img.src = `./assets/${planets.type}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = planets.name;
    nameSpan.classList.add('name');
   
    

    
    div.append(img, nameSpan, a,);
    return div;
}

export function findById(id, data) {
    return data.find((item) => item.id === id);
}
