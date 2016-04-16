import nominatim from 'node-nominatim2'


export default class {

    constructor(p) {
        this.n = new nominatim(p);
    }

    reverse(q) {
        return new Promise((res, rej) => {
            this.n.reverse(q, (err, result) => {
                if (err) {
                    rej(err);
                } else {
                    res(result);
                }
            })
        })
    }


    search(q) {
        return new Promise((res, rej) => {
            this.n.search(q, (err, result) => {
                if (err) {
                    rej(err);
                } else {
                    res(result);
                }
            })
        })
    }
}
