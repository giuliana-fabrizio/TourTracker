# TourTracker

## Présetation du projet
Le but de cette application est de suivre tous ses déplacements au cours d'une année.
L'utilisateur a la possibilité d'ajouter un lieu, de le modifier ou bien de le supprimer.

L'application est composée d'une api, d'une interface utilisateur et enfin d'une base de données.

## Installation
Pour exécuter ce projet sur votre machine personnelle, suivez ces étapes :

Installer une base de données PostgreSQL via l'adresse suivante :
```txt
https://www.postgresql.org/download/
```

Clonez le dépôt GitHub sur votre machine locale :
* SSH
```shell
git@github.com:giuliana-fabrizio/TourTracker.git
```
* HTTPS
```shell
https://github.com/giuliana-fabrizio/TourTracker.git
```

Créer un fichier .env à la racine du répertoire api.
Voici les informations du fichier :
```txt
PORT_SERVER = port sur lequel vous souhaitez héberger le serveur
DB_NAME = le nom de votre base de données
DB_PASSWORD = votre mot de passee
DB_PORT = le port sur lequel tourne votre base de données
DB_USER = votre identifiant
```
