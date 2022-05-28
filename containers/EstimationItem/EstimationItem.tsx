import Card from "@containers/Card/Card";
import styles from "./EstimationItem.module.scss"
import Icon from "@containers/Icon/Icon";

export interface IEstimationModel {
    title: string;
    result: number;
    userResult: number;
}

const EstimationItem = ({model}:{model:IEstimationModel}) => {
    return (
        <div>
            <Card className={styles.card}>
                <div className={styles.estimation}>
                    <div>
                        <p>{model.result}</p>
                        <p>{model.userResult}</p>
                    </div>
                    <p>{model.title}</p>
                    <Icon type="clock"></Icon>
                </div>
            </Card>
        </div>
    )
}

export default EstimationItem;