import React, { FC } from 'react';
import UserModal from '../types/models';

/*type-01

const User: FC<{ name: string, age: number }> = (props) => {
    const age = props.age;
    return (
        <div>
            <h2>Hello from:{props.name}</h2>
            <h5>My Age is: {props.age} </h5>
        </div>
    );
};
 */
//type-02

/* interface Props {
    name: string,
    age: number,
    addUser: () => void
} */

interface Props {
    user: UserModal,
    addUser: (user: UserModal) => void
}

const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div className="">
            <h5>Hello from: {user.name} with experience {user.email}</h5>
            <button onClick={() => addUser(user)}>ADD me</button>
        </div>
    );
}


export default User;