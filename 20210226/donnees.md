# VisualDon
repo for the “VisualDon” class with Anders Bengtson



# VisualDon exercice 2

## Base de données

- [Database](#database)
- [Description](#description)
  - [D'où viennent elles?](#d-ou-viennent-elles)
  



    D'où viennent elles?
    Qui a créé le jeu de données? Dans quel but?
    Qu'est-ce qu'elles représentent?
    Quel est le format? (type de fichier...)
    Idées de visualisation


## Database

* [Database Biosentiers](https://biosentiers.heig-vd.ch/api/trails/8c8c2474-4375-4121-95d3-763f381717df/data-package)
* Lien vers la base de données

## Description

The log objects are send to the backend and each represent an event in the app.
Their structure is as follow:

```json
{
  "occurredAt": "A string representing the moment of the event, in ISO format",
  "type": "The type of the event (see below)",
  "version": "The version of the structure on which this log is based",
  "properties": "An object whose properties vary depending on the type of the log (see below)"
}
```


### D'où viennent elles?

D'où viennent elles ?

#### `location`

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