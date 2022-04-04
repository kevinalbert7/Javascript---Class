// 2 - TV

// - Créer une class `TV` avec les propriétés `brand`, `channel`, `volume`. La chaine par défaut sera 1, et le volume par défaut sera 50
// - Ajouter deux méthodes pour baisser et augmenter le volume. Le volume ne peut pas aller en dessous de 0, et pas au dessus de 100
// - Ajouter une méthode pour changer de chaine. Notre télé a seulement 50 chaines, si on essaye de changer une chaine au dessus de 50, on restera sur la chaine courante. Pareil pour une chaine en dessous de 0
// - Ajouter une méthode pour reset les paramètres de notre `TV`, qui remettra la chaine et le volume de base
// - Ajouter une méthode `describe` qui va afficher les infos de notre `TV`
// - Testez votre classe et ses méthodes avec différentes valeurs
   
class TV {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    toAugment(number) {
        const maxVolume = 100

        if (this.volume < maxVolume) {
            this.volume += 1
        }
    }
    
    toLower(number) {
        const minVolume = 0
        this.volume -= number

        if (this.volume < minVolume) {
            this.volume = minVolume
        }
    }

    changeChannel(number) {
        const minChannel = 1
        const maxChannel = 50

        if (number >= minChannel && number <= maxChannel)  {
            this.channel = number
        } 
    }

    reset() {
        this.volume = 50
        this.channel = 1
    }

    describe(str) {
        console.log(`Your TV ${this.brand} is on channel ${this.channel} with volume ${this.volume}`)
    }
}

var samsung = new TV("Samsung", this.channel, this.volume)

samsung.toAugment(30)
samsung.describe()
samsung.toLower(40)
samsung.describe()
samsung.toAugment(70)
samsung.describe()
samsung.toLower(150)
samsung.describe()

samsung.changeChannel(7)
samsung.describe()
samsung.changeChannel(-3)
samsung.describe()
samsung.changeChannel(72)
samsung.describe()
samsung.reset()
samsung.describe()