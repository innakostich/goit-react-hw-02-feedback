
// import React, { useState } from 'react';
// import Section from './Section/Section';
// import FeedbackOptions from './FeedbackOption/FeedbackOption';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification';
// import css from './App.module.css';

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const options = ['good', 'neutral', 'bad'];

//   const handleLeaveFeedback = (option) => {
//     switch (option) {
//       case 'good':
//         setGood(good + 1);
//         break;
//       case 'neutral':
//         setNeutral(neutral + 1);
//         break;
//       case 'bad':
//         setBad(bad + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     if (total === 0) {
//       return 0;
//     }
//     return Math.round((good / total) * 100);
//   };

//   return (
//     <div className={css.app}>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
//       </Section>

//       <Section title="Statistics">
//         {countTotalFeedback() === 0 ? (
//           <Notification message="No feedback given :(" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOption/FeedbackOption';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  handleLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const options = Object.keys(this.state);

    return (
      <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="No feedback given :(" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
