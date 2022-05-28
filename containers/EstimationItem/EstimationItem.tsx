import Card from "@containers/Card/Card";
import styles from "./EstimationItem.module.scss"
import Icon from "@containers/Icon/Icon";
import Container from "@containers/Container/Container";
import { convertDiffToStr, convertToHours } from "lib/converters";

export interface IEstimationModel {
    title: string;
    result: number;
    userResult: number;
}

const EstimationItem = ({model}:{model:IEstimationModel}) => {
    let sign = convertToHours(model.userResult - model.result) > 0;

    return (
    
        <div>
            <Card className={styles.card}>
                <Container>
                    <div className={styles.flex}>
                        <div>
                            <p className={styles.regVal}>{convertToHours(model.result) + "h"}</p>
                            <p className={!sign ? styles.posVal : styles.negVal}>{convertDiffToStr(model.result, model.userResult)}</p>
                        </div>
                        <p className={styles.title}>{model.title}</p>
                        <Icon type="clock"></Icon>
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default EstimationItem;