import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { states } from '../data/states';
import Label from './Label';

const FormEmployee = ({ onSubmit }) => {
  const { register, handleSubmit, control } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="create-employee"
      className={
        'my-10 flex flex-col  justify-center w-full md:w-1/2 xl:w-1/3 '
      }
    >
      {/* Form fields */}
      <Label htmlFor="first-name">First Name</Label>
      <input
        type="text"
        id="first-name"
        className={'border border-gray-300 rounded pl-2'}
        {...register('firstName', { required: false })}
      />
      <Label htmlFor="last-name">Last Name</Label>
      <input
        type="text"
        id="last-name"
        {...register('lastName', { required: false })}
        className={'border border-gray-300 rounded pl-2'}
      />
      <Label htmlFor="date-of-birth">Date of Birth</Label>
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
      <Label htmlFor="start-date" className={'mt-2'}>
        Start Date
      </Label>
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
        <Label htmlFor="street">Street</Label>
        <input
          type="text"
          id="street"
          {...register('street', { required: false })}
          className={'border border-gray-300 rounded pl-2'}
        />
        <Label htmlFor="city">City</Label>
        <input
          type="text"
          id="city"
          {...register('city', { required: false })}
          className={'border border-gray-300 rounded pl-2'}
        />
        <Label htmlFor="state">State</Label>
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
        <Label htmlFor="zip-code">Zip Code</Label>
        <input
          type="number"
          id="zip-code"
          {...register('zipCode', { required: false })}
          className={'border border-gray-300 rounded'}
        />
      </fieldset>
      <Label htmlFor="department">Department</Label>
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
  );
};
FormEmployee.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default FormEmployee;
