const breaklines = () => {
    console.log("")
}

class Car {
    constructor(brand, speed) {
    this.brand = brand
    this.speed = speed
    }

    accelerate(accerlerate) {
        this.speed = this.speed + accerlerate
    }

    brake(brake) {
        this.speed = this.speed - brake
    }

    describe() {
        console.log(`${this.brand} running at ${this.speed} km/h`)
    }

}

let ford = new Car("Ford", 0)
    ford.accelerate(50)
    ford.describe()

    ford.brake(25)
    ford.describe()

let porsche = new Car("Porsche", 0)
    porsche.accelerate(280)
    porsche.describe()

    porsche.brake(2)
    porsche.describe()

    breaklines()
    breaklines()
    breaklines()
    // --------------------------------------2------------------------------------//

    class Tv {
        constructor (brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
        }

        increase(increase) {
            this.volume = this.volume + increase
                if(this.volume >= 100) {
                    increase === 0
                }
        }

        toLower(toLower) {
            this.volume = this.volume - toLower
            if(this.volume <= 0) {
                toLower === 0
            }
        }

        zap(zap) {
            this.channel = this.channel + zap
            if(this.channel > 50) {
                this.channel === 50
            } else(this.channel < 0) { 
                this.channel === 0
            }
        }

        reset() {
            this.channel = 1
            this.volume = 50
        }

        describe() {
            console.log(`La télé ${this.brand} est sur la chaîne ${this.channel}, le volume est de ${this.volume}`)
        }
    }

    let tele = new Tv("Samsung", 1, 50)
        tele.describe()