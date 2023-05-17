
// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <div className={css.statistics}>
//       <p className={css.item}>
//         <span className={css.label}>Good:</span> {good}
//       </p>
//       <p className={css.item}>
//         <span className={css.label}>Neutral:</span> {neutral}
//       </p>
//       <p className={css.item}>
//         <span className={css.label}>Bad:</span> {bad}
//       </p>
//       <p className={css.item}>
//         <span className={css.label}>Total:</span> {total}
//       </p>
//       <p className={css.item}>
//         <span className={css.label}>Positive Feedback:</span> <span className={css.percentage}>{positivePercentage}%</span>
//       </p>
//     </div>
//   );
// };

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };

// export default Statistics;

import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={css.statistics}>
        <p className={css.item}>
          <span className={css.label}>Good:</span> {good}
        </p>
        <p className={css.item}>
          <span className={css.label}>Neutral:</span> {neutral}
        </p>
        <p className={css.item}>
          <span className={css.label}>Bad:</span> {bad}
        </p>
        <p className={css.item}>
          <span className={css.label}>Total:</span> {total}
        </p>
        <p className={css.item}>
          <span className={css.label}>Positive Feedback:</span>{' '}
          <span className={css.percentage}>{positivePercentage}%</span>
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
