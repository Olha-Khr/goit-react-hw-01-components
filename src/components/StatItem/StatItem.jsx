import PropTypes from 'prop-types';
import { random } from 'components/utils';

import css from 'components/StatItem/StatItem.module.css';

export const StatItem = ({ label, percentage }) => {
  const bgColor = random();
  return (
    <li className={css.item} style={{ backgroundColor: bgColor }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
