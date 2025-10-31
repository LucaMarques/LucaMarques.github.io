import flags from './model/flags.js';

const container = document.getElementById("flags");

container.innerHTML = '';

flags.forEach(flag => {
  const div = document.createElement('div');
  div.className = 'flag col-2 my-2 text-center';

  const img = document.createElement('img');
  img.src = `./imgs/flags/${flag.id}.png`;
  img.alt = flag.name;

  const p = document.createElement('p');
  p.textContent = flag.name;

  div.appendChild(img);
  div.appendChild(p);
  container.appendChild(div);
});