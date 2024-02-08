import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.list}>
      {options &&
        options.map(option => {
          return (
            <li key={option}>
              <button
                className={`${style.btn} ${style[option]}`}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
