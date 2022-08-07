const api = 'https://api.coincap.io/v2/assets';
// exemplo com data
const Washington = async () => {
  // const coincap = await fetch(api)
  //   .then(pedido => pedido.json())
  //   .then(pedidoCozinha => pedidoCozinha.data)
  try {
    const coincap = await fetch(api);
    const pedido = await coincap.json();
    console.log(pedido.data);
    return pedido.data;
  } catch (e) {
    console.log(e);
    throw new Error('Deu erro meu brother', e);
  }
  // console.log(coincap)
};

const pegaMoeda = async () => {
  const wash = await Washington();
  const elementoLista = document.querySelector('.moeda');
  const teste = wash
    .filter((filtro) => filtro.rank <= 20)
    .forEach((rep) => {
      const lista = document.createElement('div');

      lista.innerHTML = `${rep.rank} - ${rep.name}(${rep.symbol}) - ${Number(
        rep.priceUsd
      ).toFixed(2)} USD`;

      elementoLista.append(lista);

      if(rep.priceUsd >= 5){
        lista.style.color = 'red'
        lista.innerHTML = `${lista.innerHTML } - maior que 5 dolares`
      }
    });
  console.log(teste);
};
//garçom - Pessoa -> Garçom.
//cozinha - Garçom -> Cozinha.
//cozinha - Garçom -> Pessoa.

// pessoa <garçom> cozinha

window.onload = pegaMoeda();
