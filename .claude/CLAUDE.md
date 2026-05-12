# REJOICE — Résumé site pour Claude

Site statique HTML/CSS/JS pur, aucun build. Ouvrir directement dans le navigateur.

## Pages françaises (racine)

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : hero, 2 formules, fondateur, témoignages, CTA |
| `sejours.html` | Séjours : galerie, Pour qui, tarif, dates, FAQ, formulaire |
| `projets.html` | Actions : piliers, partenaires terrain, méthode, galerie photos |
| `qui-sommes-nous.html` | À propos + section Transparence (fusionnée depuis transparence.html) |
| `don.html` | Faire un don : montants, infographie 91.8%, HelloAsso |
| `contact.html` | Contact : newsletter, mailto, Google Form embarqué |
| `confidentialite.html` | Politique de confidentialité FR |

> `transparence.html` a été supprimée — son contenu est dans `qui-sommes-nous.html#transparence`.  
> Les pages EN sont dans `en/`.

## Assets

- `assets/styles.css` — tout le CSS (~700 lignes), une seule feuille
- `assets/app.js` — tout le JS vanilla (~306 lignes) : lightbox, accordéon FAQ, vidéo, nav scroll, HelloAsso
- `img/extracted/` — images optimisées, noms en hash (ne pas renommer)
- `assets/bia/` — photos BIA Institute Népal
- `assets/bodhisattva/` — photos école Bodhisattva Népal

## Design system (variables CSS)

```
--yellow: #F5C842      --terra: #C85C3A
--sky: #7DC4E0         --sage: #7BA88A
--cream: #FDF8F0       --brown: #5C3D2E
--text: #2C1810        --muted: #7A5C4E
--r: 20px  --rsm: 10px  --rpill: 50px
```

Polices Google : **Caveat** (titres cursive) · **Lora** (corps serif) · **Inter** (UI sans-serif)

## Nav

- 5 pastilles jaunes : Nos séjours, Nos actions, Qui sommes-nous, Contact + CTA rouge "Faire un don"
- Style pastille : `.nav-links a[href="..."]` ciblé par attribut (lignes ~583–601 du CSS)
- Logo : fond `rgba(92,61,46,0.18)` + padding pour ressortir sur le header
- Header : `rgba(235,215,200,0.97)` (beige chaud, légèrement plus sombre que cream)

## Composants CSS clés

| Classe | Usage |
|---|---|
| `.f-card` | Cartes formules accueil (Soutenir / Partir & aider) |
| `.pq-card` / `.pq-grid` | Cartes "Pour qui" (sejours) — padding direct |
| `.pq-grid-4 .pq-card` | Cartes piliers avec photo (projets) — padding:0 + `.pq-body` |
| `.partner-block` + `.partner-links` | Blocs partenaires terrain avec liens externes |
| `.t-card` / `.transparence-inner` | Cartes transparence (grid 2 col) |
| `.stay-card` | Cartes contact (newsletter + mailto) |
| `.gform-wrap` / `#googleform` | Google Form contact (820px de hauteur) |

## Partenaires terrain (projets.html)

- 🇮🇳 Inde — K.C.E. → karmapa-education.org
- 🇳🇵 Népal — B.I.A. → bia-foundation.org + biainstitute.org
- 🇨🇿 Rép. tchèque — Jeta Garden → jeta.garden
- 🇫🇷 France — Bientôt

## Pièges connus

- `.pq-card{padding:0}` scopé à `.pq-grid-4` uniquement — ne pas globaliser
- Lien "page transparence" dans projets.html pointe vers `qui-sommes-nous.html#transparence`
- Formulaires = `mailto:` uniquement (pas de backend) sauf Google Form contact et HelloAsso dons
