import Card from "@containers/Card/Card";
import Container from "@containers/Container/Container";
import Icon from "@containers/Icon/Icon";
import { convertDiffToStr, convertToHours } from "lib/converters";

import config from "../../config";
import styles from "./EstimationItem.module.scss";

export interface IEstimationModel {
  id: number;
  name: string;
  result: number;
  userResult: number;
}

const EstimationItem = ({ model }: { model: IEstimationModel }) => {
  let sign = convertToHours(model.userResult * 60 - model.result) > 0;

  return (
    <div>
      <Card className={styles.card}>
        <Container>
          <div className={styles.flex}>
            <div>
              <p className={styles.regVal}>
                {convertToHours(model.result) + "h"}
              </p>
              {model.userResult === -1 ? (
                <span className={styles.negVal}>-</span>
              ) : (
                <span className={!sign ? styles.posVal : styles.negVal}>
                  {convertDiffToStr(model.result, model.userResult)}
                </span>
              )}
            </div>
            <p className={styles.title}>
              {model.name ?? `Estymacja ${model.id}`}
            </p>
            {model.userResult === -1 ? (
              <a href={`${config.estimationInput}/${model.id}`}>
                <Icon type="clock"></Icon>
              </a>
            ) : (
              <div></div>
            )}
          </div>
        </Container>
      </Card>
    </div>
  );
};

export default EstimationItem;
