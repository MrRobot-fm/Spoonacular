import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import Form from '../Components/Form/Form';

const Contact = () => {
  const { setNav } = useGlobalContext();

  useEffect(() => {
    setNav(false);
  }, [setNav]);

  return (
    <div className="flex min-h-[90vh]  sm:min-h-screen lg:min-h-[90vh] flex-col bg-emerald-400 justify-center">
      <Form />
    </div>
  );
};

export default Contact;
