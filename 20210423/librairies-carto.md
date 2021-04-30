# Librairies Cartographiques

## Pourquoi doit-on projeter des données cartographiques?

Les données cartographiques appartiennent à des systèmes disctincts, avec des référents distincts. Lorsqu’on projette des données, il faut s’assurer que les données sont exprimées dans le même système, selon le même système de référence. Par exemple, les données de carto internationale sont exprimées selon le standard WGS84, mais les données cartographiques suisses sont exprimées dans le standard LV95.  

## Qu'est ce qu'Open street map?
Open street map (OSM) est l’équivalent de wikipedia pour les données géographiques. C’est une base de données collaborative/participative libre d’accès, ou tout un chacun peut ajouter des données selon un système de classes qui définissent le type d’objet représenté et leur features particulières. 

## Quelles fonctions D3 sont spécifiindques à la cartographie?
La fonction ``d3.geoPath()`` permet de générer des tracés svg à partir de coordonnées.
La fonction ``d3.geoMercator()`` permet d’exprimer les données dans la projection de mercator, qui déforme les pays en fonction de leur distance de l’équateur. Il existe une série d’autres projections possibles pour représenter des cartes suivant d’autres projections géographiques. 
/!\ Il ne faut pas oublier de renverser le systèmes de coordonnées géographiques (origine en bas à gauche) à celui des rendus graphiques sur ordinateur (origine en haut à gauche). 

## À quoi sert le format topojson? En quoi est-il différent du geojson?
Il permet de gérer des données plus importantes en les rendant plus légères. Il concatène les données de points en arc, ce qui réduit le nombre de caractères nécessaire à l’expression des données. Il permet également d’effectuer des pathifinders (topojson.merge) pour assembler des représentations graphiques entre elles. 

## À quoi sert ``turf``? Décrivez ce que font trois fonctions de cette libraire
La librairie contient de nombreuses fonctions pour effectuer des calculs sur des vecteurs. On peut par exemple calculer la distance radiale ou le long d’une ligne, la moitié de la distance, le carré. On peut « tesseler » (découper en triangles) des aires, ou les découper en polygones de Voronoi avec l’algorithme éponyme. 