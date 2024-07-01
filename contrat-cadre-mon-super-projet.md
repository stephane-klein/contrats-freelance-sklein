# Contrat cadre de développement informatique et hébergement web pour Innovative Tech Solutions

Identifiant de contrat : `draft-zguj4t-YYYY-mm-dd_HHMM`.

## Entre les sousignés

Ce contrat cadre de prestation de services (ci-après dénommé le "Contrat") est conclu entre :

- TechnoFuture Corp, une société SAS dont le siège social est situé au 1234 Innovation Avenue 70000 Techville, immatriculée au Registre du Commerce et des Sociétés de Techville sous le numéro 123456789, représentée par Élise Dupont, en qualité de Directrice, dûment habilité aux fins des présentes (ci-après dénommée le "Client"),

Et

- Julien Martin, micro-entrepreneur, dont le siège est situé au 56 Rue des Entrepreneurs, immatriculé au Répertoire des Entreprises et des Établissements sous le numéro 987654321, (ci-après dénommé le "Prestataire").

## Préambule

Considérant que TechnoFuture Corp souhaite développer une application intitulée Innovative Tech Solutions dont l’objectif principal est de développer une plateforme technologique innovante pour la gestion automatisée des processus d&#39;entreprise. Cette solution permettra à TechnoFuture Corp. d&#39;améliorer son efficacité opérationnelle et d&#39;optimiser ses ressources grâce à des outils avancés d&#39;analyse de données et de gestion des flux de travail.


Considérant que Julien Martin possède les compétences nécessaires pour développer cette application.

Considérant que TechnoFuture Corp a proposé à Julien Martin de s'occuper du développement de cette application web.

Considérant que TechnoFuture Corp souhaite héberger — publier sur Internet — l'application web Innovative Tech Solutions, le site web vitrine de Innovative Tech Solutions ainsi que différentes versions de développement — par exemple, les environnements de staging — de l'application web.

Considérant que Julien Martin possède les compétences nécessaires pour héberger ces services.

Considérant que TechnoFuture Corp a proposé à Julien Martin de s'occuper de ces tâches d'hébergement.

Ceci exposé, il a été convenu ce qui suit.

## Doctrine

Le Client et le Prestataire s'engagent à suivre, autant que possible, les principes suivants :

- Le Client porte les contrats des services cloud (voir articles 4 et 5).
- Utilisation des méthodes d'[Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code), [GitOps](https://www.redhat.com/en/topics/devops/what-is-gitops) et [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
- Maintien à jour des README et autres documentations dans le repository GitHub, ainsi que des issues, afin de permettre à un futur prestataire de reprendre et continuer le travail.
- Utilisation de fournisseurs de services cloud français.
- Utilisation de logiciels libres lorsque cela est possible.
- Mise en œuvre d'une approche agile :
    - Travail en mode itératif, avec des livraisons régulières d'incréments, même imparfaits.
    - Équilibre entre sécurité, fiabilité et disponibilité des services et coût d'amélioration.
    - Limitation à 10% du temps consacré aux spécifications.
    - Limitation à 20% du temps consacré aux réunions.
    - Limitation à 20% du temps consacré à la dette technique.
    - Ne pas avoir peur de suivre une approche exploratoire, c'est-à-dire, [accepter de faire des paris](https://basecamp.com/shapeup/1.5-chapter-06#ingredient-2-appetite) et s'autoriser à abandonner une piste.
- Utilisation des artefacts intermédiaires pour permettre la transparence, la progression de l'avancement et l'identification éventuelle des difficultés.


## Article 1 : Object du contrat

Le présent contrat a pour objet de définir les termes et les conditions selon lesquels le prestataire fournira des prestations de développement informatique et d'hébergement pour le client, dans le cadre du projet Innovative Tech Solutions.  
Cela comprend l'application web Innovative Tech Solutions, le site vitrine et tout autre développement nécessaire au projet.

## Article 2 : Prestations en régie

Le présent contrat propose exclusivement des prestations vendues en régie, et non au forfait. Cela signifie que le Client paiera le Prestataire en fonction du temps passé et des ressources consommées pour réaliser les prestations, et non en fonction d'un montant global fixe.

## Article 3 : Nature des prestations

Le Prestataire n'effectuera pas de prestations de management d'équipe dans le cadre du présent contrat. Les prestations fournies seront exclusivement de type individual contributor, correspondant à celles d'un artisan développeur travaillant de manière autonome.

Le Prestataire s'engage à collaborer en harmonie avec le reste de l'équipe, mais ne sera pas responsable de la gestion ou de la direction d'équipe.

Si le Client souhaite attribuer des missions de management ou de gestion d'équipe au Prestataire, cela fera l'objet d'un nouveau contrat avec de nouvelles conditions.

## Section 1 : Hébergement et Services Cloud

### Article 4 : Propriété et gestion des comptes de services cloud

La propriété des comptes des services cloud, loués par exemple pour l'hébergement des sites, appartient au client.

Le prestataire s'engage à céder la propriété de ces comptes au client dès leur création.

Le client s'engage à donner au prestataire un accès administrateur à ces comptes pour réaliser les tâches d'installation, de configuration et de débogage des serveurs.

### Article 5 : Paiement des services cloud

Le client s'engage à payer directement, avec sa carte bancaire ou par prélèvement bancaire, toutes les factures des services cloud utilisés dans le cadre des missions de ce contrat.

Le client est responsable de maintenir ses informations de paiement à jour avec les fournisseurs de services cloud afin d'assurer un paiement ininterrompu des services.

Le prestataire s'engage à aider le client dans cette tâche.

### Article 6 : Estimation et limites des coûts des services cloud

Le prestataire aidera le client à budgétiser et maîtriser ses coûts d'hébergement.

Avant toute souscription de nouveaux services cloud ou mise à niveau de services existants, le prestataire fournira au client une estimation des coûts mensuels ou annuels. Le prestataire attendra la validation du client avant d'effectuer toute action.

Toutefois, en cas d'urgence critique pour le business du client, ce dernier peut déroger à cette règle d'attente de validation.

Lorsque les fonctionnalités des fournisseurs de services cloud le permettent, le prestataire proposera la mise en place de limites de dépenses.

###  Article 7 : Fiabilité de l'hébergement

Le Prestataire ne souhaite pas s'engager sur des taux classiques de disponibilité de service.

À la place, le Prestataire proposera la mise en place d'actions concrètes visant à atteindre le niveau de fiabilité souhaité par le Client, adapté à ses moyens financiers.

Exemples d'actions possibles :

- Mise en place d'un système de sauvegarde avec une rétention et une fréquence définies en concertation avec le Client.
- Copie des sauvegardes vers un ou plusieurs fournisseurs de cloud différents pour réduire la dépendance à un seul acteur.
- Tests de restauration de services à une fréquence régulière, selon les critères d'exigence du Client.
- Mise en place de systèmes réduisant le temps d'indisponibilité de l'application lors des mises à jour.
- Mise en place de tests unitaires et/ou fonctionnels pour réduire les risques de bugs lors des mises à jour.
- Mise en place d'un hébergement multi-cloud.
- Mise en place d'un système de basculement automatique en cas de panne.
- Formation et assistance des développeurs pour contribuer au code source du projet.
- Support technique pour les utilisateurs et les développeurs.
- ...

Il est important de noter que ces actions, qui visent à améliorer la fiabilité, ont un coût financier et peuvent affecter la vélocité de développement.

Le prestataire s'engage à conseiller le client sur les choix les mieux adaptés à son business, pour trouver un équilibre entre la fiabilité et les coûts.

Les actions mises en place seront documentées dans le dépôt GitHub et communiquées avec transparence au Client. Le Prestataire fera de son mieux pour vulgariser ces actions afin qu'elles soient compréhensibles pour le Client.

### Article 8 : Réactivité en cas de panne

Le Prestataire s'engage à se mettre en capacité de réagir en moins de 24 heures en cas de panne affectant les services du Client. Pour ce faire, le Prestataire prendra les mesures suivantes :

- Disposer d'un accès 4G à proximité pour garantir une connexion internet.
- Rester accessible par SMS pour permettre une communication rapide.
- Avoir son laptop avec lui afin de pouvoir intervenir immédiatement.

Le Prestataire s'engage à prendre en compte les enjeux business du Client lors de ses interventions, en priorisant la résolution rapide des pannes pour minimiser l'impact sur les activités du Client.

Le Prestataire, étant micro-entrepreneur et donc par définition seul à intervenir en cas de défaillance, ne peut proposer des garanties d'intervention supérieures à celles mentionnées ci-dessus. Si le Client souhaite des garanties supérieures, des solutions de collaboration avec des prestataires complémentaires pourront être proposées par le Prestataire.

### Article 9 : Limite de réactité en cas de panne

Si, pour diverses raisons, le Prestataire sait qu'il pourrait avoir des difficultés à respecter les engagements décrits dans l'article 8 sur une certaine période, il s'engage à en informer le Client dès que possible afin de permettre à ce dernier de prendre les mesures nécessaires pour assurer la continuité de ses activités.

### Article 10 : Prévention en cas d'impossibilité d'intervention pour raisons de santé

En cas d'accident, d'hospitalisation ou de toute autre raison de santé qui empêcherait le Prestataire d'intervenir, le Prestataire s'engage à avoir partagé à l'avance les informations de contact du Client avec une personne de confiance. Cette personne de confiance sera chargée de prévenir immédiatement le Client de la situation, afin de permettre à ce dernier de prendre les mesures nécessaires pour assurer la continuité de ses activités.

## Section 2 : Prestations de services

### Article 11 : Prestations proposés

Exemples de prestations proposées dans le cadre de ce contrat :

- Développement de fonctionnalités front-end et back-end.
- Correction de dysfonctionnements et de bugs.
- Déploiement de nouveaux sites web.
- Déploiement de nouvelles versions de sites web.
- Dépannage de sites web.
- Mise à jour des serveurs et des services.
- Mise en place d'un système de sauvegardes des données.
- ...

En résumé, toutes les tâches pratiquées par un artisan développeur.

### Article 12 : Commande de jours de prestations

Le Client reconnaît que le Prestataire, micro-entrepreneur, a besoin d'une planification raisonnable pour organiser son travail. 

Le Client s'engage à commander les jours homme souhaités auprès du prestataire avec un préavis d'un (1) mois.  

Le Client peut également commander des jours de prestation pour une période plus longue que 1 mois.

Les commandes doivent être effectuées par écrit, précisant le nombre de jours homme souhaités et la période de prestation souhaitée. Chaque commande validée par le Prestataire pour confirmation de disponibilité (voir article 11) générera un bon de commande.

Le Client pourra également commander des jours supplémentaires sans respecter le préavis d'un mois, à condition que le Prestataire ait des journées de disponibilité.

Le Prestataire s'engage à faire de son mieux pour répondre aux demandes du Client, sous réserve de ses disponibilités.

Exemple :

- Le 22 juillet 2024, le prestataire demande sous une forme écrite au client quelles sont ses intentions de commande de jours de prestations pour la période après le 1er septembre 2024.
- Le prestataire et ce client ont alors 8 jours ouvrés pour échanger des informations et définir leur stratégie.
- Le 31 juillet, le client communique au prestataire le nombre de jours qu'il souhaite commander.

### Article 13 : Disponibilité et gestion du planning

Le Prestataire se réserve le droit de refuser une commande de jours de prestation si son planning est déjà plein. 

Le Prestataire s'engage à informer régulièrement le Client de l'évolution de son planning afin de permettre au Client d'adapter sa stratégie en conséquence. Cette communication proactive vise à garantir une planification optimale et à éviter les situations de surcharge.

### Article 14 : Engagement de non-surbooking

Le Prestataire s'engage à ne pas faire de surbooking de ses prestations. Il garantit que les jours homme commandés par le Client seront réservés exclusivement pour les prestations du Client pendant les périodes convenues.

Si, malgré cet engagement, le Prestataire se retrouve dans une situation de surbooking due à une erreur ou à une circonstance exceptionnelle, il en informera le Client par écrit dans les meilleurs délais.

Le Prestataire et le Client travailleront ensemble pour trouver une solution mutuellement acceptable, pouvant inclure la reprogrammation des jours homme.

### Article 15 : Modalité de commande de prestations

Des issues GitHub seront utilisées pour décrire les objectifs des prestations.

Le Client peut passer commande en ajoutant un commentaire explicite à l'issue correspondante, cette commande devant entrer dans le cadre des jours homme préalablement réservés (article 10).

Le prestataire indiquera dans l'issue une estimation basse et haute du temps nécessaire pour réaliser la prestation.

### Article 16 : Planification des jours de prestation

Le Prestataire reste libre de planifier les jours de prestation au sein de ses semaines ou de son mois comme bon lui semble.

Toutefois, le Prestataire s'engage à prendre en compte, autant que possible, les contraintes business du Client lors de la planification des prestations, afin de minimiser les impacts sur les activités du Client.

Le Client informera le Prestataire de ses enjeux business susceptibles d'affecter la planification des prestations, afin que le Prestataire puisse intégrer ces contraintes dans sa planification.

### Article 17 : Petites tâches

Afin d'éviter une dérive de spécification excessive, le prestataire a la possibilité d'effectuer des petites tâches de moins de 10 minutes sans créer d'issue.

Ces tâches seront regroupées sur une ligne unique dans la facturation sans détails précis.

### Article 18 : Décompte des temps de spécification et de réunion

Le temps consacré aux spécifications fonctionnelles et techniques est décompté du crédit de heures de prestation du Client.

Le temps consacré aux réunions est également décompté du crédit de heures de prestation du Client.

Le Prestataire s'engage, autant que possible, à ne pas décompter les temps de discussion amicale et hors sujet avec la mission du Client.

### Article 19 : Nombre d'heure d'une journée

Une journée de prestation de service correspond à 7h de travail.

### Article 20 : Tarif des prestations

Les prestations (exemples dans article 9) seront facturées au client 10 € HT par journée, soit 1 € HT de l'heure.

Tant que le prestataire bénéficie de la franchise de TVA (TVA non applicable, art. 293 B du CGI), la journée est facturé 10 € TTC.

### Article 21 : Comptabilisation des Heures

Le prestataire s'engage à mesurer et à comptabiliser ses heures de travail effectuées pour la réalisation des prestations commandé par le client.

### Article 22 : Facturation

Le prestataire s'engage à indiquer autant que possible le détail du temps passé pour chaque issues facturés (voir article 12).


## Section 3 : Date de prise d'effet, renouvellement, résiliation, cession

### Article 23 : Date de prise d'effet

Le présent contrat prend effet le 1 juillet 2024.

### Article 24 : Renouvellement

Le contrat est reconduit automatiquement chaque mois, à moins qu'il ne soit résilié conformément aux dispositions ci-dessous (article 25).

### Article 25 : Résiliation

- Résiliation par le prestataire : Le prestataire peut résilier le contrat en fournissant un préavis écrit de trois (3) mois au client.
- Résiliation par le client : Le client peut résilier le contrat en fournissant un préavis écrit d'un (1) mois au prestataire.

La période de préavis prolongée pour le prestataire (3 mois) est destinée à permettre au client de trouver un nouveau prestataire et d'assurer une transition en douceur.

### Article 26 : Incessibilité du contrat

Sauf accord express de l’autre partie, le bénéfice du présent contrat ne peut être cédé par aucune des parties.

### Article 27 : Révision  des prix

Les prix des prestations fournies dans le cadre du présent contrat peuvent être révisés par le Prestataire. Toute modification des prix sera notifiée par écrit au Client avec un préavis de soixante (60) jours.

Les nouvelles conditions tarifaires entreront en vigueur à l'expiration de ce préavis, sauf accord contraire entre les parties.

Les parties s'engagent à discuter de manière constructive et transparente de toute modification tarifaire pour assurer la continuité et la réussite du projet.

### Article 28 : Révision annuelle des prix

Les prix des prestations fournies dans le cadre du présent contrat seront mis à jour une fois par an en fonction de l'indice Syntec.

La révision annuelle des prix sera effectuée à la date anniversaire des un (1) an du contrat. Le Prestataire notifiera le Client par écrit des nouveaux tarifs révisés au moins trente (30) jours avant leur entrée en vigueur.

Le nouveau prix sera calculé comme suit : `prix = P0 x (indice 1 / indice 2)`, où P0 est le prix initial, indice 1 est l'indice Syntec le plus récent au moment de la révision, et indice 2 est l'indice Syntec au moment de la signature du contrat.

Les indices Syntec utilisés pour la révision des prix sont publiés sur [Syntec - Indices](https://www.syntec.fr/).

Les parties s'engagent à discuter de manière constructive et transparente de toute modification tarifaire pour assurer la continuité et la réussite du projet.

### Article 29 : Mise à jour du contrat

Les deux parties se laissent la liberté de proposer des améliorations de ce contrat par petites touches, sous forme d'avenants.

Ces modifications seront effectuées de manière administrative fluide, dans le but qu'elles soient rapides à éditer, sans lourdeur administrative.

Les avenants seront validés par l'utilisation de signatures électroniques pour garantir leur authenticité et leur validité juridique uniquement si le changement est impactant pour l'une des parties.

Une version consolidée du contrat, incluant tous les avenants, sera conservée dans un dépôt GitHub et/ou Google Drive. Cette version consolidée servira de référence pour les deux parties.

## Section 4 : Dispositions Générales

### Article 30 : Lieu de travail

Le Prestataire est libre de choisir son lieu de travail, à condition de respecter les conditions suivantes :

- disposer d'une connexion internet fiable et rapide ;
- travailler dans un environnement calme et propice à la concentration.

Le Prestataire et le Client peuvent librement proposer de travailler ponctuellement dans un lieu commun, dans le but de nourrir et de renforcer une relation harmonieuse et conviviale.

### Article 31 : Déplacements demandés par le client

Les frais de déplacement et de séjour du Prestataire, engagés à la demande du Client, feront l’objet d’une facturation séparée, justificatifs à l’appui.

Avant tout déplacement, le Prestataire présentera une estimation du coût de ce déplacement, devis à l'appui, et attendra la validation écrite du Client avant d'engager les frais correspondants.

Les frais de déplacement seront calculés à partir de Paris.

Le temps de déplacement du Prestataire ne sera pas facturé comme du temps de travail, sauf accord contraire entre les parties.

### Article 32 : Propriété des résultats et propriété intellectuelle

Tous les résultats des prestations effectuées par le Prestataire dans le cadre du présent contrat, y compris, mais sans s'y limiter, le code source, la documentation, les spécifications, et les contributions aux dépôts GitHub du Client, sont la propriété exclusive du Client. Cela inclut également toutes les issues créées ou modifiées dans les dépôts GitHub du Client.

De plus, tous les services cloud mis en place ou gérés dans le cadre du présent contrat, tels que les serveurs, les bases de données, et autres infrastructures cloud, sont la propriété exclusive du Client. Le Prestataire s'engage à ne revendiquer aucun droit de propriété sur ces services et à ne pas les utiliser à des fins autres que celles prévues par le présent contrat, sans l'autorisation expresse et écrite du Client.

Le fichier de licence présent en annexe sera ajouté aux dépôts Git des projets de ce contrat.

Voir aussi article 33 et 34.

### Article 33 : Engagement de non-concurrence

Le Prestataire s'engage, pour une durée d'un (1) an après la fin du présent contrat, à ne pas travailler pour un concurrent direct du Client qui reprendrait les éléments originaux développés exclusivement pour le Client.

Si, passé ce délai d'un an, le Prestataire est sur le point de travailler pour un concurrent direct, il s'engage, pour une durée de quatre (4) ans après la fin du présent contrat, à en informer le Client afin de permettre à ce dernier de trouver un arrangement éventuel avant le début de la nouvelle mission. Cette notification aura pour but de permettre au Client et au Prestataire de trouver un arrangement équitable, si nécessaire.

### Article 34 : Utilisation des enseignements et du savoir-faire

Le présent contrat n’empêchera pas le Prestataire d’utiliser les enseignements et le savoir-faire tirés de l’exécution des prestations.

Le Prestataire est également libre de réutiliser du code ou de la documentation développés dans le cadre des prestations, à condition que ces éléments ne soient pas en lien avec le cœur du business ou l'idée originale du Client.

### Article 35 : Communication

Afin d'éviter tout quiproquo, le client et le prestataire s'engagent à communiquer leurs décisions par écrit, soit dans des commentaires d'issues, par chat ou par e-mail (julien@technofuture.com).

### Article 36 : Référent du projet et prise de décision

Élise Dupont, directeur général de TechnoFuture Corp (le Client), sera le Product Owner et référent auprès du Prestataire pour la conduite des projets liés au présent contrat. En cette qualité, Élise Dupont sera le point de contact principal pour toutes les questions relatives aux projets et sera responsable de la prise de décisions.

Élise Dupont Vierra aura le dernier mot sur toutes les décisions du projet, garantissant ainsi une direction claire et cohérente.

### Article 37 : Droit de refus de mise en œuvre de technologies non maîtrisées

Le Prestataire se réserve le droit de refuser la mise en œuvre de technologies qu'il ne maîtrise pas. Si le Client propose l'utilisation de technologies en dehors des compétences du Prestataire, ce dernier pourra proposer des alternatives appropriées. Si aucune alternative ne convient, le Client sera libre de chercher un autre prestataire pour la mise en œuvre de ces technologies.

### Article 38 : Références et publications

Le Client accepte que le Prestataire puisse faire figurer parmi ses références les travaux accomplis dans le cadre du présent contrat.

Le Prestataire pourra indiquer les serveurs, bibliothèques et langages qu'il a mis en œuvre, à condition que cela ne fournisse pas d'informations stratégiques aux concurrents du Client.

Si le Prestataire souhaite publier plus de détails sur le projet réalisé, il devra soumettre ces informations à validation par le Client avant toute publication.

## Annexes

### Fichier le licence

Le fichier le licence ci-dessous est ajouté aux dépôts Git des projets développé dans le cadre de ce contrat :

```
# Licence d'utilisation

Licence d'utilisation de tout le code source contenu dans ce dépôt Git.

## Propriété et Droits d'Auteur

Le code source et l'exécution de ce code source présents dans ce dépôt sont la propriété exclusive de la société TechnoFuture Corp.
Tous les droits, titres et intérêts relatifs à ce code source et à son exécution sont réservés à TechnoFuture Corp.

## Autorisation d'Utilisation

En accédant à ce dépôt, vous acceptez que vous n'avez aucun droit d'utilisation, de reproduction, de distribution ou de modification de ce code source ou de son exécution, sauf autorisation expresse et écrite de la société TechnoFuture Corp.

## Restrictions

1. **Utilisation Personnelle et Commerciale :** Aucune partie de ce code source ne peut être utilisée à des fins personnelles ou commerciales sans le consentement préalable écrit de TechnoFuture Corp.
2. **Modification :** Vous n'êtes pas autorisé à modifier, adapter ou créer des œuvres dérivées basées sur ce code source sans l'accord écrit de TechnoFuture Corp.
3. **Distribution :** Il est interdit de distribuer ce code source ou toute exécution de ce code source, en tout ou en partie, sans autorisation écrite préalable de TechnoFuture Corp.

## Limitation de Responsabilité

Ce code source est fourni "tel quel", sans garantie d'aucune sorte, expresse ou implicite, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier et d'absence de contrefaçon. En aucun cas, TechnoFuture Corp ne pourra être tenue responsable de tout dommage direct, indirect, incident, spécial ou consécutif, découlant de ou en relation avec l'utilisation ou la performance de ce code source.

## Contact

Pour toute question ou demande d'autorisation concernant ce code source, veuillez contacter la société TechnoFuture Corp à l'adresse suivante :

TechnoFuture Corp
1234 Innovation Avenue 70000 Techville 

```
