
// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './FeedbackOption.module.css';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//       {options.map(option => {
//         return (
//           <button
//             type="button"
//             onClick={() => onLeaveFeedback(option)}
//             key={option}
//             className={css.btn}
//           >
//             {option}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;

import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
            className={css.btn}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

