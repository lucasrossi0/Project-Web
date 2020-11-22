var mapa;
function initMap() {
  var configuracoes = {
    center: {lat: -22.897401, lng: -43.261232},
    zoom: 8
  }
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);
  var marcador = new google.maps.Marker({
    position: {lat: -22.897401, lng: -43.261232},
    title: "COMPLEXO DO RATO MOLHADO",
    map: mapa
  });
}