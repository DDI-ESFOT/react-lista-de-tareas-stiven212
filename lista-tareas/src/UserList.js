import React, {useState} from "react";

function formatName(user) {
    return user.name + " " + user.lastname;
}

const UserList = ({ users }) => {
    const [usersList, setUsersList] = useState([]);

    const handleAddUser = (event) => {
        const newName = document.querySelector("#name").value;
        const newLastname = document.querySelector("#lastname").value;
        const newUser = {
            name: newName,
            lastname: newLastname,
        };

        setUsersList((prevUserList) => {
            return [...prevUserList, newUser];
        });
        document.querySelector("#name").value = "";
        document.querySelector("#lastname").value = "";
        console.log(usersList[usersList.length - 1]);
    };
    const handleDeleteUser = () => {
        console.log("delete User")
        const lastUser = usersList[usersList.length - 1];

        setUsersList((prevUserList) => {
            prevUserList.pop();
            return [...prevUserList];
        });
    };

    return (
        <>
            <h1>Lista de usuarios</h1>
            <input type="text" id="name" placeholder="Ingrese un nombre" />
            <input type="text" id="lastname" placeholder="Ingrese un apellido" />
            <button onClick={handleAddUser}>Añadir</button>
            <button onClick={handleDeleteUser}>Eliminar último usuario</button>
            <ul>
                {usersList.map((user, index) => {
                    return <li key={index}>{formatName(user)}</li>;
                })}
            </ul>
        </>
    );
};

export default UserList;