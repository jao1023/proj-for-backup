document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    
    const indice = parseInt(document.getElementById('indice').value);
    const outputElement = document.getElementById('output');
    
    outputElement.innerHTML = '';

    let divisão = numero;

    for (let i = 1; i <= indice; i++) {
        const para = document.createElement('p');
        para.textContent = `Iteração ${i}: ${divisão}`;
        outputElement.appendChild(para);

        divisão /=numero;

    }
})