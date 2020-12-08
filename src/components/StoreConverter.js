import { makeObservable, observable, action } from 'mobx';
import axios from 'axios'

class Store {
    arr = [
        {"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},
        {"currency":"EUR","name":"European euro","symbol":"€"},
        {"currency":"GEL","name":"Georgian lari","symbol":"₾"},
        {"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},
        {"currency":"HTG","name":"Haitian gourde","symbol":"G"},
        {"currency":"INR","name":"Indian rupee","symbol":"₹"},
        {"currency":"ILS","name":"Israeli new sheqel","symbol":"₪"},
        {"currency":"KZT","name":"Kazakhstani tenge","symbol":"лв"},
        {"currency":"KWD","name":"Kuwaiti dinar","symbol":"د.ك"},
        {"currency":"LSL","name":"Lesotho loti","symbol":"L"},
        {"currency": "INR", "name": "Indian rupee", "symbol": "₹"},
        {"currency":"USD","name":"U.S. Dollar","symbol":"$"}
    ];
    from = 'USD';
    to = 'INR';
    val = '';
    result = 0;

    constructor() {
        makeObservable(this, {
            arr: observable,
            from: observable,
            to: observable,
            val: observable,
            result: observable,
            clickHandler: action,
            firstChange: action,
            secondChange: action,
            getValue: action
        })
    }

    clickHandler = (event)=> {
        if(this.val < 0) {
            alert('Entered value should be positve');
            return;
        }
        event.preventDefault();
        axios.get(`https://free.currconv.com/api/v7/convert?q=${this.from}_${this.to}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`)
        .then(res=>{
            let v = Object.values(res.data)[0];
            this.result = this.val*v;
        })
    }

    firstChange=(event)=>{
        this.from = event.target.value;
        this.result = 0
    }

    secondChange=(event)=>{
        this.to = event.target.value;
        this.result = 0
    }

    getValue=(event)=>{
        let v=event.target.value;
        this.val = v;
        this.result = 0;
    }
}

export default Store;