import React from "react"
import ListingCard from "./ListingCard";

//(searchval props) passed from App Component, following DOUBLE TRANSMISSION IN APP COMPONENT.
function ListingsContainer({handleDelete, showItems}) {


  return (
    <main>
      <ul className="cards">
      {showItems.map((i) => (
        <ListingCard 
        key={i.id} 
        item={i} 
        handleDelete={handleDelete}
        />
      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

// const showItems = items.map((i) => {
//   return (
//     <ListingCard 
//     key={i.id} 
//     item={i}
//     updateDelete={updateDeleteOnserver}
//     />
//   )
// })

