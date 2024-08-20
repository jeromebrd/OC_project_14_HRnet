import PropTypes from 'prop-types';
const Modal = ({ onClose }) => {
  return (
    <div
      className={
        'bg-black bg-opacity-50 absolute top-0 left-0 h-full w-full flex items-center justify-center rounded-md'
      }
    >
      <div
        id="confirmation"
        className={
          'bg-white w-[500px] text-center px-5 py-20 relative rounded-md'
        }
      >
        Employee Created!
        <button
          onClick={onClose}
          className="absolute top-[-10px] right-[-10px] text-white bg-gray-900 rounded-full w-8 h-8"
        >
          &#x2715; {/* Code unicode pour "x" */}
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
