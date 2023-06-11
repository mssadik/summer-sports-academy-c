import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() =>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    const handelMakeAdmin = (user) =>{
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
      })
      .then(res => res.json())
      .then(data =>{
        if(data.modifiedCount){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      })
    }


    const handelMakeInstructor = (user) =>{
      fetch(`http://localhost:5000/users/instructor/${user._id}`,{
        method: 'PATCH'
      })
      .then(res => res.json())
      .then(data =>{
        if(data.modifiedCount){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      })
    }


    const handleDelete = id => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/users/${id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          refetch();
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                      }
                  })
          }
      })
  }



    return (
        <div>
            <h2 className='text-white text-3xl font-bold text-center mb-5'>Manage Users{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-white">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, index) => <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> {user.role === 'admin' ? 'admin' : ''} {user.role === 'instructor' ? 'instructor' : ''}</td>
        <td><button onClick={() => handelMakeAdmin(user)} className="btn btn-warning">Make Admin</button></td>
        <td><button onClick={() => handelMakeInstructor(user)} className="btn btn-success">Make Instroctor</button></td>
        <td><button onClick={() => handleDelete(user._id)} className="btn btn-primary">Delete</button></td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;