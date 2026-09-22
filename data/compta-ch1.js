window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "compta", courseName: "Comptabilité", courseIcon: "🧾", courseColor: "#22c55e",
  chapterId: "compta-ch1", chapterName: "Ch.1 — Calculs de base",
  questions: [
    { id:"compta1-01", chapter:"compta-ch1", difficulty:"facile",
      q:"Quelle est la formule du taux d'évolution ?",
      choices:["(VA − VD)/VD × 100","VA − VD","VA/VD × 100","(VD − VA)/VA × 100","VA × VD","(VA + VD)/2","VA/VD","VA − VD × 100","VA × VD/100","(VA + VD)/VD × 100"],
      answer:0, explanation:"Taux d'évolution = (Valeur d'arrivée − Valeur de départ)/Valeur de départ × 100." },

    { id:"compta1-02", chapter:"compta-ch1", difficulty:"facile",
      q:"Le CA passe de 1 100 € à 1 358 €. Quel est le taux d'évolution ?",
      choices:["23,45 %","25,8 %","20 %","15 %","18 %","22 %","30 %","12 %","5 %","258 %"],
      answer:0, explanation:"(1358 − 1100)/1100 × 100 = 258/1100 × 100 ≈ 23,45 %." },

    { id:"compta1-03", chapter:"compta-ch1", difficulty:"facile",
      q:"Le CA passe de 45 897 € à 48 798 €. Quel est le taux d'évolution ?",
      choices:["≈ 6,32 %","≈ 5 %","≈ 7 %","≈ 8 %","≈ 6 %","≈ 10 %","≈ 4 %","≈ 3 %","≈ 12 %","≈ 2 %"],
      answer:0, explanation:"(48798 − 45897)/45897 × 100 ≈ 6,32 %." },

    { id:"compta1-04", chapter:"compta-ch1", difficulty:"moyen",
      q:"La marge passe de 23 569 € à 20 154 €. Quel est le taux d'évolution ?",
      choices:["≈ −14,49 %","≈ −14 %","≈ +14,49 %","≈ 15 %","≈ −15 %","≈ 20 %","≈ −20 %","≈ 3 415 %","≈ −3 %","≈ 5 %"],
      answer:0, explanation:"(20154 − 23569)/23569 × 100 ≈ −14,49 %." },

    { id:"compta1-05", chapter:"compta-ch1", difficulty:"facile",
      q:"Quelle est la formule du taux de part ?",
      choices:["Partie/Total × 100","Total/Partie × 100","(Partie − Total)/Total × 100","Partie × Total","Partie + Total","Partie − Total","Partie/Total","Total − Partie","Partie × 100","Total × 100"],
      answer:0, explanation:"Taux de part = Partie/Total × 100." },

    { id:"compta1-06", chapter:"compta-ch1", difficulty:"facile",
      q:"Les ventes de Richard sont de 1 465 € sur un CA total de 7 589 €. Quelle est sa part ?",
      choices:["≈ 19,30 %","≈ 20 %","≈ 25 %","≈ 15 %","≈ 30 %","≈ 17 %","≈ 22 %","≈ 10 %","≈ 5 %","≈ 50 %"],
      answer:0, explanation:"1465/7589 × 100 ≈ 19,30 %." },

    { id:"compta1-07", chapter:"compta-ch1", difficulty:"facile",
      q:"Les ventes de Magali sont de 15 698 € sur un CA total de 45 879 €. Quelle est sa part ?",
      choices:["≈ 34,22 %","≈ 30 %","≈ 40 %","≈ 25 %","≈ 35 %","≈ 45 %","≈ 20 %","≈ 15 %","≈ 50 %","≈ 10 %"],
      answer:0, explanation:"15698/45879 × 100 ≈ 34,22 %." },

    { id:"compta1-08", chapter:"compta-ch1", difficulty:"moyen",
      q:"Les ventes de Julien (35 000 €) représentent 18 % du CA total. Quel est le CA total ?",
      choices:["≈ 194 444 €","≈ 190 000 €","≈ 200 000 €","≈ 180 000 €","≈ 250 000 €","≈ 175 000 €","≈ 220 000 €","≈ 150 000 €","≈ 300 000 €","≈ 100 000 €"],
      answer:0, explanation:"CA total = 35 000 / 0,18 ≈ 194 444 €." },

    { id:"compta1-09", chapter:"compta-ch1", difficulty:"facile",
      q:"Comment calcule-t-on le montant d'une remise ?",
      choices:["Montant brut × taux de remise","Montant brut + taux","Montant brut − taux","Montant brut / taux","Montant brut × (1 + taux)","Montant brut × (1 − taux)","Montant brut + montant","Montant brut − montant","Montant brut / 100","Montant brut × 100"],
      answer:0, explanation:"Montant de la remise = Montant × taux de remise." },

    { id:"compta1-10", chapter:"compta-ch1", difficulty:"facile",
      q:"Un produit coûte 2 500 € avec une remise de 3,5 %. Quel est le montant de la remise ?",
      choices:["87,50 €","80 €","90 €","85 €","75 €","100 €","70 €","95 €","65 €","60 €"],
      answer:0, explanation:"2500 × 0,035 = 87,50 €." },

    { id:"compta1-11", chapter:"compta-ch1", difficulty:"facile",
      q:"Un meuble coûte 850 €. Le prix augmente de 12 %. Quel est le montant de l'augmentation ?",
      choices:["102 €","100 €","120 €","85 €","90 €","110 €","95 €","105 €","115 €","125 €"],
      answer:0, explanation:"850 × 0,12 = 102 €." },

    { id:"compta1-12", chapter:"compta-ch1", difficulty:"facile",
      q:"Comment calcule-t-on un montant après remise ?",
      choices:["Montant avant remise × (1 − t)","Montant avant remise × (1 + t)","Montant avant remise / (1 − t)","Montant avant remise / (1 + t)","Montant avant remise − t","Montant avant remise + t","Montant avant remise × t","Montant avant remise / t","Montant avant remise × 100","Montant avant remise + 100"],
      answer:0, explanation:"Après remise : × (1 − t)." },

    { id:"compta1-13", chapter:"compta-ch1", difficulty:"facile",
      q:"Un produit coûte 467 € et subit une remise de 40 %. Quel est le prix après remise ?",
      choices:["280,20 €","285 €","270 €","290 €","275 €","295 €","300 €","265 €","310 €","320 €"],
      answer:0, explanation:"467 × (1 − 0,4) = 467 × 0,6 = 280,20 €." },

    { id:"compta1-14", chapter:"compta-ch1", difficulty:"facile",
      q:"Comment calcule-t-on un montant après augmentation ?",
      choices:["Montant avant × (1 + t)","Montant avant × (1 − t)","Montant avant / (1 − t)","Montant avant / (1 + t)","Montant avant + t","Montant avant − t","Montant avant × t","Montant avant + 100","Montant avant / 100","Montant avant × 100"],
      answer:0, explanation:"Après augmentation : × (1 + t)." },

    { id:"compta1-15", chapter:"compta-ch1", difficulty:"facile",
      q:"Un prix HT de 650 € subit une TVA de 20 %. Quel est le prix TTC ?",
      choices:["780 €","750 €","700 €","800 €","770 €","820 €","850 €","900 €","730 €","760 €"],
      answer:0, explanation:"650 × (1 + 0,20) = 650 × 1,2 = 780 €." },

    { id:"compta1-16", chapter:"compta-ch1", difficulty:"moyen",
      q:"Un prix HT de 523,48 € subit une TVA de 5,5 %. Quel est le prix TTC ?",
      choices:["≈ 552,27 €","≈ 550 €","≈ 555 €","≈ 545 €","≈ 560 €","≈ 540 €","≈ 565 €","≈ 570 €","≈ 575 €","≈ 580 €"],
      answer:0, explanation:"523,48 × 1,055 = 552,27 €." },

    { id:"compta1-17", chapter:"compta-ch1", difficulty:"moyen",
      q:"Comment retrouver un montant avant remise ?",
      choices:["Montant après / (1 − t)","Montant après × (1 − t)","Montant après × (1 + t)","Montant après / (1 + t)","Montant après + t","Montant après − t","Montant après × t","Montant après / t","Montant après + 100","Montant après − 100"],
      answer:0, explanation:"Avant remise : ÷ (1 − t)." },

    { id:"compta1-18", chapter:"compta-ch1", difficulty:"moyen",
      q:"Un prix après remise de 12 % est de 698 €. Quel était le prix avant remise ?",
      choices:["≈ 793,18 €","≈ 780 €","≈ 800 €","≈ 750 €","≈ 820 €","≈ 850 €","≈ 900 €","≈ 700 €","≈ 750 €","≈ 720 €"],
      answer:0, explanation:"698 / 0,88 ≈ 793,18 €." },

    { id:"compta1-19", chapter:"compta-ch1", difficulty:"moyen",
      q:"Gaspard a payé 1 850 € HT après une remise de 7,5 %. Quel était le prix catalogue ?",
      choices:["2 000 €","1 900 €","2 100 €","1 950 €","1 800 €","2 200 €","1 850 €","2 050 €","2 150 €","1 980 €"],
      answer:0, explanation:"1850 / (1 − 0,075) = 1850 / 0,925 = 2 000 €." },

    { id:"compta1-20", chapter:"compta-ch1", difficulty:"moyen",
      q:"Un prix TTC de 600 € inclut une TVA de 20 %. Quel est le prix HT ?",
      choices:["500 €","520 €","480 €","550 €","510 €","490 €","530 €","570 €","560 €","540 €"],
      answer:0, explanation:"600 / 1,2 = 500 €." },

    { id:"compta1-21", chapter:"compta-ch1", difficulty:"moyen",
      q:"Une vente est facturée 800 € dont 8 % de frais d'installation. Quel est le prix de la machine seule ?",
      choices:["≈ 740,74 €","≈ 750 €","≈ 730 €","≈ 720 €","≈ 760 €","≈ 770 €","≈ 710 €","≈ 700 €","≈ 690 €","≈ 680 €"],
      answer:0, explanation:"800 / 1,08 ≈ 740,74 €." },

    { id:"compta1-22", chapter:"compta-ch1", difficulty:"facile",
      q:"Comment calcule-t-on la marge commerciale ?",
      choices:["Prix de vente HT − Coût d'achat HT","Prix de vente TTC − Coût d'achat HT","Prix de vente HT + Coût d'achat HT","Prix de vente HT × Coût d'achat HT","Prix de vente HT / Coût d'achat HT","Prix TTC / Coût d'achat","Prix de vente − TVA","Prix de vente + TVA","Coût d'achat − Prix de vente","Prix HT − TVA"],
      answer:0, explanation:"Marge commerciale = PV HT − Coût d'achat HT." },

    { id:"compta1-23", chapter:"compta-ch1", difficulty:"facile",
      q:"Prix de vente HT = 500 €, coût d'achat = 242 €. Quelle est la marge ?",
      choices:["258 €","260 €","250 €","240 €","270 €","280 €","300 €","200 €","258,00 %","242 €"],
      answer:0, explanation:"500 − 242 = 258 €." },

    { id:"compta1-24", chapter:"compta-ch1", difficulty:"moyen",
      q:"Michel a vendu 900 € TTC (TVA 20 %) un produit acheté 500 € HT. Quelle est la marge ?",
      choices:["250 €","260 €","240 €","230 €","270 €","280 €","300 €","200 €","255 €","245 €"],
      answer:0, explanation:"PV HT = 900/1,2 = 750 € ; marge = 750 − 500 = 250 €." },

    { id:"compta1-25", chapter:"compta-ch1", difficulty:"moyen",
      q:"Comment calcule-t-on le taux de marque ?",
      choices:["Marge / PV HT × 100","Marge / Coût d'achat HT × 100","Marge / PV TTC × 100","PV HT / Coût d'achat HT × 100","Coût d'achat / PV HT × 100","Marge / Total × 100","PV TTC / PA HT × 100","Marge / 100","Marge × 100","PV HT − PA HT"],
      answer:0, explanation:"Taux de marque = Marge / PV HT × 100." },

    { id:"compta1-26", chapter:"compta-ch1", difficulty:"moyen",
      q:"Marge = 258 €, PV HT = 500 €. Quel est le taux de marque ?",
      choices:["51,6 %","50 %","52 %","48 %","55 %","60 %","45 %","40 %","106,61 %","25,8 %"],
      answer:0, explanation:"258/500 × 100 = 51,6 %." },

    { id:"compta1-27", chapter:"compta-ch1", difficulty:"moyen",
      q:"Un produit acheté 1 250 € est revendu 2 500 € TTC (TVA 20 %). Quel est le taux de marque ?",
      choices:["40 %","45 %","35 %","50 %","30 %","25 %","20 %","60 %","55 %","66,67 %"],
      answer:0, explanation:"PV HT = 2500/1,2 ≈ 2083,33 ; marge = 833,33 ; taux de marque = 833,33/2083,33 ≈ 40 %." },

    { id:"compta1-28", chapter:"compta-ch1", difficulty:"moyen",
      q:"Comment calcule-t-on le taux de marge ?",
      choices:["Marge / Coût d'achat HT × 100","Marge / PV HT × 100","Marge / PV TTC × 100","PV HT / Coût d'achat HT × 100","Marge × 100","Marge / 100","PA HT / PV HT × 100","PV TTC / PA HT × 100","PV HT / PV TTC × 100","Marge − TVA"],
      answer:0, explanation:"Taux de marge = Marge / Coût d'achat HT × 100." },

    { id:"compta1-29", chapter:"compta-ch1", difficulty:"moyen",
      q:"Marge = 258 €, coût d'achat = 242 €. Quel est le taux de marge ?",
      choices:["≈ 106,61 %","≈ 51,6 %","≈ 50 %","≈ 100 %","≈ 60 %","≈ 80 %","≈ 75 %","≈ 90 %","≈ 120 %","≈ 200 %"],
      answer:0, explanation:"258/242 × 100 ≈ 106,61 %." },

    { id:"compta1-30", chapter:"compta-ch1", difficulty:"moyen",
      q:"Produit acheté 700 € + 100 € de frais, revendu 2 000 € TTC (TVA 20 %). Quel est le taux de marge ?",
      choices:["≈ 108,33 %","≈ 100 %","≈ 110 %","≈ 120 %","≈ 90 %","≈ 80 %","≈ 60 %","≈ 200 %","≈ 50 %","≈ 105 %"],
      answer:0, explanation:"PV HT = 1666,67 ; coût = 800 ; marge = 866,67 ; taux = 866,67/800 ≈ 108,33 %." },

    { id:"compta1-31", chapter:"compta-ch1", difficulty:"moyen",
      q:"Comment calcule-t-on le coefficient multiplicateur ?",
      choices:["PV TTC / Coût d'achat HT","PV HT / Coût d'achat HT","Marge / PV HT","Marge / Coût d'achat HT","PV TTC × Coût d'achat HT","PV HT × Coût d'achat HT","PV TTC − Coût d'achat","PV HT / PV TTC","Marge × 100","PV TTC − TVA"],
      answer:0, explanation:"Coefficient multiplicateur = PV TTC / Coût d'achat HT." },

    { id:"compta1-32", chapter:"compta-ch1", difficulty:"moyen",
      q:"PV TTC = 600 €, coût d'achat HT = 242 €. Quel est le coefficient multiplicateur ?",
      choices:["≈ 2,48","≈ 2,5","≈ 2,4","≈ 2,6","≈ 2,3","≈ 2,2","≈ 2,7","≈ 2,8","≈ 3","≈ 1,5"],
      answer:0, explanation:"600/242 ≈ 2,48." },

    { id:"compta1-33", chapter:"compta-ch1", difficulty:"moyen",
      q:"Produit acheté 200 € HT, revendu avec une marge de 190 €, TVA 20 %. Quel est le coefficient multiplicateur ?",
      choices:["2,34","2,00","2,20","2,50","1,95","1,80","2,40","2,60","2,10","2,80"],
      answer:0, explanation:"PV HT = 390 ; PV TTC = 468 ; CM = 468/200 = 2,34." },

    { id:"compta1-34", chapter:"compta-ch1", difficulty:"moyen",
      q:"Le CA passe de 100 000 € à 80 000 €, puis à 95 000 €. Quel est le premier taux d'évolution ?",
      choices:["−20 %","+20 %","−15 %","+15 %","−25 %","−10 %","−18,75 %","−5 %","−30 %","0 %"],
      answer:0, explanation:"(80000 − 100000)/100000 × 100 = −20 %." },

    { id:"compta1-35", chapter:"compta-ch1", difficulty:"moyen",
      q:"Le CA passe de 100 000 € à 80 000 €, puis à 95 000 €. Quel est le second taux d'évolution ?",
      choices:["+18,75 %","+20 %","+15 %","−18,75 %","+25 %","+16,5 %","+12,5 %","+10 %","−15 %","+5 %"],
      answer:0, explanation:"(95000 − 80000)/80000 × 100 = 18,75 %." },

    { id:"compta1-36", chapter:"compta-ch1", difficulty:"moyen",
      q:"Après une baisse de 20 % suivie d'une hausse de 18,75 %, le CA a-t-il retrouvé son niveau initial ?",
      choices:["Non (95 000 < 100 000)","Oui (100 000)","Oui (98 000)","Non (90 000)","Oui (99 000)","Non (85 000)","Oui (100 500)","Non (92 000)","Oui (102 000)","Non (93 000)"],
      answer:0, explanation:"Une baisse de 20 % suivie d'une hausse de 18,75 % ne ramène pas au niveau initial, car les pourcentages ne s'appliquent pas à la même base." },

    { id:"compta1-37", chapter:"compta-ch1", difficulty:"facile",
      q:"Comment passe-t-on du prix TTC au prix HT avec une TVA de 20 % ?",
      choices:["Diviser par 1,20","Multiplier par 1,20","Diviser par 0,20","Multiplier par 0,20","Ajouter 20 %","Soustraire 20 %","Diviser par 20","Multiplier par 20","Diviser par 1,02","Multiplier par 1,02"],
      answer:0, explanation:"PV HT = PV TTC / (1 + taux de TVA) = PV TTC / 1,20." },

    { id:"compta1-38", chapter:"compta-ch1", difficulty:"facile",
      q:"Quels sont les taux de TVA en France ?",
      choices:["20 %, 10 %, 5,5 %, 2,1 %","20 %, 15 %, 10 %, 5 %","25 %, 20 %, 10 %","20 %, 12 %, 6 %","18 %, 10 %, 5 %","20 %, 8 %, 4 %","15 %, 10 %, 5 %","22 %, 11 %, 5,5 %","20 %, 5 %, 3 %","19,6 %, 7 %, 5,5 %"],
      answer:0, explanation:"Les taux de TVA en France sont : 20 % (normal), 10 %, 5,5 %, 2,1 %." },

    { id:"compta1-39", chapter:"compta-ch1", difficulty:"moyen",
      q:"Un produit vendu 1 200 € TTC avec une TVA de 20 % a un coût d'achat de 700 € HT. Quel est le taux de marque ?",
      choices:["30 %","40 %","35 %","25 %","20 %","45 %","50 %","42,86 %","60 %","28 %"],
      answer:0, explanation:"PV HT = 1000 ; marge = 300 ; taux de marque = 300/1000 = 30 %." },

    { id:"compta1-40", chapter:"compta-ch1", difficulty:"moyen",
      q:"Un produit vendu 1 200 € TTC avec une TVA de 20 % a un coût d'achat de 700 € HT. Quel est le coefficient multiplicateur ?",
      choices:["≈ 1,71","≈ 2,00","≈ 1,50","≈ 1,80","≈ 1,60","≈ 1,90","≈ 2,10","≈ 2,20","≈ 2,50","≈ 1,40"],
      answer:0, explanation:"CM = 1200/700 ≈ 1,71." }
  ]
});