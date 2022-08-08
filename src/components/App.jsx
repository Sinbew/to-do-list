// import { Section } from './Section/Section';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatisticsList } from './Statistics/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userData from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions';

export const App = () => {
  const { avatar, username, tag, location, stats } = userData;

  return (
    <>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics title="Upload stats">
        <StatisticsList stats={data}></StatisticsList>
      </Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </>
  );
};
