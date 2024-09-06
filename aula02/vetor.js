// utilizando vetores
let modelos = ['Gol', 'Corsa', 'Fusca'];
let marcas = Array('Chevrolet', 'Ford', 'Fiat');
let acessorios = new Array(5);
let cores = []
let categoria = new Array();

// testando arrays
console.log(modelos)
console.log(marcas)
console.log(acessorios)
console.log(cores)
console.log(categoria)

console.log(modelos[0])

let nome_modelo = modelos[0];
console.log(nome_modelo)

// adicionar um elemento no final
modelos.push('HB20')
console.log(modelos)

//adicionar um elemento no começo
modelos.unshift('Logan')
console.log(modelos)

// remover elementos no inicio
modelos.shift()
console.log(modelos)

// remover elementos no final
modelos.pop()
console.log(modelos)

// concatena duas (ou mais) arrays em uma nova array
let frutas = ['Laranja','Melancia','Morango'];
let vegetais = ['Batata-doce','Cenoura','Milho'];
let feira = frutas.concat(vegetais);
console.log(feira);

let frutas_ = ['Laranja','Melancia','Morango','Uva','Caju'];
let frutas_sel = frutas_.slice(1,3);

// console.log(frutas_sel);

// adiciona e remove elementos, primeiro parametro é o indice e o segundo parametro é a quantidade que se deseja remover logo após o indice determinado
frutas_.splice(2,2,'Manga','Kiwi');

console.log(frutas_);
