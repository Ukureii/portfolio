import React, { useEffect, useState } from 'react';

export default () => {
  // RECUPÉRATION DES GRAINES
  const [grainesData, setGrainesData] = useState([]);

  useEffect(() => {
    async function fetchGraines() {
      try {
        const result = await fetch('https://siomende.fr/bird/api/graines/All');

        if (result.ok === true) {
          const graines = await result.json();
          setGrainesData(graines);
        } else {
          throw new Error('Impossible de contacter le serveur');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchGraines();
  }, []);

  // RÉCUPÉRATION DES ITEMS SELON L'USILISATEUR CONNECTÉ
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const result = await fetch('https://siomende.fr/bird/api/items/AllByUser?id=');

        if (result.ok === true) {
          const items = await result.json();
          setItemsData(items);
        } else {
          throw new Error('Impossible de contacter le serveur');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
  }, []);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        {grainesData.map((graine, index) => (
          <option key={index} value={graine.id}>
            {`${graine.libelleG}`}
          </option>
        ))}
      </div>
    </aside>
  );
};
