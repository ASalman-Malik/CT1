import { Button, Card, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
//import { INITIAL_USERS_LIST } from "./InitialUserList";

export function Users(){
    // const [users, setUsers] = useState(INITIAL_USERS_LIST);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [userpic, setUserPic] = useState("");

    function getUser(){
        fetch('https://617e61a12ff7e600174bd7a3.mockapi.io/users',
        {
            method: 'GET',
        })
        .then((data) => data.json())
        //.then((data) => console.log(data))
         .then(user => setUsers(user));    
    }

    function deleteUser(id){
        fetch(`https://617e61a12ff7e600174bd7a3.mockapi.io/users/${id}`,
        {
            method: "DELETE",
        })
        .then((data) => data.json())
        .then((user) => console.log(user))
        .then(() => getUser());
    }

    function editUser(username, userpic){
        console.log("Editing User. . . . "+username + " and " + userpic)
        document.querySelector('.submit').innerHTML = "Update User";
        document.querySelector('.user-name').value = username;
        document.querySelector('.user-pic').value = userpic;
 
    }

    function addUser(){
        const type =
    document.querySelector(".submit").innerHTML === "Add User" ? "Update" : "Add";
      const method = type === "Add" ? "POST" : "PUT";
        fetch(`https://617e61a12ff7e600174bd7a3.mockapi.io/users`,
        {
            method: method,
            headers:{
                "Content-Type": "application/json",
            },
            body:  JSON.stringify({name: username, pic: userpic})
        })
        .then((data) => data.json())
        .then(() => getUser());     
    }
   
    
    useEffect(() =>{
        getUser();
    }, []);

    return(
        <div>
            <div className='add-user-form'>
                <TextField
                className={'user-name'}
                    style={{width:'20rem', margin:'0.5rem'}}
                    value = {username}
                    onChange = {(event) => setUsername(event.target.value)}
                    type = "text"
                    label = "Name"
                    variant = "outlined"
                />
                 <TextField
                 className={'user-pic'}
                    style={{width:'20rem', marginBottom:'0.5rem'}}
                    value = {userpic}
                    onChange = {(event) => setUserPic(event.target.value)}
                    type = "text"
                    label = "Profile Picture"
                    variant = "outlined"
                />
                <Button
                className={'btn', 'submit'}
                    variant = "outlined"
                    color = "primary"
                    style={{backgroundColor:'lightGreen', color:'black'}}
                    onClick ={() => addUser()}
                        // setUsers([...users,{
                        //     name: username,
                        //     pic: userpic,    
                        // },
                   // ])
                   // }
                >Add User</Button>
            </div>
            <div className={'user-list'}>
                    {users.map((user) => (<User  name={user.name} pic ={ user.pic} id={user.id} deleteUser={deleteUser} editUser={editUser}/> ))}    
            </div>
        </div>
    );
}

function User({name, pic, id, deleteUser, editUser}){
    const history = useHistory();
   // const [users, setUsers] = useState(INITIAL_USERS_LIST);
   
    
    return(
        // onClick={() => history.push("/users/" + id)} 
        <Card  className={'user-card'}>
        <img
            style = {{
                borderRadius: '50%',
                height: '75px',
                width: '75px',
                objectFit: 'cover',
                boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.4)',
            }}
            src = {pic}
            alt='profile-pic'
        />
        <Button
            className={'btn'}
          variant = "outlined"
          color = "primary"
          style={{backgroundColor:'white', color: 'black',marginRight:'1.5rem', marginLeft:'1.5rem' }}
          onClick={() => history.push("/users/" + id)}
         >See Detals</Button>
         <h2>{name}</h2>
         <div>
         <Button
         className={'btn'}
          onClick={() => deleteUser(id)}
          variant = "outlined"
          color = "primary"
          style={{backgroundColor:'crimson', color: 'black',marginRight:'1.5rem', marginLeft:'1.5rem' }}          
         >Delete User</Button>

          <Button
          className={'btn'}
          variant = "outlined"
          color = "primary"
          onClick={() => editUser(name,pic)}
          style={{backgroundColor:'lightGreen', color: 'black'}}
         >Edit User</Button>
         </div>
        </Card>
       
       
    );
}