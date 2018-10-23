import React from 'react';

import Header from '../components/header';

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Page;
