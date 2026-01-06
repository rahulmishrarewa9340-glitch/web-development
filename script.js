// script.js
const pets = [
    { name: "Buddy", type: "Dog", age: "2 years", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500" },
    { name: "Luna", type: "Cat", age: "1 year", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500" },
    { name: "Max", type: "Dog", age: "4 years", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" },
    { name: "Oliver", type: "Cat", age: "3 years", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500" }
];

function displayPets(filteredPets) {
    const grid = document.getElementById('pet-grid');
    grid.innerHTML = ""; // Clear current list

    filteredPets.forEach(pet => {
        const card = `
            <div class="pet-card">
                <img src="${pet.img}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>${pet.type} • ${pet.age}</p>
                <button onclick="alert('Thank you for your interest in ${pet.name}!')">Adopt Me</button>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function filterPets(type) {
    if (type === 'all') {
        displayPets(pets);
    } else {
        const filtered = pets.filter(pet => pet.type === type);
        displayPets(filtered);
    }
}

// Initial load
displayPets(pets);