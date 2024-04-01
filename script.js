const recipeSteps = [
    "Preheat the oven to 350°F (175°C).",
    "Grease and flour a 9x9 inch pan or line with parchment paper.",
    "In a medium bowl, cream together the sugar and butter.",
    "Beat in the eggs, one at a time, then stir in the vanilla.",
    "Combine flour and baking powder, add to the creamed mixture and mix well.",
    "Finally, fold in the chocolate chips.",
    "Spread the batter into the prepared pan.",
    "Bake for 25 to 30 minutes in the preheated oven.",
    "Cool bars for 5 minutes before cutting.",
    "Serve and enjoy your delicious chocolate chip bars!"
  ];
  
  function displayStep(step) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const stepElement = document.createElement('p');
        stepElement.textContent = `Step ${step + 1}: ${recipeSteps[step]}`;
        document.getElementById('recipe-steps').appendChild(stepElement);
        resolve();
      }, 1000);
    });
  }
  
  function cookRecipe(steps) {
    return steps.reduce((promise, step, index) => {
      return promise.then(() => displayStep(index));
    }, Promise.resolve());
  }
  
  cookRecipe(recipeSteps).then(() => {
    console.log("Recipe complete! Enjoy your dish!");
  });
  