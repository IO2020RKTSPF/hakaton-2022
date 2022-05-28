import Card from "@containers/Card/Card";
import styles from "./EstimationItem.module.scss"
import Icon from "@containers/Icon/Icon";
import Container from "@containers/Container/Container";

export interface IEstimationModel {
    title: string;
    result: number;
    userResult: number;
}

const EstimationItem = ({model}:{model:IEstimationModel}) => {

    const convertToHours = (minutes: number) => {
        let result = minutes < 0 ? Math.ceil(minutes / 60) : Math.floor(minutes / 60);
        return result;
    }

    const convertDiffToStr = (result: number, actualResult: number) => {
        let value = convertToHours(actualResult - result);
        return value < 0 ? value + "h" : "+" +  value + "h";
    }

    let sign = convertToHours(model.userResult - model.result) > 0;

    return (
    
        <div>
            <Card className={styles.card}>
                <Container>
                    <div className={styles.flex}>
                        <div>
                            <p>{convertToHours(model.result) + "h"}</p>
                            <p className={!sign ? styles.posVal : styles.negVal}>{convertDiffToStr(model.result, model.userResult)}</p>
                        </div>
                        <p>{model.title}</p>
                        <Icon type="clock"></Icon>
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default EstimationItem;