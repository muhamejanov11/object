let modelPrompt = prompt('Напмшите модель машины \n1) Toyota Corolla \n2) Toyota Camry \n3) Honda CR-V \n4) Toyota RAV4 \n5) Ford F-Series \n6) Hyundai Tucson \n7) Chevrolet Silverado \n8) Tesla Model 3 \n9) Volkswagen Polo \n10) Nissan Sylphy')
let cars = [
    {
        id: 1,
        model: "Toyota Corolla",
        madeYear: 1966,
        hp: 110.5,
        kph: '140-235 kph',
        сost: "9000$"
    },
    {
        id: 2,
        model: "Toyota Camry",
        madeYear: 1982,
        hp: 175,
        kph: '210 kph',
        сost: "29300$"
    },
    {
        id: 3,
        model: "Honda CR-V",
        madeYear: 1995,
        hp: 156.5,
        kph: '190 kph',
        сost: "24000$"
    },
    {
        id: 4,
        model: "Toyota RAV4",
        madeYear: 1994,
        hp: 149.199,
        kph: '190 kph',
        сost: "22000$"
    },
    {
        id: 5,
        model: "Ford F-Series",
        madeYear: 1948,
        hp: 450,
        kph: '202 kph',
        сost: "71000$"
    },
    {
        id: 6,
        model: "Hyundai Tucson",
        madeYear: 2004,
        hp: 112 - 235,
        kph: '160-205 kph',
        сost: "24000$-35000$"
    },
    {
        id: 7,
        model: "Chevrolet Silverado",
        madeYear: 1999,
        hp: 195 - 420,
        kph: '180-213 kph',
        сost: "25000$"
    },
    {
        id: 8,
        model: "Tesla Model 3",
        madeYear: 2016,
        hp: 498 - 618,
        kph: '201-262 kph',
        сost: "38990$-48490$"
    },
    {
        id: 9,
        model: "Volkswagen Polo",
        madeYear: 1975,
        hp: 150,
        kph: '220 kph',
        сost: "15200$"
    },
    {
        id: 10,
        model: "Nissan Sylphy",
        madeYear: 2000,
        hp: 131,
        kph: '198 kph',
        сost: "16500$"
    }
]
let res = cars.filter((v) => v.model.includes(modelPrompt))
console.log(res);