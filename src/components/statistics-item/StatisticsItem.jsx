import { randomColor } from '../../common/random-color';
import css from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  const backgroundColor = randomColor();

  return (
    <li className={css.item} style={{ backgroundColor }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
