import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ mergeRequest, successUpVotes, failureDownVotes }) => {
    const {
        title,
        upvotes,
        downvotes,
        author,
        created_at,
        web_url,
    } = mergeRequest

    const { avatar_url } = author;
    return (
        <li
            className={`merge-request-card  
           ${upvotes >= successUpVotes ? 'is-success' : ''}
           ${upvotes < failureDownVotes ? 'is-danger' : ''}
           `}
        >
            <div className="merge-request-card-container">
                <>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href={author.web_url}>
                        <img
                            className="header-logo"
                            alt="/"
                            src={avatar_url}
                        />
                    </a>
                </>
                <div className="has-flex">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a target="_blank" href={web_url}>
                        {title}
                    </a>

                    <div>
                        Upvotes:{upvotes} Downvotes: {downvotes}
                    </div>
                    <div className="merge-request-author">
                        Opened by {author.name}
                    </div>
                </div>
            </div>

            <div className="merge-request-card-created-at">{created_at}</div>
        </li>
    )
}

Card.propTypes = {
    successUpVotes: PropTypes.number,
    failureDownVotes: PropTypes.number,
    mergeRequest: PropTypes.objectOf(PropTypes.number, PropTypes.string),
}

Card.defaultProps = {
    successUpVotes: 0,
    failureDownVotes: 0,
    mergeRequest: {},
}

const mapStateToProps = state => ({
    successUpVotes: state.settings.upvotesToPass,
    failureDownVotes: state.settings.downvotesToFail,
})

export default connect(mapStateToProps, null)(Card)
