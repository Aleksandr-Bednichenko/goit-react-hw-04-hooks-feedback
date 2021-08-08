import {useState} from 'react';
import './App.css';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnCLick = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
    

const countPositiveFeedbackPercentage = () => {
          return (good / total) * 100;
        };



    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onBtnCLick} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    )}