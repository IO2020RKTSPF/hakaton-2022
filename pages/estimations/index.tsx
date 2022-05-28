import useGetRequest from "hooks/useGetRequest";
import Card from "@containers/Card/Card";
import styles from "./Estimations.module.scss"
import Container from "@containers/Container/Container";
import Icon from "@containers/Icon/Icon";


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
                <Card className={styles.card}>
                    <p>Test</p>
                </Card>
                <Card className={styles.card}>
                    <p>Test</p>
                </Card>
            </Container>
            
           
        </div>
    )
}

export default estimations;