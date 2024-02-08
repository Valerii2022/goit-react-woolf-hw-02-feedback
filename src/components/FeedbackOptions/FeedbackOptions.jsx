import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.list}>
      {options &&
        options.map(el => {
          return (
            <li key={el}>
              <button
                className={`${style.btn} ${style[el]}`}
                onClick={() => onLeaveFeedback(el)}
              >
                {el}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
