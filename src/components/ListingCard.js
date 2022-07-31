import React, {useState} from "react";

function ListingCard({item, handleDelete}) {
  //DELIVERABLE 1 EXT: destructuring item prop
  const {id, description, image, location} = item

  
  const [color, setColour] = useState(false)

  function favorite(){
    setColour((color => !color))
  }
  const likeItem = color ? "emoji-button favorite active" : "emoji-button favorite"

  
   function updateDeleteOnserver(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    handleDelete(id)
  }

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className={likeItem} onClick={favorite}>☆</button>
        <strong>{"description"}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={updateDeleteOnserver}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

/**DELIVERABLE 2: User can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon.
   * save "favorite action variable" to state
   * toggle required css star icon rules, to "likeItem variable" with value based on ternary of "favorite action variable"
   */

/** DELIVERABLE 3: DELETE ITEM AND PERSIST ON SERVER
   *  pass "updateDeleteOnserver" as props to ListinCard Component" to enable import of (item id)
   *  send DELETE request with (item id) to server
   *  save response to state, (create new array, filter old item state and return all items except for item with deleted id)
   *  update state
   */