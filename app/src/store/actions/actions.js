import axios from 'axios';

export const FINDING_QUOTES_START = 'FINDING_QUOTES-START';
export const SUCCESSFUL_FIND = 'SUCCESSFUL_FIND';

let one = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/10';
let two = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/10';


export const findingQuotes = () => (dispatch) => {
    dispatch({ type: FINDING_QUOTES_START })

    const reqBreaking = axios.get(one);
    const reqRon = axios.get(two)

    axios.all([reqBreaking, reqRon])
    .then(axios.spread((...res) => { console.log(res)
        const breakingRes = res[0].data
        const ronRes = res[1].data
        console.log(breakingRes, ronRes)

            dispatch({ type: SUCCESSFUL_FIND, payloadone: breakingRes,
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