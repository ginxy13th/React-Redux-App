import React from 'react';
import { connect } from 'react-redux';
import { findingQuotes } from '../store/actions/actions'

const BlackCard = props => {
    return (
        <div className='blackBigContainer'>
            <div className='blackCard'>
                <p className='quote'>{props.quote}</p>
                <h4>-{props.author}</h4>
                <p className='bottomtag'>CARDS AGAINST BREAKING SWANSON - Breaking Bad</p>
            </div>
        </div>
    )

}
export default connect(null, {findingQuotes})(BlackCard)