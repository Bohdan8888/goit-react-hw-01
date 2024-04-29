import Profile from './Profile/Profile';
import userData from "./Profile/userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import transactions from "./Transaction/transactions.json";
import TransactionHistory from "./Transaction/TransactionHistory";

import css from "./App.module.css";



export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
   
  

