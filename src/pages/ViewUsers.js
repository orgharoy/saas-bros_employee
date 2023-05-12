import React from 'react'
import { Link } from 'react-router-dom'

const ViewUsers = () => {
  return (
    <div className=" bg-pink-200 p-5 rounded-md">
      <h1 className="text-left">Merchants</h1>
      <div className="flex w-full justify-end mb-5">
        <input placeholder="search" className="px-3 rounded-md"/>
      </div>
      <div>

        <table className="table-auto text-left w-full">
          <tr className="mb-5">
            <th>Name</th>
            <th>Owner</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          <tr className="mb-5">
            <td>Business 1</td>
            <td>Maria Anders</td>
            <td>business@one.com</td>
            <td>+60145679856</td>
            <td>Bangsar South, KL</td>
            <td>Active</td>
            <td><Link to="/user">View</Link></td>
          </tr>

          <tr className="mb-5">
            <td>Business 1</td>
            <td>Maria Anders</td>
            <td>business@one.com</td>
            <td>+60145679856</td>
            <td>Bangsar South, KL</td>
            <td>Active</td>
            <td><Link to="/user">View</Link></td>
          </tr>

          <tr className="mb-5">
            <td>Business 1</td>
            <td>Maria Anders</td>
            <td>business@one.com</td>
            <td>+60145679856</td>
            <td>Bangsar South, KL</td>
            <td>Active</td>
            <td><Link to="/user">View</Link></td>
          </tr>

          <tr className="mb-5">
            <td>Business 1</td>
            <td>Maria Anders</td>
            <td>business@one.com</td>
            <td>+60145679856</td>
            <td>Bangsar South, KL</td>
            <td>Active</td>
            <td><Link to="/user">View</Link></td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default ViewUsers