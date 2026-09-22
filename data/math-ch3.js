window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "math", courseName: "Mathématiques", courseIcon: "📐", courseColor: "#3b82f6",
  chapterId: "math-ch3", chapterName: "Ch.3 — Optimisation sans contrainte",
  questions: [
    { id:"math3-01", chapter:"math-ch3", difficulty:"facile",
      q:"Qu'est-ce qu'un minimum local de f en (x₀, y₀) ?",
      choices:["f(x₀,y₀) ≤ f(x,y) pour tous (x,y) proches de (x₀,y₀)","f(x₀,y₀) ≥ f(x,y) pour tous (x,y) proches","f(x₀,y₀) = 0","f'(x₀,y₀) = 0","f est négative partout","f est positive partout","f est constante","f est croissante","f est décroissante","f admet un point selle"],
      answer:0, explanation:"Minimum local : f(x₀,y₀) est inférieure ou égale à toutes les valeurs prises au voisinage." },

    { id:"math3-02", chapter:"math-ch3", difficulty:"moyen",
      q:"Comment appelle-t-on un point qui est minimum dans une direction et maximum dans une autre ?",
      choices:["Point selle","Minimum global","Maximum global","Point critique","Point d'inflexion","Point stationnaire","Point frontière","Point isolé","Point de rebroussement","Point col"],
      answer:0, explanation:"Un point selle n'est ni minimum ni maximum local." },

    { id:"math3-03", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour une fonction de deux variables, comment note-t-on les dérivées partielles d'ordre 1 ?",
      choices:["f_x et f_y","f' et f''","df et dg","δf et δg","fx' et fy'","F et G","u et v","∂f et ∂g","fx et gy","f'(x) et f'(y)"],
      answer:0, explanation:"f_x = ∂f/∂x et f_y = ∂f/∂y." },

    { id:"math3-04", chapter:"math-ch3", difficulty:"moyen",
      q:"Quelle est la condition nécessaire pour qu'un point (x₀,y₀) soit un point critique ?",
      choices:["f_x(x₀,y₀) = 0 et f_y(x₀,y₀) = 0","f_x = f_y","f_x + f_y = 0","f_x − f_y = 0","f_x = 1","f_y = 1","f = 0","f' = 0","f'' > 0","f_x > 0"],
      answer:0, explanation:"Point critique : les deux dérivées partielles d'ordre 1 s'annulent." },

    { id:"math3-05", chapter:"math-ch3", difficulty:"moyen",
      q:"Comment note-t-on f_xx ?",
      choices:["∂²f/∂x²","∂²f/∂x∂y","∂²f/∂y²","∂f/∂x","∂f/∂y","df/dx","f''(x)","∂²f","∂f/∂x²","f'"],
      answer:0, explanation:"f_xx = ∂²f/∂x² (dérivée seconde pure par rapport à x)." },

    { id:"math3-06", chapter:"math-ch3", difficulty:"moyen",
      q:"Que dit la propriété d'égalité des dérivées partielles croisées ?",
      choices:["f_xy = f_yx (sous continuité)","f_xy = −f_yx","f_xy = 0","f_yx = 0","f_xy = f_xx","f_xy = f_yy","f_xx = f_yy","f_xy + f_yx = 0","f_xy = 2f_yx","f_xy = f_x"],
      answer:0, explanation:"Quand les dérivées croisées sont continues, f_xy = f_yx." },

    { id:"math3-07", chapter:"math-ch3", difficulty:"moyen",
      q:"Qu'est-ce que la matrice hessienne H_f ?",
      choices:["La matrice (f_xx f_xy ; f_yx f_yy)","La matrice (f_x ; f_y)","La matrice identité","La matrice nulle","La matrice inverse de f","La matrice (f_xx 0 ; 0 f_yy)","La matrice (f_x 0 ; 0 f_y)","La matrice (1 0 ; 0 1)","La matrice des points critiques","La matrice (f_xy f_xx ; f_yx f_yy)"],
      answer:0, explanation:"La matrice hessienne regroupe les dérivées partielles d'ordre 2." },

    { id:"math3-08", chapter:"math-ch3", difficulty:"moyen",
      q:"Comment définit-on H₁ (premier mineur principal) ?",
      choices:["H₁ = f_xx","H₁ = f_yy","H₁ = f_xy","H₁ = det(H_f)","H₁ = f_xx + f_yy","H₁ = f_xx − f_yy","H₁ = f_x","H₁ = f_y","H₁ = f_xx · f_yy","H₁ = f_xy²"],
      answer:0, explanation:"H₁ = f_xx est le premier mineur principal." },

    { id:"math3-09", chapter:"math-ch3", difficulty:"moyen",
      q:"Comment calcule-t-on H₂ (deuxième mineur principal) ?",
      choices:["H₂ = det(H_f) = f_xx·f_yy − f_xy²","H₂ = f_xx + f_yy","H₂ = f_xx − f_yy","H₂ = f_xy","H₂ = f_xx","H₂ = f_yy","H₂ = f_xx·f_yy","H₂ = f_xy²","H₂ = f_xx + f_xy","H₂ = f_xx·f_xy"],
      answer:0, explanation:"H₂ = det(H_f) = f_xx·f_yy − f_xy·f_yx = f_xx·f_yy − f_xy²." },

    { id:"math3-10", chapter:"math-ch3", difficulty:"moyen",
      q:"Si H₂ > 0 et H₁ > 0 en un point critique, quelle est la nature de ce point ?",
      choices:["Minimum local strict","Maximum local strict","Point selle","Point d'inflexion","Indéterminé","Discontinuité","Maximum global","Minimum global","Point isolé","Asymptote"],
      answer:0, explanation:"H₂ > 0 et H₁ > 0 → minimum local strict." },

    { id:"math3-11", chapter:"math-ch3", difficulty:"moyen",
      q:"Si H₂ > 0 et H₁ < 0 en un point critique, quelle est la nature de ce point ?",
      choices:["Maximum local strict","Minimum local strict","Point selle","Point d'inflexion","Indéterminé","Discontinuité","Maximum global","Minimum global","Point isolé","Asymptote"],
      answer:0, explanation:"H₂ > 0 et H₁ < 0 → maximum local strict." },

    { id:"math3-12", chapter:"math-ch3", difficulty:"moyen",
      q:"Si H₂ < 0 en un point critique, quelle est la nature de ce point ?",
      choices:["Point selle","Minimum local","Maximum local","Point d'inflexion","Indéterminé","Discontinuité","Maximum global","Minimum global","Point isolé","Asymptote"],
      answer:0, explanation:"H₂ < 0 → point selle." },

    { id:"math3-13", chapter:"math-ch3", difficulty:"moyen",
      q:"Si H₂ = 0 en un point critique, que peut-on conclure ?",
      choices:["Le théorème ne permet pas de conclure","Minimum local","Maximum local","Point selle","Discontinuité","Point isolé","Asymptote","Maximum global","Minimum global","Fonction constante"],
      answer:0, explanation:"H₂ = 0 → le test est indéterminé." },

    { id:"math3-14", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour f(x, y) = −x² − xy − y² + 4x + 2y + 1, que vaut f_x ?",
      choices:["−2x − y + 4","−2x + y + 4","2x − y + 4","−2x − y − 4","−2x − y","2x + y + 4","−x − y + 4","−2x + y − 4","−2y − x + 4","−x + y + 4"],
      answer:0, explanation:"f_x = −2x − y + 4." },

    { id:"math3-15", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour f(x, y) = −x² − xy − y² + 4x + 2y + 1, que vaut f_y ?",
      choices:["−x − 2y + 2","−x + 2y + 2","x − 2y + 2","−x − 2y − 2","−x − 2y","x + 2y + 2","−y − x + 2","−x + y + 2","−2y − x + 2","−x + 2y − 2"],
      answer:0, explanation:"f_y = −x − 2y + 2." },

    { id:"math3-16", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = −x² − xy − y² + 4x + 2y + 1, quel est le point critique ?",
      choices:["(2, 0)","(0, 2)","(1, 1)","(−2, 0)","(0, −2)","(2, 2)","(1, 2)","(2, 1)","(0, 0)","(1, 0)"],
      answer:0, explanation:"On résout −2x − y + 4 = 0 et −x − 2y + 2 = 0 → x = 2, y = 0." },

    { id:"math3-17", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = −x² − xy − y² + 4x + 2y + 1, quelle est la hessienne ?",
      choices:["(−2 −1 ; −1 −2)","(−2 0 ; 0 −2)","(−1 0 ; 0 −1)","(−2 −1 ; 1 −2)","(2 1 ; 1 2)","(−2 1 ; 1 −2)","(0 −1 ; −1 0)","(−1 −1 ; −1 −1)","(−2 −2 ; −2 −2)","(−1 0 ; 0 0)"],
      answer:0, explanation:"f_xx = −2, f_xy = −1, f_yx = −1, f_yy = −2." },

    { id:"math3-18", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = −x² − xy − y² + 4x + 2y + 1, quelle est la nature du point critique (2, 0) ?",
      choices:["Maximum local","Minimum local","Point selle","Indéterminé","Discontinuité","Maximum global","Minimum global","Point isolé","Point d'inflexion","Aucune de ces réponses"],
      answer:0, explanation:"H₁ = −2 < 0 et H₂ = (−2)(−2) − (−1)² = 3 > 0 → maximum local." },

    { id:"math3-19", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour f(x, y) = 2x³ + 2xy − 2x² + y² + 1, que vaut f_x ?",
      choices:["6x² + 2y − 4x","6x² + 2y + 4x","6x² − 2y − 4x","6x² + 2y","6x² + 2xy − 4x","6x² + 2y − 2x","6x² + 2x − 4x","6x² + 2y − 4","6x² + 2y − 4x²","6x² + 2y − 8x"],
      answer:0, explanation:"f_x = 6x² + 2y − 4x." },

    { id:"math3-20", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour f(x, y) = 2x³ + 2xy − 2x² + y² + 1, que vaut f_y ?",
      choices:["2x + 2y","2x − 2y","−2x + 2y","2x + y","x + 2y","2x + 2y²","2x + 2","2 + 2y","2x² + 2y","2x + 4y"],
      answer:0, explanation:"f_y = 2x + 2y." },

    { id:"math3-21", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = 2x³ + 2xy − 2x² + y² + 1, quels sont les points critiques ?",
      choices:["(0, 0) et (1, −1)","(1, 1) et (2, −2)","(0, 0) seul","(1, −1) seul","(2, 2) seul","(−1, 1) et (0, 0)","(1, 0) et (0, 1)","(0, 1) seul","(2, 1) seul","Aucun"],
      answer:0, explanation:"y = −x ; 6x² − 6x = 0 → x = 0 ou x = 1 ; donc (0,0) et (1,−1)." },

    { id:"math3-22", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = 2x³ + 2xy − 2x² + y² + 1, quelle est la nature de (0, 0) ?",
      choices:["Point selle","Minimum local","Maximum local","Indéterminé","Point d'inflexion","Maximum global","Minimum global","Point isolé","Discontinuité","Aucune de ces réponses"],
      answer:0, explanation:"H₂ = 24(0) − 12 = −12 < 0 → point selle." },

    { id:"math3-23", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = 2x³ + 2xy − 2x² + y² + 1, quelle est la nature de (1, −1) ?",
      choices:["Minimum local","Maximum local","Point selle","Indéterminé","Point d'inflexion","Maximum global","Minimum global","Point isolé","Discontinuité","Aucune de ces réponses"],
      answer:0, explanation:"H₁ = 8 > 0 et H₂ = 12 > 0 → minimum local strict." },

    { id:"math3-24", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour f(x, y) = x² + xy + 2y² − 3x + 2y + 5, que vaut f_x ?",
      choices:["2x + y − 3","2x + y + 3","2x − y − 3","2x + 2y − 3","2x + y","2x + y² − 3","x + y − 3","2x − 3","2x + y − 5","2x + 2y"],
      answer:0, explanation:"f_x = 2x + y − 3." },

    { id:"math3-25", chapter:"math-ch3", difficulty:"moyen",
      q:"Pour f(x, y) = x² + xy + 2y² − 3x + 2y + 5, que vaut f_y ?",
      choices:["x + 4y + 2","x + 4y − 2","x − 4y + 2","x + 2y + 2","x + 4y","x + 2y − 2","x + 4y − 5","2x + 4y + 2","x + 4y + 5","x + 2y"],
      answer:0, explanation:"f_y = x + 4y + 2." },

    { id:"math3-26", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = x² + xy + 2y² − 3x + 2y + 5, quel est le point critique ?",
      choices:["(2, −1)","(−2, 1)","(1, −1)","(−1, 1)","(0, 0)","(2, 1)","(1, 2)","(2, 2)","(0, −1)","(−2, −1)"],
      answer:0, explanation:"2x + y = 3 et x + 4y = −2 → x = 2, y = −1." },

    { id:"math3-27", chapter:"math-ch3", difficulty:"difficile",
      q:"Pour f(x, y) = x² + xy + 2y² − 3x + 2y + 5, quelle est la nature du point critique ?",
      choices:["Minimum local","Maximum local","Point selle","Indéterminé","Maximum global","Minimum global","Point d'inflexion","Discontinuité","Point isolé","Aucune de ces réponses"],
      answer:0, explanation:"H₁ = 2 > 0, H₂ = 7 > 0 → minimum local strict." },

    { id:"math3-28", chapter:"math-ch3", difficulty:"facile",
      q:"La matrice hessienne d'une fonction de deux variables est…",
      choices:["Une matrice 2×2","Une matrice 1×2","Une matrice 2×1","Une matrice 3×3","Une matrice 1×1","Un vecteur","Un scalaire","Une matrice nulle","Une matrice identité","Une matrice triangulaire"],
      answer:0, explanation:"La hessienne regroupe 4 dérivées partielles d'ordre 2 dans une matrice 2×2." },

    { id:"math3-29", chapter:"math-ch3", difficulty:"facile",
      q:"Que mesure le signe de H₂ par rapport à la nature du point critique ?",
      choices:["Il distingue extremum (H₂>0) et point selle (H₂<0)","Il détermine si f est croissante","Il donne la valeur de f","Il donne le taux d'accroissement","Il mesure la pente","Il est toujours positif","Il est toujours négatif","Il est toujours nul","Il détermine le signe de f","Aucune de ces réponses"],
      answer:0, explanation:"H₂ > 0 : extremum (min ou max selon H₁). H₂ < 0 : point selle." },

    { id:"math3-30", chapter:"math-ch3", difficulty:"facile",
      q:"Le mot « strict » dans « minimum local strict » signifie que…",
      choices:["Suffisamment près, toutes les autres valeurs sont strictement supérieures","La fonction est strictement croissante","La dérivée est strictement positive","Le minimum est global","Il y a unicité du point","La fonction est strictement décroissante","Rien de particulier","La fonction est convexe","La fonction est concave","La fonction est linéaire"],
      answer:0, explanation:"« Strict » signifie que le minimum (ou maximum) est atteint uniquement en ce point au voisinage." }
  ]
});