import React from 'react';
import BlackCard from './blackCard';
import WhiteCard from './whiteCard';


const QuoteCard = (props) => {
    console.log(props)
    return (
        <div>
            <div   className='blackContainer'>
            {props.breakingQuotes.map(item => (
            <BlackCard key={item.id} quote={item.quote} author={item.author} />
          ))}
            </div>
            <div className='whiteContainer'>
                {props.ronQuotes.map(item => (
                    <WhiteCard key={item.id} quote={item} />
                ))}
            </div>
        </div>
    )
}
export default QuoteCard

