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
