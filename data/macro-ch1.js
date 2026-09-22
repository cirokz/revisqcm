/* Macroéconomie — Chapitre 1 : La place de la macroéconomie */
window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "macro", courseName: "Macroéconomie", courseIcon: "📊", courseColor: "#8b5cf6",
  chapterId: "macro-ch1", chapterName: "Ch.1 — Place de la macroéconomie",
  questions: [
    { id:"m1-01", chapter:"macro-ch1", difficulty:"facile",
      q:"Quelle branche étudie les décisions individuelles des ménages et entreprises sur des marchés spécifiques ?",
      choices:["La microéconomie","La macroéconomie","La comptabilité nationale","L'économétrie","La finance","La statistique","La gestion","La sociologie","L'économie industrielle","La théorie des jeux"],
      answer:0, explanation:"La microéconomie étudie les décisions individuelles et les marchés spécifiques." },

    { id:"m1-02", chapter:"macro-ch1", difficulty:"facile",
      q:"Quelle branche étudie les phénomènes économiques globaux à l'échelle de groupes d'agents ?",
      choices:["La macroéconomie","La microéconomie","La comptabilité privée","Le marketing","La gestion des ressources humaines","L'audit","Le droit des affaires","La fiscalité","L'économétrie appliquée","La finance d'entreprise"],
      answer:0, explanation:"La macroéconomie adopte une approche globale avec des grandeurs agrégées." },

    { id:"m1-03", chapter:"macro-ch1", difficulty:"moyen",
      q:"Comment se distinguent la microéconomie et la macroéconomie ?",
      choices:["Par la démarche, non par le domaine d'étude","Par le domaine d'étude uniquement","Elles s'opposent totalement","La micro est plus récente","La macro étudie les individus","La micro ignore les prix","La macro refuse les modèles","La micro n'utilise pas de mathématiques","La macro ne parle pas de croissance","Elles sont identiques"],
      answer:0, explanation:"Elles sont complémentaires : elles diffèrent par la démarche (individuelle vs globale)." },

    { id:"m1-04", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quel modèle macroéconomique de base est étudié dans ce cours ?",
      choices:["IS-LM","Solow","Mundell-Fleming","Phillips","Walras","Arrow-Debreu","Ricardo","Heckscher-Ohlin","Cournot","Nash"],
      answer:0, explanation:"Le cours étudie essentiellement le modèle IS-LM (Investment Saving – Liquidity Money)." },

    { id:"m1-05", chapter:"macro-ch1", difficulty:"facile",
      q:"Qui fournit les données agrégées utilisées en macroéconomie ?",
      choices:["La comptabilité nationale","Les banques commerciales","Les ménages eux-mêmes","Le FMI uniquement","Les entreprises privées","Les syndicats","La BCE","Les marchés financiers","Les ONG","Les cabinets de conseil"],
      answer:0, explanation:"La comptabilité nationale collecte et construit les statistiques à l'échelle d'une économie." },

    { id:"m1-06", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quelles sont les trois optiques du PIB ?",
      choices:["Production, demande, revenu","Offre, épargne, inflation","Micro, macro, méso","Nominal, réel, ajusté","Interne, externe, global","Direct, indirect, mixte","Primaire, secondaire, tertiaire","Public, privé, mixte","Court, moyen, long terme","Brut, net, consolidé"],
      answer:0, explanation:"Le PIB peut être appréhendé par la production, la demande ou le revenu." },

    { id:"m1-07", chapter:"macro-ch1", difficulty:"moyen",
      q:"Selon l'optique de la production, le PIB est égal à…",
      choices:["La somme des valeurs ajoutées","La somme des chiffres d'affaires","La somme des salaires","La somme des dépenses publiques","La somme des exportations","La somme des investissements","La somme des impôts","La somme des consommations","La somme des profits","La somme des stocks"],
      answer:0, explanation:"PIB = ΣVA, où VA = production − consommations intermédiaires." },

    { id:"m1-08", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quelle est la formule du PIB selon l'optique de la demande ?",
      choices:["PIB = C + I + G + (X − M)","PIB = C + I + G","PIB = X − M","PIB = ΣVA","PIB = salaires + impôts","PIB = PIB nominal / PIB réel","PIB = C × I × G","PIB = X + M","PIB = épargne + consommation","PIB = revenu − impôts"],
      answer:0, explanation:"PIB = Consommation + Investissement + Dépenses publiques + (Exportations − Importations)." },

    { id:"m1-09", chapter:"macro-ch1", difficulty:"difficile",
      q:"Que signifie l'EBE dans l'optique du revenu ?",
      choices:["Excédent brut d'exploitation (ce qui reste à l'entreprise après salaires et impôts)","Excédent budgétaire de l'État","Emploi brut estimé","Écart du bilan économique","Épargne brute des entreprises","Excédent bancaire estimé","Emprunt brut extérieur","Excédent brut d'échange","Évaluation brute des échanges","Épargne budgétaire exceptionnelle"],
      answer:0, explanation:"EBE = ce qui reste à l'entreprise une fois les revenus salariaux versés et les impôts payés." },

    { id:"m1-10", chapter:"macro-ch1", difficulty:"moyen",
      q:"Le RNB (Revenu National Brut) est égal à…",
      choices:["PIB + solde des flux de revenus primaires avec le reste du monde","PIB − impôts","PIB uniquement","PIB + TVA","PIB × taux de change","PIB / population","PIB + dette publique","PIB − exportations","PIB + importations","PIB + inflation"],
      answer:0, explanation:"RNB = PIB + revenus reçus du reste du monde − revenus versés au reste du monde (± impôts/subventions)." },

    { id:"m1-11", chapter:"macro-ch1", difficulty:"facile",
      q:"Comment définit-on la croissance économique ?",
      choices:["Le taux de variation du PIB","Le niveau du PIB","Le taux de chômage","Le taux d'inflation","La hausse des salaires","La baisse des impôts","L'augmentation du commerce","Le solde budgétaire","La hausse de la consommation","La hausse de l'épargne"],
      answer:0, explanation:"La croissance est le taux de variation du PIB entre deux périodes." },

    { id:"m1-12", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quelle formule donne le taux de croissance du PIB ?",
      choices:["g = (PIBt − PIBt−1) / PIBt−1","g = PIBt − PIBt−1","g = PIBt × PIBt−1","g = PIBt / PIBt−1","g = PIBt + PIBt−1","g = (PIBt + PIBt−1)/2","g = PIBt / population","g = ΔPIB × 100","g = PIB nominal / PIB réel","g = PIB réel / PIB nominal"],
      answer:0, explanation:"Le taux de croissance est la variation relative du PIB entre t−1 et t." },

    { id:"m1-13", chapter:"macro-ch1", difficulty:"facile",
      q:"Comment calcule-t-on le PIB par habitant ?",
      choices:["PIB / population","PIB × population","PIB − population","PIB + population","Population / PIB","PIB / PIB nominal","PIB / taux d'inflation","PIB / surface","PIB / nombre d'entreprises","PIB / taux de chômage"],
      answer:0, explanation:"Le PIB par tête est le ratio entre le PIB et la taille de la population." },

    { id:"m1-14", chapter:"macro-ch1", difficulty:"facile",
      q:"Que regroupe la population active ?",
      choices:["Personnes en emploi + chômeurs","Personnes en emploi uniquement","Chômeurs uniquement","Toute la population","Personnes de plus de 15 ans","Personnes inactives","Enfants et retraités","Étudiants seulement","Femmes et hommes séparément","Personnes de plus de 18 ans"],
      answer:0, explanation:"Population active = individus en emploi + individus en recherche d'emploi." },

    { id:"m1-15", chapter:"macro-ch1", difficulty:"moyen",
      q:"Que regroupe la population inactive ?",
      choices:["Individus sans emploi qui ne sont pas au chômage","Les chômeurs uniquement","Les retraités uniquement","Les étudiants uniquement","Toute la population non salariée","Les personnes en emploi","Les enfants de moins de 15 ans uniquement","Les femmes au foyer uniquement","Les personnes en congé maladie","Les expatriés"],
      answer:0, explanation:"La population inactive regroupe les individus sans emploi qui ne sont pas au chômage (retraités, étudiants, etc.)." },

    { id:"m1-16", chapter:"macro-ch1", difficulty:"moyen",
      q:"Selon l'INSEE, les chômeurs sont…",
      choices:["Les personnes de 15 ans et plus privées d'emploi et en recherchant un","Les personnes de 18 ans et plus sans emploi","Les personnes sans emploi depuis plus d'un an","Les personnes sans emploi et non disponibles","Les personnes de moins de 65 ans sans emploi","Les personnes radiées de Pôle Emploi","Les intérimaires sans mission","Les stagiaires non rémunérés","Les personnes en formation","Les préretraités"],
      answer:0, explanation:"INSEE : personnes de 15 ans et plus, privées d'emploi et en recherchant un." },

    { id:"m1-17", chapter:"macro-ch1", difficulty:"difficile",
      q:"Quels sont les trois critères du BIT pour être considéré au chômage ?",
      choices:["Sans emploi, disponible sous 15 jours, recherche active","Sans emploi, moins de 65 ans, disponible","Sans emploi, majeur, disponible sous 30 jours","Sans emploi depuis 1 mois, disponible, recherche active","Sans emploi, disponible sous 15 jours, majeur","Sans emploi, recherche active depuis 1 mois, disponible","Sans emploi, moins de 25 ans, disponible","Sans emploi, disponible sous 3 mois, majeur","Sans emploi, recherche active depuis 6 mois, majeur","Sans emploi, disponible sous 15 jours, majeur"],
      answer:0, explanation:"BIT : sans emploi, disponible pour prendre un emploi dans les 15 jours, avoir recherché activement un emploi (ou en avoir trouvé un commençant dans 3 mois)." },

    { id:"m1-18", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quelle formule donne le taux de chômage u ?",
      choices:["u = U / L = U / (U + N)","u = U / N","u = N / U","u = U / population totale","u = N / L","u = U × L","u = L / population","u = U / (U − N)","u = N / (U + N)","u = U / PIB"],
      answer:0, explanation:"u = chômeurs / population active = U / (U + N), où N = personnes en emploi." },

    { id:"m1-19", chapter:"macro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que le chômage structurel ?",
      choices:["Chômage lié aux évolutions démographiques, sociales, institutionnelles","Chômage dû à un ralentissement temporaire","Chômage lié aux saisons","Chômage frictionnel","Chômage volontaire","Chômage cyclique","Chômage technologique uniquement","Chômage keynésien","Chômage naturel","Chômage conjoncturel"],
      answer:0, explanation:"Chômage structurel : lié aux évolutions profondes auxquelles le marché du travail doit s'adapter." },

    { id:"m1-20", chapter:"macro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que le chômage conjoncturel ?",
      choices:["Conséquence d'un ralentissement temporaire de l'activité économique","Lié aux évolutions démographiques","Lié au progrès technique","Lié aux saisons","Lié aux institutions","Lié à la mondialisation","Lié aux choix individuels","Lié à la fiscalité","Lié au salaire minimum","Lié aux syndicats"],
      answer:0, explanation:"Chômage conjoncturel : causé par un ralentissement temporaire de l'activité." },

    { id:"m1-21", chapter:"macro-ch1", difficulty:"facile",
      q:"Comment définir l'inflation ?",
      choices:["La hausse du niveau général des prix","La baisse du niveau général des prix","La hausse du PIB","La baisse du chômage","La hausse des salaires","La hausse de la consommation","La baisse des taux","La hausse de l'épargne","La hausse des exportations","La hausse du taux de change"],
      answer:0, explanation:"L'inflation est la hausse du niveau général des prix des biens et services dans une économie." },

    { id:"m1-22", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quelle formule donne le taux d'inflation ?",
      choices:["π = (Pt − Pt−1) / Pt−1","π = Pt − Pt−1","π = Pt / Pt−1","π = Pt × Pt−1","π = (Pt + Pt−1)/2","π = Pt / PIB","π = ΔPIB","π = PIB nominal / PIB réel","π = M × V / T","π = salaires / prix"],
      answer:0, explanation:"π = variation relative du niveau général des prix entre t−1 et t." },

    { id:"m1-23", chapter:"macro-ch1", difficulty:"moyen",
      q:"Que mesure l'IPC (Indice des Prix à la Consommation) ?",
      choices:["L'évolution du coût d'un panier représentatif de biens et services","L'évolution du PIB","L'évolution du chômage","L'évolution des salaires","L'évolution de la masse monétaire","L'évolution des taux d'intérêt","L'évolution des exportations","L'évolution des dépenses publiques","L'évolution de la production industrielle","L'évolution de la bourse"],
      answer:0, explanation:"L'IPC suit la variation du coût d'un panier représentatif de biens et services." },

    { id:"m1-24", chapter:"macro-ch1", difficulty:"difficile",
      q:"Comment calcule-t-on le déflateur du PIB ?",
      choices:["(PIB nominal / PIB réel) × 100","(PIB réel / PIB nominal) × 100","PIB nominal − PIB réel","PIB nominal + PIB réel","PIB nominal × PIB réel","PIB réel / population","PIB nominal / population","(PIBt − PIBt−1) / PIBt−1","PIB réel × 100","PIB nominal / 100"],
      answer:0, explanation:"Déflateur du PIB = (PIB nominal / PIB réel) × 100." },

    { id:"m1-25", chapter:"macro-ch1", difficulty:"facile",
      q:"Qu'est-ce que la déflation ?",
      choices:["Une baisse du niveau général des prix","Une baisse du taux d'inflation","Une hausse des prix","Une hausse du chômage","Une baisse du PIB","Une hausse des taux","Une baisse des salaires","Une crise boursière","Une récession","Une dévaluation"],
      answer:0, explanation:"Déflation = baisse du niveau général des prix (≠ désinflation)." },

    { id:"m1-26", chapter:"macro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que la désinflation ?",
      choices:["Une baisse du taux d'inflation","Une baisse des prix","Une hausse des prix","Une hausse du chômage","Une baisse du PIB","Une hausse des salaires","Une hausse des taux","Une crise monétaire","Une hausse de l'épargne","Une baisse des exportations"],
      answer:0, explanation:"Désinflation = ralentissement de l'inflation (le taux baisse mais reste positif)." },

    { id:"m1-27", chapter:"macro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que la stagflation ?",
      choices:["Croissance faible + inflation et chômage élevés","Croissance forte + inflation forte","Baisse des prix + chômage faible","Croissance forte + chômage faible","Baisse des prix + croissance forte","Inflation nulle + chômage nul","Déflation + croissance forte","Récession + déflation","Croissance + désinflation","Hyperinflation + croissance forte"],
      answer:0, explanation:"Stagflation : stagnation de la croissance + inflation + chômage élevé." },

    { id:"m1-28", chapter:"macro-ch1", difficulty:"facile",
      q:"Qu'est-ce que le marché, en économie ?",
      choices:["Le lieu de rencontre entre l'offre et la demande","Un lieu physique obligatoirement","Une institution gouvernementale","Une place boursière uniquement","Un supermarché","Un contrat","Une taxe","Une loi","Une entreprise","Un syndicat"],
      answer:0, explanation:"Le marché est le lieu (souvent abstrait) de rencontre entre l'offre et la demande." },

    { id:"m1-29", chapter:"macro-ch1", difficulty:"moyen",
      q:"Que caractérise le prix d'équilibre ?",
      choices:["La quantité demandée égale la quantité offerte","L'offre dépasse la demande","La demande dépasse l'offre","Le prix est fixé par l'État","Le prix est nul","Le prix est maximum","La quantité offerte est nulle","La quantité demandée est nulle","Le marché est en crise","L'offre est rigide"],
      answer:0, explanation:"Au prix d'équilibre, offre et demande s'égalisent exactement." },

    { id:"m1-30", chapter:"macro-ch1", difficulty:"facile",
      q:"Quels sont les trois grands marchés macroéconomiques ?",
      choices:["Travail, capitaux, biens et services","Primaire, secondaire, tertiaire","Interne, externe, mixte","Public, privé, mixte","Court, moyen, long terme","Nominal, réel, ajusté","Local, national, international","Formel, informel, mixte","Physique, financier, monétaire","Direct, indirect, dérivé"],
      answer:0, explanation:"Les trois grands marchés : travail, capitaux, biens et services." },

    { id:"m1-31", chapter:"macro-ch1", difficulty:"moyen",
      q:"Que détermine l'équilibre sur le marché du travail en vision néoclassique ?",
      choices:["Le salaire d'équilibre et le volume d'emplois d'équilibre","Le taux d'inflation","Le PIB","Le taux de change","Le niveau des impôts","La politique monétaire","Le déficit public","La dette extérieure","L'épargne nationale","La consommation"],
      answer:0, explanation:"L'intersection offre/demande de travail donne le salaire d'équilibre w* et le volume d'emploi N*." },

    { id:"m1-32", chapter:"macro-ch1", difficulty:"difficile",
      q:"Pour les économistes néoclassiques, que provoque le salaire minimum ?",
      choices:["Du chômage (déséquilibre du marché du travail)","Une hausse de l'emploi","Aucun effet","Une baisse de l'offre de travail","Une baisse de la demande de travail uniquement","Une hausse des salaires sans effet sur l'emploi","Un équilibre parfait","Une hausse de la productivité","Une baisse de l'inflation","Une hausse des profits"],
      answer:0, explanation:"En vision néoclassique, le salaire minimum empêche l'équilibre et crée du chômage." },

    { id:"m1-33", chapter:"macro-ch1", difficulty:"moyen",
      q:"Sur le marché des capitaux, qui offre et qui demande des fonds prêtables ?",
      choices:["Les ménages offrent (épargne), les entreprises demandent (investissement)","Les entreprises offrent, les ménages demandent","L'État offre, les ménages demandent","Les banques offrent, l'État demande","Les ménages offrent, l'État demande","Les entreprises offrent, l'État demande","L'étranger offre, les ménages demandent","Les banques offrent, les entreprises demandent","Les entreprises offrent, les banques demandent","Les ménages demandent, les banques offrent"],
      answer:0, explanation:"Au niveau agrégé, les ménages offrent leur épargne et les entreprises demandent des fonds pour investir." },

    { id:"m1-34", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quelle est l'équation d'équilibre ressources/emplois en économie fermée ?",
      choices:["Y = C + I + G","Y = C + I","Y = C + G","Y = I + G","Y = C + I + G + X − M","Y = X − M","Y = C + X","Y = I + X − M","Y = C + I + G − T","Y = R − D"],
      answer:0, explanation:"En économie fermée : Y = C + I + G. En économie ouverte : Y = C + I + G + X − M." },

    { id:"m1-35", chapter:"macro-ch1", difficulty:"moyen",
      q:"Quel indicateur mesure la performance d'une économie via le solde des revenus avec le reste du monde ?",
      choices:["Le RNB","Le PIB","L'IPC","Le déflateur","Le taux de chômage","Le taux d'inflation","La croissance","Le solde budgétaire","La dette publique","Le taux de change"],
      answer:0, explanation:"Le RNB ajoute au PIB le solde des flux de revenus primaires avec le reste du monde." }
  ]
});