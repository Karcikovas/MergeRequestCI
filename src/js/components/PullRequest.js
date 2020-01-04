import React from "react";
import "../../images/repo.svg";
import "../../images/git-pull-request.svg";
import UserPhoto from "./UserPhoto";
import { Comments } from "./Comments";
import { Status } from "./Status";
const CLASS_BASE = "pull-request";
const CLASS_UNMERGEABLE = `${CLASS_BASE} ${CLASS_BASE}--unmergeable`;
const CLASS_MERGEABLE = `${CLASS_BASE} ${CLASS_BASE}--mergeable`;
const CLASS_STALE = `${CLASS_BASE} ${CLASS_BASE}--stale`;

function getPrClassName(pr) {
  if (pr.unmergeable) {
    return CLASS_UNMERGEABLE;
  } else if (pr.mergeable) {
    return CLASS_MERGEABLE;
  } else if (pr.stale) {
    return CLASS_STALE;
  }

  return CLASS_BASE;
}

const PullRequest = ({pullRequest}) => {
  const formatRelativeTime = (date) => {
    return console.log(date);
  }

  const formatTime = (header, date) => {
    // return `${header} ${moment(date).format("MMMM Do YYYY, h:mm:ss a")}`;
    return console.log([header,date ])
  }
  const pr = pullRequest;
  const className = getPrClassName(pr);

    return (
      <div className={className}>
        <UserPhoto size={50} user={pr.user} />
        <div className="pull-request-info">
          <div className="pull-request-title">
            {/*<img src="images/git-pull-request.svg" alt="Pull request" />*/}
            &nbsp;
            <a href={pr.url}>
              {pr.title}
            </a>
          </div>
          <div>
            <a href={pr.repoUrl}>
              {/*<img src="images/repo.svg" alt="Repository" /> {pr.repo}*/}
            </a>
            <span className="pull-request-number">#{pr.number}</span>
            <Status status={pr.status} />
            <Comments
              comments={pr.comments}
              positiveCommentCount={pr.positiveComments}
              negativeCommentCount={pr.negativeComments}
              reactions={pr.reactions}
            />
          </div>
          <div
            className="pull-request-created"
            title={formatTime("Created", pr.created)}
          >
            Opened by {pr.user.username} {formatRelativeTime(pr.created)}
          </div>
        </div>
        <div
          className="pull-request-last-updated"
          title={formatTime("Last updated", pr.updated)}
        >
          {formatRelativeTime(pr.updated)}
        </div>
      </div>
    );
}

PullRequest.propTypes = {
  // pullRequest: React.PropTypes.object.isRequired
};

export default PullRequest;
