const listinha = ['banana', 'gatinho', 'brócolis'];

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`);
  }
}

imprimeIndiceEElemento(listinha);