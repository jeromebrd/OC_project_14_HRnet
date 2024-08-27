import PropTypes from 'prop-types';

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className={'mt-2'}>
      {children}
    </label>
  );
};
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Label;
