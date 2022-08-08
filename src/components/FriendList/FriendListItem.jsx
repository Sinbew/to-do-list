import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={styles.item}>
      {status ? (
        <span className={styles.statusGreen}></span>
      ) : (
        <span className={styles.statusRed}></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool.isRequired,
};
