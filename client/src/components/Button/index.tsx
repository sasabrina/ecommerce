import styles from "./button.module.scss";

type Props = {
  text: string;
  onclick?: VoidFunction;
  type: "primary" | "secondary";
};

const Button = ({ text, onclick, type }: Props): JSX.Element => {
  return (
    <button onClick={onclick} className={styles[type]}>
      {text}
    </button>
  );
};

export default Button;
