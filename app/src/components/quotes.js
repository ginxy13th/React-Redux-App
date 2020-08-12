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
            <h1>CARDS AGAINST THE OFFICE APPRENTICE</h1>
            {props.isLoading ? <h4>We're Working, please don't fire us!</h4> : null}
            {props.error ? (<p>Something happened, and it wasn't the right thing. {props.error}</p>) : null}
            <QuoteCard 
            trumpQuotes={props.trumpQuotes}
            ronQuotes={props.ronQuotes}
            />
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        trumpQuotes: state.trumpQuotes,
        ronSwansonQuotes: state.ronSwansonQuotes,
        isLoading: state.isLoading,
        error: state.error
    }
};
export default connect(mapStateToProps, {findingQuotes})(Quotes);