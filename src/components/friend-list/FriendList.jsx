import css from './FriendList.module.css';
import { FriendListItem } from '../friend-list-item/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(({ id, ...friend }) => (
      <FriendListItem
        key={id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);
