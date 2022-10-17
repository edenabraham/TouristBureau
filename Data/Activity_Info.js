"use strict";

let categories= [
    "Adventures",
    "Arts & Crafts", 
    "Museums", 
    "Wine Tastings",
    "Other",
]

let activities= [
    {
        category: "Adventures",
        id: "Q123",
        actName: "Jeepers Trail",
        description: "Enjoy a peaceful hiking trail that has the best views! This trail does not have a tour guide, so here is the park ranger's phone number for emergencies (678)999-8212",
        location: "2387 Bonbon rd",
        price: 0.00
    },
    {
        category: "Adventures",
        id: "A678",
        actName: "Super Jets",
        description: "Enjoy a fun filled day on a jet ski with your friends and family. Make a reservation and call us today at (756)756-8365",
        location: "857 Miami Cir",
        price: 154.30
    },
    {
        category: "Adventures",
        id: "B534",
        actName: "Nacho Zipline Tour",
        description: "Experience the view from 20ft in the air while catching some wind. Come on in, if you have any questions call us at (576)325-2549",
        location: "9874 Nutella ct",
        price: 32.24
    },
    {
        category: "Arts & Crafts",
        id: "H458",
        actName: "Joe's Sip'n'Paint",
        description: "Learn to make beautiful art while enjoying a relaxing glass of wine. 21 and up only, make your reservation now at (458)359-4578",
        location: "5698 Clink rd",
        price: 20.16
    },
    {
        category: "Arts & Crafts",
        id: "S457",
        actName: "Mom's Pots",
        description: "Experience a lively pottery class that will have you coming back. Call us today at (458)326-4698",
        location: "657 Pingsong dr",
        price: 30.45
    },
    {
        category: "Arts & Crafts",
        id: "H457",
        actName: "Make A Rug",
        description: "Enjoy making your very own custom rug with friend, make your appointment today at (867)857-7564",
        location: "587 Nice dr",
        price: 35.50
    },
    {
        category: "Museums",
        id: "K867",
        actName: "The High Museum",
        description: "Enjoy our beautiful peices of art year round! If you have any questions, you can reach us at (465)756-3548",
        location: "7985 Pompom dr",
        price: 14.50
    },
    {
        category: "Museums",
        id: "J765",
        actName: "Fern Bank",
        description: "Enjoy our fun interactive educational exhibits. If you have any questions about booking large parties call us at (678)222-7126",
        location: "5478 Memory Ln",
        price: 18.75
    },
    {
        category: "Wine Tasting",
        id: "P865",
        actName: "Sir Valley Winery",
        description: "Enjoy the educational experience we have prepaired for you. For more information call us at (678)222-7126",
        location: "7845 Brady dr",
        price: 34.65
    },
    {
        category: "Wine Tasting",
        id: "S756",
        actName: "Sal's Winery",
        description: "Experience our locally made wine and tour our warehouse. Any questions, call us at (867)490-0387",
        location: "987 Evergreen ct",
        price: 38.95
    },
    {
        category: "Other",
        id: "R784",
        actName: "APD Police Ride Along",
        description: "Interested in becoming an officer or just curious on what we do? Come along for a day and see if this is the life you want. For more information call us at (457)911-8642",
        location: "7958 Sun rd",
        price: 36.80
    },
    {
        category: "Other",
        id: "G430",
        actName: "Samantha's Animal Shelter",
        description: "If you love animals and have some time to spare, come and volunteer we are always open to help. If interested call us at (458)648-8002",
        location: "451 Red Tree cir",
        price: 0.00
    },
   
];