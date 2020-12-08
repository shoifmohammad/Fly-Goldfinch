import { makeObservable, observable, action, computed} from 'mobx';

class Store {
    counter = 0;
    constructor() {
        makeObservable(this, {
            counter: observable,
            incrementCounter: action,
            decrementCounter: action,
            getCounter: computed
        })
    }

    incrementCounter = () => {
        this.counter++;
    }

    decrementCounter = () => {
        this.counter--;
    }

    get getCounter() {
        return this.counter;
    }
}

export default Store;