import { NavLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { states } from '../data/states';
import { useState } from 'react';

import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';

import Modal from '../components/Modal';

const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Initialiser useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // Fonction pour sauvegarder l'employé dans localStorage
  const saveEmployee = (data) => {
    // Récupérer les employés existants dans le localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Ajouter les nouvelles données d'employé
    employees.push(data);

    // Sauvegarder les employés mis à jour dans le localStorage
    localStorage.setItem('employees', JSON.stringify(employees));

    // Afficher confirmation
    setModalIsOpen(!modalIsOpen);
  };

  // Ferme la modale
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
          className={'my-10 flex flex-col  justify-center w-1/2'}
        >
          {/* First Name */}
          <label htmlFor="first-name" className={'mt-2'}>
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className={'border border-gray-300 rounded'}
            {...register('firstName', { required: false })}
          />
          {errors.firstName && (
            <span className={'text-red-500 font-light text-sm'}>
              First Name is required
            </span>
          )}

          {/* Last Name */}
          <label htmlFor="last-name" className={'mt-2'}>
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            {...register('lastName', { required: false })}
            className={'border border-gray-300 rounded'}
          />
          {errors.lastName && (
            <span className={'text-red-500 font-light text-sm'}>
              Last Name is required
            </span>
          )}

          {/* Date of Birth */}
          <label htmlFor="date-of-birth" className={'mt-2'}>
            Date of Birth
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>

          {errors.dateOfBirth && (
            <span className={'text-red-500 font-light text-sm'}>
              Date of Birth is required
            </span>
          )}

          {/* Start Date */}
          <label htmlFor="start-date" className={'mt-2'}>
            Start Date
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>
          {errors.startDate && (
            <span className={'text-red-500 font-light text-sm'}>
              Start Date is required
            </span>
          )}

          {/* Address */}
          <fieldset
            className={'flex flex-col border border-gray-800 p-5 rounded mt-2'}
          >
            <legend>Address</legend>

            {/* Street */}
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              {...register('street', { required: false })}
              className={'border border-gray-300 rounded'}
            />
            {errors.street && (
              <span className={'text-red-500 font-light text-sm'}>
                Street is required
              </span>
            )}

            {/* City */}
            <label htmlFor="city" className="mt-2">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register('city', { required: false })}
              className={'border border-gray-300 rounded'}
            />
            {errors.city && (
              <span className={'text-red-500 font-light text-sm'}>
                City is required
              </span>
            )}

            {/* State */}
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
            {errors.state && (
              <span className={'text-red-500 font-light text-sm'}>
                State is required
              </span>
            )}

            {/* Zip Code */}
            <label htmlFor="zip-code" className="mt-2 mb-2">
              Zip Code
            </label>
            <input
              type="number"
              id="zip-code"
              {...register('zipCode', { required: false })}
              className={'border border-gray-300 rounded'}
            />
            {errors.zipCode && (
              <span className={'text-red-500 font-light text-sm'}>
                Zip Code is required
              </span>
            )}
          </fieldset>

          {/* Department */}
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
          {errors.department && (
            <span className={'text-red-500 font-light text-sm'}>
              Department is required
            </span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={
              'mt-5 w-[200px] mx-auto p-2 border border-indigo-800 rounded font-semibold bg-indigo-800 text-white hover:text-indigo-800 hover:bg-white transition-all transition-150ms'
            }
          >
            Save
          </button>
        </form>
        {modalIsOpen && <Modal onClose={handleCloseModal} />}
      </div>
    </main>
  );
};

export default CreateEmployee;
