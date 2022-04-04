const breaklines = () => {
    console.log("")
}

// 1 - Batmobile

// - Créer un fichier `car.js`
// - Dans car.js, créer un class `Car` avec 2 propriétés de base:
//     - `brand`
//     - `speed`
// - Ajouter 3 méthodes à la classe `Car`:
//     - `accelerate` (accélérer) qui prendra en paramètre un nombre. Cette méthode va ajouter le nombre a la propriété `speed` définie plus haut
//     - `brake` (freiner) qui prendra en paramètre un nombre. Cette méthode va soustraire le nombre à la propriété `speed` définie plus haut
//     - `describe` qui va afficher  `xxx running at yyy km/h` avec `brand` a la place de `xxx` et `speed` a la place de `yyy`
// - Créer une variable `ford` et  lui assigner l'initialisation de la classe avec la brand `ford` et speed `0` et afficher la variable ford dans la console
// - Exécuter la fonction `accelerate` de ford avec une vitesse de 50 km/h et afficher `ford` dans la console
// - Exécuter la fonction `brake` de ford avec une vitesse de 25 km/h et afficher `ford` dans la console
// - Faites la même chose avec une nouvelle voiture

class Car {
    constructor(brand, speed) {
    this.brand = brand
    this.speed = speed
    }

    accelerate(number) {
        this.speed += number
    }
    
    brake(number) {
        this.speed -= number
    }
    
    describe(string) {
        console.log(`${this.brand} running at ${this.speed}`)
    }
}

var ford = new Car("Ford", 0)

ford.accelerate(50)
ford.describe()
ford.brake(25)
ford.describe()

var peugeot = new Car("Peugeot", 0)

peugeot.accelerate(100)
peugeot.describe()
peugeot.brake(30)
peugeot.describe()

breaklines()














// class Tv {
    //     constructor (brand, channel, volume) {
    //     this.brand = brand
    //     this.channel = 1
    //     this.volume = 50
    //     }

    //     increase(increase) {
    //         this.volume += increase
    //             if(this.volume >= 100) {
    //                 this.volume = 100
    //             }
    //     }

    //     decrease(volume) {
    //         this.volume -= volume
    //             if(this.volume <= 0) {
    //                 this.volume = 0
    //             }
    //     }

    //     toZap(zap) {
    //         this.channel += zap
    //             if(this.channel > 50) {
    //                 this.channel = 50
    //             } else if(this.channel < 0) { 
    //                 this.channel = 0
    //             }
    //     }

    //     reset() {
    //         this.channel = 1
    //         this.volume = 50
    //     }

    //     describe() {
    //         console.log(`La télé ${this.brand} est sur la chaîne ${this.channel}, le volume est de ${this.volume}`)
    //     }
    // }

    // let tele = new Tv("Samsung", 1, 50)
    //     tele.zap(52)
    //     tele.describe()
