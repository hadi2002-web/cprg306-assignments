"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (!ingredient) return;

      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="ml-10 text-white">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>

      {ingredient && (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}