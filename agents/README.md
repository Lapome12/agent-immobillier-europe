# L'équipe

```
        Manager (mémoire et contrôle)
          │  lit et tient le carnet de mémoire, valide ou renvoie le travail
          ▼
        Prospecteur (chef des recherches)
          │  décide quelles recherches faire à chaque cycle
   ┌──────┼──────┐
   ▼      ▼      ▼
Agent 1 Agent 2 Agent 3   (agents immobiliers de terrain)
```

| Rôle | Ce qu'il fait | Fichier |
|---|---|---|
| Prospecteur | Chef des recherches. Lit le carnet de mémoire, repère les marchés d'avenir et les bonnes affaires, et donne une mission précise à chaque agent | [prospecteur.md](prospecteur.md) |
| Agents 1 à 3 | Exécutent la mission reçue : données de marché et annonces réelles dans le budget | [agent-terrain.md](agent-terrain.md) |
| Manager | Garde la mémoire de tout ce qui a déjà été cherché, contrôle la qualité, corrige le tir (renvoie une mission mal faite ou mal choisie) et tient le classement final | [manager.md](manager.md) |

## Un cycle de recherche

1. Le **prospecteur** lit le [carnet de mémoire](../memoire/historique-recherches.md) et écrit 3 missions qui ne refont pas ce qui est déjà fait.
2. Le **manager** vérifie que les missions ne doublonnent pas la mémoire et ne visent pas des zones déjà écartées. Sinon, il les renvoie.
3. Les **3 agents** exécutent leur mission en parallèle.
4. Le **manager** contrôle chaque rapport (annonces vérifiées, rendement recalculé, règles locales). Un rapport insuffisant repart chez son agent avec une correction précise.
5. Le **manager** met à jour le classement et le carnet de mémoire : ce qui a marché, ce qui a été corrigé, les nouvelles leçons.

Les rapports sont dans [`../rapports`](../rapports).
