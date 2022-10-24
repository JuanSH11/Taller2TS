import { series } from './dataseries.js';
var seriesTbody = document.getElementById('infoTabla');
crearSeries(series);
function crearSeries(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(c.id, "</th>\n                               <td>").concat(c.name, "</td>\n                               <td>").concat(c.channel, "</td>\n                               <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
