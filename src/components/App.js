import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  
   const [items, setItems] = useState([])
   const [searchval, setSearchVal] = useState("")

   useEffect(() => {
     fetch("http://localhost:6001/listings")
     .then(function(response){
       return response.json()
     })
     .then(setItems)
     
   }, [])

   function handleDelete(id){
    const minusDeletes = items.filter((i) => i.id !== id)
    setItems(minusDeletes)
  }
  
  const showItems = items.filter((i) => 
    i.description.includes(searchval)
  );


 
  
 
  

  return (
    <div className="app">
      <Header OnsetSearchVal={setSearchVal} />
      <ListingsContainer handleDelete={handleDelete} showItems={showItems}/>
    </div>
  );
}

export default App;


/**DELIVERABLE 1. Show all items onLoad
   *  use useState, useEffect hooks
   *  save items to state
   * use useEffect to fetch data and save to "items".
   * create Newarray to map through all "items element" and 
   * ...pass each item element with it's key to the ListingCard Component
   * 
   */

//DELIVERABLE 4
 /** //setting state and function to get "search value" from Search Component.
  * 1.set "searchval" to state
  * 2. create a cb function to pass search to  HeaderComponent which will also pass to SearchComponent... DOUBLE TRANSMISSION
  * 3. After "searchval" has passed on form search <Header/> from <Search/>, pass as props to <ListingContainer/> which needs it to filter display
  * 
  */