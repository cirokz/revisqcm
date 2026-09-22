window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "math", courseName: "Mathématiques", courseIcon: "📐", courseColor: "#3b82f6",
  chapterId: "math-ch2", chapterName: "Ch.2 — Calcul différentiel",
  questions: [
    { id:"math2-01", chapter:"math-ch2", difficulty:"facile",
      q:"Qu'est-ce que la variation exacte Δf d'une fonction f ?",
      choices:["f(x + Δx) − f(x)","f(x) − f(x + Δx)","f(x) + Δx","f(x) × Δx","Δx / f(x)","f'(x) × Δx","f(x) − f'(x)","Δx + f(x)","f'(x) + Δx","f(x) / Δx"],
      answer:0, explanation:"Δf = f(x + Δx) − f(x) : variation de la fonction quand la variable passe de x à x + Δx." },

    { id:"math2-02", chapter:"math-ch2", difficulty:"facile",
      q:"Si Δf > 0, que peut-on dire ?",
      choices:["La valeur de la fonction augmente","La valeur de la fonction diminue","La fonction est constante","La fonction est nulle","La fonction est négative","La dérivée est nulle","La dérivée est positive","La fonction change de signe","Rien","La variable ne change pas"],
      answer:0, explanation:"Δf > 0 signifie que la valeur de la fonction a augmenté." },

    { id:"math2-03", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x) = x² − 4x + 4 à partir de x = 3 avec Δx = 0,01, quelle est la variation exacte Δf ?",
      choices:["0,0201","0,02","0,01","0,03","0,0404","0,0609","0,0001","0,1","0,2","0,002"],
      answer:0, explanation:"f(3) = 1 ; f(3,01) = 1,0201 ; Δf = 0,0201." },

    { id:"math2-04", chapter:"math-ch2", difficulty:"moyen",
      q:"Quelle est la formule de la différentielle df ?",
      choices:["df = f'(x) · dx","df = f(x) · dx","df = f'(x) / dx","df = f(x) + dx","df = f'(x) + dx","df = f(x) − dx","df = f'(x) − dx","df = dx / f'(x)","df = f(x) × f'(x)","df = f'(x) × x"],
      answer:0, explanation:"df = f'(x) · dx (approximation linéaire de la variation)." },

    { id:"math2-05", chapter:"math-ch2", difficulty:"moyen",
      q:"Quand la différentielle est-elle une bonne approximation de la variation exacte ?",
      choices:["Quand Δx est proche de 0","Quand Δx est très grand","Quand Δx = 1","Quand Δx = 0 toujours","Quand f'(x) est nul","Quand f(x) = 0","Quand x est proche de 0","Quand f est croissante","Quand f est décroissante","Jamais"],
      answer:0, explanation:"Plus Δx est proche de 0, plus l'approximation Δf ≈ df est précise." },

    { id:"math2-06", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x) = x² − 4x + 4 avec x = 3, que vaut f'(3) ?",
      choices:["2","−2","0","1","3","4","6","−4","8","5"],
      answer:0, explanation:"f'(x) = 2x − 4, donc f'(3) = 2." },

    { id:"math2-07", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x) = 2x³ − 6x² − 18x + 23, que vaut f'(x) ?",
      choices:["6x² − 12x − 18","6x² − 6x − 18","2x² − 6x − 18","6x² − 12x + 18","6x³ − 12x² − 18x","6x² − 12x","6x² − 12x − 23","6x² + 12x − 18","6x² − 12x − 6","2x³ − 6x² − 18"],
      answer:0, explanation:"f'(x) = 6x² − 12x − 18." },

    { id:"math2-08", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x) = 2x³ − 6x² − 18x + 23, que vaut f'(1) ?",
      choices:["−24","24","0","−18","−6","6","12","−12","−30","30"],
      answer:0, explanation:"f'(1) = 6 − 12 − 18 = −24." },

    { id:"math2-09", chapter:"math-ch2", difficulty:"moyen",
      q:"Avec Y(G) = 500 + 2G − 0,02G², quelle est la dérivée Y'(G) ?",
      choices:["2 − 0,04G","2 + 0,04G","2G − 0,04","500 + 2","2G − 0,02","0,02 − 2G","2 − 0,02G","2 − 0,04G²","2G","2"],
      answer:0, explanation:"Y'(G) = 2 − 2 × 0,02 × G = 2 − 0,04G." },

    { id:"math2-10", chapter:"math-ch2", difficulty:"moyen",
      q:"Avec Y(G) = 500 + 2G − 0,02G², que vaut Y'(20) ?",
      choices:["1,2","2","0,8","1,6","2,4","0,4","1,8","1","3","4"],
      answer:0, explanation:"Y'(20) = 2 − 0,04 × 20 = 2 − 0,8 = 1,2." },

    { id:"math2-11", chapter:"math-ch2", difficulty:"facile",
      q:"Que signifie Y'(20) = 1,2 économique ?",
      choices:["Une augmentation d'1 milliard de G entraîne ≈ +1,2 milliard de PIB","Une augmentation d'1 G entraîne +1,2 % de PIB","Le PIB est de 1,2 milliard","La dérivée est nulle","G est de 1,2","G augmente de 1,2","Le PIB baisse de 1,2","Le PIB est constant","Rien","La dérivée est positive"],
      answer:0, explanation:"Y'(20) mesure la variation du PIB pour une petite variation de G au voisinage de G = 20." },

    { id:"math2-12", chapter:"math-ch2", difficulty:"moyen",
      q:"Qu'est-ce qu'une fonction de deux variables ?",
      choices:["Une formule qui calcule un nombre à partir de deux nombres","Une fonction qui a deux dérivées","Une fonction définie sur deux intervalles","Une fonction de degré 2","Une fonction à deux racines","Une fonction polynomiale","Une fonction paire","Une fonction impaire","Une fonction périodique","Une fonction constante"],
      answer:0, explanation:"f(x, y) associe un nombre à un couple (x, y) de nombres réels." },

    { id:"math2-13", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x, y) = x² + y², que vaut f(1, 2) ?",
      choices:["5","3","1","4","9","−5","0","2","1,5","6"],
      answer:0, explanation:"f(1, 2) = 1² + 2² = 1 + 4 = 5." },

    { id:"math2-14", chapter:"math-ch2", difficulty:"moyen",
      q:"Que note-t-on ∂f/∂x ?",
      choices:["La dérivée partielle de f par rapport à x (y fixé)","La dérivée totale de f","La dérivée par rapport à y","Le produit de f et x","La somme de f et x","La dérivée seconde","L'intégrale de f","La différentielle","Le gradient","Le Laplacien"],
      answer:0, explanation:"∂f/∂x est obtenue en dérivant f par rapport à x en considérant y comme une constante." },

    { id:"math2-15", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x, y) = 2x³ + 3y² − 4x²y − 2xy + 1, que vaut ∂f/∂x ?",
      choices:["6x² − 8xy − 2y","6x² + 3y² − 2y","6x² − 8xy + 2y","6x² − 4x² − 2x","6x² − 8x − 2y","6x² − 8xy + 1","6x − 8xy − 2y","6x² − 8y − 2y","6x² + 8xy − 2y","2x² − 8xy − 2y"],
      answer:0, explanation:"On dérive par rapport à x en considérant y constant : 6x² − 8xy − 2y." },

    { id:"math2-16", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x, y) = 2x³ + 3y² − 4x²y − 2xy + 1, que vaut ∂f/∂y ?",
      choices:["6y − 4x² − 2x","6y + 4x² − 2x","6y − 4x² + 2x","3y² − 4x² − 2x","6y − 8x − 2x","6y − 4x² − 2","6y − 4x − 2x","6y + 4x + 2x","6y − 8x² − 2x","6y − 4x² − 2y"],
      answer:0, explanation:"On dérive par rapport à y en considérant x constant : 6y − 4x² − 2x." },

    { id:"math2-17", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x, y) = 3x³ − 2y³ + 4x²y − 5xy² + 2x² − 3y² + 4xy + 1, que vaut ∂f/∂x ?",
      choices:["9x² + 8xy − 5y² + 4x + 4y","9x² − 8xy − 5y² + 4x + 4y","9x² + 8xy + 5y² + 4x + 4y","9x² + 8xy − 5y² − 4x + 4y","3x² + 8xy − 5y² + 4x + 4y","9x² + 8xy − 5y² + 4x","9x² + 8y − 5y² + 4x + 4y","9x² + 8xy − 5y + 4x + 4y","9x² + 8xy − 5y² + 2x + 4y","9x² + 8xy − 5y² + 4x − 4y"],
      answer:0, explanation:"On dérive chaque terme en x : 9x² + 8xy − 5y² + 4x + 4y." },

    { id:"math2-18", chapter:"math-ch2", difficulty:"moyen",
      q:"Quelle est la différentielle d'une fonction de deux variables ?",
      choices:["df = (∂f/∂x)dx + (∂f/∂y)dy","df = (∂f/∂x) + (∂f/∂y)","df = (∂f/∂x)·(∂f/∂y)","df = (∂f/∂x)dx − (∂f/∂y)dy","df = (∂f/∂x)/dx","df = ∂f/∂x + ∂f/∂y + dx + dy","df = f(x,y) + dx + dy","df = f(x,y)·dx·dy","df = (∂f/∂x)·f","df = (∂f/∂x)dx × (∂f/∂y)dy"],
      answer:0, explanation:"df = (∂f/∂x)dx + (∂f/∂y)dy : somme des effets de x et y." },

    { id:"math2-19", chapter:"math-ch2", difficulty:"difficile",
      q:"Pour f(x, y) = 2x³ + 3y² − 4x²y − 2xy + 1, au point (1, 2), que vaut ∂f/∂x ?",
      choices:["−14","14","−6","6","0","2","−2","10","−10","18"],
      answer:0, explanation:"∂f/∂x(1,2) = 6(1)² − 8(1)(2) − 2(2) = 6 − 16 − 4 = −14." },

    { id:"math2-20", chapter:"math-ch2", difficulty:"difficile",
      q:"Pour f(x, y) = 2x³ + 3y² − 4x²y − 2xy + 1, au point (1, 2), que vaut ∂f/∂y ?",
      choices:["6","−6","2","−2","0","12","−12","4","−4","18"],
      answer:0, explanation:"∂f/∂y(1,2) = 6(2) − 4(1)² − 2(1) = 12 − 4 − 2 = 6." },

    { id:"math2-21", chapter:"math-ch2", difficulty:"difficile",
      q:"Pour f(x, y) = 2x³ + 3y² − 4x²y − 2xy + 1, que vaut la différentielle au point (1, 2) ?",
      choices:["df = −14dx + 6dy","df = 14dx + 6dy","df = −14dx − 6dy","df = 6dx − 14dy","df = −14dx + 6","df = 14dx + 6","df = −14 + 6dy","df = −8dx + 4dy","df = 8dx + 4dy","df = −6dx + 14dy"],
      answer:0, explanation:"df = (∂f/∂x)dx + (∂f/∂y)dy = −14dx + 6dy." },

    { id:"math2-22", chapter:"math-ch2", difficulty:"difficile",
      q:"Avec df = −14dx + 6dy, si dx = 0,01 et dy = 0,02, que vaut df ?",
      choices:["−0,02","−0,14","0,12","−0,26","0,02","0,14","−0,12","0,26","−0,16","0,16"],
      answer:0, explanation:"df = −14(0,01) + 6(0,02) = −0,14 + 0,12 = −0,02." },

    { id:"math2-23", chapter:"math-ch2", difficulty:"facile",
      q:"Comment note-t-on f(x + Δx, y + Δy) − f(x, y) ?",
      choices:["Δf","df","δf","Δdf","f'","∇f","∂f","f(x)","dy","dx"],
      answer:0, explanation:"Δf est la variation exacte de f pour des variations Δx et Δy." },

    { id:"math2-24", chapter:"math-ch2", difficulty:"moyen",
      q:"Que vaut ∂f/∂x pour f(x, y) = x² + y² ?",
      choices:["2x","2y","2x + 2y","x + y","2xy","0","x²","y²","4x","4y"],
      answer:0, explanation:"On dérive par rapport à x en considérant y constant : 2x." },

    { id:"math2-25", chapter:"math-ch2", difficulty:"moyen",
      q:"Que vaut ∂f/∂y pour f(x, y) = x² + y² ?",
      choices:["2y","2x","2x + 2y","x + y","2xy","0","x²","y²","4y","4x"],
      answer:0, explanation:"On dérive par rapport à y : 2y." },

    { id:"math2-26", chapter:"math-ch2", difficulty:"facile",
      q:"Quel symbole utilise-t-on pour les dérivées partielles ?",
      choices:["∂","d","δ","Δ","∇","∫","Σ","π","∞","√"],
      answer:0, explanation:"∂ (d rond) est utilisé pour distinguer les dérivées partielles des dérivées totales." },

    { id:"math2-27", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x, y) = x³ + y³ − 2x²y + 3xy − 4x + 2y + 1, que vaut ∂f/∂x ?",
      choices:["3x² − 4xy + 3y − 4","3x² + 4xy + 3y − 4","3x² − 4xy − 3y − 4","3x² − 4xy + 3y + 4","3x² + y³ + 3y − 4","x² − 4xy + 3y − 4","3x² − 4x + 3y − 4","3x² − 4xy + 3y","3x² − 4xy + 3y − 2","3x² − 4xy + 2y − 4"],
      answer:0, explanation:"Dérivée partielle en x : 3x² − 4xy + 3y − 4." },

    { id:"math2-28", chapter:"math-ch2", difficulty:"moyen",
      q:"Pour f(x, y) = x³ + y³ − 2x²y + 3xy − 4x + 2y + 1, que vaut ∂f/∂y ?",
      choices:["3y² − 2x² + 3x + 2","3y² + 2x² + 3x + 2","3y² − 2x² − 3x + 2","3y² − 2x² + 3x − 2","3y² − 2x + 3x + 2","3y² − 2x² + 3x","3y² − 2x² + 3y + 2","3y² − 4x + 3x + 2","3y² − 2x² + 3x + 2y","3y² + 3x + 2"],
      answer:0, explanation:"Dérivée partielle en y : 3y² − 2x² + 3x + 2." },

    { id:"math2-29", chapter:"math-ch2", difficulty:"difficile",
      q:"Pour f(x, y) = x³ + y³ − 2x²y + 3xy − 4x + 2y + 1, au point (2, 1), que vaut ∂f/∂x ?",
      choices:["3","−3","6","−6","12","−12","0","1","2","4"],
      answer:0, explanation:"∂f/∂x(2,1) = 3(4) − 4(2)(1) + 3(1) − 4 = 12 − 8 + 3 − 4 = 3." },

    { id:"math2-30", chapter:"math-ch2", difficulty:"difficile",
      q:"Pour f(x, y) = x³ + y³ − 2x²y + 3xy − 4x + 2y + 1, au point (2, 1), que vaut ∂f/∂y ?",
      choices:["3","−3","6","−6","0","1","2","4","12","−12"],
      answer:0, explanation:"∂f/∂y(2,1) = 3(1) − 2(4) + 3(2) + 2 = 3 − 8 + 6 + 2 = 3." }
  ]
});