import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const DataTable = ({ products = [] }) => {
  console.log('products in DataTable', products);
  const columns = [
    {
      field: 'type',
      headerName: 'Product',
      description: 'Product',
      sortable: false,
      width: 160,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      description: 'Brand',
      sortable: false,
      width: 160,
    },
    {
      field: 'model',
      headerName: 'Model',
      description: 'Model',
      sortable: false,
      width: 160,
    },
    {
      field: 'costPrice',
      headerName: 'Cost Price',
      description: 'Cost Price',
      sortable: true,
      width: 160,
    },
    {
      field: 'sellingPrice',
      headerName: 'Selling Price',
      description: 'Selling Price',
      sortable: true,
      width: 160,
    }, 
    {
      field: 'count',
      headerName: 'Count',
      description: 'Count',
      sortable: true,
      width: 160,
    },
    {
      field: 'description',
      headerName: 'Description',
      description: 'Description',
      sortable: false,
      width: 160,
    }
  ];

  const paginationModel = { page: 0, pageSize: 10 };

  products = products?.map((val, index) => ({...val, id: index + 1}));

  return (
    <>
      <Paper sx={{ height: 400, width: '160%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={false}
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
};

export default DataTable;