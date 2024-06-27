#!/usr/bin/env node

import fs from 'fs/promises';
import nunjucks from 'nunjucks';
import yaml from 'js-yaml';

// Configure Nunjucks
nunjucks.configure({ autoescape: true });

// Vérifier les arguments de la ligne de commande
if (process.argv.length < 3) {
  console.log('Usage: inject-template <config-file>');
  process.exit(1);
}

const configFile = process.argv[2];

try {
  // Lire le fichier de configuration
  const configContent = await fs.readFile(configFile, 'utf8');
  const config = yaml.load(configContent);

  const { templateFile, outputFile, variables } = config;

  // Lire le fichier template
  const templateContent = await fs.readFile(templateFile, 'utf8');

  // Rendre le template avec les données
  const outputContent = nunjucks.renderString(templateContent, variables);

  // Écrire le fichier de sortie
  await fs.writeFile(outputFile, outputContent);

  console.log(`Fichier généré avec succès: ${outputFile}`);
} catch (err) {
  console.error(`Erreur: ${err.message}`);
  process.exit(1);
}
