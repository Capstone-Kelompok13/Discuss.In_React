import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TableUsers = ({ data }) => {
  const rows = [...data];
  console.log(rows);
  const columns = [
    { field: "id", headerName: "User ID", width: 150 },
    { field: "username", headerName: "Username", width: 150, renderCell: (params) => {
      
    } },
    { field: "email", headerName: "Email", width: 200 },
  ];
  return (
    <>
      <div className="w-[80vw] h-[80vh] border rounded-lg">
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </div>
    </>
    //   <table className="table-auto w-[80vw]">
    //   <thead className='border'>
    //     <tr>
    //       <th className='py-5 text-left'>
    //         <input type="checkbox" name="" id="" />
    //       </th>
    //       <th className='py-5 text-left'>Song</th>
    //       <th className='py-5 text-left'>Artist</th>
    //       <th className='py-5 text-left'>Year</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr className='border'>
    //       <td className='py-5'>
    //         <input type="checkbox" name="" id="" />
    //       </td>
    //       <td className='py-5'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
    //       <td className='py-5'>Malcolm Lockyer</td>
    //       <td className='py-5'>1961</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default TableUsers;