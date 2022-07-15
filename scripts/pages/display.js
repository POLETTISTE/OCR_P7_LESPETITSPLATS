// ---------------------------DISPLAY.JS------------------------

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES RECETTES
async function displayCards(filteredData) {
  const recipesSection = document.getElementById('recipes');
  recipesSection.textContent="";
  
  filteredData.forEach((element) => {
    const recipeModel = Recipe(element);
    const recipeCardDOM = recipeModel.getRecipeCard();
    recipesSection.appendChild(recipeCardDOM);
  });
}


// FERMETURE TAG
// function eventClickCloseTag() {
//   console.log('clicked');
// }

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER + creation tag
//INGREDIENTS

function eventClickBtnPrimary() {
  let clickedIngredient = this.textContent;
  tagsIngredients.push(clickedIngredient);

  let item = document.createElement('card');
  item.classList.add('tag-ingredient', 'tag', 'rounded');
  item.textContent = this.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  closeTag.addEventListener('click', () => {
    
    item.textContent='';
    item.remove();
  });

  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  dropdownPrimary.click();
}

function displayIngredients() {
  console.log(dataIngredientsFiltered);
  dataIngredientsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ingredientLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnPrimary);
    ingredientUl.appendChild(item);
  })
}

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER
//APPAREIL

function eventClickBtnSuccess() {
  let clickedAppliance = this.textContent;
  tagsAppliances.push(clickedAppliance);
  
  let item = document.createElement('card');
  item.classList.add('tag-appliance', 'tag', 'rounded');
  item.textContent = this.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  closeTag.addEventListener('click', () => {
    
    item.textContent='';
    item.remove();
  });


  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  dropdownSuccess.click();
}

function displayAppliances() {
  console.log(dataAppliancesFiltered);

  dataAppliancesFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('applianceLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnSuccess);
    applianceUl.appendChild(item);
  })
}

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER
//USTENSIL

function eventClickBtnDanger() {
  let clickedUstensil = this.textContent;
  tagsUstensils.push(clickedUstensil);
  
  let item = document.createElement('card');
  item.classList.add('tag-ustensil', 'tag', 'rounded');
  item.textContent = this.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  closeTag.addEventListener('click', () => {
    
    item.textContent='';
    item.remove();
  });

  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  dropdownDanger.click();
}

function displayUstensils() {

  dataUstensilsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ustensilLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnDanger);
    ustensilUl.appendChild(item);
  })
}



//INITIALISATION LANCEMENT DES 3 FONCTIONS 

async function displayIngredientsAppliancesUstensils() {
  displayIngredients();
  displayAppliances();
  displayUstensils();
}

