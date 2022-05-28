import Container from "@containers/Container/Container";
import EstimationItem from "@containers/EstimationItem/EstimationItem";
import { IEstimationModel } from "@containers/EstimationItem/EstimationItem";
import Icon from "@containers/Icon/Icon";
import useGetRequest from "hooks/useGetRequest";
import Link from "next/link";

import styles from "./Estimations.module.scss";
import config from "../../config";

const Estimations = ({}) => {
  const { response = [] } = useGetRequest<IEstimationModel[]>({
    pathname: "/api/estimate",
  });

  return (
    <div>
      <Container>
        <div className={styles.titleBar}>
          <p className={styles.title}>Twoje estymacje</p>
          <Link href={config.addEstimatePath}>
            <a>
              <Icon type="plus" />
            </a>
          </Link>
        </div>
      </Container>

      <Container>
        {response.map((model, idx) => {
          return <EstimationItem key={idx} model={model}></EstimationItem>;
        })}
      </Container>
    </div>
  );
};

export default Estimations;
