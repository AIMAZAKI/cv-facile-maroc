# CV Facile Maroc

Site statique gratuit de création de CV, en français, avec aperçu en direct et export PDF via la boîte de dialogue d’impression du navigateur.

## Fonctionnalités
- Formulaire de CV avec validation HTML de base.
- Aperçu dynamique sans rechargement.
- Téléchargement en PDF via **Imprimer > Enregistrer au format PDF**.
- Design responsive, navigation mobile, pages À propos et Confidentialité.
- Illustration SVG locale, favicon SVG.
- Aucun backend, compte, base de données ou service payant requis.
- Les données saisies ne sont pas envoyées à un serveur par ce code.

## Lancer sur Windows
1. Téléchargez et décompressez le ZIP.
2. Ouvrez le dossier `AutoSiteMaroc`.
3. Double-cliquez sur `index.html` pour l'ouvrir dans Chrome ou Edge.
4. Remplissez le formulaire puis cliquez sur **Télécharger PDF**. Choisissez **Enregistrer au format PDF** dans la fenêtre d'impression.

Vous pouvez aussi utiliser VS Code et l'extension Live Server, mais ce n'est pas nécessaire.

## Publication gratuite avec GitHub Pages
1. Créez un compte GitHub.
2. Créez un dépôt public, par exemple `cv-facile-maroc`.
3. Téléversez le contenu du dossier (pas le dossier ZIP lui-même) : `index.html`, `styles.css`, `script.js`, `about.html`, `privacy.html`, `assets/`, `README.md`.
4. Dans le dépôt, ouvrez **Settings → Pages**.
5. Dans **Build and deployment**, choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
6. Attendez le déploiement et ouvrez l'adresse GitHub Pages indiquée dans la section Pages.

Les libellés de GitHub peuvent changer légèrement. Ne publiez pas de mots de passe, clés API ni données personnelles.

## Comment monétiser avec de la publicité
- Il n'y a **aucune publicité réelle** dans cette version; les blocs sont des emplacements visuels.
- Publiez le site, vérifiez toutes les pages et ajoutez du contenu original réellement utile (exemples de CV pour métiers différents, conseils de candidature adaptés au Maroc, erreurs fréquentes, etc.).
- Ajoutez une adresse de contact réelle et une politique de confidentialité correspondant à vos pratiques.
- Quand le site est prêt et qu'il dispose d'un contenu suffisant, vérifiez les conditions actuelles d'un réseau comme Google AdSense et soumettez-le pour examen. L'approbation n'est jamais garantie.
- N'insérez pas votre propre code publicitaire avant que le réseau vous l'autorise. Ne cliquez jamais sur vos propres annonces et ne demandez pas aux visiteurs de cliquer.
- Les revenus dépendent du trafic réel, du pays des visiteurs, de la qualité du contenu et des règles du réseau. Ce n'est pas un revenu automatique garanti.

## Limites techniques
Le PDF est généré par la fonction d'impression du navigateur, et non par un moteur PDF intégré. La mise en page peut varier légèrement selon le navigateur. Il n'y a pas de serveur, d'authentification ni de stockage cloud.


### Photo de profil facultative
Dans la section « Informations personnelles », vous pouvez choisir une photo JPG, PNG ou WebP de 2 Mo maximum. Elle apparaît dans l’aperçu et le PDF. La photo est lue localement dans votre navigateur et n’est pas envoyée à un serveur.
