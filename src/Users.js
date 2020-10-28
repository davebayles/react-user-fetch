import React, { useState, useEffect } from 'react';

const Users = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="list-grid">
        {users.map((user) => (
          <div className="list-item">
            <div className="list-name">
              <h3 htmlFor={user.id}>{user.name}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Users;
