import PropTypes from "prop-types";
import styles from "./filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <label className={styles.filter}>
      <span className={styles.label}>Find contacts by name</span>
      <input type="text" value={value} onChange={e => onChange(e.target.value)}></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
