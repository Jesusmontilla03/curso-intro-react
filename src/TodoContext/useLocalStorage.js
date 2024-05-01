import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);  
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); 
      
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
      } catch(error) {
         setLoading(false);
         setError(true);
        }
    }, 2000);
  }, [itemName, initialValue]);  
      
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
    
      setItem(newItem);
    }
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };

  /* localStorage.removeItem('TODOS_V1');
  
  const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */
