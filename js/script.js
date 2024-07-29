let selectItems = document.querySelectorAll(".select");
let pizzaItems = document.querySelectorAll(".maincontent__images");



for (let i = 0; i < selectItems.length; i++) {
  let element = selectItems[i];
  if (element.textContent === "Chicken Pizza") {
    console.log(element);
    element.classList.add("active");
  }
}
for (let i = 0; i < pizzaItems.length; i++) {
  let pizza = pizzaItems[i];
  console.log(pizza);
  if (pizza.classList.contains("chicken")) {
    pizza.style.display = `flex`;
  } else {
    pizza.style.display = `none`;
  }
}



for (let i=0;i<selectItems.length;i++){
    let element=(selectItems[i]);
    element.addEventListener("click",function(){
      for (let i=0;i<selectItems.length;i++){
        let element=(selectItems[i]);
        element.classList.remove('active')
        console.log(element)
        
         
      }
      element.classList.add("active");
      let filterName=selectItems[i].textContent
      console.log(element)
      console.log(filterName);
      if(filterName.toLowerCase()==='chicken pizza'){
        for (let i = 0; i < pizzaItems.length; i++) {
          let pizza = pizzaItems[i];
          console.log(pizza)
          if (pizza.classList.contains("chicken")) {
            pizza.style.display = `flex`;
          } else {
            pizza.style.display = `none`;
          }
        }
      }

      else if(filterName.toLowerCase()==='pepperoni'){
        for (let i = 0; i < pizzaItems.length; i++) {
          let pizza = pizzaItems[i];
          console.log(pizza)
          if (pizza.classList.contains("Pepperoni")) {
            pizza.style.display = `flex`;
          } else {
            pizza.style.display = `none`;
          }
        }
      }

      else if(filterName.toLowerCase()==='margherita'){
        for (let i = 0; i < pizzaItems.length; i++) {
          let pizza = pizzaItems[i];
          console.log(pizza)
          if (pizza.classList.contains("Margherita")) {
            pizza.style.display = `flex`;
          } else {
            pizza.style.display = `none`;
          }
        }
      }

      else if(filterName.toLowerCase()==='hawaiian'){
        for (let i = 0; i < pizzaItems.length; i++) {
          let pizza = pizzaItems[i];
          console.log(pizza)
          if (pizza.classList.contains("Hawaiian")) {
            pizza.style.display = `flex`;
          } else {
            pizza.style.display = `none`;
          }
        }
      }

      else if(filterName.toLowerCase()==='meat lover’s pizza'){
        for (let i = 0; i < pizzaItems.length; i++) {
          let pizza = pizzaItems[i];
          console.log(pizza)
          if (pizza.classList.contains("Meat")) {
            pizza.style.display = `flex`;
          } else {
            pizza.style.display = `none`;
          }
        }
      }
    }
    

    )
}
