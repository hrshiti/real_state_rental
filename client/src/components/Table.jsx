import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/userSlice';

const Table = () => {

    const dispatch = useDispatch()
    const {users,loading,error}= useSelector((state)=>state.users)
useEffect(()=>{
    dispatch(fetchUsers())

},[dispatch])
if (loading) return <p>Loading users...</p>;
if (error) return <p>Error: {error}</p>;

    return (
        <div className="overflow-x-auto mt-8 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">User Information</h2>
          
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Table Header */}
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4 text-left">Password</th>
               
               
              </tr>
            </thead>
    
            {/* Table Body */}
            <tbody>
            {users.map((user)=>(
                <tr key={user._id}
                 className="border-b border-gray-200 hover:bg-gray-100 transition duration-300"
                 >
                 
                    <td className="py-3 px-4">{user.username}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.number}</td>
                    <td className="py-3 px-4">{user.password}</td>
              
                 
                 
                 
                </tr>
             ))}
            </tbody>
          </table>
        </div>
      );
    };
export default Table
