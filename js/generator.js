let firstSegment = ["Koleżanki i koledzy,",
    "Z drugiej strony,",
    "Podobnie,",
    "Nie zapominajmy jednak o tym że,",
    "W ten sposób,",
    "Praktyka dnia codziennego dowodzi że,",
    "Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać,",
    "Różnorakie i bogate doświadczenia,",
    "Troska organizacji a szczególnie,",
    "Wyższe założenia ideowe, a także",
    "Szanowni Państwo,",
    "Założenia naszej misji, a także"
];

let secondSegment = [" realizacja nakreślonych zadań programowych",
    " zakres i miejsce szkolenia kadr",
    " stały wzrost ilości i zakresu naszej aktywności",
    " aktualna struktura organizacji",
    " nowy model działalności organizacyjnej",
    " dalszy rozwój róznych form działalności",
    " stałe zabepieczenie informacyjno-promocyjne naszej działalności",
    " wzmacnianie i rozwijanie struktur",
    " konsultacje z szerokim aktywem",
    " rozpoczęcie powszechnej akcji kształtowania postaw",
];

let thirdSegment = [" zmusza nas do przeanalizowania",
    " spełnia istotną rolę w kształtowaniu",
    " wymaga sprecyzowania i określenia",
    " pomaga w przygotowaniu i realizacji",
    " zabezpiecza udział szerokiej grupie w kształtowaniu",
    " spełnia ważne zadania w wypracowaniu",
    " uniemożliwia w większym stopniu tworzenie",
    " powoduje docenienie wagi",
    " przedstawia interesującą próbę sprawdzenia",
    " pociąga za sobą proces wdrażania i unowocześniania",
];

let fourthSegment = [" istniejących warunków administracyjno-finansowych. ",
    " dalszych kierunków rozwoju. ",
    " systemu powszechnego uczestnictwa. ",
    " postaw uczestników wobec zadań stawianych przez organizację. ",
    " nowych propozycji. ",
    " kierunków postępowego wychowania. ",
    " systemu szkolenia kadr odpowiadającego potrzebom. ",
    " odpowiednich warunków aktywizacji. ",
    " modelu rozwoju. ",
    " form oddziaływania. ",
    " kierunków postępu prac. ",
];

function generator() {

    let header = document.querySelector(".mainbox__header");

    if (header.classList.contains("mainbox__header")) {
        header.className = "mainbox__header hidden";
        document.querySelector(".mainbox__content").className = "mainbox__content hidden";
    }

    let userNumberOfSentences = document.getElementsByTagName("input").valueOf().item(0).value;

    let firstSentence = firstSegment[0] +
        randomSentenceFormSegment(secondSegment) +
        randomSentenceFormSegment(thirdSegment) +
        randomSentenceFormSegment(fourthSegment);

    let firstThreeSentences = firstSentence + randomSentenceFormAllSegments() + randomSentenceFormAllSegments();
    let otherSentences = "";

    for (let i = 0; i < userNumberOfSentences - 3; i++) {
        otherSentences += randomSentenceFormAllSegments();
    }

    document.querySelector(".mainbox__subheader").innerHTML = "<h2>" + firstThreeSentences + "</h2>";
    document.querySelector("#speech").innerHTML = otherSentences;
}


function randomSentenceFormSegment(segment) {
    return segment[Math.floor(Math.random() * segment.length)];
}

function randomSentenceFormAllSegments() {
    return randomSentenceFormSegment(firstSegment) +
        randomSentenceFormSegment(secondSegment) +
        randomSentenceFormSegment(thirdSegment) +
        randomSentenceFormSegment(fourthSegment);
}
