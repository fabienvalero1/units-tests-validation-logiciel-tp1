# README - Tests pour les Fonctions

---

## **Liste des Fonctions et Tests**

### **1. `my_alpha_number_t`**
- **Description :** Convertit un nombre en sa représentation sous forme de chaîne.
- **Tests réalisés :**
  - Retourne la chaîne correspondante à un nombre donné (ex : `123` → `"123"`).
  - Gère les cas spéciaux comme `0` ou les nombres négatifs (ex : `-1` → `"-1"`).

---

### **2. `sum`**
- **Description :** Calcule la somme de deux nombres.
- **Tests réalisés :**
  - Retourne la somme correcte pour des nombres positifs, négatifs, ou décimaux.
  - Retourne `0` si l’un des arguments n’est pas un nombre (ex : `sum(1, 'a') → 0`).

---

### **3. `my_size_alpha_t`**
- **Description :** Retourne la longueur d'une chaîne de caractères.
- **Tests réalisés :**
  - Calcule correctement la longueur d’une chaîne (ex : `"abc"` → `3`).
  - Retourne `0` pour des entrées non-valables comme des nombres ou `null`.

---

### **4. `my_display_alpha_t`**
- **Description :** Retourne l'alphabet complet en minuscule sous forme de chaîne.
- **Tests réalisés :**
  - Vérifie que la fonction retourne exactement `"abcdefghijklmnopqrstuvwxyz"`.

---

### **5. `my_array_alpha_t`**
- **Description :** Convertit une chaîne en un tableau de caractères.
- **Tests réalisés :**
  - Retourne un tableau contenant chaque caractère de la chaîne (ex : `"abc"` → `['a', 'b', 'c']`).
  - Retourne un tableau vide pour des entrées non valides ou des chaînes vides.

---

### **6. `my_is_posi_neg_t`**
- **Description :** Détermine si un nombre est positif ou négatif.
- **Tests réalisés :**
  - Retourne `"NEGATIVE"` pour les nombres négatifs et `0`.
  - Retourne `"POSITIF"` pour les nombres strictement positifs.

---

### **7. `fibo`**
- **Description :** Calcule le `n`-ième nombre de Fibonacci.
- **Tests réalisés :**
  - Vérifie les premiers termes de la suite de Fibonacci : `fibo(0) → 0`, `fibo(1) → 1`, `fibo(5) → 5`, etc.
  - Teste des valeurs plus grandes pour valider la récursivité.

---

### **8. `my_display_alpha_reverse_t`**
- **Description :** Retourne l'alphabet complet en minuscule sous forme inversée.
- **Tests réalisés :**
  - Vérifie que la fonction retourne exactement `"zyxwvutsrqponmlkjihgfedcba"`.

---

### **9. `my_length_array_t`**
- **Description :** Retourne la longueur d’un tableau.
- **Tests réalisés :**
  - Calcule correctement la longueur d’un tableau donné (ex : `[1, 2, 3] → 3`).
  - Retourne `0` pour un tableau vide.

---

### **10. `my_display_unicode_t`**
- **Description :** Transforme un tableau de valeurs Unicode en une chaîne de caractères.
- **Tests réalisés :**
  - Génère la bonne chaîne pour des valeurs Unicode valides (ex : `[65, 66, 67] → "ABC"`).
  - Retourne une chaîne vide si les valeurs Unicode sont invalides.

---

### **11. `quickSort`**
- **Description :** Trie un tableau d’entiers en utilisant l’algorithme de tri rapide.
- **Tests réalisés :**
  - Trie correctement un tableau non trié (ex : `[3, 1, 4] → [1, 3, 4]`).
  - Gère les cas spéciaux comme un tableau vide.

---

### **12. `tspBrutForce`**
- **Description :** Résout le problème du voyageur de commerce par force brute.
- **Tests réalisés :**
  - Retourne le chemin le plus court et la distance minimale pour un graphe donné.
  - Vérifie que les permutations testées donnent le bon résultat.

---

### **13. `permuter`**
- **Description :** Génère toutes les permutations possibles d’un tableau.
- **Tests réalisés :**
  - Retourne toutes les permutations pour des tableaux de tailles 1, 2 ou 3 (ex : `[1, 2] → [[1, 2], [2, 1]]`).
  - Gère les cas spéciaux comme un tableau vide.

---

### **14. `resoudreSudoku`**
- **Description :** Résout un puzzle Sudoku donné.
- **Tests réalisés :**
  - Résout correctement un Sudoku valide.
  - Retourne `false` si le Sudoku n’a pas de solution.
  - Modifie la grille donnée pour refléter la solution si elle existe.

---