function toggle() {
    let extraDiv = document.getElementById('extra');
    let btn = document.getElementsByClassName('button')[0];
    console.log(btn);
    if(btn.textContent === 'More') {
        btn.textContent = 'Less';
        extraDiv.style.display = 'block';
    } else if(btn.textContent === 'Less') {
        btn.textContent = 'More';
        extraDiv.style.display = 'none';
    }
}