# explications préparation de mes données


J’ai importé ma base de données, qui est un trace log de 2 sorties scolaires avec l’application BioSentiers effectuée en 2018. 
Je commence par retirer les éléments qui ont la valeur "obersono-bers-onob-erso-nobersonober" pour la clef ```properties.speciesId```, car il s’agit de tests d’un des développeurs. 

je crée ensuite une fonction reducer, dans laquelle je compte avec un counter le nombre de fois ou une même valeur pour la clef ```properties.speciesId``` apparait dans ma base de données. 
je stocke cette liste dans l’objet ```SpeciesIdCount```. 

J‘importe un deuxième jeu de données, qui est le data-package de l’application BioSentiers, et dans lequel je peux accéder aux noms des espèces visualisées dans l’application par les utilisateurs. 
Je joins ce tableau avec mon premier tableau, en prenant soin de ne garder que les valeurs “speciesId: d.id" (= le "nom de code" des espèces) "name: d.commonName.fr" (= le nom commun des espèces en français), "count: SpeciesIdCount[d.id]" (=le total de fois ou l’espèce a été visualisée).

Je run mon fichier .js avec ```node exercice_3``` en y ajoutant la commande ```> data.json```  pour sauver le nouveau json contenant mes données préparées.  