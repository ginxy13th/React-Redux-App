import React from 'react';
import { connect } from 'react-redux';
import { findingQuotes } from '../store/actions/actions'

const WhiteCard = props => {
    return (
        <div className='whiteBigContainer'>
            <div className='whiteCard'>
                <p className='quote'>{props.quote}</p>
                <h4>-Ron Swanson</h4>
                <p className='bottomtag'>CARDS AGAINST BREAKING SWANSON - Breaking Bad</p>
            </div>
        </div>
    )

}
export default connect(null, {findingQuotes})(WhiteCard)