import Card from "@containers/Card/Card";
import Slider from "@containers/Slider/Slider";

import styles from "./EstimationCard.module.scss";

const EstimationCard = ({
  title,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  title: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  onChange: any;
}) => {
  return (
    <Card className={styles.card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>
        {value}
        {unit && unit}
      </span>
      <Slider
        min={min}
        max={max}
        onChange={onChange}
        step={1}
        values={[value]}
        unit={unit}
      />
    </Card>
  );
};

export default EstimationCard;
