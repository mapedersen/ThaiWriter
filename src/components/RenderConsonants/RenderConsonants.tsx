import consonants from "../../data/consonants";
import { ConsonantType } from "../../types";
import Consonant from "../Consonant/Consonant";
import styles from "./RenderConsonants.module.css";

const RenderConsonants = () => {
  return (
    <ul className={styles.list}>
      {consonants.map((consonant: ConsonantType) => (
        <Consonant key={consonant.id} consonant={consonant} />
      ))}
    </ul>
  );
};

export default RenderConsonants;
