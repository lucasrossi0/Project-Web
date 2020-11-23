var mapa;

$(document).ready(function () {
  initMap();

  $("#tProducts").click( function () {
    window.location.href = "../Tela Produtos/HTML/telaProdutos.html";
  });
});



function initMap() {
  var configuracoes = {
    center: {lat: -22.897401, lng: -43.261232},
    zoom: 10
  };
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);
  var marcador = new google.maps.Marker({
    position: {lat: -22.897401, lng: -43.261232},
    title: "COMPLEXO DO RATO MOLHADO",
    map: mapa
  });
};
