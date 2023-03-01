function search() {
   const list = Array.from(document.querySelectorAll('#towns li'));
   const result = document.querySelector('#result');
   const searchInput = document.querySelector('#searchText');

   let counter = 0;

   list.forEach(element => {
      if(element.textContent.includes(searchInput.value)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   })
   result.textContent = `${counter} matches found`;
}
