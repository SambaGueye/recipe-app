import {useState, useEffect} from 'react'; 
import './App.css';
import Recipe from './components/Recipe';

function App() {


  const [recipe, setRecipe] = useState([])


  const idApp = '4dcc09f0';
  const key = '548b7510471eb2f583b35374beffb5ef';

  useEffect(() =>{
      getRecipes();    
  },[])
  

  const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${idApp}&app_key=${key}`)
      const data = await response.json();
      setRecipe(data.hits);
  } 

  return (
    <div className="App">
      <h2 style={{textAlign:'center'}}>Welcome to your recipe App</h2>
      <div className="recipe">
      {recipe.map(plat => (
        <Recipe 
        key={plat.recipe.label} 
        title={plat.recipe.label} 
        image={plat.recipe.image} 
        calories ={plat.recipe.calories} 
        ingredients = {plat.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
}

export default App;
