import EstimationCard from "@containers/EstimationCard/EstimationCard";
import Button from "@containers/Button/Button";
import usePutRequest from "hooks/usePutRequest";
import { useState } from "react";
import Container from "@containers/Container/Container";
import style from "./EstimationInput.module.scss";

const EstimationInput = ({}) => {

    const [estimation, setEstimation] = useState(200);

    const { fetch } = usePutRequest({ pathname: "/api/estimate" });

    const handleSubmit = async () => {
        await fetch({
            estimationId: 0,
            actualValue: 0
        });
    };

    return (
        <Container>
            <EstimationCard title="Test" value={estimation} min={60} max={5000} onChange={setEstimation}></EstimationCard>
            <Button onClick={handleSubmit}>Prześlij</Button>
        </Container>
    )
}

export default EstimationInput;