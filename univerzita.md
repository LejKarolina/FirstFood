# Přijímačky na univerzitu

Děkan fakulty požádal o vaši pomoc s přijímačkami. Přihlásilo se víc studentů a je potřeba rozhodnout, koho přijmout a koho ne.

K dispozici máte seznam studentů a výsledky jejich přijímacího testu. Může vypadat třeba takhle:

```javascript
const students = [
  {
    name: "Emma",
    grade: 87
  }, {
    name: "Olivia",
    grade: 65
  }, {
    name: "Ava",
    grade: 90
  }
]
```

Taky znáte kapacitu univerzity:

```javascript
const university = {
  capacity: 2
}
```

Vyrobte program, který sestaví seznam studentů tak, aby děkan mohl vyhlásit výsledky.

Použitý výsledek může vypadat třeba takhle:

```javascript
const acceptedStudents = getUniversityStudents(university, students) 
// acceptedStudents: Emma, Ava
```

Bonusové body:

- Dovolte, aby se studenti mohli odhlašovat i po zveřejnění výsledků (třeba protože je vzali na jinou školu): takže ze seznamu můžou někteří studenti ubýt
- Dovolte druhé kolo přijímaček: tzn. do seznamu můžou přibývat, nebo se měnit skóre
- Dovolte hodnocení podle více kritérií, třeba průměru známek ze střední školy, nebo SCIO testů
