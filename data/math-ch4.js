window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "math", courseName: "Mathématiques", courseIcon: "📐", courseColor: "#3b82f6",
  chapterId: "math-ch4", chapterName: "Ch.4 — Multiplicateurs de Lagrange",
  questions: [
    { id:"math4-01", chapter:"math-ch4", difficulty:"facile",
      q:"Qu'est-ce qu'une optimisation sous contrainte ?",
      choices:["Optimiser une fonction en respectant une relation imposée entre les variables","Optimiser une fonction sans contrainte","Trouver le maximum d'une fonction de 1 variable","Calculer une dérivée partielle","Résoudre un système linéaire","Optimiser une fonction de plusieurs variables sans relation","Calculer une intégrale","Résoudre une équation du second degré","Dériver une fonction exponentielle","Aucune de ces réponses"],
      answer:0, explanation:"On cherche un extremum de f(x,y) sous une contrainte g(x,y) = 0." },

    { id:"math4-02", chapter:"math-ch4", difficulty:"moyen",
      q:"Comment définit-on le lagrangien L ?",
      choices:["L = f(x, y) + λ·g(x, y)","L = f(x, y) − λ·g(x, y)","L = f(x, y) · g(x, y)","L = f(x, y) / g(x, y)","L = λ·g(x, y) seul","L = f(x, y) seul","L = g(x, y) seul","L = f'(x, y) + g'(x, y)","L = f + g","L = f × λ"],
      answer:0, explanation:"L = f(x, y) + λ·g(x, y), où λ est le multiplicateur de Lagrange." },

    { id:"math4-03", chapter:"math-ch4", difficulty:"moyen",
      q:"Comment écrit-on la contrainte sous forme standard ?",
      choices:["g(x, y) = 0","g(x, y) = 1","g(x, y) = x + y","g(x, y) = f(x, y)","g(x, y) = λ","g(x, y) > 0","g(x, y) < 0","g(x, y) = k","g(x, y) ≠ 0","g(x, y) = f + λ"],
      answer:0, explanation:"On écrit toujours la contrainte g(x, y) = 0." },

    { id:"math4-04", chapter:"math-ch4", difficulty:"moyen",
      q:"Quel système d'équations résout-on pour trouver les points critiques sous contrainte ?",
      choices:["L_λ = 0, L_x = 0, L_y = 0","L_x = 0 et L_y = 0","L_λ = 0 seul","f_x = 0 et f_y = 0","f_x + f_y = 0","g_x = 0 et g_y = 0","L = 0","f = g","λ = 0","L_λ = 1"],
      answer:0, explanation:"On annule les trois dérivées premières du lagrangien : L_λ, L_x, L_y." },

    { id:"math4-05", chapter:"math-ch4", difficulty:"moyen",
      q:"Que vaut L_λ ?",
      choices:["g(x, y)","f(x, y)","λ","f_x + λg_x","f_y + λg_y","f_x","f_y","g_x","g_y","0"],
      answer:0, explanation:"Puisque L = f + λg, on a L_λ = g(x,y)." },

    { id:"math4-06", chapter:"math-ch4", difficulty:"moyen",
      q:"Que vaut L_x ?",
      choices:["f_x + λ·g_x","f_x","λ·g_x","f_x − λ·g_x","g_x","f_x + g_x","f_x · g_x","f_x / g_x","f_x + λ","f_x − g_x"],
      answer:0, explanation:"L_x = f_x + λ·g_x." },

    { id:"math4-07", chapter:"math-ch4", difficulty:"moyen",
      q:"Comment s'écrit la matrice hessienne bordée dans l'ordre (λ, x, y) ?",
      choices:["(0 g_x g_y ; g_x L_xx L_xy ; g_y L_yx L_yy)","(L_xx L_xy ; L_yx L_yy)","(0 f_x f_y ; f_x L_xx L_xy ; f_y L_yx L_yy)","(g_x g_y ; g_x L_xx ; g_y L_yy)","(L_xx 0 ; 0 L_yy)","(0 0 0 ; 0 L_xx L_xy ; 0 L_yx L_yy)","(1 g_x g_y ; g_x 1 0 ; g_y 0 1)","(0 1 1 ; 1 L_xx L_xy ; 1 L_yx L_yy)","(L_λλ L_λx L_λy ; L_xλ L_xx L_xy ; L_yλ L_yx L_yy)","(0 f_x f_y ; f_x 0 0 ; f_y 0 0)"],
      answer:0, explanation:"On remplace L_λλ par 0 et L_λx = L_xλ par g_x, L_λy = L_yλ par g_y." },

    { id:"math4-08", chapter:"math-ch4", difficulty:"moyen",
      q:"Comment classifie-t-on un point critique via le déterminant Δ_b de la hessienne bordée ?",
      choices:["Δ_b > 0 : maximum ; Δ_b < 0 : minimum","Δ_b > 0 : minimum ; Δ_b < 0 : maximum","Δ_b > 0 : point selle","Δ_b > 0 : indéterminé","Δ_b = 0 : maximum","Δ_b = 0 : minimum","Δ_b < 0 : point selle","Δ_b < 0 : indéterminé","Δ_b > 0 : pas d'extremum","Δ_b < 0 : pas d'extremum"],
      answer:0, explanation:"Δ_b > 0 : maximum local sous contrainte. Δ_b < 0 : minimum local sous contrainte." },

    { id:"math4-09", chapter:"math-ch4", difficulty:"moyen",
      q:"Pour f(x, y) = −x² − y² + 4x + 4y + 2 sous contrainte x + y = 2, que vaut g(x, y) ?",
      choices:["x + y − 2","x + y + 2","−x − y + 2","2x + 2y − 2","x + y","2 − x − y","x + y + 1","x − y − 2","2x + y − 2","x + 2y − 2"],
      answer:0, explanation:"On écrit x + y = 2 sous la forme g = x + y − 2 = 0." },

    { id:"math4-10", chapter:"math-ch4", difficulty:"difficile",
      q:"Pour f(x, y) = −x² − y² + 4x + 4y + 2 sous x + y = 2, quel est le point critique du lagrangien ?",
      choices:["(λ*, x*, y*) = (−2, 1, 1)","(−2, 0, 2)","(2, 1, 1)","(−1, 1, 1)","(−2, 2, 0)","(−3, 1, 1)","(0, 1, 1)","(−2, 1, 0)","(−2, 0, 0)","(−4, 2, 0)"],
      answer:0, explanation:"x = 2 + λ/2, y = 2 + λ/2, donc x + y − 2 = 0 → 2 + λ = 0 → λ = −2, x = y = 1." },

    { id:"math4-11", chapter:"math-ch4", difficulty:"difficile",
      q:"Pour f(x, y) = −x² − y² + 4x + 4y + 2 sous x + y = 2, quelle est la valeur maximale ?",
      choices:["8","10","6","4","2","0","−8","12","16","14"],
      answer:0, explanation:"f(1, 1) = −1 − 1 + 4 + 4 + 2 = 8." },

    { id:"math4-12", chapter:"math-ch4", difficulty:"difficile",
      q:"Dans le problème du consommateur U(x,y) = xy sous p_x x + p_y y = R, quelle contrainte utilise-t-on ?",
      choices:["g(x, y) = p_x x + p_y y − R","g(x, y) = xy − R","g(x, y) = p_x + p_y − R","g(x, y) = x + y − R","g(x, y) = xy + R","g(x, y) = p_x x − p_y y","g(x, y) = R − xy","g(x, y) = xy − p_x − p_y","g(x, y) = p_x + x","g(x, y) = p_y + y"],
      answer:0, explanation:"La contrainte budgétaire p_x x + p_y y = R s'écrit g(x,y) = p_x x + p_y y − R = 0." },

    { id:"math4-13", chapter:"math-ch4", difficulty:"difficile",
      q:"Avec U(x,y) = xy, p_x = 2, p_y = 3, R = 12, quel est le panier optimal ?",
      choices:["(3, 2)","(2, 3)","(4, 1)","(1, 4)","(6, 0)","(0, 4)","(2, 2)","(3, 3)","(4, 2)","(2, 4)"],
      answer:0, explanation:"x = 3, y = 2 (avec λ = −1), et 2(3) + 3(2) = 12 ✓." },

    { id:"math4-14", chapter:"math-ch4", difficulty:"difficile",
      q:"Avec U(x,y) = xy, p_x = 2, p_y = 3, R = 12, quelle est l'utilité maximale ?",
      choices:["6","12","5","8","4","10","3","9","2","24"],
      answer:0, explanation:"U(3, 2) = 3 × 2 = 6." },

    { id:"math4-15", chapter:"math-ch4", difficulty:"facile",
      q:"Comment note-t-on le déterminant de la hessienne bordée ?",
      choices:["Δ_b","Δ","H₂","H₁","D","det(H)","λ","L","δ","∇"],
      answer:0, explanation:"Δ_b = det(H_b) est le déterminant de la matrice hessienne bordée." },

    { id:"math4-16", chapter:"math-ch4", difficulty:"moyen",
      q:"Dans la hessienne bordée, que vaut L_λλ ?",
      choices:["0","1","g_x","g_y","f_x","f_y","λ","f_xx","f_yy","g"],
      answer:0, explanation:"L_λλ = 0 car L = f + λg et g ne dépend pas de λ." },

    { id:"math4-17", chapter:"math-ch4", difficulty:"moyen",
      q:"Pour f(x, y) = −x² − y² + 4x + 4y + 2 avec g(x,y) = x + y − 2, que vaut g_x ?",
      choices:["1","−1","2","−2","0","x","y","x + y","2x","x − y"],
      answer:0, explanation:"g_x = ∂(x + y − 2)/∂x = 1." },

    { id:"math4-18", chapter:"math-ch4", difficulty:"moyen",
      q:"Pour f(x, y) = −x² − y² + 4x + 4y + 2 avec g(x,y) = x + y − 2, quelle est la hessienne bordée ?",
      choices:["(0 1 1 ; 1 −2 0 ; 1 0 −2)","(0 2 2 ; 2 −2 0 ; 2 0 −2)","(0 1 1 ; 1 −2 −1 ; 1 −1 −2)","(0 1 1 ; 1 −4 0 ; 1 0 −4)","(0 −2 −2 ; −2 0 0 ; −2 0 0)","(1 0 0 ; 0 1 0 ; 0 0 1)","(0 0 0 ; 0 0 0 ; 0 0 0)","(0 1 −1 ; 1 0 0 ; −1 0 0)","(0 2 0 ; 2 0 0 ; 0 0 0)","(0 0 2 ; 0 0 0 ; 2 0 0)"],
      answer:0, explanation:"g_x = 1, g_y = 1 ; f_xx = f_yy = −2 ; f_xy = 0." },

    { id:"math4-19", chapter:"math-ch4", difficulty:"difficile",
      q:"Pour f(x, y) = −x² − y² + 4x + 4y + 2 sous x+y=2, quel est le signe de Δ_b ?",
      choices:["Δ_b = 4 > 0 → maximum","Δ_b = 4 < 0 → minimum","Δ_b = 0","Δ_b = −4","Δ_b = 8","Δ_b = −8","Δ_b = 2","Δ_b = −2","Δ_b = 1","Δ_b = −1"],
      answer:0, explanation:"Δ_b = 4 > 0 → maximum local sous contrainte, ce qui est cohérent avec f(1,1) = 8." },

    { id:"math4-20", chapter:"math-ch4", difficulty:"moyen",
      q:"Comment appelle-t-on λ dans le lagrangien ?",
      choices:["Multiplicateur de Lagrange","Coefficient directeur","Pente","Dérivée partielle","Discriminant","Déterminant","Hessienne","Gradient","Lagrangien","Contrainte"],
      answer:0, explanation:"λ est le multiplicateur de Lagrange." },

    { id:"math4-21", chapter:"math-ch4", difficulty:"facile",
      q:"Que signifie « optimisation sous contrainte » ?",
      choices:["Chercher un extremum en respectant g(x, y) = 0","Chercher un extremum libre","Résoudre une équation linéaire","Calculer une dérivée","Intégrer une fonction","Calculer une hessienne sans contrainte","Trouver un point critique libre","Résoudre un système de 2 équations","Calculer un déterminant","Aucune de ces réponses"],
      answer:0, explanation:"On optimise f(x,y) parmi les couples (x,y) qui respectent la contrainte g(x,y) = 0." },

    { id:"math4-22", chapter:"math-ch4", difficulty:"difficile",
      q:"Avec f(x,y) = x² + y² − 4x − 5y + 6 sous contrainte 2x + y = 4, que vaut le point critique ?",
      choices:["(λ*, x*, y*) = (1, 1, 2)","(1, 2, 1)","(0, 1, 2)","(2, 1, 0)","(1, 0, 4)","(2, 2, 0)","(1, 1, 1)","(0, 2, 0)","(2, 0, 0)","(1, 2, 0)"],
      answer:0, explanation:"L_λ = 2x + y − 4 ; L_x = 2x − 4 + 2λ ; L_y = 2y − 5 + λ. On trouve λ = 1, x = 1, y = 2." },

    { id:"math4-23", chapter:"math-ch4", difficulty:"facile",
      q:"Dans l'ordre de la hessienne bordée, quelle variable vient en premier ?",
      choices:["λ","x","y","f","g","x + y","R","p_x","y + x","L"],
      answer:0, explanation:"L'ordre est (λ, x, y) pour faciliter la lecture." },

    { id:"math4-24", chapter:"math-ch4", difficulty:"moyen",
      q:"L'escompte se calcule sur quelle base dans une facture ?",
      choices:["Net commercial","Montant brut","Net TTC","Net HT","Coût d'achat HT","Prix TTC","Prix HT + port","Montant HT initial","Montant brut + TVA","Montant net financier"],
      answer:0, explanation:"L'escompte se calcule toujours sur le net commercial." },

    { id:"math4-25", chapter:"math-ch4", difficulty:"moyen",
      q:"Pour f(x,y) = -x² - 2y² + 6x + 5y + 1 sous contrainte 2x + y = 5, que vaut le point critique ?",
      choices:["(λ*, x*, y*) = (−1, 2, 1)","(1, 2, 1)","(−1, 1, 3)","(−2, 1, 3)","(2, 1, −1)","(1, 1, 3)","(0, 2, 1)","(3, 1, −1)","(2, 1, 1)","(1, 3, −1)"],
      answer:0, explanation:"L_λ = 2x + y − 5 ; L_x = −2x + 6 + 2λ ; L_y = −4y + 5 + λ. Résolution : λ = −1, x = 2, y = 1." }
  ]
});