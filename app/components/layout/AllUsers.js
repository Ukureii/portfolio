import React, { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';

const AllUsers = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const result = await fetch('https://siomende.fr/bird/api/utilisateurs/All');

        if (result.ok === true) {
          const users = await result.json();
          setUsersData(users);
        } else {
          throw new Error('Impossible de contacter le serveur');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []); // Cette dépendance vide signifie que le code s'exécute une seule fois après le rendu initial

  return (
    <>
      <Select placeholder='Sélectionner un utilisateur'>
        {usersData.map((user, index) => (
          <option key={index} value={user.id}>
            {`${user.prenomU} ${user.nomU}`}
          </option>
        ))}
      </Select>
    </>
  );
};

export default AllUsers;
