import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import styles from "./filter.module.css";

function Filter({ value, onChange }) {
  return (
    <label className={styles.filter}>
      <span className={styles.label}>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
  });


const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.changeFilter(e.target.value)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
