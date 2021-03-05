import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import './App.css';


function App() {
const APP_ID="c0582eaf";
const APP_KEY="d3f6b5d5823177c19e26331cb9d5c5af";

const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]=useState('chicken');

useEffect(()=>{getRecipe()},[query]);

const getRecipe=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
  console.log(data.hits);
  setRecipes(data.hits);
};
const updateSearch=(e)=>{
setSearch(e.target.value);
console.log(search);

};
const getSearch=(e)=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" value={search} className="searchinput" onChange={updateSearch}/>
        <button type="submit" className="searchbar">Search</button>
      </form>
      {recipes.map(recipe=>(
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
    </div>
  );
};

export default App;
