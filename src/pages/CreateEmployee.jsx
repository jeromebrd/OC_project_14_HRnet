import { NavLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { states } from '../data/states';
import { useState } from 'react';

import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';

// import Modal from '../components/Modal';
import { Modal } from 'react-modal-jeromebrd/dist/Modal';

import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/slices/employee';

const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm();

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
        <form
          onSubmit={handleSubmit(saveEmployee)}
          id="create-employee"
          className={
            'my-10 flex flex-col  justify-center w-full md:w-1/2 xl:w-1/3 '
          }
        >
          {/* Form fields */}
          <label htmlFor="first-name" className={'mt-2'}>
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className={'border border-gray-300 rounded pl-2'}
            {...register('firstName', { required: false })}
          />
          <label htmlFor="last-name" className={'mt-2'}>
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            {...register('lastName', { required: false })}
            className={'border border-gray-300 rounded pl-2'}
          />
          <label htmlFor="date-of-birth" className={'mt-2'}>
            Date of Birth
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value || null}
                  onChange={(newValue) => field.onChange(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>
          <label htmlFor="start-date" className={'mt-2'}>
            Start Date
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value || null}
                  onChange={(newValue) => field.onChange(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>
          <fieldset
            className={
              'flex flex-col border w-full border-gray-800 p-5 rounded mt-2'
            }
          >
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              {...register('street', { required: false })}
              className={'border border-gray-300 rounded pl-2'}
            />
            <label htmlFor="city" className="mt-2">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register('city', { required: false })}
              className={'border border-gray-300 rounded pl-2'}
            />
            <label htmlFor="state" className="mt-2">
              State
            </label>
            <select
              id="state"
              {...register('state', { required: false })}
              className={'border border-gray-300 rounded'}
            >
              <option value="">Select a state</option>
              {states.map((s, i) => (
                <option key={i} value={s.abbreviation}>
                  {s.name}
                </option>
              ))}
            </select>
            <label htmlFor="zip-code" className="mt-2 mb-2">
              Zip Code
            </label>
            <input
              type="number"
              id="zip-code"
              {...register('zipCode', { required: false })}
              className={'border border-gray-300 rounded'}
            />
          </fieldset>
          <label htmlFor="department" className={'mt-2'}>
            Department
          </label>
          <select
            id="department"
            {...register('department', { required: false })}
            className={'border border-gray-300 rounded'}
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
          <button
            type="submit"
            className={
              'mt-5 w-[200px] mx-auto p-2 border border-blue-800 rounded font-semibold bg-blue-800 text-white hover:text-blue-800 hover:bg-white transition-all transition-150ms'
            }
          >
            Save
          </button>
        </form>
        {modalIsOpen && (
          <Modal onClose={handleCloseModal}>Employee Created!</Modal>
        )}
      </div>
    </main>
  );
};

export default CreateEmployee;
