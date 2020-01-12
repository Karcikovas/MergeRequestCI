import React from 'react'
import pkg from '../../../../package.json'

const Footer = () => (
    <footer>
        <a href={pkg.repository}  rel={pkg.repository}>
            GitLab Pull Request Dashboard v{pkg.version}
        </a>
    </footer>
)
export default Footer
