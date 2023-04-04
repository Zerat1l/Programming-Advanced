function notify(message) {
  console.log('todo')
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block'; 
  notification.addEventListener('click', () => notification.style.display = 'none')
}