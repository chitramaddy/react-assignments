import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>OOPS!!!</h1>
      <h3> Something went wrong!!!</h3>
      <h2>{err.status + ' : ' + err.statusText}</h2>
    </>
  );
};
