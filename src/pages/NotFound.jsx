import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-7xl text-red-500 font-extrabold">Error 404</h1>
      <h2 className="text-3xl text-neutral-600 font-bold">
        Oups ! Une erreur s&apos;est produite...
      </h2>
      <NavLink
        to={'/'}
        className={'underline font-bold py-5 text-xl text-gray-900'}
      >
        Retourner à la page d&apos;accueil
      </NavLink>
    </div>
  );
};

export default NotFound;
