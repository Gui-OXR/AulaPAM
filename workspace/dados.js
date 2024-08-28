let dados = {
    'nome': 'Guilherme',
    'sexo' : 'Masculino',
    'email': 'gui.oliveira.xavier.rodrigues@gmail.com',
    'cel': '15 99712-6962'
}

for (let x in dados) {
    document.write( dados[x] + "<br>");
}