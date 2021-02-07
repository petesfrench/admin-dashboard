import React from 'react';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import issueStyles from '../../../styles/IssueCard.module.scss';

interface Props {
}

const IssueCard: React.FunctionComponent<Props> = ({
  type,
  createdOn,
  reportedBy,
  options,
}) => (
  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={issueStyles.type}>{type}</p>
      <p className={issueStyles.createdOn}>{createdOn}</p>
      <p className={issueStyles.reportedBy}>{reportedBy}</p>
    </div>
    <div className={defaultStyles.actionsWrapper}>
      <img className={defaultStyles.action} src="/media/icons/cardOptions/check.svg" onClick={options.solve} />

    </div>
  </div>
);

export default IssueCard;
