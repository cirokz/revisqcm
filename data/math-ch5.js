window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "math", courseName: "Mathématiques", courseIcon: "📐", courseColor: "#3b82f6",
  chapterId: "math-ch5", chapterName: "Ch.5 — Fonction exponentielle",
  questions: [
    { id:"math5-01", chapter:"math-ch5", difficulty:"facile",
      q:"Quelle est la valeur approchée du nombre e ?",
      choices:["2,71828...","3,14159...","1,61803...","1,41421...","2,30258...","1,73205...","0,57721...","2,50290...","10,0000","2,00000"],
      answer:0, explanation:"e ≈ 2,71828..." },

    { id:"math5-02", chapter:"math-ch5", difficulty:"facile",
      q:"Que vaut e⁰ ?",
      choices:["1","0","e","∞","−1","2","e²","1/e","e⁻¹","Indéfini"],
      answer:0, explanation:"e⁰ = 1." },

    { id:"math5-03", chapter:"math-ch5", difficulty:"facile",
      q:"Que vaut e² approximativement ?",
      choices:["≈ 7,389","≈ 4,481","≈ 5,436","≈ 2,718","≈ 20,08","≈ 1,648","≈ 8,101","≈ 6,289","≈ 3,141","≈ 2,000"],
      answer:0, explanation:"e² ≈ 7,389." },

    { id:"math5-04", chapter:"math-ch5", difficulty:"facile",
      q:"Quel est le signe de eˣ pour tout x ?",
      choices:["Strictement positif","Strictement négatif","Nul","Positif ou nul","Négatif ou nul","Dépend de x","Change de signe","Toujours infini","Toujours -1","Indéfini"],
      answer:0, explanation:"eˣ > 0 pour tout x réel." },

    { id:"math5-05", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la formule de eᵃ⁺ᵇ ?",
      choices:["eᵃ · eᵇ","eᵃ + eᵇ","eᵃ − eᵇ","eᵃ / eᵇ","eᵃ × b","eᵃᵇ","eᵃ / b","eᵃ + b","eᵃ · b","eᵃ + a·b"],
      answer:0, explanation:"eᵃ⁺ᵇ = eᵃ · eᵇ (attention : ≠ eᵃ + eᵇ)." },

    { id:"math5-06", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la formule de eᵃ⁻ᵇ ?",
      choices:["eᵃ / eᵇ","eᵃ − eᵇ","eᵃ · eᵇ","eᵃ + eᵇ","eᵃ × b","eᵃᵇ","eᵃ − b","eᵇ / eᵃ","eᵃ⁻¹","eᵃ / b"],
      answer:0, explanation:"eᵃ⁻ᵇ = eᵃ / eᵇ." },

    { id:"math5-07", chapter:"math-ch5", difficulty:"moyen",
      q:"Que vaut e⁻ᵃ ?",
      choices:["1 / eᵃ","−eᵃ","eᵃ","1 − eᵃ","eᵃ − 1","−1 / eᵃ","1 + eᵃ","e^(1/a)","a/e","ln(a)"],
      answer:0, explanation:"e⁻ᵃ = 1/eᵃ." },

    { id:"math5-08", chapter:"math-ch5", difficulty:"moyen",
      q:"Que vaut (eᵃ)ⁿ pour n entier relatif ?",
      choices:["eⁿᵃ","eᵃ⁺ⁿ","eᵃ⁻ⁿ","n·eᵃ","e^(a/n)","e^(n/a)","eᵃ · n","eᵃ / n","e^(a+n)","e^(a−n)"],
      answer:0, explanation:"(eᵃ)ⁿ = eⁿᵃ." },

    { id:"math5-09", chapter:"math-ch5", difficulty:"facile",
      q:"Simplifier e³ · e⁵.",
      choices:["e⁸","e¹⁵","e²","2e⁸","e³ + e⁵","e⁻²","e^(3/5)","e^(5/3)","15e","e² · e⁵"],
      answer:0, explanation:"e³ · e⁵ = e³⁺⁵ = e⁸." },

    { id:"math5-10", chapter:"math-ch5", difficulty:"facile",
      q:"Simplifier e⁷ / e³.",
      choices:["e⁴","e¹⁰","e²¹","e^(7/3)","e^(3/7)","e⁻⁴","e^(7·3)","e⁷ − e³","e³ / e⁷","1"],
      answer:0, explanation:"e⁷ / e³ = e⁷⁻³ = e⁴." },

    { id:"math5-11", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = eˣ ?",
      choices:["eˣ","x·eˣ","eˣ/x","ln(x)","1/eˣ","x²/2","eˣ⁻¹","x·eˣ⁻¹","1","e"],
      answer:0, explanation:"La fonction exponentielle est sa propre dérivée : (eˣ)' = eˣ." },

    { id:"math5-12", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = e^(u(x)) ?",
      choices:["u'(x)·e^(u(x))","e^(u(x))","u(x)·e^(u(x))","u'(x) + e^(u(x))","u'(x) / e^(u(x))","e^(u'(x))","u(x) + e^(u(x))","u'(x)·u(x)","e^(u(x))/u'(x)","1/e^(u(x))"],
      answer:0, explanation:"(eᵘ)' = u' · eᵘ." },

    { id:"math5-13", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = e^(−2x) ?",
      choices:["−2e^(−2x)","2e^(−2x)","e^(−2x)","−e^(−2x)","−2x·e^(−2x)","2x·e^(−2x)","e^(−2)","−2e^(2x)","e^(2x)","−2"],
      answer:0, explanation:"(e^(-2x))' = −2 · e^(−2x)." },

    { id:"math5-14", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = e^(3x+1) ?",
      choices:["3e^(3x+1)","e^(3x+1)","(3x+1)e^(3x+1)","3xe^(3x+1)","e^(3)","3 + e^(3x+1)","e^(3x+1)/3","3·x·e^(3x+1)","e^(3x)","3e^(x)"],
      answer:0, explanation:"(e^(3x+1))' = 3 · e^(3x+1)." },

    { id:"math5-15", chapter:"math-ch5", difficulty:"difficile",
      q:"Quelle est la dérivée de h(x) = e^(2x² + 3x + 1) ?",
      choices:["(4x + 3)e^(2x² + 3x + 1)","(4x + 3) + e^(2x² + 3x + 1)","(2x + 3)e^(2x² + 3x + 1)","(4x)e^(2x² + 3x + 1)","e^(2x² + 3x + 1)","(2x² + 3x + 1)e^(...)","(4x + 3)·(2x² + 3x + 1)","(4x − 3)e^(...)","(x² + 3)e^(...)","(4x + 3)/e^(...)"],
      answer:0, explanation:"u = 2x² + 3x + 1, u' = 4x + 3. Donc h'(x) = (4x + 3)e^(2x² + 3x + 1)." },

    { id:"math5-16", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la limite de eˣ quand x → +∞ ?",
      choices:["+∞","0","1","−∞","e","2","Indéterminée","−1","+1","e²"],
      answer:0, explanation:"eˣ → +∞ quand x → +∞." },

    { id:"math5-17", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la limite de eˣ quand x → −∞ ?",
      choices:["0","+∞","−∞","1","e","−1","2","Indéterminée","+1","−e"],
      answer:0, explanation:"eˣ → 0 quand x → −∞ (en restant positif)." },

    { id:"math5-18", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la limite de P(x)·e^(u(x)) quand u(x) → −∞ et P(x) → +∞ ?",
      choices:["0","+∞","−∞","Indéterminée","1","−1","e","P(x)","u(x)","Aucune de ces réponses"],
      answer:0, explanation:"Croissance comparée : l'exponentielle l'emporte, donc P(x)·e^(u(x)) → 0." },

    { id:"math5-19", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = (2x² + 3x + 1)eˣ ?",
      choices:["(2x² + 7x + 4)eˣ","(2x² + 3x + 1)eˣ","(4x + 3)eˣ","(2x² + 5x + 4)eˣ","(2x² + 7x + 3)eˣ","(2x² + 3x + 4)eˣ","(4x + 3)(2x² + 3x + 1)eˣ","(2x + 3)eˣ","(2x² + 7x)eˣ","(2x² + 7x + 4)"],
      answer:0, explanation:"(uv)' = u'v + uv' = (4x+3)eˣ + (2x²+3x+1)eˣ = (2x²+7x+4)eˣ." },

    { id:"math5-20", chapter:"math-ch5", difficulty:"difficile",
      q:"Quelle est la dérivée de f(x) = (x² + 3x + 1)e^(−2x) ?",
      choices:["(−2x² − 4x + 1)e^(−2x)","(2x² + 4x + 1)e^(−2x)","(−2x² + 4x + 1)e^(−2x)","(−2x² − 4x − 1)e^(−2x)","(2x + 3)e^(−2x)","(−2x² + 4x − 1)e^(−2x)","(−2x² − 4x + 1)","(−x² − 4x + 1)e^(−2x)","(−2x² − x + 1)e^(−2x)","(x² + 3x + 1)e^(−2x)"],
      answer:0, explanation:"(uv)' = (2x+3)e^(−2x) − 2(x²+3x+1)e^(−2x) = (−2x² − 4x + 1)e^(−2x)." },

    { id:"math5-21", chapter:"math-ch5", difficulty:"difficile",
      q:"Pour f(x) = (x² − 4x + 4)e^(2x), quelle est la dérivée f'(x) ?",
      choices:["e^(2x)(2x² − 6x + 4)","e^(2x)(2x − 4)","e^(2x)(2x² − 4x + 4)","e^(2x)(2x² − 6x − 4)","e^(2x)(2x² + 6x + 4)","e^(2x)(x² − 4x + 4)","e^(2x)(2x² − 4x)","e^(2x)(2x² − 6x)","e^(2x)(2x² − 8x + 4)","e^(2x)(2x² − 4)"],
      answer:0, explanation:"f'(x) = e^(2x)[(2x−4) + 2(x²−4x+4)] = e^(2x)(2x² − 6x + 4)." },

    { id:"math5-22", chapter:"math-ch5", difficulty:"difficile",
      q:"Pour f(x) = (x² − 4x + 4)e^(2x), quelles sont les racines de f'(x) ?",
      choices:["1 et 2","−1 et −2","0 et 2","1 et 3","2 et 4","0 et 4","1 et 4","−1 et 2","−2 et 1","2 et 3"],
      answer:0, explanation:"2x² − 6x + 4 = 0 → Δ = 4 → x = 1 ou x = 2." },

    { id:"math5-23", chapter:"math-ch5", difficulty:"difficile",
      q:"Pour f(x) = (x² − 4x + 4)e^(2x), quel est le maximum local ?",
      choices:["e² atteint en x = 1","e⁴ atteint en x = 2","0 atteint en x = 2","e atteint en x = 1","e³ atteint en x = 1","2e² atteint en x = 1","e² atteint en x = 2","e⁴ atteint en x = 1","0 atteint en x = 1","e⁻² atteint en x = 1"],
      answer:0, explanation:"f(1) = (1 − 4 + 4)e² = e² ≈ 7,39 (maximum local)." },

    { id:"math5-24", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la limite de (x² + 2x + 1)e^(2x+1) quand x → +∞ ?",
      choices:["+∞","0","1","−∞","Indéterminée","e","2e","e²","e³","Aucune"],
      answer:0, explanation:"x² + 2x + 1 → +∞ et e^(2x+1) → +∞, donc produit → +∞." },

    { id:"math5-25", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la limite de (x² + 2x + 1)e^(2x+1) quand x → −∞ ?",
      choices:["0","+∞","−∞","1","Indéterminée","e","2e","e⁻²","−1","Aucune"],
      answer:0, explanation:"Croissance comparée : l'exponentielle l'emporte sur le polynôme → 0." },

    { id:"math5-26", chapter:"math-ch5", difficulty:"moyen",
      q:"Pour f(x) = (x² − 3x + 1)eˣ, quelle est f'(x) ?",
      choices:["(x² − x − 2)eˣ","(x² − 3x + 1)eˣ","(2x − 3)eˣ","(x² + x − 2)eˣ","(x² − x + 2)eˣ","(x² − 3x − 2)eˣ","(x² − x − 2)","(x² − 2x − 2)eˣ","(x² + 3x − 2)eˣ","(x² − 3x + 2)eˣ"],
      answer:0, explanation:"f'(x) = (2x−3)eˣ + (x²−3x+1)eˣ = (x² − x − 2)eˣ." },

    { id:"math5-27", chapter:"math-ch5", difficulty:"moyen",
      q:"Pour f(x) = (x² − 3x + 1)eˣ, quelles sont les racines de f'(x) ?",
      choices:["−1 et 2","1 et −2","1 et 2","−1 et −2","0 et 2","0 et −1","1 et 3","−1 et 3","2 et 3","−2 et 3"],
      answer:0, explanation:"x² − x − 2 = 0 → (x+1)(x−2) = 0 → x = −1 ou 2." },

    { id:"math5-28", chapter:"math-ch5", difficulty:"facile",
      q:"Quelle est la valeur de e¹ ?",
      choices:["e ≈ 2,718","1","0","2","10","≈ 7,389","≈ 20,08","≈ 1,648","1/e","Indéfinie"],
      answer:0, explanation:"e¹ = e ≈ 2,718." },

    { id:"math5-29", chapter:"math-ch5", difficulty:"moyen",
      q:"Peut-on confondre e^(a+b) et eᵃ + eᵇ ?",
      choices:["Non, e^(a+b) = eᵃ · eᵇ ≠ eᵃ + eᵇ","Oui, c'est la même chose","Oui, dans certains cas","Non, e^(a+b) = eᵃ + eᵇ","Cela dépend de a","Cela dépend de b","Uniquement si a = b","Uniquement si a = 0","Uniquement si b = 0","Aucune de ces réponses"],
      answer:0, explanation:"Piège classique : eᵃ⁺ᵇ = eᵃ · eᵇ, et non eᵃ + eᵇ." },

    { id:"math5-30", chapter:"math-ch5", difficulty:"difficile",
      q:"Pour f(x) = (x² − 6x + 9)e^(−2x), quelle est f'(x) ?",
      choices:["(−2x² + 14x − 24)e^(−2x)","(−2x² + 14x + 24)e^(−2x)","(2x² + 14x − 24)e^(−2x)","(−2x² − 14x − 24)e^(−2x)","(2x − 6)e^(−2x)","(−2x² + 14x − 24)","(x² − 6x + 9)e^(−2x)","(−2x² + 10x − 24)e^(−2x)","(−2x² + 14x − 30)e^(−2x)","(−2x² + 14x + 30)e^(−2x)"],
      answer:0, explanation:"f'(x) = (2x−6)e^(−2x) − 2(x²−6x+9)e^(−2x) = (−2x² + 14x − 24)e^(−2x)." },

    { id:"math5-31", chapter:"math-ch5", difficulty:"moyen",
      q:"Quel est le facteur commun lors de la dérivation de f(x) = (x² − 4x + 4)e^(2x) ?",
      choices:["e^(2x)","x² − 4x + 4","2x − 4","2e^(2x)","x","(x − 2)²","2x","x²","−4x + 4","4"],
      answer:0, explanation:"Le facteur commun est e^(2x), ce qui permet de factoriser f'(x)." },

    { id:"math5-32", chapter:"math-ch5", difficulty:"facile",
      q:"Que vaut e^1 × e^2 ?",
      choices:["e³","e²","e","2e","e^(1/2)","e⁶","e^(2/1)","2e²","e + e²","e² + e"],
      answer:0, explanation:"e¹ × e² = e^(1+2) = e³." },

    { id:"math5-33", chapter:"math-ch5", difficulty:"moyen",
      q:"Que vaut (e²)³ ?",
      choices:["e⁶","e⁵","e⁸","e⁹","2e³","6e","3e²","e^(2/3)","e^(3/2)","e²"],
      answer:0, explanation:"(e²)³ = e^(2×3) = e⁶." },

    { id:"math5-34", chapter:"math-ch5", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = x·eˣ ?",
      choices:["eˣ(1 + x)","x·eˣ","eˣ","eˣ(1 − x)","x + eˣ","1 + eˣ","x·eˣ + 1","e^(x+1)","eˣ + x","x²·eˣ/2"],
      answer:0, explanation:"(uv)' = u'v + uv' = 1·eˣ + x·eˣ = (1+x)eˣ." },

    { id:"math5-35", chapter:"math-ch5", difficulty:"difficile",
      q:"Quelle est la limite de x²·e^(-x) quand x → +∞ ?",
      choices:["0","+∞","−∞","1","e","Indéterminée","e²","x","x²","Aucune"],
      answer:0, explanation:"Croissance comparée : e^(-x) l'emporte sur tout polynôme, donc x²·e^(-x) → 0." }
  ]
});