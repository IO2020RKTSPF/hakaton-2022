import EstimationCard from "@containers/EstimationCard/EstimationCard";
import Button from "@containers/Button/Button";
import usePutRequest from "hooks/usePutRequest";
import { useState } from "react";
import Container from "@containers/Container/Container";
import style from "./EstimationInput.module.scss";
import { useRouter } from "next/router";

const EstimationInput = ({}) => {

    const [estimation, setEstimation] = useState(5);

    const router = useRouter();

    const { fetch } = usePutRequest({ pathname: "/api/estimate" });

    const handleSubmit = async () => {
        await fetch({
            estimationId: router?.query?.id,
            actualValue: estimation
        });
        router.push("/estimations", undefined, {shallow: true});
    };

    return (
        <Container>
            <EstimationCard title="Czas spędzony na zadaniu w godzinach" value={estimation} min={1} max={86} onChange={setEstimation}></EstimationCard>
            <Button onClick={handleSubmit}>Prześlij</Button>
        </Container>
    )
}

export default EstimationInput;