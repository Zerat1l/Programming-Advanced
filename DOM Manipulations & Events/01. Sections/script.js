function create(words) {
   const perent = document.getElementById('content');

   words.forEach(element => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = element;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', (event) => {
         // event.target.querySelector('p').style.display = 'block';
         p.style.display = 'block';  //works too

      })
      perent.appendChild(div)
   });
}