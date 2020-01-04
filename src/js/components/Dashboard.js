import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import PullRequest from "./PullRequest";
import LoadingOverlay from "./LoadingOverlay";
import ErrorMessage from "./ErrorMessage";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import PullRequestImage from '../../images/git-pull-request.svg';
import RepoSvg from '../../images/repo.svg';

const Main = ({ title, length, failedRepos, error, loading, pullRequests }) => {

  const renderLoading = () => {
    if (loading) {
      return <LoadingOverlay />;
    }
    return null;
  }


  const renderFailedRepos = () => {
    return (
      <div>
        {failedRepos.map(failedRepo => (
          <ErrorMessage
            key={failedRepo}
            message={`Failed to load pull request data for ${failedRepo}.`}
          />
        ))}
      </div>
    );
  }

  const renderBody = () => {
    if (error) {
      return <ErrorMessage message={error} />;
    }

    return (
      <div>
        {renderFailedRepos()}
        {renderLoading()}
        {pullRequests.map(pr => (
          <div key={pr.id}>
            <PullRequest key={pr.id} pullRequest={pr} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container-header">
        <h1>{title}</h1>
        <div id="pr-count" title={`${length} pull requests`}>
          <img alt="" src={PullRequestImage} />
          {length}
        </div>

        <div id="repo-count" title={`${length} repositories`}>
          <img alt="" src={RepoSvg} />
          {length}
        </div>
      </div>
      <Toolbar failedRepos={failedRepos} />
      {renderBody()}
      <Footer />
    </div>
  );
};

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
  pullRequests: PropTypes.array.isRequired,
  repos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  failedRepos: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired
};

Main.defaultProps = {
    loading: false,
    pullRequests: [],
    repos: [],
    title: '',
    failedRepos: [],
    error: '',
};

export default connect(state => state)(Main);
