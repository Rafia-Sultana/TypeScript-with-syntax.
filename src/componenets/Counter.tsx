import React, { ChangeEvent, FormEvent, useState } from 'react';
interface User {
    name?: string,
    job?: string
}
const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const handleIncrease = (): void => {
        setCount(count + 1);
    }
    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Adan',
            job: 'Dev'

        }
        setUser(userData);
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }
    return (
        <div>
            <h1>counter</h1>
            {
                count
            }<br />
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;