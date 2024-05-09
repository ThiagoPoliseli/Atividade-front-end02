function compararDatas() {
    var data1 = new Date(document.getElementById("data01").value);
    var data2 = new Date(document.getElementById("data02").value);

    document.getElementById("saída").innerHTML = 
    data1 > data2 ? "A primeira data é maior." :
    data1 < data2 ? "A segunda data é maior." : "As datas são iguais.";

}

function exibirDataAtual() {
    var now = new Date();
    var formatarData = now.getHours() + ":" + now.getMinutes() + " - " + now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    document.getElementById("saída").textContent = formatarData;
}

function calcularIntervalo() {
    var data1 = new Date(document.getElementById("data01").value + "T00:00:00");
    var data2 = new Date(document.getElementById("data02").value + "T00:00:00");

    [data1, data2] = data1 > data2 ? [data2, data1] : [data1, data2];


    var intervaloMs = Math.abs(data2 - data1);
    var intervaloDias = intervaloMs / (1000 * 60 * 60 * 24);

    document.getElementById("saída").innerText = "O intervalo entre as datas são de: " + intervaloDias + " dias.";
}
