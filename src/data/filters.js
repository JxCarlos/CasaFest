const filters = {
    projectType: ["Vivienda propia", "Inversión", "vacacional", "inversión", "Empresarial"],
    price: [
        {
            text: "$197.000.000 - $300.000.000 COP",
            value: 197000000
        },
        {
            text: "$301.000.000 - $500.000.000 COP",
            value: 301000000
        },
        {
            text: "$501.000.000 - $900.000.000 COP",
            value: 501000000
        },
        {
            text: "Más de $901.000.000 COP",
            value: 901000000
        }
    ],
    area: [
        {
            text: "24m2 a 40m2",
            value: 24
        },
        {
            text: "41m2 a 70m2",
            value: 41
        },
        {
            text: "71m2 a 100m2",
            value: 71
        },
        {
            text: "Más de 101m2",
            value: 101
        }
    ]
}

export default filters;