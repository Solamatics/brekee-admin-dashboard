import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/datatTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";

const Users = () => {
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
    { field: "firstName", headerName: "First name", width: 160 },
    { field: "lastName", headerName: "Last name", width: 160 },
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

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
        <DataTable slug="users" columns={columns} rows={userRows} />
      </div>
    </div>
  );
};

export default Users;
