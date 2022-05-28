import EstimationCard from "@containers/EstimationCard/EstimationCard";

const EstimationInput = ({}) => {
    return (
        <div>
            <EstimationCard title="Test" value={100} min={1} max={10000} onChange={() => {}}></EstimationCard>
            
        </div>
    )
}

export default EstimationInput;