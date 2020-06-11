class Animal {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class AnimalShelter {
    constructor() {
        this.storage = [];
        this.front = null;
    }
    enqueue(val) {
        try {
            if (this.storage.length === 0) {
                const animal = new Animal('dofda3');
                this.storage.unshift(animal);
                this.front = animal;
            }
            let current = this.front;
            this.storage.unshift(val);
            this.front = val;
            current.next = val.value;
        } catch (err) {
            console.error(err);
        }
    }
    dequeue(pref) {
        try {
            if (this.storage.length) {
                const adopt = this.storage.pop();
                if (pref === 'dog' || pref === 'cat') {
                    return adopt;
                } else {
                    return null;
                }
            } else {
                return 'No animals found';
            }
        } catch (err) {
            console.error(err);
        }
    }
}
const animal = new Animal('dog');
const animal2 = new Animal('cat');
const shelter = new AnimalShelter();
shelter.enqueue(animal);
shelter.enqueue(animal2);
shelter.dequeue('foo');
console.log(shelter);