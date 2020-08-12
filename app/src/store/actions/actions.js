import axios from 'axios';

export const FINDING_QUOTES_START = 'FINDING_QUOTES-START';
export const SUCCESSFUL_FIND = 'SUCCESSFUL_FIND';

let one = 'https://api.tronalddump.io/random/quote';
let two = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/10';


export const findingQuotes = () => (dispatch) => {
    dispatch({ type: FINDING_QUOTES_START })

    const reqTrump = axios.get(one);
    const reqRon = axios.get(two)

    axios.all([reqTrump, reqRon])
    .then(axios.spread((...res) => { console.log(res)
        const trumpRes = res[0].data.value
        const ronRes = res[1].data
        console.log(trumpRes, ronRes)

            dispatch({ type: SUCCESSFUL_FIND, payloadone: trumpRes,
            payloadtwo: ronRes })
        }))
        
        .catch((err) => console.log(err))
};

//  const thunk = (store) => (next) => (action) => {
//     if (typeof action === 'object') {
//         next(action);
//     } else if (typeof action === 'funtion') {
//         action(store.dispatch);
//     }
// }