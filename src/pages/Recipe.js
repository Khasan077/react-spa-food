import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Recipe() {
   const { id } = useParams();
   const [recipe, setRecipe] = useState([]);
   const { goBack } = useHistory();
   const [showRecipe, setShowRecipe] = useState(false)

   const handleRecipeShow = () => {
      setShowRecipe(!showRecipe)
   }

   useEffect(() => {
      getMealById(id).then((data) => setRecipe(data.meals[0]));
   });

   return (
      <div className="container">
         <button className="btn go-back" onClick={goBack}>
            Go Back
         </button>
         {!recipe.idMeal ? (
            <Loader />
         ) : (
            <div className="recipe">
               <div className="card-image">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
               </div>
               <div className="card-content">
                  <h3 className="card-title">
                     <b>{recipe.strMeal}</b>
                  </h3>
                  <h6>
                     <b>Category:</b> {recipe.strCategory}
                  </h6>
                  {recipe.strArea ? <h6> <b>Area:</b> {recipe.strArea}</h6> : null }
                  <p>{recipe.strInstructions}</p>
                  <button onClick={handleRecipeShow} className="btn">ShowRecipe</button>
                  {showRecipe ?  (
                     <table>
                     <thead>
                        <tr>
                           <th>Ingredient</th>
                           <th>Measure</th>
                        </tr>
                     </thead>
                     <tbody>
                        {Object.keys(recipe).map(key => {
                           if(key.includes('Ingredient') && recipe[key]) {
                              return (
                                 <tr>
                                    <td>{recipe[key]}</td>
                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                 </tr>
                              )
                           }
                        })}
                     </tbody>
                     </table>
                  ) : null}
                  <hr />
                  {recipe.strYoutube ? (
                     <div className="row youtube">
                        <h5>Video Recipe</h5>
                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id} frameborder="0"></iframe>
                     </div>
                  ) : null}
               </div>
            </div>
         )}
      </div>
   );
}
