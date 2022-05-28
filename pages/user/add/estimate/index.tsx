import Button from "@containers/Button/Button";
import Card from "@containers/Card/Card";
import Checkbox from "@containers/Checkbox/Checkbox";
import Container from "@containers/Container/Container";
import EstimationCard from "@containers/EstimationCard/EstimationCard";
import { useState } from "react";

import usePostRequest from "../../../../hooks/usePostRequest";
import styles from "./Estimate.module.scss";
import { useRouter } from "next/router";
import config from "../../../../config";

function Estimate({}) {
  const [lines, setLines] = useState(500);
  const [codeFamiliarity, setCodeFamiliarity] = useState(5);
  const [experience, setExperience] = useState(5);
  const [projectScale, setProjectScale] = useState(8);
  const [taskKnowledge, setTaskKnowledge] = useState(5);
  const [quality, setQuality] = useState(5);
  const [useAi, setUseAi] = useState(false);

  const router = useRouter();

  const { fetch } = usePostRequest({ pathname: "/api/estimate" });

  const handleSubmit = async () => {
    await fetch({
      useAi: useAi,
      name: "Estymacja",
      lines,
      codeFamiliarity,
      experience,
      projectScale,
      taskKnowledge,
      quality,
    });
    router.push(config.userPath, undefined, { shallow: true });
  };

  return (
    <Container>
      <div className={styles.estimation}>
        <header className={styles.header}>
          <h1 className={styles.title}>Start estymacja</h1>
          <Card>
            <span className={styles.name}>Estymacja 1</span>
          </Card>
        </header>
        <Checkbox
          label="Czy chcesz użyć eksperymentalnej wersji estymacji z użyciem AI"
          checked={useAi}
          onChange={() => setUseAi((prevState) => !prevState)}
        />
        <EstimationCard
          title="Działałeś już z podobnym zadaniem?"
          value={taskKnowledge}
          onChange={setTaskKnowledge}
          min={1}
          max={10}
        />
        <EstimationCard
          title="W ilu plikach planujesz pracować?"
          value={projectScale}
          onChange={setProjectScale}
          min={1}
          max={16}
        />
        <EstimationCard
          title="W jakim stopniu jesteś zaznajomiony z kodem?"
          min={1}
          value={codeFamiliarity}
          onChange={setCodeFamiliarity}
          max={10}
        />
        <EstimationCard
          title="Ile linii kodu sądzisz, że dodasz?"
          min={1}
          value={lines}
          onChange={setLines}
          max={1000}
        />
        <EstimationCard
          title="Jak oceniasz swoje doświadczenie jako programista"
          min={1}
          value={experience}
          onChange={setExperience}
          max={10}
        />
        <EstimationCard
          title="Quality"
          min={1}
          value={quality}
          onChange={setQuality}
          max={10}
        />
        <Button onClick={handleSubmit}>Prześlij</Button>
        <Button outline>Anuluj</Button>
      </div>
    </Container>
  );
}

export default Estimate;
