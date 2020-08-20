import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findingQuotes } from '../store/actions/actions';
import QuoteCard from './quotecard'

const Quotes = (props) => {
    useEffect(() => {
        props.findingQuotes();
    }, []);
 
    return (
        <section>
            <h1>CARDS AGAINST BREAKING SWANSON</h1>
            {props.isLoading ? <h4>We're shuffling the Deck!</h4> : null}
            {props.error ? (<p>Something happened, and it wasn't the right thing. {props.error}</p>) : null}
            <QuoteCard 
            breakingQuotes={props.breakingQuotes}
            ronQuotes={props.ronSwansonQuotes}
            />
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        breakingQuotes: state.breakingQuotes || [],
        ronSwansonQuotes: state.ronSwansonQuotes || [],
        isLoading: state.isLoading,
        error: state.error
    }
};
export default connect(mapStateToProps, {findingQuotes})(Quotes);