import React from 'react';

const QuoteCard = (props) => {
    const randomQuote = props => {
        if (props.ronQuotes.length > 0) {
            props.ronQuotes[Math.floor(Math.random() * props.ronQuotes.length)]
       }}
    return (
        <div className='card'>
            <div className='whiteCard'>
                <p>{props.trumpQuotes}</p>
                <h4>-Trump</h4>
            </div>
            <div className='blackCard'>
                {console.log(randomQuote)}
                {randomQuote}
                <h4>-Ron Swanson</h4>
            </div>
        </div>
    )
}
export default QuoteCard

