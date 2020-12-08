import { makeObservable, observable, action, computed} from 'mobx';
import axios from 'axios'

class Store {
    loading = true;
    arr = [];
    constructor() {
        makeObservable(this, {
            loading: observable,
            arr: observable,
            getList: computed,
            process: action
        })
    }

    process() {
        axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
        .then(res=>{
            this.loading = false;
            this.arr = res.data;
        })
    }

    get getList() {
        
        if(this.loading) {
            return (
                <p style={{'fontSize': '50px'}}>Loading...</p>
            );
        }
        else {
            return (
                <div>
                    {this.arr.map((card,i)=>
                        (<p key={i}>{card.first} {card.last}</p>)
                    )}
                </div>
            );
        }
    }
}

export default Store;