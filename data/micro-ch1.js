window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "micro", courseName: "Microéconomie", courseIcon: "🛒", courseColor: "#a855f7",
  chapterId: "micro-ch1", chapterName: "Ch.1 — Théorie du consommateur",
  questions: [
    { id:"micro1-01", chapter:"micro-ch1", difficulty:"facile",
      q:"Que distingue la microéconomie de la macroéconomie ?",
      choices:["Elle étudie les agents individuels et les marchés particuliers","Elle étudie les agrégats nationaux","Elle est plus récente","Elle n'utilise pas de modèles","Elle est plus quantitative","Elle ignore les prix","Elle est politique","Elle est normative","Elle ne parle pas de rationalité","Elle est plus ancienne"],
      answer:0, explanation:"La microéconomie se place à l'échelle des agents individuels (consommateur, entreprise, marché particulier) ; la macroéconomie étudie les agrégats." },

    { id:"micro1-02", chapter:"micro-ch1", difficulty:"facile",
      q:"Qu'est-ce que la rareté en économie ?",
      choices:["Le déséquilibre entre des ressources limitées et des désirs illimités","Une pénurie extrême uniquement","La pauvreté uniquement","Un manque de production temporaire","Une invention économique","Un excès de biens","L'absence de marché","Un phénomène naturel uniquement","Une situation de monopole","Une taxe sur les ressources"],
      answer:0, explanation:"La rareté désigne le déséquilibre structurel entre ressources limitées et désirs illimités. Même un riche y est confronté (temps limité)." },

    { id:"micro1-03", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que le coût d'opportunité ?",
      choices:["La valeur de la meilleure alternative à laquelle on renonce en effectuant un choix","Un coût comptable","Un coût monétaire direct","Une taxe sur les choix","Une amende","Un coût fixe","Un coût variable","Une dépense obligatoire","Un coût de production","Un impôt"],
      answer:0, explanation:"Le coût d'opportunité = valeur de la meilleure alternative abandonnée. Il intègre le temps, pas seulement l'argent." },

    { id:"micro1-04", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que signifie la préférence stricte A > B ?",
      choices:["Le consommateur préfère strictement A à B","Le consommateur est indifférent","A est au moins aussi bon que B","A est égal à B","A est moins bon que B","A coûte plus cher","A est plus grand","A est plus petit","A domine B","A est forcément plus cher"],
      answer:0, explanation:"A > B : le consommateur préfère strictement A à B, il choisirait systématiquement A si les deux lui étaient offerts gratuitement." },

    { id:"micro1-05", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quelle relation lie la préférence stricte et la préférence faible ?",
      choices:["A > B ssi A ≥ B est vraie et B ≥ A est fausse","A > B ssi A ≥ B est fausse","A > B ssi A ≥ B et B ≥ A","Les deux sont indépendantes","A > B implique A = B","A > B implique B > A","Les deux sont identiques","A > B ssi B ≥ A","A > B ssi A ≤ B","Aucune de ces réponses"],
      answer:0, explanation:"La préférence stricte se déduit de la préférence faible : A > B ⟺ (A ≥ B) et non(B ≥ A)." },

    { id:"micro1-06", chapter:"micro-ch1", difficulty:"facile",
      q:"Quand dit-on qu'un consommateur est indifférent entre A et B (A ~ B) ?",
      choices:["Quand les deux paniers procurent le même niveau de satisfaction","Quand A > B","Quand B > A","Quand A ≥ B","Quand A est moins cher","Quand A est plus grand","Quand A est plus petit","Quand A domine B","Quand A coûte plus","Jamais"],
      answer:0, explanation:"A ~ B ⟺ A ≥ B et B ≥ A : les deux paniers procurent exactement le même niveau de satisfaction." },

    { id:"micro1-07", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'énonce l'axiome de complétude ?",
      choices:["Le consommateur peut toujours comparer deux paniers quelconques","Le consommateur peut toujours comparer trois paniers","Le consommateur est toujours rationnel","Le consommateur connaît tous les prix","Le consommateur ne se trompe jamais","Le consommateur maximise toujours son utilité","Le consommateur est égoïste","Le consommateur est altruiste","Le consommateur connaît son budget","Aucune de ces réponses"],
      answer:0, explanation:"Complétude : pour tout couple (A, B), A ≥ B ou B ≥ A. Aucun panier n'est incomparable." },

    { id:"micro1-08", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'énonce l'axiome de transitivité ?",
      choices:["Si A ≥ B et B ≥ C, alors A ≥ C","Si A > B alors B > A","Si A ≥ B alors A = B","Si A ~ B alors A > B","Si A > B alors A ≥ C","Aucune de ces réponses","Toutes les préférences sont possibles","Les préférences sont circulaires","Les préférences sont aléatoires","Les préférences sont constantes"],
      answer:0, explanation:"Transitivité : si A ≥ B et B ≥ C, alors A ≥ C. Elle garantit la cohérence des préférences." },

    { id:"micro1-09", chapter:"micro-ch1", difficulty:"moyen",
      q:"Pourquoi l'axiome de transitivité est-il essentiel ?",
      choices:["Il évite les préférences circulaires qui ruineraient le consommateur","Il garantit la richesse","Il garantit la santé","Il garantit l'égalité","Il garantit la liberté","Il garantit la propriété","Il garantit le profit","Il garantit l'échange","Il garantit la production","Aucune de ces réponses"],
      answer:0, explanation:"Sans transitivité, un consommateur avec des préférences circulaires pourrait être ruiné par des échanges successifs (A→B→C→A...)." },

    { id:"micro1-10", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'énonce l'axiome de non-satiété ?",
      choices:["Si A contient au moins autant de chaque bien que B, et strictement plus d'au moins un bien, alors A > B","Le consommateur est toujours rassasié","Le consommateur consomme une quantité fixe","Le consommateur est indifférent à tout","Le consommateur n'aime que certains biens","Le consommateur ne consomme qu'un bien","Le consommateur ne consomme rien","Le consommateur est égoïste","Le consommateur est altruiste","Aucune de ces réponses"],
      answer:0, explanation:"Non-satiété : plus, c'est mieux. Elle justifie que la contrainte budgétaire soit saturée à l'optimum." },

    { id:"micro1-11", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'énonce l'axiome de convexité ?",
      choices:["Si A ~ B, tout panier moyen entre A et B est au moins aussi bon que A et B","Le consommateur préfère les extrêmes","Le consommateur préfère un seul bien","Le consommateur est indifférent à tout","Le consommateur consomme toujours la même chose","Le consommateur n'aime pas la diversité","Le consommateur préfère les paniers spécialisés","Aucune de ces réponses","Le consommateur est rassasié","Le consommateur n'a pas de budget"],
      answer:0, explanation:"Convexité : les paniers « moyens » sont préférés (ou indifférents) aux paniers extrêmes. Le consommateur aime la diversité." },

    { id:"micro1-12", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que garantit l'axiome de convexité ?",
      choices:["L'existence d'une solution unique au problème d'optimisation","L'égalité entre offre et demande","Le plein emploi","La stabilité des prix","La concurrence pure","La maximisation du profit","La rationalité","La transitivité","La complétude","Aucune de ces réponses"],
      answer:0, explanation:"La convexité garantit une solution unique au problème d'optimisation du consommateur." },

    { id:"micro1-13", chapter:"micro-ch1", difficulty:"facile",
      q:"Qu'est-ce qu'une courbe d'indifférence ?",
      choices:["L'ensemble des paniers procurant le même niveau de satisfaction","L'ensemble des paniers accessibles avec le budget","L'ensemble des prix","L'ensemble des revenus","L'ensemble des productions","L'ensemble des coûts","L'ensemble des facteurs","L'ensemble des marchés","L'ensemble des échanges","L'ensemble des profits"],
      answer:0, explanation:"Une courbe d'indifférence relie tous les paniers procurant la même satisfaction." },

    { id:"micro1-14", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quelles sont les propriétés des courbes d'indifférence ?",
      choices:["Décroissantes, ne se croisent jamais, convexes vers l'origine","Croissantes, parallèles, concaves","Décroissantes, se croisent, concaves","Croissantes, ne se croisent jamais, convexes","Constantes, parallèles, concaves","Aléatoires","Linéaires uniquement","Verticales uniquement","Horizontales uniquement","Aucune de ces réponses"],
      answer:0, explanation:"Les courbes d'indifférence sont décroissantes, ne se croisent jamais (transitivité), et sont convexes vers l'origine (convexité)." },

    { id:"micro1-15", chapter:"micro-ch1", difficulty:"moyen",
      q:"Pourquoi les courbes d'indifférence ne se croisent-elles jamais ?",
      choices:["Cela contredirait l'axiome de transitivité","Cela contredirait la non-satiété","Cela contredirait la convexité","Cela contredirait la complétude","Cela contredirait la rationalité","Cela contredirait la rareté","Cela contredirait le budget","Cela contredirait les prix","Cela contredirait la demande","Aucune de ces réponses"],
      answer:0, explanation:"Deux courbes qui se croiseraient donneraient deux niveaux de satisfaction au même point, contredisant la transitivité." },

    { id:"micro1-16", chapter:"micro-ch1", difficulty:"facile",
      q:"Qu'est-ce qu'une carte d'indifférence ?",
      choices:["Un ensemble de courbes d'indifférence décrivant les préférences d'un consommateur","Une seule courbe","Une droite de budget","Une fonction d'utilité","Un tableau de valeurs","Un graphique de prix","Un graphique de production","Un graphique de coûts","Un graphique de profit","Aucune de ces réponses"],
      answer:0, explanation:"Une carte d'indifférence regroupe plusieurs courbes d'indifférence d'un même consommateur." },

    { id:"micro1-17", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que signifie une courbe d'indifférence plus éloignée de l'origine ?",
      choices:["Un niveau de satisfaction plus élevé","Un niveau de satisfaction plus faible","Un budget plus élevé","Un budget plus faible","Un prix plus élevé","Un prix plus faible","Un coût plus élevé","Un revenu plus faible","Aucune différence","Un niveau nul"],
      answer:0, explanation:"Plus une courbe d'indifférence est éloignée de l'origine, plus le niveau de satisfaction associé est élevé." },

    { id:"micro1-18", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que le TMS (Taux Marginal de Substitution) ?",
      choices:["Le nombre d'unités d'un bien qu'on accepte de sacrifier pour obtenir une unité de l'autre, à satisfaction constante","Le taux d'intérêt","Le taux d'inflation","Le rapport des prix","Le taux de profit","Le taux de marge","Le taux d'épargne","Le taux de croissance","Le taux de chômage","Le taux de change"],
      answer:0, explanation:"TMS = quantité d'un bien à sacrifier pour obtenir une unité supplémentaire de l'autre, sur une même courbe d'indifférence." },

    { id:"micro1-19", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que mesure graphiquement le TMS ?",
      choices:["La pente (en valeur absolue) de la courbe d'indifférence","La pente de la droite de budget","Le niveau d'utilité","Le niveau de revenu","Le prix des biens","Le revenu disponible","La quantité totale","Le coût marginal","Le profit","Aucune de ces réponses"],
      answer:0, explanation:"Le TMS est la valeur absolue de la pente de la courbe d'indifférence en un point." },

    { id:"micro1-20", chapter:"micro-ch1", difficulty:"moyen",
      q:"Comment évolue le TMS le long d'une courbe d'indifférence convexe ?",
      choices:["Il décroît quand on augmente x","Il croît","Il reste constant","Il devient nul","Il devient infini","Il devient négatif","Il devient positif","Il est indéfini","Il oscille","Aucune de ces réponses"],
      answer:0, explanation:"Le TMS décroît le long de la courbe (convexité) : plus un bien est abondant, moins on est prêt à sacrifier pour l'autre." },

    { id:"micro1-21", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'est-ce qu'une fonction d'utilité ?",
      choices:["Une fonction qui associe à chaque panier un indice de satisfaction","Une fonction qui donne le prix","Une fonction qui donne le revenu","Une fonction qui donne le budget","Une fonction qui donne la production","Une fonction qui donne le coût","Une fonction qui donne le profit","Une fonction qui donne la demande","Une fonction qui donne l'offre","Aucune de ces réponses"],
      answer:0, explanation:"La fonction d'utilité U(x,y) associe à chaque panier un indice de satisfaction." },

    { id:"micro1-22", chapter:"micro-ch1", difficulty:"moyen",
      q:"L'utilité en microéconomie est-elle ordinale ou cardinale ?",
      choices:["Ordinale : seule la comparaison compte, pas les écarts","Cardinale : les écarts ont un sens","Les deux","Aucune","Ordinale au sens strict uniquement","Cardinale au sens strict uniquement","Les deux sont équivalentes","Ni l'une ni l'autre","Elle est binaire","Elle est continue"],
      answer:0, explanation:"L'utilité est ordinale : si U(A) > U(B), A est préféré. Les écarts (1,2 fois plus heureux) n'ont pas de sens." },

    { id:"micro1-23", chapter:"micro-ch1", difficulty:"facile",
      q:"Que représentent les courbes d'indifférence vis-à-vis de la fonction d'utilité ?",
      choices:["Les courbes de niveau","Les dérivées","Les maxima","Les minima","Les tangentes","Les asymptotes","Les points critiques","Les zéros","Les infinis","Aucune de ces réponses"],
      answer:0, explanation:"Les courbes d'indifférence sont les courbes de niveau de la fonction d'utilité (U(x,y) = constante)." },

    { id:"micro1-24", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que représente la contrainte budgétaire ?",
      choices:["L'ensemble des paniers accessibles compte tenu du revenu et des prix","L'ensemble des paniers préférés","L'ensemble des prix possibles","L'ensemble des revenus possibles","L'ensemble des productions","L'ensemble des coûts","L'ensemble des profits","L'ensemble des échanges","L'ensemble des marchés","Aucune de ces réponses"],
      answer:0, explanation:"La contrainte budgétaire délimite les paniers accessibles avec le revenu R et les prix donnés." },

    { id:"micro1-25", chapter:"micro-ch1", difficulty:"facile",
      q:"Comment s'écrit l'équation de la droite de budget ?",
      choices:["R = Px·x + Py·y","R = Px + Py","R = x + y","R = Px·Py","R = x·y","R = Px/x + Py/y","R = x/y","R = Px + x","R = Py + y","R = x − y"],
      answer:0, explanation:"Droite de budget : R = Px·x + Py·y (budget entièrement dépensé)." },

    { id:"micro1-26", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quelle est la pente de la droite de budget ?",
      choices:["−Px/Py","−Py/Px","Px/Py","Py/Px","−R/Px","−R/Py","R/Px","R/Py","−x/y","−y/x"],
      answer:0, explanation:"La pente de la droite de budget est −Px/Py (rapport des prix)." },

    { id:"micro1-27", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que se passe-t-il quand le revenu augmente (prix constants) ?",
      choices:["La droite de budget se déplace parallèlement vers l'extérieur","La droite pivote","La pente change","La droite se déplace vers l'intérieur","La droite reste identique","La pente devient nulle","La droite disparaît","Le consommateur ne change rien","La droite devient verticale","La droite devient horizontale"],
      answer:0, explanation:"Une hausse du revenu (prix constants) déplace la droite parallèlement vers l'extérieur." },

    { id:"micro1-28", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que se passe-t-il quand le prix d'un bien varie (revenu et autre prix constants) ?",
      choices:["La droite de budget pivote (sa pente change)","Elle se déplace parallèlement","Elle reste identique","Elle disparaît","Elle devient verticale","Elle devient horizontale","La pente ne change pas","Le budget change","Le revenu change","Aucune de ces réponses"],
      answer:0, explanation:"Une variation de prix modifie la pente de la droite (pivotement autour de l'axe du bien dont le prix n'a pas changé)." },

    { id:"micro1-29", chapter:"micro-ch1", difficulty:"moyen",
      q:"Où se situe le panier optimal du consommateur ?",
      choices:["Au point de tangence entre la droite de budget et la courbe d'indifférence la plus élevée","À l'intérieur de l'ensemble budgétaire","Sur l'axe des x","Sur l'axe des y","À l'origine","N'importe où","Sur la courbe d'indifférence la plus basse","Hors du budget","Au point de croisement de deux courbes d'indifférence","Aucune de ces réponses"],
      answer:0, explanation:"À l'optimum, la droite de budget est tangente à la courbe d'indifférence la plus élevée atteignable." },

    { id:"micro1-30", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quelle est la condition de tangence à l'optimum du consommateur ?",
      choices:["TMS = Px/Py","TMS = Px·Py","TMS = Px","TMS = Py","TMS = R","TMS = 1","TMS = 0","TMS = x/y","TMS = y/x","TMS = Px + Py"],
      answer:0, explanation:"À l'optimum, TMS = Px/Py : le taux de renoncement personnel égale le rapport des prix." },

    { id:"micro1-31", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que signifie l'effet de substitution ?",
      choices:["Quand un bien devient moins cher, on en achète plus et on réduit l'autre","Quand le revenu augmente, on achète plus de tout","Quand le revenu baisse, on achète moins de tout","Quand le prix augmente, on achète plus","Quand le prix baisse, on achète moins","Quand le revenu change, les prix changent","Quand les préférences changent","Quand le budget change","Aucune de ces réponses","Quand le bien est inférieur"],
      answer:0, explanation:"Effet de substitution : on remplace le bien devenu relativement plus cher par le bien devenu relativement moins cher." },

    { id:"micro1-32", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que signifie l'effet de revenu ?",
      choices:["La baisse de prix augmente le pouvoir d'achat réel et modifie la consommation","La baisse de prix réduit le pouvoir d'achat","Le revenu nominal augmente","Le revenu nominal baisse","Le consommateur devient plus riche en euros","Le consommateur devient plus pauvre en euros","La production augmente","Le profit augmente","Le coût augmente","Aucune de ces réponses"],
      answer:0, explanation:"Effet de revenu : une baisse de prix augmente le pouvoir d'achat réel du consommateur." },

    { id:"micro1-33", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'est-ce qu'un bien normal ?",
      choices:["Un bien dont la consommation augmente avec le revenu","Un bien dont la consommation baisse avec le revenu","Un bien gratuit","Un bien rare","Un bien de luxe uniquement","Un bien de première nécessité uniquement","Un bien substituable","Un bien complémentaire","Un bien public","Aucune de ces réponses"],
      answer:0, explanation:"Bien normal : la consommation augmente avec le revenu." },

    { id:"micro1-34", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'est-ce qu'un bien inférieur ?",
      choices:["Un bien dont la consommation baisse quand le revenu augmente","Un bien dont la consommation augmente avec le revenu","Un bien gratuit","Un bien rare","Un bien de luxe","Un bien de première nécessité","Un bien substituable","Un bien complémentaire","Un bien public","Aucune de ces réponses"],
      answer:0, explanation:"Bien inférieur : la consommation diminue quand le revenu augmente (bien de qualité modeste délaissé quand le budget le permet)." },

    { id:"micro1-35", chapter:"micro-ch1", difficulty:"moyen",
      q:"Qu'est-ce que la courbe d'Engel ?",
      choices:["Elle relie la quantité consommée d'un bien au revenu","Elle relie le prix à la quantité demandée","Elle relie le prix au revenu","Elle relie la production au coût","Elle relie le profit au coût","Elle relie l'offre à la demande","Elle relie le salaire à l'emploi","Elle relie le capital au travail","Elle relie la production au travail","Aucune de ces réponses"],
      answer:0, explanation:"La courbe d'Engel relie la quantité consommée d'un bien au revenu." },

    { id:"micro1-36", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quelle est la pente d'une courbe d'Engel pour un bien normal ?",
      choices:["Positive","Négative","Nulle","Infinie","Indéterminée","Variable","Constante","Croissante puis décroissante","Décroissante puis croissante","Aucune de ces réponses"],
      answer:0, explanation:"Pour un bien normal, la courbe d'Engel a une pente positive (la quantité augmente avec le revenu)." },

    { id:"micro1-37", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quelle est la pente d'une courbe d'Engel pour un bien inférieur ?",
      choices:["Négative","Positive","Nulle","Infinie","Indéterminée","Variable","Constante","Croissante","Décroissante puis croissante","Aucune de ces réponses"],
      answer:0, explanation:"Pour un bien inférieur, la courbe d'Engel a une pente négative." },

    { id:"micro1-38", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que mesure l'élasticité-prix de la demande ?",
      choices:["La sensibilité de la quantité demandée à une variation du prix","La sensibilité de la quantité au revenu","La sensibilité du prix au revenu","La sensibilité du prix aux coûts","La sensibilité du revenu aux prix","La sensibilité de l'offre aux prix","La sensibilité du profit aux prix","La sensibilité du coût à la production","Aucune de ces réponses","La sensibilité de la demande à l'offre"],
      answer:0, explanation:"Élasticité-prix = % de variation de la quantité / % de variation du prix." },

    { id:"micro1-39", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quel est le signe habituel de l'élasticité-prix de la demande ?",
      choices:["Négatif","Positif","Nul","Infini","Indéterminé","Variable","Positif ou nul","Négatif ou nul","Toujours positif","Toujours nul"],
      answer:0, explanation:"L'élasticité-prix de la demande est en général négative : quand le prix augmente, la quantité demandée diminue." },

    { id:"micro1-40", chapter:"micro-ch1", difficulty:"moyen",
      q:"Quand la demande est-elle élastique au prix ?",
      choices:["Quand |élasticité| > 1","Quand |élasticité| < 1","Quand |élasticité| = 1","Quand |élasticité| = 0","Quand l'élasticité est positive","Quand l'élasticité est nulle","Quand l'élasticité est infinie","Quand l'élasticité est négative","Quand l'élasticité est constante","Aucune de ces réponses"],
      answer:0, explanation:"Demande élastique : |élasticité| > 1. La quantité varie proportionnellement plus que le prix." },

    { id:"micro1-41", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que mesure l'élasticité-revenu de la demande ?",
      choices:["Le % de variation de la quantité demandée pour +1% de revenu","Le % de variation du prix pour +1% de revenu","Le % de variation du revenu pour +1% de prix","Le % de variation de la production pour +1% de revenu","Le % de variation du coût pour +1% de revenu","Le % de variation du profit pour +1% de revenu","Le % de variation de l'offre pour +1% de revenu","Le % de variation du salaire pour +1% de revenu","Aucune de ces réponses","Le % de variation de la demande pour +1% d'offre"],
      answer:0, explanation:"Élasticité-revenu = % de variation de la quantité demandée / % de variation du revenu." },

    { id:"micro1-42", chapter:"micro-ch1", difficulty:"moyen",
      q:"Que mesure l'élasticité-prix croisée de la demande ?",
      choices:["Le % de variation de la quantité d'un bien pour +1% du prix d'un autre bien","Le % de variation du prix d'un bien pour +1% du prix d'un autre","Le % de variation du revenu pour +1% du prix","Le % de variation de la production pour +1% du prix","Le % de variation du coût pour +1% du prix","Le % de variation du profit pour +1% du prix","Le % de variation de l'offre pour +1% du prix","Le % de variation du salaire pour +1% du prix","Aucune de ces réponses","Le % de variation de la demande pour +1% de l'offre"],
      answer:0, explanation:"Élasticité-prix croisée = % de variation de la quantité d'un bien / % de variation du prix d'un autre bien." },

    { id:"micro1-43", chapter:"micro-ch1", difficulty:"moyen",
      q:"Si l'élasticité-prix croisée est positive, les biens sont…",
      choices:["Substituables","Complémentaires","Indépendants","Identiques","Normaux","Inférieurs","Publics","Gratuits","Rares","Aucune de ces réponses"],
      answer:0, explanation:"Élasticité-prix croisée > 0 : les biens sont substituables (ex. café/thé)." },

    { id:"micro1-44", chapter:"micro-ch1", difficulty:"moyen",
      q:"Si l'élasticité-prix croisée est négative, les biens sont…",
      choices:["Complémentaires","Substituables","Indépendants","Identiques","Normaux","Inférieurs","Publics","Gratuits","Rares","Aucune de ces réponses"],
      answer:0, explanation:"Élasticité-prix croisée < 0 : les biens sont complémentaires (ex. essence/voiture)." },

    { id:"micro1-45", chapter:"micro-ch1", difficulty:"moyen",
      q:"Si l'élasticité-prix croisée est nulle, les biens sont…",
      choices:["Indépendants","Substituables","Complémentaires","Identiques","Normaux","Inférieurs","Publics","Gratuits","Rares","Aucune de ces réponses"],
      answer:0, explanation:"Élasticité-prix croisée = 0 : les biens sont indépendants." },

    { id:"micro1-46", chapter:"micro-ch1", difficulty:"difficile",
      q:"Le prix passe de 4 € à 5 € (+25 %) et la quantité de 100 à 80 (−20 %). Quelle est l'élasticité-prix ?",
      choices:["−0,8","−0,2","−1,25","+0,8","+1,25","−5","+5","0","−1","+1"],
      answer:0, explanation:"Élasticité = −20 % / +25 % = −0,8. La demande est inélastique (|élasticité| < 1)." },

    { id:"micro1-47", chapter:"micro-ch1", difficulty:"difficile",
      q:"Le revenu passe de 2 000 € à 2 200 € (+10 %) et la consommation de 10 à 12 repas (+20 %). Quelle est l'élasticité-revenu ?",
      choices:["+2","+0,5","−2","−0,5","+1","−1","0","+10","+20","Indéterminée"],
      answer:0, explanation:"Élasticité-revenu = +20 % / +10 % = +2. Le bien est un bien normal de luxe." },

    { id:"micro1-48", chapter:"micro-ch1", difficulty:"difficile",
      q:"Le prix du café augmente de 20 % et la quantité de thé augmente de 10 %. Quelle est l'élasticité-prix croisée ?",
      choices:["+0,5","−0,5","+2","−2","0","+1","−1","+20","+10","Indéterminée"],
      answer:0, explanation:"Élasticité croisée = +10 % / +20 % = +0,5 > 0 : café et thé sont substituables." },

    { id:"micro1-49", chapter:"micro-ch1", difficulty:"difficile",
      q:"Le prix de l'essence augmente de 20 % et la quantité de voitures baisse de 5 %. Quelle est l'élasticité-prix croisée ?",
      choices:["−0,25","+0,25","−4","+4","0","+1","−1","+20","+5","Indéterminée"],
      answer:0, explanation:"Élasticité croisée = −5 % / +20 % = −0,25 < 0 : essence et voitures sont complémentaires." }
  ]
});