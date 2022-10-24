import { series } from './dataseries.js';
var seriesTbody = document.getElementById('infoTabla');
crearSeries(series);
function crearSeries(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(c.id, "</th>\n                               <td>").concat(c.name, "</td>\n                               <td>").concat(c.channel, "</td>\n                               <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var trAverage = document.createElement("tr");
    trAverage.innerHTML = "<td> Seasons Average: ".concat(calcularAVG(series), "</td>");
    seriesTbody.appendChild(trAverage);
}
function calcularAVG(series) {
    var n = 0;
    var totalSeasons = 0;
    series.forEach(function (c) {
        n = n + 1;
        totalSeasons = totalSeasons + c.seasons;
    });
    return totalSeasons / n;
}
