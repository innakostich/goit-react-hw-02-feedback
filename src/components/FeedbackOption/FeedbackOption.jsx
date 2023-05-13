import css from './FeedbackOption.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className={css.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './FeedbackOption.module.css';

// const FeedbackOption = ({ option, onLeaveFeedback }) => {
//   return (
//     <button
//       type="button"
//       className={css.button}
//       onClick={() => onLeaveFeedback(option)}
//     >
//       {option}
//     </button>
//   );
// };

// FeedbackOption.propTypes = {
//   option: PropTypes.string.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOption;
