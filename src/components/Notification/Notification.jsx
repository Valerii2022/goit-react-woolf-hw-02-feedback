import style from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={style.message}>{message}</p>;
};
