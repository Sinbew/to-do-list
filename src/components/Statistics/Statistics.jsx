import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, children }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
