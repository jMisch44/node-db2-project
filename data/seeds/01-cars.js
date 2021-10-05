exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        {
            vin: "SCBLC37F85CX10207",
            make: "Bentley",
            model: "Arnage",
            mileage: 1000,
            title: "clean",
            transmission: "manual",

        },
        {
            vin: "2FTDF18W5VCA88039",
            make: "Ford",
            model: "F 150",
            mileage: 100000,
            title: "clean",
            transmission: "automatic",

        },
        {
            vin: "4JGBB8GB4BA662410",
            make: "Mercedes Benz",
            model: "2011 ML",
            mileage: 10000,
            title: "clean",
            transmission: "automatic",

        }
    ])
}
