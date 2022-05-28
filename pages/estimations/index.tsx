import useGetRequest from "hooks/useGetRequest";
import Card from "@containers/Card/Card";
import styles from "./Estimations.module.scss"
import Container from "@containers/Container/Container";
import Icon from "@containers/Icon/Icon";
import EstimationItem from "@containers/EstimationItem/EstimationItem";
import { IEstimationModel } from "@containers/EstimationItem/EstimationItem";

const models: IEstimationModel[] = [
    {title: "Title", result: 555, userResult: 654},
    {title: "Title2", result: 444, userResult: 123},
    {title: "Title3", result: 777, userResult: 444},
]

const estimations = ({}) => {


    return(
        <div>
            <Container>
                <div className={styles.titleBar}>
                    <p className={styles.title}>Twoje estymacje</p>
                    <Icon type="plus"></Icon>
                </div>
            </Container>
            
            
            <Container>
                {
                    models.map((model, idx) => {
                        return (
                            <EstimationItem key={idx} model={model}></EstimationItem>
                        )
                    })
                }
            </Container>
            
           
        </div>
    )
}

export default estimations;