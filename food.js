// const searchBtn = document.getElementById("button-search");
// const searchField = document.getElementById("search-field");

// searchField.addEventListener("keypress", function(event) {
//     // event.preventDefault();
//     if (event.key == 'Enter')
//         searchBtn.click();
// });


const searchField = document.getElementById("search-field");
searchField.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("button-search").click();
    }
});

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    if(searchText == ''){

    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.meals));
    }
}

const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-results');
    searchResult.textContent = '';
    if(meals.length == 0){
         
    }
    else{

    }
    meals.forEach(meal => {
        // console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-50 ">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title ">${meal.strMeal}</h5>
          <p class="card-text ">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
        `
        searchResult.appendChild(div);

    })
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}


const displayMealDetail = meal => {
    // console.log(meal)

    const mealDeatails = document.getElementById('meal-details')
    mealDeatails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-black">${meal.strMeal}</h5>
          <p class="card-text text-black ">${meal.strInstructions.slice(0, 120)}</p>
          <a href="${meal.strYoutube }" class="btn btn-primary">Go somewhere</a>
        </div> 
    `
    mealDeatails.appendChild(div);
}