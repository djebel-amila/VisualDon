# VisualDon
repo for the “VisualDon” class with Anders Bengtson



## Base de données «Biosentiers»

### Table des matières

- [Lien](#database)
- [Description](#description)
  - [D'où viennent elles?](#ou)
  - [Qui a créé le jeu de données?](#qui)
  - [Dans quel but?](#but)
  - [Qu'est-ce qu'elles représentent?](#quoi)
  - [Quel est le format?](#format)
  - [Idées de visualisation](#idee)


### Lien
Lien vers la base de données : [Database Biosentiers](https://biosentiers.heig-vd.ch/api/trails/8c8c2474-4375-4121-95d3-763f381717df/data-package)

### Description
Il s’agit du log de l’application «Biosentiers» lors de plusieurs sorties avec des élèves yverdonnois qui a eu lieu en 2018.


#### D'où viennent elles?
Les données ont été enregistrées lors de plusieurs sorties en 2018, et sont rendues disponibles par l’API de l’application Biosentiers, depuis le site du projet : [biosentiers.heig-vd.ch/api](https://biosentiers.heig-vd.ch/api)

#### Qui a créé le jeu de données?
Le jeu de données a été créé par une série d’utilisateurs, principalement des enfants de 10 à 12 ans, lors de leur utilisation de l’application Biosentiers. Les données ont été récoltées l’équipe du projet BioSentiers, composée des membres des instituts MEI et INSIT à la HEIG-VD. [biosentiers.heig-vd.ch](https://biosentiers.heig-vd.ch/landing/)

#### Dans quel but?
Le but de la récolte de ces données est de pouvoir analyser l’utilisation de l’application par des écoliers, notamment sur le type d’espèces qui ont été observées lors de la sortie ainsi que leurs déplacements dans l’espace.

#### Qu'est-ce qu'elles représentent?

Les objets loggés représentent chacun un événement dans l’application. Leur structure se présente comme suit:

```json
{
  "occurredAt": "A string representing the moment of the event, in ISO format",
  "type": "The type of the event (see below)",
  "version": "The version of the structure on which this log is based",
  "properties": "An object whose properties vary depending on the type of the log (see below)"
}
```


##### `location`

> Fired each time the user's position is located by their device, and that the new position is at least 10 meters farer from the previous located position.

**Properties object:**

```json
{
  "excursionId": "The serverId of the excursion in the context of which the position has been located",
  "position": {
    "latitude": "The new position's latitude",
    "longitude": "The new positions's longitude",
    "altitude": "The new positions' altitude, if known",
    "accuracy": "The location's accuracy"
  },
  "context": "The context in which the position has been located. This can be either on an excursion's card page (excursionCard) or when in the AR view (ar)."
}
```

#### Quel est le format?
Les données se présentent au format ```.json``` ainsi que ```.geojson```.

#### Idées de visualisation
S’agissant de données géospatiales, la façon la plus indiquée de les représenter serait au moyen d’une carte topographique qui reprend des données (.shp, données swisstopo) du territoire que couvrent les données. On peut imaginer plusieurs façon de visualiser les sorties, par exemple en traçant les trajets parcourus par les élèves indivuellement, les événements spéciaux (observation d’une espèce), mais aussi en extraire des données générales comme le nombre total de mètres parcourus, un tableau pour visualiser toutes les espèces observées, etc. 