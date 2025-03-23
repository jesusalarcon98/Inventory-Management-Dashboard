"use client"

import Header from "@/app/(components)/Header";
import { useGetProductsQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 180 },
  { field: "name", headerName: "Product Name", width: 400 },
  { field: "price", headerName: "Price", width: 220, type: 'number', valueGetter: (value, row) => `$${row.price}` },
  { field: "rating", headerName: "Rating", width: 220, type: 'number', valueGetter: (value, row) => row.rating ? row.rating : "N/A" },
  { field: "stockQuantity", headerName: "Stock Quantity", width: 300, type: 'number' },

]

const inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    )

  }
  return <div className="flex flex-col">
    <Header name="Inventory" />
    <DataGrid
      rows={products}
      columns={columns}
      getRowId={(row => row.productId)}
      checkboxSelection
      className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      sx={{

        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "red",
          color: "black",
        },
        "& .MuiCheckbox-root": {
          color: "rgb(55, 65, 81) !important", // Equivalente a `!text-gray-700`
        },
       /*  "& .Mui-checked": {
          color: "rgb(55, 65, 81) !important", // Color del checkbox marcado
        }, */
      }}
    />
  </div>
}

export default inventory