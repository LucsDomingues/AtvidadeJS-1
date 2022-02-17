var conteudo = `<html>
<head>
   <title>Gulliver Traveller - Roteiros</title>
</head>
<body>
 <b>->1 - Roteiros para *São Paulo*</b>
 <br>
 A Terra da Garoa!
 <br>
 Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista
 <br>
   #Roteiro A | Região: Avenida Paulista
 <br>
 MASP; Parque Trianon; Rua Augusta
 <br>
 #Roteiro B | Região: Centro
 <br>
   Catedral da Sé; Pátio do Colégio; Rua Augusta
 <br>
   #Roteiro C | Região: Vila Madalena
 <br>
   Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila
 <br> 
 <b>->2 - Roteiros para *Las Vegas*</b>
 <br>
   Viva Las Vegas!
 <br>       
   A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!
 <br>
   #Roteiro A | Região: Las Vegas Boulevard South
 <br>
   Fonte do Bellagio; Principais Cassinos; Madame Tussauds
 <br>
   #Roteiro B | Região: Downtown;
 <br> 
   Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; 
 <br>
   #Roteiro C | Região: Las Vegas Boulevard North
 <br>
 Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b>
 <br>
   Privet!
 <br>
   A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin
 <br>
   #Roteiro B | Região: Centro
 <br>
   Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou
 <br>
   #Roteiro C | Região: Obras pela cidade
 <br>
   Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  
 <br> 
</body>
</html>`;

// Ex 1-
var cont;
var posicao1 = 1;
var posicao2;
var troca = conteudo.replaceAll("*", "&");
for (cont = 1; cont <= 3; cont++) {
  posicao1 = troca.indexOf("&", posicao1);
  posicao2 = troca.indexOf("&", posicao1 + 1);
  var cidade = troca.substring(posicao1 + 1, posicao2);
  switch (cont) {
    case 1:
      var cidade1 = cidade;
      break;
    case 2:
      var cidade2 = cidade;
      break;
    case 3:
      var cidade3 = cidade;
      break;
  }
  posicao1 = posicao2 + 1;
}
var cidades = "Cidades: " + cidade1 + ", " + cidade2 + ", " + cidade3;
alert(cidades);

// Ex 2-
var posicao1 = 1;
for (cont = 1; cont <= 3; cont++) {
  var posicao1 = troca.indexOf("#Roteiro A", posicao1);
  var posicao2 = troca.indexOf("#Roteiro B", posicao1);
  var roteiroA = troca.substring(posicao1, posicao2);
  switch (cont) {
    case 1:
      var roteiro1 = roteiroA;
      break;
    case 2:
      var roteiro2 = roteiroA;
      break;
    case 3:
      var roteiro3 = roteiroA;
      break;
  }
  posicao1 = posicao2;
}
var roteiros = cidade1 + ": " + roteiro1 + "; " + cidade2 + ": " + roteiro2 + "; " + cidade3 + ": " + roteiro3 + ".";
alert(roteiros);

// Ex 3-
var cidades = [cidade1, cidade2, cidade3];
var separar;
var listaLocais;
var qntLocais;
var totalLocais = 0;
for (cont = 1; cont <= cidades.length; cont++) {
  switch (cont) {
    case 1:
      var roteiro = roteiro1;
      break;
    case 2:
      var roteiro = roteiro2;
      break;
    case 3:
      var roteiro = roteiro3;
      break;
  }
  separar = roteiro.split("<br>");
  var locais = separar[1];
  listaLocais = locais.split(";");
  qntLocais = listaLocais.length;
  totalLocais = totalLocais + qntLocais;
}

var resultado = "São citados " + (totalLocais / cidades.length) + " locais no Roteiro A de cada cidade."
alert(resultado);

// Ex 4-
var centro;
var separar2;
var separar3;
posicao1 = troca.search("&São Paulo&");
posicao2 = troca.search("&Las Vegas&");
separar = troca.substring(posicao1, posicao2);

posicao1 = separar.search("Região: Centro");
posicao2 = separar.search("#Roteiro C");
separar2 = separar.substring(posicao1, posicao2);

posicao1 = separar2.search("<br>");
posicao2 = separar2.indexOf("<br>", posicao1 + 1);
separar3 = separar2.substring(posicao1 + 4, posicao2);

var virgula = separar3.replaceAll(";", ",");
console.log(virgula);

resultado = "O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo são: " + virgula;
alert(resultado);

// Ex 5-
posicao1 = troca.search("&Las Vegas&");
posicao2 = troca.search("&Moscou&");
separar = troca.substring(posicao1, posicao2);

posicao1 = separar.search("Região: Downtown");
posicao2 = separar.search("#Roteiro C");
separar2 = separar.substring(posicao1, posicao2);

posicao1 = separar2.search("<br>");
posicao2 = separar2.indexOf("<br>", posicao1 + 1);
separar3 = separar2.substring(posicao1 + 4, posicao2);

var virgula = separar3.replaceAll(";", ",");
console.log(virgula);

resultado = "O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles: " + virgula;
alert(resultado);