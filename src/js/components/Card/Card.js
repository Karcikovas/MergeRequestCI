import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './Card.scss';

const Card = ({ project, successUpVotes, successColor }) => {
    const { title, upvotes , downvotes, state, author} = project;

    console.log(successColor);

    // const customStyle = {
    //     backgroundColor: successColor
    // }

    return (
       <li className={`merge-request-card  
           ${upvotes >= successUpVotes ? 'is-success': ''}
           ${upvotes < 0 ? 'is-danger': ''}
           `}
        // style={successColor !== '' && `${customStyle}`}
       >
           <h1>{title}</h1>
           <div>Upvotes:{upvotes} Downvotes: {downvotes}</div>
           <div>{author.name}</div>
           <div>{state}</div>
       </li>
)};


Card.propTypes = {
    successUpVotes: PropTypes.number,
    successColor: PropTypes.string
}

Card.defaultProps = {
    successUpVotes: 0,
    successColor: ''
}

const mapStateToProps = (state) => ({
    successUpVotes: state.settings.upvotes,
    successColor: state.settings.successColor
})

export default connect(mapStateToProps, null)(Card);
