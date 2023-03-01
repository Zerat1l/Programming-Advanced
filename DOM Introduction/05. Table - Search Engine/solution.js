function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      const userInput = document.getElementById('searchField');
      const line = document.querySelectorAll('tbody tr');
      

      Array.from(line).forEach(el => {
         if(el.textContent.toLowerCase().includes(userInput.value.toLowerCase().trim())) {
            el.classList.add('select');
            
         } else {
            el.classList.remove('select');
         }
      })
      userInput.value = '';   
   }
}