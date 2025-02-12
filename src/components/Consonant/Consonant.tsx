import { ConsonantType } from "../../types";

const Consonant = ({ consonant }: ConsonantType) => {
  return (
    <li key={consonant.id} className={styles.listItem}>
      <h2 className={styles.character}>{consonant.character}</h2>
      <div className={styles.leftAlign}>
        <p>Pronunciation: {consonant.pronunciation}</p>
        <p>Example: {consonant.example}</p>
        <p>Key: {consonant.key}</p>
      </div>
    </li>
  );
};

export default Consonant;
