// Define a function called getUMichEvents that fetches the U-M events,
// then displays each event's title as a list item inside #eventList.
//
// TODO: write getUMichEvents() here -- fetch the U-M events, then add each event's title as an <li> in #eventList.

const eventList = document.querySelector('#eventList');

function getUMichEvents(){
    return fetch('https://events.umich.edu/day/json?v=2')
    .then((response)=> response.json())
    .then((data)=>{
        const dataList  =  Object.values(data);
        eventList.innerHTML = "";
        for (const item of dataList){
            
            const eleNew = document.createElement('li');
            eleNew.textContent = item.title;
            eventList.append(eleNew);
        }
        const loadMessage  = document.querySelector('#loadingMessage');
        
        loadMessage.textContent = `Found ${dataList.length} events:`;
    }).catch((error)=>{
         

        
        console.error("Failed to fetch events")
        
    })

}