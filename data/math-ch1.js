window.RQ_DATA = window.RQ_DATA || [];
window.RQ_DATA.push({
  courseId: "math", courseName: "Mathématiques", courseIcon: "📐", courseColor: "#3b82f6",
  chapterId: "math-ch1", chapterName: "Ch.1 — Rappels et outils",
  questions: [
    { id:"math1-01", chapter:"math-ch1", difficulty:"facile",
      q:"Pour la fonction f(x) = 2x − 4, que vaut f(3) ?",
      choices:["2","4","6","−2","0","1","3","8","−4","10","5","7"],
      answer:0, explanation:"f(3) = 2×3 − 4 = 6 − 4 = 2." },

    { id:"math1-02", chapter:"math-ch1", difficulty:"facile",
      q:"Quelle est la racine de la fonction f(x) = ax + b (a ≠ 0) ?",
      choices:["x₀ = −b/a","x₀ = b/a","x₀ = −a/b","x₀ = a/b","x₀ = a + b","x₀ = ab","x₀ = b","x₀ = −a","x₀ = 0","x₀ = 1"],
      answer:0, explanation:"On résout ax + b = 0, soit x = −b/a." },

    { id:"math1-03", chapter:"math-ch1", difficulty:"facile",
      q:"Si a > 0, quel est le signe de f(x) = ax + b avant sa racine ?",
      choices:["Négatif","Positif","Nul","Indéterminé","Toujours positif","Toujours négatif","Alterné","Dépend de b","Dépend de a","Aucune de ces réponses"],
      answer:0, explanation:"Quand a > 0, f est négative avant la racine et positive après." },

    { id:"math1-04", chapter:"math-ch1", difficulty:"facile",
      q:"Si a < 0, quel est le signe de f(x) = ax + b après sa racine ?",
      choices:["Négatif","Positif","Nul","Indéterminé","Toujours positif","Alterné","Dépend de b","Positif seulement si x > 0","Aucune de ces réponses","Ne peut pas être déterminé"],
      answer:0, explanation:"Quand a < 0, f est positive avant la racine et négative après." },

    { id:"math1-05", chapter:"math-ch1", difficulty:"moyen",
      q:"Pour n entier naturel non nul, xⁿ est toujours positif ou nul si…",
      choices:["n est pair","n est impair","n > 0","n < 0","n = 1","n = 0","n est premier","n est multiple de 3","n est pair et x > 0","n'importe quel n"],
      answer:0, explanation:"Si n est pair, xⁿ ≥ 0 pour tout x. Si n impair, xⁿ a le signe de x." },

    { id:"math1-06", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la formule du discriminant Δ pour ax² + bx + c = 0 ?",
      choices:["Δ = b² − 4ac","Δ = b² + 4ac","Δ = 4ac − b²","Δ = b − 4ac","Δ = b² − ac","Δ = a² − 4bc","Δ = b² − 2ac","Δ = 2b − 4ac","Δ = (b − 2a)²","Δ = b² + 2ac"],
      answer:0, explanation:"Δ = b² − 4ac." },

    { id:"math1-07", chapter:"math-ch1", difficulty:"moyen",
      q:"Si Δ > 0, combien de solutions réelles a l'équation ax² + bx + c = 0 ?",
      choices:["Deux solutions distinctes","Une seule","Aucune","Trois","Une infinité","Deux solutions identiques","Aucune solution","Une solution complexe","Dépend de a","Dépend de c"],
      answer:0, explanation:"Δ > 0 → deux solutions réelles distinctes : x = (−b ± √Δ)/(2a)." },

    { id:"math1-08", chapter:"math-ch1", difficulty:"moyen",
      q:"Si Δ = 0, quelle est la solution de ax² + bx + c = 0 ?",
      choices:["x₀ = −b/(2a)","x₀ = −b/a","x₀ = b/(2a)","x₀ = 0","x₀ = 1","x₀ = −b","x₀ = a/(2b)","x₀ = c/a","x₀ = −c/a","x₀ = b/a"],
      answer:0, explanation:"Δ = 0 donne une racine double x₀ = −b/(2a)." },

    { id:"math1-09", chapter:"math-ch1", difficulty:"moyen",
      q:"Si Δ < 0, combien de solutions réelles a ax² + bx + c = 0 ?",
      choices:["Aucune","Une","Deux","Trois","Une infinité","Deux solutions complexes conjuguées","Une racine double","Une racine nulle","Deux racines opposées","Toujours x=0"],
      answer:0, explanation:"Δ < 0 → aucune solution réelle (le polynôme garde le signe de a)." },

    { id:"math1-10", chapter:"math-ch1", difficulty:"moyen",
      q:"Le polynôme f(x) = x² − 4x + 3 a pour racines…",
      choices:["1 et 3","−1 et −3","2 et 2","1 et −3","−1 et 3","0 et 3","0 et −4","1 et 4","2 et 3","−1 et 4"],
      answer:0, explanation:"Δ = 16 − 12 = 4, donc x = (4 ± 2)/2 = 1 ou 3." },

    { id:"math1-11", chapter:"math-ch1", difficulty:"moyen",
      q:"Quand Δ > 0 et a > 0, quel est le signe du polynôme entre les racines ?",
      choices:["Négatif","Positif","Nul","Indéterminé","Alterné","Toujours positif","Toujours négatif","Dépend de b","Dépend de c","Change"],
      answer:0, explanation:"Le polynôme est du signe de a à l'extérieur des racines, et du signe opposé entre les racines." },

    { id:"math1-12", chapter:"math-ch1", difficulty:"moyen",
      q:"Pour f(x) = x² − 4x + 4, quelle est la racine ?",
      choices:["x = 2 (racine double)","x = 1","x = 4","x = −2","x = 0","x = −4","x = 2 et x = −2","x = 1 et x = 4","x = 3","Pas de racine"],
      answer:0, explanation:"Δ = 16 − 16 = 0, x₀ = −(−4)/(2×1) = 2." },

    { id:"math1-13", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = xⁿ ?",
      choices:["f'(x) = n·xⁿ⁻¹","f'(x) = xⁿ⁻¹","f'(x) = n·xⁿ","f'(x) = xⁿ/n","f'(x) = nx","f'(x) = x/n","f'(x) = n+xⁿ⁻¹","f'(x) = (n−1)xⁿ","f'(x) = n²xⁿ⁻¹","f'(x) = x"],
      answer:0, explanation:"(xⁿ)' = n·xⁿ⁻¹." },

    { id:"math1-14", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la dérivée de f(x) = 1/x² ?",
      choices:["−2/x³","2/x³","−1/x³","1/x","−2x","2x","−1/x²","1/x²","−2/x²","2/x²"],
      answer:0, explanation:"1/x² = x⁻², donc (x⁻²)' = −2x⁻³ = −2/x³." },

    { id:"math1-15", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la dérivée de P(x) = 4x³ − 5x² + 2x − 7 ?",
      choices:["12x² − 10x + 2","12x² − 10x","4x² − 5x + 2","12x³ − 10x² + 2x","3x² − 2x + 2","12x² − 5x + 2","4x³ − 5x² + 2","12x² − 10x − 7","12x² + 10x + 2","4x² − 5x − 7"],
      answer:0, explanation:"On dérive terme par terme : (4x³)' = 12x², (−5x²)' = −10x, (2x)' = 2, (−7)' = 0." },

    { id:"math1-16", chapter:"math-ch1", difficulty:"difficile",
      q:"Quelle est la dérivée de (uv) ?",
      choices:["u'v + uv'","u'v − uv'","u'v'","uv + u'v'","u/v","u'/v'","uv","u' + v'","u/v'","(u+v)'"],
      answer:0, explanation:"Formule du produit : (uv)' = u'v + uv'." },

    { id:"math1-17", chapter:"math-ch1", difficulty:"difficile",
      q:"Quelle est la dérivée de (u/v) (avec v ≠ 0) ?",
      choices:["(u'v − uv')/v²","(uv' − u'v)/v²","u'/v'","(u + v)/v²","uv/v²","(u'v + uv')/v²","u'/v","u/v'","(u − v)/v²","u²/v"],
      answer:0, explanation:"Formule du quotient : (u/v)' = (u'v − uv')/v²." },

    { id:"math1-18", chapter:"math-ch1", difficulty:"difficile",
      q:"Quelle est la dérivée de (uⁿ) ?",
      choices:["n·uⁿ⁻¹·u'","n·uⁿ⁻¹","uⁿ·u'","n·uⁿ·u'","uⁿ⁻¹","n·u'","uⁿ/n","n·u·u'","(n−1)uⁿ·u'","uⁿ + u'"],
      answer:0, explanation:"(uⁿ)' = n·uⁿ⁻¹·u'." },

    { id:"math1-19", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la dérivée de (3x + 2)⁵ ?",
      choices:["15(3x + 2)⁴","5(3x + 2)⁴","15(3x + 2)⁵","3(3x + 2)⁴","5(3x + 2)⁵","3(3x + 2)⁵","15(3x + 2)³","5(3x + 2)³","(3x + 2)⁴","3(3x + 2)³"],
      answer:0, explanation:"(u⁵)' = 5·u⁴·u' = 5(3x+2)⁴ × 3 = 15(3x+2)⁴." },

    { id:"math1-20", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la limite de 2x⁴ − 3x² + 5x − 7 quand x → +∞ ?",
      choices:["+∞","−∞","0","2","−3","5","7","+7","−7","Indéterminée"],
      answer:0, explanation:"On ne regarde que le terme de plus haut degré : 2x⁴ → +∞." },

    { id:"math1-21", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la limite de −3x³ + 2x² − 4x + 1 quand x → +∞ ?",
      choices:["−∞","+∞","0","−3","2","1","3","Indéterminée","−1","−2"],
      answer:0, explanation:"Le terme de plus haut degré −3x³ → −∞ quand x → +∞." },

    { id:"math1-22", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la limite de −3x³ + 2x² − 4x + 1 quand x → −∞ ?",
      choices:["+∞","−∞","0","−3","3","1","−1","Indéterminée","2","−2"],
      answer:0, explanation:"x³ → −∞ quand x → −∞. Multiplié par −3, on obtient +∞." },

    { id:"math1-23", chapter:"math-ch1", difficulty:"moyen",
      q:"Quelle est la limite de (3x² − 4x + 1)/(2x² + 5) quand x → +∞ ?",
      choices:["3/2","2/3","0","+∞","−∞","3","2","5/2","1","Indéterminée"],
      answer:0, explanation:"Même degré au numérateur et dénominateur, donc limite = quotient des coefficients dominants 3/2." },

    { id:"math1-24", chapter:"math-ch1", difficulty:"moyen",
      q:"Si f'(x) ≥ 0 sur un intervalle I, que peut-on dire de f sur I ?",
      choices:["f est croissante sur I","f est décroissante sur I","f est constante","f est nulle","f est positive","f est négative","f est convexe","f est concave","f est affine","f est linéaire"],
      answer:0, explanation:"f'(x) ≥ 0 ⟹ f croissante sur I." },

    { id:"math1-25", chapter:"math-ch1", difficulty:"moyen",
      q:"Si f' passe du signe négatif au signe positif en x₀, que se passe-t-il ?",
      choices:["f admet un minimum local en x₀","f admet un maximum local en x₀","f admet un point d'inflexion en x₀","f admet un zéro en x₀","f admet une asymptote","f est discontinue","f s'annule","f atteint +∞","f atteint −∞","Rien de particulier"],
      answer:0, explanation:"f' passe de − à + → minimum local en x₀." },

    { id:"math1-26", chapter:"math-ch1", difficulty:"moyen",
      q:"Si f' passe du signe positif au signe négatif en x₀, que se passe-t-il ?",
      choices:["f admet un maximum local en x₀","f admet un minimum local en x₀","f admet un point d'inflexion en x₀","f s'annule","f est discontinue","Rien de particulier","f atteint +∞","f est constante","f est nulle","Aucune de ces réponses"],
      answer:0, explanation:"f' passe de + à − → maximum local en x₀." },

    { id:"math1-27", chapter:"math-ch1", difficulty:"moyen",
      q:"Pour f(x) = x² − 4x + 3, quelle est sa dérivée ?",
      choices:["2x − 4","x − 4","2x","x² − 4","2x + 3","x² − 4x","2x − 3","x − 3","2x + 4","x + 4"],
      answer:0, explanation:"(x²)' = 2x, (−4x)' = −4, (3)' = 0." },

    { id:"math1-28", chapter:"math-ch1", difficulty:"moyen",
      q:"Où f(x) = x² − 4x + 3 atteint-elle son minimum ?",
      choices:["x = 2","x = 0","x = 1","x = 3","x = −2","x = 4","x = 2,5","x = −1","x = 1,5","x = 0,5"],
      answer:0, explanation:"f'(x) = 2x − 4 = 0 → x = 2. f(2) = −1 (minimum)." },

    { id:"math1-29", chapter:"math-ch1", difficulty:"difficile",
      q:"Pour f(x) = x³ − 12x² + 36x + 8, quelles sont les racines de f'(x) ?",
      choices:["2 et 6","1 et 3","−2 et −6","0 et 6","3 et 4","1 et 2","−3 et −2","4 et 6","0 et 4","2 et 8"],
      answer:0, explanation:"f'(x) = 3x² − 24x + 36 = 3(x² − 8x + 12) = 3(x−2)(x−6)." },

    { id:"math1-30", chapter:"math-ch1", difficulty:"difficile",
      q:"Pour f(x) = x³ − 12x² + 36x + 8, quel est le maximum local ?",
      choices:["40 atteint en x = 2","8 atteint en x = 6","0 atteint en x = 0","36 atteint en x = 3","12 atteint en x = 1","−8 atteint en x = 2","48 atteint en x = 4","24 atteint en x = 6","16 atteint en x = 5","Non calculable"],
      answer:0, explanation:"f'(x) > 0 avant 2, < 0 entre 2 et 6 → maximum en x = 2. f(2) = 8 − 48 + 72 + 8 = 40." },

    { id:"math1-31", chapter:"math-ch1", difficulty:"difficile",
      q:"Pour f(x) = x³ − 12x² + 36x + 8, quel est le minimum local ?",
      choices:["8 atteint en x = 6","40 atteint en x = 2","0 atteint en x = 0","−8 atteint en x = 2","4 atteint en x = 4","12 atteint en x = 3","24 atteint en x = 6","16 atteint en x = 1","−40 atteint en x = 2","Non calculable"],
      answer:0, explanation:"f'(x) < 0 avant 6, > 0 après → minimum en x = 6. f(6) = 216 − 432 + 216 + 8 = 8." },

    { id:"math1-32", chapter:"math-ch1", difficulty:"difficile",
      q:"Pour f(x) = −x⁴ + 2x³ − x², quelle est la forme factorisée de f'(x) ?",
      choices:["x(−4x² + 6x − 2)","x(−4x² + 6x)","x(−4x² + 2)","−4x³ + 6x² − 2x","x(x − 1)(x − 1/2)","−4x(x − 1)(x − 1/2)","x(4x² − 6x + 2)","−4x³ + 6x²","x²(−4x + 6)","−4x³ + 6x² − 2x + 1"],
      answer:0, explanation:"f'(x) = −4x³ + 6x² − 2x = x(−4x² + 6x − 2)." },

    { id:"math1-33", chapter:"math-ch1", difficulty:"facile",
      q:"Quelle est la dérivée d'une constante k ?",
      choices:["0","k","1","k²","k/2","2k","−k","kⁿ","1/k","k + 1"],
      answer:0, explanation:"La dérivée d'une constante est nulle." },

    { id:"math1-34", chapter:"math-ch1", difficulty:"facile",
      q:"Quelle est la dérivée de f(x) = kx (k constante) ?",
      choices:["k","kx","0","x","1","k²","k/x","kx²","k + 1","k − 1"],
      answer:0, explanation:"(kx)' = k × (x)' = k × 1 = k." },

    { id:"math1-35", chapter:"math-ch1", difficulty:"moyen",
      q:"Pour f(x) = (x² − 3x + 6)/(x − 1), quelle est sa dérivée ?",
      choices:["(x² − 2x − 3)/(x−1)²","(x² + 2x − 3)/(x−1)²","(x² − 2x + 3)/(x−1)²","(x² − 2x)/(x−1)²","(x² − 3x)/(x−1)²","(x − 3)/(x−1)²","(2x − 3)/(x−1)²","(x² + 3)/(x−1)²","(x² − 2x − 6)/(x−1)²","(x²)/(x−1)²"],
      answer:0, explanation:"u = x² − 3x + 6, v = x − 1 ; u' = 2x − 3, v' = 1 ; (u'v − uv')/v² = (x² − 2x − 3)/(x−1)²." }
  ]
});