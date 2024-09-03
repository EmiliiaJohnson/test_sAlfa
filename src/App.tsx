import React, { useEffect } from "react";
import useItemStore from "./store";

const App: React.FC = () => {
  const { items, loading, error, fetchItems } = useItemStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {items.map((item) => (
        <>
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            style={{ width: "200px", margin: "10px" }}
          />
          <p>{item.title.slice(0, 20)}...</p>
        </>
      ))}
    </div>
  );
};

export default App;
