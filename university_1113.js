var students = [{
        name: "Mikula",
        grade: 97,
        grade2: 95,
    }, {
        name: "Olivia",
        grade: 65,
        grade2: 80,
    }, {
        name: "Ava",
        grade: 90,
        grade2: 85,
    },
    {
        name: "Filip",
        grade: 99,
        grade2: 90,
    }, {
        name: "Felix",
        grade: 96,
        grade2: 99,
    }, {
        name: "Ema",
        grade: 50,
        grade2: 96,
    }
]

var university = {
    capacity: 4
}
// lepší je použít confirm místo prompt na ano/ne
function dotazPridat(){
   return prompt("Chcete přidat dalšího studenta?");
}
//toto níže - původní verze kodu - přidání studenta pomocí prompt/confirm
//nahrazujeme formulářem na webu
// while (dotazPridat() === "ano") {
//     var jmeno = prompt("zadej jméno")
//     var body = prompt("zadej výsledek prvního testu")
//     var body2 = prompt("zadej výsledek druhého testu")
//     var novyStudent = {
//         name: jmeno,
//         grade: body,
//         grade2: body2
//     }
//     students.push(novyStudent)
// }

function nejvyssiSkore(skore1, skore2){
    return Math.max(skore1, skore2);
}

function vybratStudenty(university, students) {
    students.forEach(function (val) {
            val.gradeMax = nejvyssiSkore(val.grade, val.grade2)
        }
    )

    students.sort(function (student1, student2) {
        if (student2.gradeMax - student1.gradeMax != 0) {
            return (student2.gradeMax - student1.gradeMax);
        } else {
            return (student2.name < student1.name)
        }
    });
    var vybrani = [];
    for (var i = 0; i < (university.capacity); i++) {
        // var a
        // let b
        // const c
        vybrani.push(students[i]);
    };
    return vybrani;
}

const v = vybratStudenty(university, students);
console.log(v)


//vypisuje seznam studentů na web stránku
function vs(student){
    const li = document.createElement("li")
li.textContent = student.name +" "+student.grade + ", " + student.grade2
    root.appendChild(li)
}

const root = document.getElementById("root")
v.forEach(vs)

const mujFormular = document.getElementById("mujFormular_id")
mujFormular.addEventListener("submit",function(event){
    event.preventDefault()
//zrusit defaultní presmerovavani

//místo prompt vytváříme formulář
console.log("submit event")
console.log(event)
const name = mujFormular.studentName.value
const s1 = mujFormular.skore1.value
const s2 = mujFormular.skore2.value
const novyStudent = {
    name:name,
    grade:s1,
    grade2:s2,
}
vs(novyStudent);
})
