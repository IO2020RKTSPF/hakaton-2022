import { Range } from "react-range";

import styles from "./Slider.module.scss";

function Slider({
  onChange,
  step,
  min,
  max,
  unit,
  values,
}: {
  onChange: any;
  step: number;
  min: number;
  max: number;
  unit?: string;
  values: number[];
}) {
  return (
    <div>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(values) => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={styles.track}
            style={{
              ...props.style,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className={styles.thumb}
            style={{
              ...props.style,
            }}
          />
        )}
      />
      <div className={styles.unit}>
        <span>
          {min}
          {unit && unit}
        </span>
        <span>
          {max}
          {unit && unit}
        </span>
      </div>
    </div>
  );
}

export default Slider;
