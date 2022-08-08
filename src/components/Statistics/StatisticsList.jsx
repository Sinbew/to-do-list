import PropTypes from 'prop-types';
import { StatisticsListItem } from './StatisticsListItem';

import styles from '../Statistics/Statistics.module.css';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsListItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
