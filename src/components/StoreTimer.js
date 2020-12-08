import { makeObservable, observable, action, computed} from 'mobx';

let t = new Date();
class Store {
    time = '';
    constructor() {
        makeObservable(this, {
            time: observable,
            tick: action,
            getTime: computed
        })
        this.time = t.getHours() + ' : ' + t.getMinutes() + ' : ' + t.getSeconds();
    }

    tick = () => {
        let dt = new Date();
        this.time = dt.getHours() + ' : ' + dt.getMinutes() + ' : ' + dt.getSeconds();
    }

    get getTime() {
        return this.time;
    }
}

export default Store;