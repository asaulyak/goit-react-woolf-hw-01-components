import { ProfileStats } from '../profile-stats/ProfileStats';
import css from './Profile.module.css';

export const Profile = ({ username, tag, avatar, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ProfileStats stats={stats} />
    </div>
  );
};
