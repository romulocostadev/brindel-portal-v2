'use client';
import React from 'react';
import { server } from '../_trpc/client';

// import { Container } from './styles';

const Dasboard: React.FC = () => {
  const { data } = server.auth.get1.useQuery();
  console.log(data);
  return <>Dash</>;
};

export default Dasboard;
