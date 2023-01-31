import styles from "./imageContainer.module.scss";

type Props = {
  width: string | number;
  height?: string | number;
  src: string;
};

const ImageContainer = ({ width, height, src }: Props) => {
  const boxWidth = width || "auto";

  return (
    <figure
      className={styles.imgContainer}
      style={{ width: boxWidth, height: height }}
    >
      <img src={src} alt="logo" />
    </figure>
  );
};

export default ImageContainer;
