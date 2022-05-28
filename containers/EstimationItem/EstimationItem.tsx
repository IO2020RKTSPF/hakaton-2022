import Card from "@containers/Card/Card";
import styles from "./EstimationItem.module.scss"

export interface IEstimationModel {
    title: string;
    result: number;
    userResult: number;
}

const EstimationItem = ({model}:{model:IEstimationModel}) => {
    return (
        <div>
            <Card className={styles.card}>
                <p>{model.title}</p>
                <p>{model.result}</p>
                <p>{model.userResult}</p>
            </Card>
        </div>
    )
}

export default EstimationItem;