# Interface graphique

`radar-immobilier-europe.html` : page autonome, à ouvrir dans un navigateur (double-clic). Elle montre la carte des zones, la fiche de chaque zone avec ses annonces, les filtres (mer, montagne, ville, marchés à anticiper), les zones hors top 10, les zones à éviter, les dates à surveiller et la check-list avant une offre. Un bouton bascule entre le cycle 1 (rendements nets, par défaut), l'ancien classement 150 k€ en brut et le premier rapport (150 à 400 k€). La vue cycle 1 ajoute les zones écartées et le bloc des enchères Ortigia.

## Mettre à jour

Les données sont dans `source/data.mjs` (reprises des rapports de `rapports/`). Après modification :

```
cd interface/source
npm install
npm run build
```

Le script régénère `interface/radar-immobilier-europe.html` (fond de carte calculé depuis world-atlas).
