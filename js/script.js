let cars = [];

async function loadCars() {
  const res = await fetch('data/cars.json');
  cars = await res.json();
  displayCars(cars);
}

function displayCars(data) {
  const container = document.getElementById('carContainer');
  container.innerHTML = '';

  data.forEach(car => {
    container.innerHTML += `
      <div class="card">
        <img src="${car.image}" />
        <div class="card-body">
          <h3>${car.name}</h3>
          <p>${car.price}</p>
          <button onclick="buyCar('${car.name}')">Buy Now</button>
        </div>
      </div>
    `;
  });
}

function filterCars() {
  const search = document.getElementById('search').value.toLowerCase();
  const filtered = cars.filter(c => c.name.toLowerCase().includes(search));
  displayCars(filtered);
}

function buyCar(name) {
  alert(`You selected ${name}`);
}

function scrollToCars() {
  document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
}

function submitForm(e) {
  e.preventDefault();
  alert('Message sent successfully');
}

loadCars();
