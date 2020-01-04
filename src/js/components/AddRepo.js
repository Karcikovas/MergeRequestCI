import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import axios from "axios";

const AddRepo = () => {
    // constructor(props) {
    //   super(props);
    //
    //   this.handleChangeOwner = this.handleChangeOwner.bind(this);
    //   this.handleChangeRepo = this.handleChangeRepo.bind(this);
    //   this.addRepo = this.addRepo.bind(this);
    // }
    const [owner, setOwner] = useState('')
    const [repo, setRepo] = useState('')
    const [error, setError] = useState('')

    const handleChangeOwner = event => {
        setOwner(event.target.value)
    }

    const handleChangeRepo = event => {
        setRepo(event.target.value)
        setError('')
    }

    // const addRepo = (event) => {
    // event.preventDefault();
    //
    // const fullName = `${owner}/${repo}`;
    // if (this.props.repos.indexOf(fullName) >= 0) {
    //   this.setState({
    //     error: "That repository has already been added."
    //   });
    // } else {
    //   axios
    //     .get(`/repoExists?owner=${this.state.owner}&repo=${this.state.repo}`)
    //     .then(() => {
    //       this.props.onAddRepo(this.state.owner, this.state.repo);
    //       this.setState({
    //         owner: "",
    //         repo: "",
    //         error: ""
    //       });
    //       document.getElementById("ownerInput").focus();
    //     })
    //     .catch(error => {
    //       if (error.response && error.response.status === 404) {
    //         this.setState({
    //           error: "That repository does not exist."
    //         });
    //       } else {
    //         /* eslint-disable no-console */
    //         console.error(error);
    //         this.setState({
    //           error: "An unexpected error has occurred. Please try again."
    //         });
    //       }
    //     });
    // }
    // }

    const renderRepoError = () => {
        if (error) {
            return <div className="edit-error">{error}</div>
        }
        return <div />
    }

    return (
        <div>
            <h3>Add Repository</h3>
            <form
                // onSubmit={addRepo}
                id="add-repo-form"
            >
                {renderRepoError()}
                <input
                    id="ownerInput"
                    type="text"
                    value={owner}
                    onChange={handleChangeOwner()}
                    placeholder="Owner"
                    size="20"
                />
                &nbsp;/&nbsp;
                <input
                    type="text"
                    value={repo}
                    onChange={handleChangeRepo()}
                    placeholder="Repository"
                    size="50"
                />
                <button disabled={!(owner.length && repo.length)}>Add</button>
            </form>
        </div>
    )
}

AddRepo.propTypes = {
    repos: PropTypes.array.isRequired,
    onAddRepo: PropTypes.func.isRequired,
}

AddRepo.defaultProps = {
    repos: [],
}

export default AddRepo
