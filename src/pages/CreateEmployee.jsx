import { NavLink } from 'react-router-dom';
const CreateEmployee = () => {
  return (
    <main className={'container'}>
      <div className={'flex flex-col justify-center items-center'}>
        <h1 className={'text-4xl font-bold'}>HRnet</h1>
        <NavLink to={'list'} className={'px-3 py-2 underline rounded'}>
          View Current Employees
        </NavLink>
        <h2 className={'text-xl font-bold'}>Create Employee</h2>
      </div>
    </main>
  );
};

export default CreateEmployee;
