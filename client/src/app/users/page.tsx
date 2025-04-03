"use client"

import Header from "@/app/(components)/Header";
import { useGetUsersQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", width: 180 },
  { field: "name", headerName: "Name", width: 400 },
  { field: "email", headerName: "Email", width: 400 },
]

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch users
      </div>
    )
  }

  return <div className="flex flex-col">
    <Header name="Users" />
    <DataGrid
      rows={users}
      columns={columns}
      getRowId={(row => row.userId)}
      checkboxSelection
      className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "red",
          color: "black",
        },
        "& .MuiCheckbox-root": {
          color: "rgb(55, 65, 81) !important",
        },
      }}
    />
  </div>
}

export default Users