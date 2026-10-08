// Données tirées des rapports du manager du 08/10/2026 (rapports/*.md).
// types : mer | montagne | ville ; statut : actuelle | signal | anticiper

export const budget150 = [
  {
    id: 'ortigia', rang: 1, nom: 'Syracuse, Ortigia', region: 'Sicile', pays: 'Italie', lon: 15.29, lat: 37.06,
    types: ['mer', 'ville'], statut: 'actuelle', note: 8.5, rendement: '12 à 14 %', prixM2: '2 453 €/m²',
    hausse: 'Plemmirio +15 % en un an', exemple: '55 m² rénové, déjà loué aux touristes, 115 k€',
    resume: "Centre classé UNESCO, nuitée parmi les plus chères de l'étude (~140 €), biens déjà exploités en location touristique.",
    signal: null,
    annonces: [
      { titre: 'Via Arizzi, 55 m²', prix: '115 000 €', url: 'https://www.immobiliare.it/annunci/128801082/', verifie: true, detail: 'Rénové, meublé, déjà loué aux touristes, près du Lungomare. ~14 % brut.' },
      { titre: 'Ronco dei Cassari, 30 m²', prix: '115 000 €', url: 'https://www.immobiliare.it/annunci/128554598/', verifie: true, detail: "À 100 m de Porta Marina, déjà loué avec « d'excellents avis ». ~12 % brut." },
      { titre: 'Via Larga, 55 m²', prix: '120 000 €', url: 'https://www.immobiliare.it/annunci/113711789/', verifie: true, detail: 'Rénové, réseaux refaits, meublé. ~12 % brut.' },
    ],
    regles: ['Code CIN obligatoire', 'Impôt forfaitaire (cedolare secca) de 21 %', 'Taxe foncière IMU pour un non-résident', 'Pas de moratoire local'],
    risques: ['Concurrence forte à Ortigia', 'Bâti ancien : vérifier la copropriété et l\'humidité', 'Frais d\'achat ~13 à 15 % en plus du prix (estimation)'],
    plus: 'Piste bonne affaire : ventes aux enchères à Ortigia (Ronco I Bottai), à partir de 81 k€.',
    source: { label: 'immobiliare.it', url: 'https://www.immobiliare.it/mercato-immobiliare/sicilia/siracusa/' },
  },
  {
    id: 'brasov', rang: 2, nom: 'Brașov, centre historique', region: 'Transylvanie', pays: 'Roumanie', lon: 25.59, lat: 45.64,
    types: ['ville', 'montagne'], statut: 'signal', note: 8, rendement: '11 à 13 %', prixM2: '2 355 €/m²',
    hausse: '+7,7 % sur 2025', exemple: 'Studio 37 m² rénové à 70 m de la grand-place, 95 k€',
    resume: "Ticket d'entrée de 90 à 95 k€, impôt léger (10 %), ville l'été et ski l'hiver.",
    signal: 'Base Wizz Air à Brașov-Ghimbav en décembre 2026 (Barcelone, Madrid, Karlsruhe).',
    annonces: [
      { titre: 'Studio rue Michael Weiss, 37 m²', prix: '95 000 €', url: 'https://www.publi24.ro/anunturi/imobiliare/de-vanzare/apartamente/garsoniera/anunt/studio-ultracentral-brasov-michael-weiss/88d09019dh0e746hd226f7218ifi90d7.html', verifie: true, detail: 'Immeuble de 1910 rénové, meublé, à 70 m de Piața Sfatului. ~12,7 % brut.' },
      { titre: 'Studio rue N. Bălcescu, 30 m²', prix: '90 000 €', url: 'https://www.publi24.ro/anunturi/imobiliare/de-vanzare/apartamente/garsoniera/anunt/garsoniera-de-vanzare-centrul-istoric-n-balcescu/808797h59ddf7464d13gf8241dh5g4gi.html', verifie: true, detail: 'Les voisins ont déjà accepté la location touristique. ~11 % brut.' },
      { titre: '2 pièces rue Postăvarului, 42 m²', prix: '127 000 €', url: 'https://www.publi24.ro/anunturi/imobiliare/de-vanzare/apartamente/apartamente-2-camere/anunt/apartament-modern-2-camere-centrul-istoric/4dd123h8h53d7dh1e4137gd804403d7g.html', verifie: true, detail: '~11 % brut.' },
    ],
    regles: ['Code unique (plateforme SITUR) et certificat de classement depuis mai 2026', 'Impôt de 10 % après un abattement de 30 %'],
    risques: ['Offre en forte hausse (+21 % de logements Airbnb en 2025)', 'Beaucoup de logements non déclarés, contrôles à prévoir', 'Hors zone euro (leu)'],
    source: { label: 'Romania Insider', url: 'https://www.romania-insider.com/wizz-air-base-brasov-aug-2026' },
  },
  {
    id: 'lecce', rang: 3, nom: 'Lecce, centre historique', region: 'Pouilles', pays: 'Italie', lon: 18.17, lat: 40.35,
    types: ['ville'], statut: 'actuelle', note: 7.5, rendement: '11 à 14 %', prixM2: '1 961 €/m²',
    hausse: 'Prix stables', exemple: '40 m² rénové et meublé, 89 k€',
    resume: "Très bon rendement et tourisme urbain toute l'année, mais peu de plus-value à attendre.",
    signal: null,
    annonces: [
      { titre: 'Corte degli Anibaldi, 40 m²', prix: '89 000 €', url: 'https://www.immobiliare.it/annunci/128365000/', verifie: true, detail: 'Entièrement rénové, meublé. ~14 % brut.' },
      { titre: 'Vico dei Crety, 45 m²', prix: '116 000 €', url: 'https://www.immobiliare.it/annunci/130694236/', verifie: true, detail: 'Voûtes en pierre de Lecce, classe énergie G. ~11,7 % brut.' },
      { titre: 'Vico dei Guidani, 61 m²', prix: '128 000 €', url: 'https://www.immobiliare.it/annunci/123007502/', verifie: true, detail: 'Présenté comme maison de vacances indépendante. ~11 % brut.' },
      { titre: 'Variante plage : Gallipoli, 46 m²', prix: '119 000 €', url: 'https://www.immobiliare.it/annunci/131030826/', verifie: true, detail: 'Centre historique. ~10 % brut, seulement en été.' },
    ],
    regles: ['Même régime italien que Syracuse : CIN, 21 % forfaitaire'],
    risques: ['Peu de plus-value à attendre', 'À 12 km de la mer'],
    plus: 'Piste enchères : Piazzetta Battisti, à partir de 38,8 k€.',
    source: { label: 'immobiliare.it', url: 'https://www.immobiliare.it/mercato-immobiliare/puglia/lecce/' },
  },
  {
    id: 'heraklion', rang: 4, nom: 'Héraklion', region: 'Crète', pays: 'Grèce', lon: 25.13, lat: 35.34,
    types: ['mer', 'ville'], statut: 'signal', note: 7.5, rendement: '~10 %', prixM2: '2 200 €/m²',
    hausse: 'Crète +50 % en 5 ans', exemple: '74 m² à rénover, ~99 k€ + ~20 k€ de travaux',
    resume: "Sous 140 k€, on achète de l'ancien en ville. Le neuf en bord de mer dépasse le budget.",
    signal: 'Nouvel aéroport de Kastelli prévu en 2027.',
    annonces: [
      { titre: 'Katsambas, 74 m²', prix: '~99 000 €', url: 'https://realting.com/greece/property/3865751', verifie: true, detail: 'Près du port, centre à pied, à rénover, vendu meublé. ~10 % brut avec ~20 k€ de travaux.' },
    ],
    regles: ['Registre national AMA', 'Pas de gel des inscriptions en Crète'],
    risques: ['Retard possible de l\'aéroport', 'Studio neuf à Hersonissos ~148 k€ : hors budget'],
    plus: 'Créer des alertes à 140 k€ max sur spitogatos.gr et xe.gr (Katsambas, Poros, Amoudara, Gazi).',
    source: { label: 'Protothema', url: 'https://en.protothema.gr/2026/08/19/housing-how-much-prices-have-risen-on-the-greek-islands-crete-leads-with-50-over-five-years/' },
  },
  {
    id: 'pizzo', rang: 5, nom: 'Pizzo', region: 'Calabre', pays: 'Italie', lon: 16.16, lat: 38.73,
    types: ['mer'], statut: 'anticiper', note: 7.5, rendement: '7 à 9 %', prixM2: '1 410 €/m²',
    hausse: '+5,5 % en un an', exemple: '62 à 68 m² vue mer, 115 à 135 k€ (non vérifiés)',
    resume: "Prix encore bas (Tropea, la voisine, est à 2 400 €/m²), à 15 km de l'aéroport de Lamezia.",
    signal: "Ryanair : +82 % de sièges et 5 nouvelles lignes à Lamezia à l'été 2026. Surtaxe municipale sur les billets supprimée.",
    annonces: [
      { titre: '3 pièces Lungomare Colombo, 62 m²', prix: '115 000 €', url: 'https://www.idealista.it/immobile/36728333/', verifie: false, detail: 'Vue dans les résultats de recherche, fiche non ouverte.' },
      { titre: '3 pièces vue mer, Via Riviera Prangi, 68 m²', prix: '135 000 €', url: 'https://www.idealista.it/immobile/36397541/', verifie: false, detail: 'Vue dans les résultats de recherche, fiche non ouverte.' },
    ],
    regles: ['Régime italien : CIN, 21 % forfaitaire'],
    risques: ['Saison concentrée de juin à septembre', 'Bâti des années 1970 à 1990', 'Dépendance aux décisions de Ryanair'],
    plus: 'Horizon : 2026 à 2028.',
    source: { label: 'RealAdvisor', url: 'https://realadvisor.it/it/mercato-immobiliare/comune-pizzo-it' },
  },
  {
    id: 'tarvisio', rang: 6, nom: 'Tarvisio', region: 'Alpes juliennes', pays: 'Italie', lon: 13.58, lat: 46.50,
    types: ['montagne'], statut: 'actuelle', note: 7.5, rendement: '~10 %', prixM2: '2 527 €/m²',
    hausse: '+23,7 % en un an', exemple: 'Studio 27 m² meublé près des pistes, 90 k€',
    resume: "Double saison, ski l'hiver et montagne l'été. Bormio est à ~6 950 €/m², Cortina à ~20 000 €/m².",
    signal: null,
    annonces: [
      { titre: 'Studio via Priesnig, 27 m²', prix: '90 000 €', url: 'https://www.immobiliare.it/annunci/132021810/', verifie: true, detail: 'Meublé, terrasse panoramique, près des pistes, charges 22 €/mois. ~10 % brut.' },
      { titre: '3 pièces via degli Alpini, 95 à 115 m²', prix: '139 000 €', url: 'https://www.casa.it/immobili/54877889/', verifie: true, detail: 'À deux pas des pistes, classe G, petits travaux. ~11 % brut avant travaux.' },
    ],
    regles: ['Régime italien : CIN, 21 % forfaitaire'],
    risques: ['Station de basse altitude face au réchauffement', 'Petit marché pour la revente', 'Éviter les annonces de Camporosso à 1 000–16 000 € (multipropriétés)'],
    source: { label: 'immobiliare.it', url: 'https://www.immobiliare.it/mercato-immobiliare/friuli-venezia-giulia/tarvisio/' },
  },
  {
    id: 'ulcinj', rang: 7, nom: 'Ulcinj', region: 'Côte sud', pays: 'Monténégro', lon: 19.22, lat: 41.93,
    types: ['mer'], statut: 'anticiper', note: 7, rendement: '6 à 8 %', prixM2: '2 300 à 2 500 €/m²',
    hausse: 'Neuf en ville', exemple: 'T2 neuf de 50 à 60 m² (références de prix, pas d\'annonce active)',
    resume: 'Récupère la demande de Kotor et Budva, devenus trop chers. Un T2 de 50 à 60 m² pour 140 k€.',
    signal: "Base Wizz Air à Podgorica depuis mars 2026 (17 destinations). Adhésion à l'UE visée en 2028-2029. Resort 5 étoiles Porta Rai sur Velika Plaža.",
    annonces: [],
    regles: ['Hors UE : avocat local indispensable'],
    risques: ['Saison courte', 'Vente sur plan', 'Retard possible de l\'adhésion à l\'UE'],
    plus: 'Les références trouvées sont archivées. Chercher en direct sur realting.com ou chez des agences locales.',
    source: { label: 'CAPA', url: 'https://centreforaviation.com/news/wizz-air-opens-podgorica-base-1353809' },
  },
  {
    id: 'arrifes', rang: 8, nom: 'Arrifes, Ponta Delgada', region: 'Açores', pays: 'Portugal', lon: -25.70, lat: 37.77,
    types: ['mer'], statut: 'actuelle', note: 7, rendement: '~9,5 %', prixM2: '~2 350 €/m²',
    hausse: '+12,8 % en un an', exemple: 'Studio neuf meublé de 35 m², 129,5 k€',
    resume: "75 % d'occupation, et les Açores sont exclues de la taxe extraordinaire sur la location touristique (AL).",
    signal: null,
    annonces: [
      { titre: 'Studio Arrifes, 35 m²', prix: '129 500 €', url: 'https://www.imovirtual.com/pt/anuncio/apartamento-t0-nos-arrifes-casas-encanto-dos-arrifes-ID1iWPH', verifie: true, detail: 'Neuf, meublé, résidence fermée, à ~4 km de Ponta Delgada. ~9,5 % brut.' },
      { titre: 'Maison T0 Calhetas, Ribeira Grande, 64 m²', prix: '80 000 €', url: 'https://www.imovirtual.com/pt/anuncio/moradia-t0-para-venda-ID1iNSI', verifie: true, detail: 'Près de la mer, à rénover (~30 k€ de travaux). ~9 % brut.' },
    ],
    regles: ['Licence AL (Alojamento Local)', 'Açores exclues de la contribution extraordinaire AL'],
    risques: ["L'offre est très mince à ce budget", 'Dépendance aux vols, petit marché pour la revente'],
  },
  {
    id: 'retamar', rang: 9, nom: 'Retamar, Almería', region: 'Andalousie', pays: 'Espagne', lon: -2.30, lat: 36.86,
    types: ['mer'], statut: 'signal', note: 6.5, rendement: '~8,5 %', prixM2: '2 396 €/m²',
    hausse: '+24 % en un an', exemple: 'Studio vue plage de 35 m², 105 k€',
    resume: '~3 000 h de soleil, Cabo de Gata, prix moitié de Málaga.',
    signal: 'Ligne TGV Murcie–Almería prévue en 2027.',
    annonces: [
      { titre: 'Studio vue plage, Camino del Pueblo, 35 m²', prix: '105 000 €', url: 'https://english.habitaclia.com/buy-studio-camino_del_pueblo_6-almeria-i500006046032.htm', verifie: true, detail: '~8,7 % brut.' },
      { titre: '1 chambre, résidence avec 2 piscines, 65 m²', prix: '136 000 €', url: 'https://english.habitaclia.com/buy-flat-camino_de_la_fragua_10-almeria-i53195000000391.htm', verifie: true, detail: '~8 % brut.' },
    ],
    regles: ['Registres andalou (RTA) et national (NRUA)', 'La copropriété peut interdire la location touristique (vote aux 3/5) : acheter là où elle est déjà autorisée'],
    risques: ['Front de mer de Zapillo à partir de ~240 k€, hors budget'],
    source: { label: 'idealista', url: 'https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/andalucia/almeria-provincia/almeria/' },
  },
  {
    id: 'shengjin', rang: 10, nom: 'Shëngjin', region: 'Côte nord', pays: 'Albanie', lon: 19.59, lat: 41.81,
    types: ['mer'], statut: 'anticiper', note: 6.5, rendement: '7 à 9 % (sur le papier)', prixM2: '1 250 à 1 300 €/m²',
    hausse: "Les plus bas de l'étude", exemple: '60 m² neuf à 200 m de la mer, ~74 k€',
    resume: "La plage du nord de l'Albanie, à ~1 h de l'aéroport de Tirana. Profil spéculatif.",
    signal: "Ryanair ouvre une base à Tirana à l'été 2026, avec 33 lignes.",
    annonces: [
      { titre: '60 m² neuf à 200 m de la mer', prix: '~74 000 €', url: 'https://realting.com/albania/property/3593877', verifie: false, detail: 'Active à sa dernière mise à jour, non confirmée auprès de l\'agence.' },
      { titre: '77 m² en 1re ligne, vue mer', prix: '~98 000 €', url: 'https://realting.com/albania/property/3860826', verifie: false, detail: 'Active à sa dernière mise à jour, non confirmée auprès de l\'agence.' },
    ],
    regles: ['Impôt de 15 %', 'Pas de plafond de nuitées'],
    risques: ['Titre de propriété : avocat et cadastre ASHK indispensables', 'Offre de béton en excès', 'Qualité de construction', 'Hors UE'],
    source: { label: 'TravelDailyNews', url: 'https://www.traveldailynews.com/aviation/ryanair-to-open-new-tirana-base-for-summer-2026/' },
  },
];

export const horsTop150 = [
  { nom: 'Sarajevo, Stari Grad', pays: 'Bosnie', lon: 18.43, lat: 43.86, note: 6.5, pourquoi: '1 pièce de 42 m² à ~112 k€, ~10 % brut, mais très peu d\'offre et pays hors UE', url: 'https://www.prostor.ba/prodaja/stan/stari-grad/13205' },
  { nom: 'Cracovie, Stare Podgórze', pays: 'Pologne', lon: 19.95, lat: 50.04, note: 6, pourquoi: '50 m² à ~123 k€, quartier peu touristique, loi sur la location courte durée en préparation', url: 'https://www.domiporta.pl/nieruchomosci/sprzedam-mieszkanie-trzypokojowe-krakow-podgorze-stare-podgorze-mitery-50m2/156590823' },
  { nom: 'Kalamata', pays: 'Grèce', lon: 22.11, lat: 37.04, note: 6, pourquoi: 'Concession de l\'aéroport signée en 2026, mais aucune annonce vérifiée et des travaux sans date' },
  { nom: 'Cáceres', pays: 'Espagne', lon: -6.37, lat: 39.47, note: 6, pourquoi: 'Pari binaire : la ville saura en décembre 2026 si elle devient Capitale européenne de la culture 2031' },
  { nom: 'Bansko', pays: 'Bulgarie', lon: 23.49, lat: 41.84, note: 5.5, pourquoi: '74,9 m² à 74 500 €, mais ~30 % d\'occupation, trop de logements et revente lente', url: 'https://www.bulgarianproperties.com/1-bedroom_apartments_in_Bulgaria/AD90309BG_1-bedroom_apartment_for_sale_in_Bansko.html' },
  { nom: 'Vlorë / Orikum', pays: 'Albanie', lon: 19.49, lat: 40.47, note: 5.5, pourquoi: 'Aéroport toujours pas ouvert, saison de 3 à 4 mois, ~6 % brut' },
  { nom: 'Évora', pays: 'Portugal', lon: -7.91, lat: 38.57, note: 4.5, pourquoi: 'Capitale européenne de la culture 2027, déjà dans les prix' },
  { nom: 'Liepāja', pays: 'Lettonie', lon: 21.01, lat: 56.51, note: 4, pourquoi: 'Pas de vols réguliers' },
];

export const recommandation150 = [
  { titre: 'Choix n°1', zone: 'ortigia', texte: "Un petit appartement déjà exploité en location touristique : on peut demander l'historique de revenus avant d'acheter. UNESCO, nuitée parmi les plus chères, zone euro, fiscalité simple (21 %)." },
  { titre: 'Plan B moins cher', zone: 'brasov', texte: "Ticket d'entrée de 90 à 95 k€, impôt de 10 %, base Wizz Air en décembre 2026. Il reste ~50 k€ de marge pour des travaux ou une réserve." },
  { titre: "Pari d'anticipation", zone: 'pizzo', zone2: 'ulcinj', texte: 'Pour qui accepte une saison courte (juin à septembre) en échange d\'un prix encore bas avant la hausse attendue.' },
];

export const aEviter150 = 'Madère, Larnaca (TVA de 19 % pour un investisseur), Poiana Brașov, Zabłocie, Canaries (licence non transmissible), Budapest (gel des licences), la côte bulgare (effet euro déjà dans les prix) et le littoral français.';

// Premier rapport : budget 150 à 400 k€
export const budget400 = [
  { id: 'v1-heraklion', rang: 1, nom: 'Héraklion', region: 'Crète', pays: 'Grèce', lon: 25.13, lat: 35.34, types: ['mer', 'ville'], statut: 'signal', note: 8.5, prixM2: '~2 200 €/m²', hausse: '+50 % sur 5 ans (Crète)', rendement: '9 à 11 %',
    resume: 'Le meilleur équilibre : prix 30 % sous La Canée, aucune restriction locale à ce jour.', signal: 'Aéroport de Kastelli en 2027 (chantier à 40 %).',
    annonces: [{ titre: 'Mastabas, 90 m², à rénover', prix: '179 000 €', url: 'https://ktimatoemporiki.gr/property/apartment-for-sale-in-herakelion-id-24-9979', verifie: true }],
    regles: ['Registre national AMA', 'Taxe climat payée par le voyageur (8 €/nuit en saison)'], risques: ['Retard de l\'aéroport', 'Offre en hausse (+19 % d\'annonces)', 'Pression politique sur le logement'] },
  { id: 'v1-pontadelgada', rang: 2, nom: 'Ponta Delgada', region: 'Açores', pays: 'Portugal', lon: -25.67, lat: 37.74, types: ['mer'], statut: 'actuelle', note: 8, prixM2: '~2 350 €/m²', hausse: '+12,8 %', rendement: '10 à 14 % (optimiste)',
    resume: 'Le marché qui monte le plus vite du Portugal, encore 40 % sous Madère, occupation de 75 %.', signal: null,
    annonces: [
      { titre: 'T1 103 m², São Pedro', prix: '210 000 €', url: 'https://www.imovirtual.com/pt/anuncio/-ID1iPNF', verifie: true },
      { titre: 'T1 65 m², Arrifes', prix: '182 000 €', url: 'https://www.imovirtual.com/pt/anuncio/apartamento-t1-nos-arrifes-casas-encanto-dos-arrifes-ID1iWR7', verifie: true },
      { titre: 'T1 71 m², Rua do Meio', prix: '295 000 €', url: 'https://www.imovirtual.com/pt/anuncio/apartamento-t1-para-venda-ID1iWlL', verifie: true }],
    regles: ['Licence AL', 'Açores exclues de la contribution extraordinaire AL', 'Non-résident : ≈ 8,75 % du chiffre d\'affaires en régime simplifié'], risques: ['Dépendance aux vols', 'Météo changeante', 'Petit marché pour la revente'] },
  { id: 'v1-syracuse', rang: 3, nom: 'Syracuse (Ortigia, Plemmirio)', region: 'Sicile', pays: 'Italie', lon: 15.29, lat: 37.06, types: ['mer', 'ville'], statut: 'actuelle', note: 8, prixM2: '1 820 à 2 450 €/m²', hausse: '+3 à +15 %', rendement: '9 à 12 %',
    resume: 'Site UNESCO, nuitée ~140 €, prix 2 à 3 fois inférieurs à Taormine ou la côte amalfitaine.', signal: null,
    annonces: [
      { titre: 'Via Mirabella, 108 m² (studio + T2)', prix: '255 000 €', url: 'https://www.wikicasa.it/annuncio/30167950', verifie: true },
      { titre: '2 pièces Via dei Cordari', prix: '170 000 €', url: 'https://www.immobiliare.it/annunci/99833854/', verifie: true },
      { titre: '3 pièces Piazzetta San Rocco', prix: '235 000 €', url: 'https://www.immobiliare.it/annunci/129203196/', verifie: true }],
    regles: ['Code CIN', '21 % forfaitaire sur le 1er logement, 26 % à partir du 2e'], risques: ['Ortigia très concurrentiel', 'Bâti ancien', 'Aéroport de Catane à 1 h'] },
  { id: 'v1-madere', rang: 4, nom: 'Santa Cruz / Caniço / Machico', region: 'Madère', pays: 'Portugal', lon: -16.79, lat: 32.69, types: ['mer'], statut: 'actuelle', note: 7.5, prixM2: '3 060 à 3 550 €/m²', hausse: '+4 à +24 %', rendement: '9 à 11 %',
    resume: 'Funchal a gelé les nouvelles licences AL : la demande se reporte sur ces communes voisines.', signal: null,
    annonces: [
      { titre: 'T1 52 m², Garajau', prix: '255 000 €', url: 'https://www.imovirtual.com/pt/anuncio/apartamento-t1-edificio-horizonte-azul-garajau-ID1iDsi', verifie: true },
      { titre: 'T1 56 m², Caniço', prix: '250 000 €', url: 'https://www.imovirtual.com/pt/anuncio/apartamento-t1-para-venda-ID1iEbJ', verifie: true }],
    regles: ['Licence AL, à vérifier commune par commune'], risques: ['Les restrictions de Funchal peuvent s\'étendre'] },
  { id: 'v1-almeria', rang: 5, nom: 'Almería (Zapillo, Retamar)', region: 'Andalousie', pays: 'Espagne', lon: -2.30, lat: 36.86, types: ['mer'], statut: 'signal', note: 7.5, prixM2: '1 800 à 2 400 €/m²', hausse: '+10 à +24 %', rendement: '7 à 9 %',
    resume: 'Encore 22 % sous le pic de 2008, prix moitié de Málaga.', signal: 'TGV Murcie–Almería en 2027.',
    annonces: [], regles: ['RTA et NRUA', 'Copropriété : blocage possible aux 3/5'], risques: ['Acheter un bien dont la copropriété autorise déjà la location'] },
  { id: 'v1-tarvisio', rang: 6, nom: 'Tarvisio / Camporosso', region: 'Frioul', pays: 'Italie', lon: 13.58, lat: 46.50, types: ['montagne'], statut: 'actuelle', note: 7.5, prixM2: '~2 530 €/m²', hausse: '+23,7 %', rendement: '9 à 10 %',
    resume: 'Vraie double saison été/hiver, 4 aéroports proches.', signal: null, annonces: [], regles: ['Régime italien : CIN, 21 %'], risques: ['Altitude basse', 'Petit marché peu liquide', 'Surchauffe possible après +24 %'] },
  { id: 'v1-brasov', rang: 7, nom: 'Brașov (centre + Poiana)', region: 'Transylvanie', pays: 'Roumanie', lon: 25.59, lat: 45.64, types: ['ville', 'montagne'], statut: 'signal', note: 7.5, prixM2: '~2 350 €/m²', hausse: '+7,7 %', rendement: '7 à 8 %',
    resume: 'Fiscalité parmi les plus légères de l\'étude (10 % après abattement de 30 %).', signal: 'Base Wizz Air en décembre 2026.', annonces: [], regles: ['10 % après abattement de 30 %'], risques: ['Offre en forte hausse et largement non déclarée', 'Enneigement modeste'] },
  { id: 'v1-lecce', rang: 8, nom: 'Lecce, centre historique', region: 'Pouilles', pays: 'Italie', lon: 18.17, lat: 40.35, types: ['ville'], statut: 'actuelle', note: 7, prixM2: '1 670 à 1 960 €/m²', hausse: '~0 à +2 %', rendement: '8 à 11 %',
    resume: 'Ticket d\'entrée bas, demande culturelle hors saison, peu de plus-value.', signal: null,
    annonces: [
      { titre: '2 pièces Vicolo Renzi', prix: '159 000 €', url: 'https://www.immobiliare.it/annunci/118069775/', verifie: true },
      { titre: '2 pièces Via Marco Basseo, ~55 m²', prix: '165 000 €', url: 'https://www.immobiliare.it/annunci/131209664/', verifie: true },
      { titre: '3 pièces Via Caracciolo, 120 m²', prix: '250 000 €', url: 'https://www.immobiliare.it/annunci/122530598/', verifie: true }],
    regles: ['Régime italien : CIN, 21 %'], risques: ['À 12 km de la mer'] },
  { id: 'v1-vlore', rang: 9, nom: 'Vlorë / Orikum', region: 'Riviera', pays: 'Albanie', lon: 19.49, lat: 40.47, types: ['mer'], statut: 'anticiper', note: 7, prixM2: '2 000 à 3 500 €/m²', hausse: '+22 à +28 %', rendement: '7 à 9 %',
    resume: 'Profil spéculatif, hors UE.', signal: 'Aéroport de Vlorë attendu (toujours pas ouvert).',
    annonces: [
      { titre: '48 m² à 200 m de la plage', prix: '~104 000 €', url: 'https://realting.com/albania/property/3722751', verifie: true },
      { titre: 'T2 63 m², Orikum', prix: '~122 000 €', url: 'https://realting.com/albania/property/3704286', verifie: true }],
    regles: ['Impôt de 15 %, pas de licence spécifique'], risques: ['Titres de propriété', 'Qualité de construction', 'Saison courte'] },
  { id: 'v1-larnaca', rang: 10, nom: 'Larnaca (hors front de mer)', region: 'Chypre', pays: 'Chypre', lon: 33.63, lat: 34.92, types: ['mer'], statut: 'signal', note: 6.5, prixM2: '2 300 à 2 800 €/m² (neuf)', hausse: '+11 %', rendement: '8 à 10 %',
    resume: 'Saison quasi annuelle, occupation de 75 %.', signal: 'Projet de marina à 1,2 Md€.',
    annonces: [{ titre: 'T2 Finikoudes, 47 m²', prix: '270 000 €', url: 'https://index.cy/sale/8231502-1-bedroom-apartment-for-sale-in-larnaca-finikoudes/', verifie: true }],
    regles: ['TVA de 19 % sur le neuf'], risques: ['Marina abandonnée trois fois en 20 ans', 'Chaleur et manque d\'eau'] },
];

export const horsTop400 = [
  { nom: 'Sarajevo', pays: 'Bosnie', lon: 18.43, lat: 43.86, note: 7, pourquoi: '+18 à +23 % sur 1 an, ville + ski, mais hors UE et occupation faible hors été' },
  { nom: 'Gijón', pays: 'Espagne', lon: -5.66, lat: 43.54, note: 6.5, pourquoi: '« Refuge climatique », +15,8 %, mais accord de la copropriété obligatoire' },
  { nom: 'Peniche / Baleal', pays: 'Portugal', lon: -9.38, lat: 39.36, note: 6.5, pourquoi: 'Surf à 1 h de Lisbonne, mais occupation moyenne et beaucoup de neuf' },
  { nom: 'Cracovie (Podgórze)', pays: 'Pologne', lon: 19.95, lat: 50.04, note: 6.5, pourquoi: 'Occupation 77 %, mais zones d\'interdiction possibles dès 2029' },
  { nom: 'Zadar', pays: 'Croatie', lon: 15.23, lat: 44.12, note: 6, pourquoi: 'Déjà ~4 100 €/m², accord des 2/3 des copropriétaires' },
  { nom: 'Kotor / Tivat', pays: 'Monténégro', lon: 18.77, lat: 42.42, note: 6, pourquoi: '+126 % en 5 ans, déjà cher' },
  { nom: 'Jahorina', pays: 'Bosnie', lon: 18.56, lat: 43.73, note: 6, pourquoi: 'Station olympique bon marché, risque juridique sur le foncier' },
  { nom: 'Bansko', pays: 'Bulgarie', lon: 23.49, lat: 41.84, note: 5, pourquoi: 'Suroffre, occupation de 20 à 27 %' },
  { nom: 'Kołobrzeg', pays: 'Pologne', lon: 15.58, lat: 54.18, note: 5, pourquoi: 'Nuitées −21 % et annonces +46 %' },
  { nom: 'Lorient', pays: 'France', lon: -3.37, lat: 47.75, note: 4, pourquoi: 'Fiscalité et réglementation françaises lourdes' },
];

export const aEviter = [
  { nom: 'Canaries', lon: -15.6, lat: 28.3, raison: 'Loi 6/2025 : plafond à 10 % du parc, la licence ne se transmet plus à l\'acheteur' },
  { nom: 'Budapest', lon: 19.04, lat: 47.5, raison: 'Moratoire jusqu\'à fin 2026, interdiction totale dans le VIe arrondissement' },
  { nom: 'Funchal (Madère)', lon: -16.91, lat: 32.65, raison: 'Nouvelles licences gelées' },
  { nom: 'Baléares, Barcelone, Valence, Alicante', lon: 2.17, lat: 41.39, raison: 'Moratoires sur les licences' },
  { nom: 'Irlande', lon: -6.26, lat: 53.35, raison: 'Changement d\'usage obligatoire dans les zones tendues' },
  { nom: 'Côte d\'Azur et littoral français', lon: 7.26, lat: 43.7, raison: 'Loi Le Meur (abattement réduit, quotas, DPE) et prix élevés' },
  { nom: 'Cortina, Zakopane, Balaton', lon: 12.14, lat: 46.54, raison: 'Déjà trop chers pour le rendement' },
];

export const dates = [
  { quand: 'Déc. 2026', quoi: 'Base Wizz Air à Brașov', zone: 'Brașov' },
  { quand: 'Déc. 2026', quoi: 'Choix de la Capitale européenne de la culture 2031', zone: 'Cáceres' },
  { quand: 'Fin 2026', quoi: 'Ligne grande vitesse Évora–Elvas', zone: 'Évora' },
  { quand: '2027', quoi: 'Aéroport de Kastelli', zone: 'Héraklion' },
  { quand: '2027', quoi: 'TGV Murcie–Almería', zone: 'Almería' },
  { quand: '2028-2029', quoi: 'Adhésion du Monténégro à l\'UE', zone: 'Ulcinj' },
];

export const checklist = [
  "Demander l'historique de location (relevés Airbnb ou Booking) quand le bien est déjà loué.",
  'Vérifier que la location touristique est autorisée pour ce bien : licence ou code, règlement de copropriété, quotas de la commune.',
  "Calculer les frais d'achat réels avec le notaire (~13 à 15 % en Italie pour une résidence secondaire, estimation).",
  'Recalculer le rendement net : retirer environ 30 à 40 % du brut (gestion, ménage, plateformes, charges, impôts).',
  'Hors UE (Monténégro, Albanie, Bosnie) : prendre un avocat local pour le titre de propriété et le permis de construire.',
  "Visiter, ou faire visiter, et confirmer avec l'agent que l'annonce est encore active.",
];
