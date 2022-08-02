// window.onload = function() {
//     //alert('Olá Mundo!');
//     document.getElementById('btn').addEventListener('click', btn_click);
// }

// function btn_click() {
//     document.getElementById('paragrafo').innerHTML = 'Texto alterado.';
// }

//   ---   Ajax   ---
//Depreciado
// window.onload = function() {
//     document.getElementById('btn').addEventListener('click', btn_click);
// }

// function btn_click() {

//     //Criar objeto  
//     let pedido = new XMLHTTPRequest();

//     //Definindo a função
//     pedido.onreadystatechange = function() {
//         document.getElementById('paragrafo').innerHTML = this.responseText;
//     }

//     pedido.open("GET", "info.txt", true);
//     pedido.send();
// }

//   ---   Ajax atualizado   ---
window.onload = function() {
    document.getElementById('btn').addEventListener('click', btn_click);
}

function btn_click() {

    let pedido = new XMLHttpRequest(),
    method = "GET",
    url = "dados/info.txt";

    pedido.open(method, url, true);

    pedido.onreadystatechange = function () {
        if(pedido.readyState === XMLHttpRequest.DONE && pedido.status === 200) {
            //console.log(xhr.responseText);
            document.getElementById('paragrafo').innerHTML = this.responseText;
        }
    };
    pedido.send();
}    
    