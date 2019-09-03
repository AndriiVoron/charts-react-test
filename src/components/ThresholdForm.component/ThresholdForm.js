import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles.css';

const ThresholdCheck = ({ action, amount }) => {
  const [values, setValues] = React.useState({
    level: '',
  });

  const handleChange = level => event => {
    setValues({ ...values, [level]: event.target.value });
  };

  const handleAction = () => {
    const { level } = values;
    const levelInt = !isNaN(parseInt(level)) ? level : 'unset';
    return action(levelInt);
  }

  return (
    <form className="container" noValidate autoComplete="off">
      <TextField
        id="newThreshold"
        label="New Threshold"
        className="textField"
        value={values.level}
        onChange={handleChange('level')}
        margin="normal"
      />
      <div className="monitor">
        Curent amount is {amount}
      </div>
      <Button
        variant="contained"
        color="primary"
        className="button"
        onClick={handleAction}
        // onClick={action}
      >
        Set new
      </Button>
    </form>
  );
}

ThresholdCheck.defaultProps = {
  action: () => null,
  amount: 'unset',
};

ThresholdCheck.propTypes = {
  action: PropTypes.func,
  amount: PropTypes.string,
};

export default ThresholdCheck;

