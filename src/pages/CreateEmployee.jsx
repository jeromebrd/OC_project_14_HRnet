import { NavLink } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import { Modal } from 'react-modal-jeromebrd';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/slices/employee';
// import FormEmployee from '../components/FormEmployee';

const FormEmployee = lazy(() => import('../components/FormEmployee'));

const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const saveEmployee = (data) => {
    // Before sending the data to Redux, convert dateOfBirth and startDate into strings in ISO format using .toISOString(). This ensures that the dates will be serializable in the Redux state.
    const formattedData = {
      ...data,
      dateOfBirth: data.dateOfBirth ? data.dateOfBirth.toISOString() : null,
      startDate: data.startDate ? data.startDate.toISOString() : null,
    };
    dispatch(addEmployee(formattedData)); //sending formatted data (with the converted dates) to the addEmployee action.
    setModalIsOpen(!modalIsOpen);
  };

  const handleCloseModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <main className={'container'}>
      <div className={'flex flex-col justify-center items-center'}>
        <h1 className={'text-4xl font-bold'}>HRnet</h1>
        <NavLink to={'list'} className={'px-3 py-2 underline rounded'}>
          View Current Employees
        </NavLink>
        <h2 className={'text-xl font-bold'}>Create Employee</h2>
        <Suspense fallback={<div>Loading..</div>}>
          <FormEmployee onSubmit={saveEmployee} />
        </Suspense>
        {modalIsOpen && (
          <Modal onClose={handleCloseModal}>
            <p>Employee Created!</p>
          </Modal>
        )}
      </div>
    </main>
  );
};

export default CreateEmployee;
