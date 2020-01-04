import React from 'react'
import PropTypes from 'prop-types'

const UserPhoto = ({ user, size }) => {
    const url = user.avatarUrl
    const username = user.username
    const profileUrl = user.profileUrl

    const linkStyle = { height: `${size}px` }

    return (
        <div className="user-photo">
            <a href={profileUrl} style={linkStyle}>
                <img
                    width={size}
                    height={size}
                    src={url}
                    alt={username}
                    title={username}
                />
            </a>
        </div>
    )
}

UserPhoto.propTypes = {
    user: PropTypes.object,
    size: PropTypes.number,
}

UserPhoto.defaultProps = {
    size: 40,
}

export default UserPhoto
