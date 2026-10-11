---
target: home page src/pages/index.astro
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\Caetano\\Desktop\\site port\\src\\pages\\index.astro"
target_fingerprint: "sha256:62e414ff39002a5e1fa1f0f9efaf866c0df56880efc9a1761ab358876db8a5c2"
target_path: "C:\\Users\\Caetano\\Desktop\\site port\\src\\pages\\index.astro"
timestamp: 2026-10-11T20-43-50Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Hero newsletter has no endpoint; only reveals "inscrições abrem em breve" after submit |
| 2 | Match System / Real World | 3 | "Feedbacks" (anglicism), "OQEP C1/C2" plate codes are insider jargon |
| 3 | User Control and Freedom | 3 | Album expand ("Ver as 18") cannot be collapsed again |
| 4 | Consistency and Standards | 2 | Pack "5 trabalhos reais" vs album 18; 4 WhatsApp CTA labels; 3rd display face (Permanent Marker) only on "Feedbacks"; newsletter twice |
| 5 | Error Prevention | 3 | Custom email validation with format hint |
| 6 | Recognition Rather Than Recall | 3 | Services numbered, filters visible |
| 7 | Flexibility and Efficiency | n/a | Single-purpose landing page |
| 8 | Aesthetic and Minimalist Design | 2 | Contact block 7 actions; 9 filter chips; pizzaria/burger crests right after "advocacia é a nossa casa" |
| 9 | Error Recovery | 3 | Specific email error; fetch failure points to WhatsApp |
| 10 | Help and Documentation | n/a | Landing page |
| **Total** | | **22/32** | **Good (69%, borderline Acceptable)** |

## Design Specificity Verdict
Authored, not interchangeable: sticker album world (sealed pack, numbered album, plates, crests, people as stickers) is unique to OQEP. Risk: advocacia positioning lives only in copy; nothing in the visual language signals law-firm sobriety; hero sub still says "empresas e profissionais do Brasil inteiro".
Detector: CLI exit 0, 68 findings all advisory (47 font-size, 13 color, 8 radius off DESIGN.md). Browser overlay: 35 hits at 1440 (gray-on-color 20 = false positive, #4a3a33 on cream is 8.6:1; low-contrast 5 = false positive, nav underline gradient; all-caps-body 5 on long labels; tight-leading 3 on display lines; bounce-easing --ease-spring; marquee Crests; repeating stripes index.astro:523). Real contrast failure: #5c1a0a on #ae361b (2.08:1) on pack__brand / pack__sub.

## Priority Issues
- [P1] Hero primary action is a non-working newsletter, not the proposal. Fix: foil pill "Pedir proposta pelo WhatsApp" in hero; newsletter only in contact or hidden until endpoint exists. Command: clarify, layout
- [P1] Focus ring invisible on cream sections: global.css:122 foil outline on #f5e3c1 ~1.3:1. Fix: .page--paper :focus-visible { outline-color: var(--ink) }. Command: harden
- [P1] Advocacia credibility not designed in: OAB mentioned once in body; testimonials and crests mix non-law clients. Fix: "advogados e escritórios" in hero sub, OAB Provimento 205/2021 commitments band, lawyer-first testimonials and crests. Command: clarify
- [P2] Choice/chunk overload: 14 flat strategy items, 9 filter chips, 7 contact actions. Fix: group strategy in 3-4 phases, fewer filters, people as only primary contact choice. Command: distill
- [P2] Inconsistent counts/voice: "5 trabalhos reais" vs 18; "Feedbacks" in Permanent Marker. Fix: relabel pack, rename section in Alfa Slab. Command: polish

## Persona Red Flags
Jordan: learns it's for lawyers only in section 2; "OQEP C1" meaningless. Riley: dead newsletter; album expand irreversible; marquee unpausable on touch/keyboard (WCAG 2.2.2). Casey: hero WhatsApp is a 2-line text link, not a thumb target; pack below fold. Busy lawyer: playfulness first, OAB once, non-law proof, "Estratégia advogado Fausto Manica" may raise confidentiality questions.

## Minor Observations
Pack label contrast 2.08:1; h4 inside summary; footer has no CTA; desktop services featured vs "Também fazemos" behave differently; "Toque numa figurinha" on desktop; Bruna quote repeats highlight + full text; stickers opacity 0 until IntersectionObserver.

## Questions to Consider
Hero speaking only to a lawyer? Album as sober collector's binder? Single action (talk to Henrique) and everything else as proof?
