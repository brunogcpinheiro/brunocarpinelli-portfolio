import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import withAnalytics from '../src/hocs/withAnalytics';

import styled from 'styled-components';

const Title = styled.h1`
  color: rebeccapurple;
  font-size: 2.5rem;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Title>Hello, World!</Title>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
    </>
  );
};

export default withAnalytics()(Home);
