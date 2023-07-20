import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/datatTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";

const Users = () => {
  // user column
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="avatar" />;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 160,
      type: "string",
    },
    { field: "lastName", headerName: "Last name", width: 160, type: "string" },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      type: "string",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
      type: "string",
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 160,
    },

    {
      field: "verified",
      headerName: "Verified",
      width: 160,
      type: "boolean",
    },
  ];

  //set state for modal to close and open
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        {/* (property) React.DOMAttributes<HTMLButtonElement>.onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined */}
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add setOpen={setOpen} slug="users" columns={columns} />}
    </div>
  );
};

export default Users;
