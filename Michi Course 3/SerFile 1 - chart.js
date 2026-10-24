let my_chart = null;

const ctx = document.querySelector("#mychart");
const main_block  = document.querySelector("#display")
const newEle = document.createElement('p');

const inputBox = document.querySelector("input");
document.querySelector("button").addEventListener("click", async () => {
  
  if(inputBox.value !== ""){
    main_block.innerHTML = '';
    main_block.append(ctx)

    const forecastData =   await getLocationData(inputBox.value);
  inputBox.select();
  inputBox.focus();
  inputBox.value = "";
  console.log(forecastData);


  
  if(my_chart !== null){
    my_chart.destroy();
  }
  

 my_chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: _.map(forecastData, "name"),
      datasets: [
        {
          label: "Temperature ℉",
          data: _.map(forecastData, "temperature"),
          borderColor: "red"
        },
      ],
    }
    
  });
  }else if (inputBox.value == ""){
    
    main_block.innerHTML = ""
    newEle.textContent = "Input Value, \n City name to get the weather data....";
    newEle.style.fontWeight = "bold";
    newEle.style.marginLeft = "40px";
    main_block.append(newEle);
    
  }
  
});
