import useGetRequest from "hooks/useGetRequest";
import Card from "@containers/Card/Card";
import styles from "./Estimations.module.scss"
import Container from "@containers/Container/Container";
import Icon from "@containers/Icon/Icon";
import EstimationItem from "@containers/EstimationItem/EstimationItem";
import { IEstimationModel } from "@containers/EstimationItem/EstimationItem";

const Estimations = ({}) => {

    const {response = []} = useGetRequest<IEstimationModel[]>({pathname: "/api/estimate"});

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
                    response.map((model, idx) => {
                        return (
                            <EstimationItem key={idx} model={model}></EstimationItem>
                        )
                    })
                }
            </Container>
            
           
        </div>
    )
}

export default Estimations;