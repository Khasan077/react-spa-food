import MealItem from './MealItem';

const MealList = ({meals}) => {
   return (
      <div className='list'>
         {meals.map(meal => (
            <MealItem key={meal.idMeal} {...meal}/>
         ))}
      </div>
   );
}

export default MealList;
