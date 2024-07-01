# Contrat cadre Freelance de Stéphane Klein

Ce repository contient un modèle de contrat cadre de développement informatique et d'hébergement web que j'utilise pour mes missions de micro-entrepreneur.

- Exemple de contrat avec des données fictives [contrat-cadre-mon-super-projet.md](./contrat-cadre-mon-super-projet.md);
- Template [contrat-cadre-template.md](./contrat-cadre-template.md).

Voici le modèle de licence que j'intègre dans les dépôts Git des projets freelance sur lesquels je travaille :

- [licence-template.md](./licence-template.md)

Le contenu de ce dépôt GitHub est disponible sous la licence [`CC-BY-SA 4.0`](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).

## Méthode pour générer un contrat à partir de paramètres

```sh
$ mise install
$ pnpm install
$ ./generate-contract.js mon-super-projet.yaml
Fichier généré avec succès: contrat-cadre-mon-super-projet.md
```

Fichier de paramétrage: [`./mon-super-projet.yaml`](./mon-super-projet.yaml)

## Conversion du contrat vers le format ODT

Pour convertir un contrat au format [ODT](https://fr.wikipedia.org/wiki/OpenDocument) à l'aide de [pandoc](https://pandoc.org/), vous pouvez utiliser la commande suivante :

```sh
$ pandoc contrat-cadre-mon-super-projet.md --from markdown --reference-doc=reference-doc-template.odt --to odt -o contrat-cadre-mon-super-projet.odt
```

Cette conversion peut être particulièrement utile pour :

- Transformer le document en format PDF
- Importer le contrat dans Google Docs pour permettre aux utilisateurs d'ajouter des commentaires de révision
