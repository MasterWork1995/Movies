import s from "./DownloadOrError.module.css";

const Download = ({ message }) => {
  return <h1 className={s.title}>{message}</h1>;
};

export default Download;
