function generateReport() {
    let checks = Array.from(document.querySelectorAll('thead tr th input'));
    let trs = Array.from(document.querySelectorAll('tbody tr'));
    let outputElement = document.getElementById('output');

    let result =[]

    trs.forEach( row => {
        const current = {}
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if(checks[i].checked) {
                current[checks[i].name] = x.textContent;
            }
        })
        result.push(current)
    })
    
    outputElement.value = JSON.stringify(result)
}