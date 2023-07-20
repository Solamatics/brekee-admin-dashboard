import { useState } from "react";
import DataTable from "../../components/datatTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import "./products.scss";

const Products = () => {
  // products column
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="image" />;
      },
    },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      type: "string",
    },
    { field: "color", headerName: "Color", width: 150, type: "string" },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      type: "string",
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
    },

    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        {/* (property) React.DOMAttributes<HTMLButtonElement>.onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined */}
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpen={setOpen} slug="products" columns={columns} />}
    </div>
  );
};

export default Products;
