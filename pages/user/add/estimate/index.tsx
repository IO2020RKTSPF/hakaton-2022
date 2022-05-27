import styles from "./Estimate.module.scss";
import Container from "@containers/Container/Container";
import Card from "@containers/Card/Card";
import Paragraph from "@containers/Paragraph/Paragraph";
import { useState } from "react";
import EstimationCard from "@containers/EstimationCard/EstimationCard";
import Button from "@containers/Button/Button";

function Estimate({}) {
  const [lines, setLines] = useState(500);
  const [codeFamiliarity, setCodeFamiliarity] = useState(5);
  const [experience, setExperience] = useState(5);
  const [projectScale, setProjectScale] = useState(8);
  const [taskKnowledge, setTaskKnowledge] = useState(5);
  const [quality, setQuality] = useState(5);

  return (
    <Container>
      <div className={styles.estimation}>
        <header className={styles.header}>
          <h1 className={styles.title}>Start estymacja</h1>
          <Card>
            <Paragraph className={styles.name}>Estymacja 1</Paragraph>
          </Card>
        </header>
        <EstimationCard
          title="Działałeś już z podobnym zadaniem?"
          value={taskKnowledge}
          onChange={setTaskKnowledge}
          min={0}
          max={10}
        />
        <EstimationCard
          title="W ilu plikach planujesz pracować?"
          value={projectScale}
          onChange={setProjectScale}
          min={0}
          max={16}
        />
        <EstimationCard
          title="W jakim stopniu jesteś zaznajomiony z kodem?"
          min={0}
          value={codeFamiliarity}
          onChange={setCodeFamiliarity}
          max={10}
        />
        <EstimationCard
          title="Ile linii kodu sądzisz, że dodasz?"
          min={0}
          value={lines}
          onChange={setLines}
          max={1000}
        />
        <EstimationCard
          title="Jak oceniasz swoje doświadczenie jako programista"
          min={0}
          value={experience}
          onChange={setExperience}
          max={10}
        />
        <EstimationCard
          title="Quality"
          min={0}
          value={quality}
          onChange={setQuality}
          max={10}
        />
        <Button>Prześlij</Button>
        <Button>Anuluj</Button>
      </div>
    </Container>
  );
}

export default Estimate;
