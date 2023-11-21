'use client';
import React from 'react';
import { server } from '../_trpc/client';
import { DataTable } from './data-table';
import { columns } from './columns';

// import { Container } from './styles';

const Apagadas: React.FC = () => {
  const { data } = server.nfe.getAll.useQuery();
  console.log(data, 'data');
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
};

export default Apagadas;
