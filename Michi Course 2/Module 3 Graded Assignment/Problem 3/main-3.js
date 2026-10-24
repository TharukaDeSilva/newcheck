// ===== YOUR TASK =====
// Define loadDogImage(): fetch a random dog image and show it, updating the
// status message. Full details are in the problem description.
//
// TODO: write loadDogImage below -- show a loading message, fetch
//       https://dog.ceo/api/breeds/image/random, read the JSON, set
//       #dog-image's src to the returned URL, and update #status-message.

async function loadDogImage() {
    const imgEle = document.querySelector('#dog-image');
    const msg =  document.querySelector('#status-message');

    imgEle.src = '';
    msg.textContent = "Loading image...";
    let response  = await fetch('https://dog.ceo/api/breeds/image/random');
    let dogData = await response.json();
    setTimeout(()=>{
        
    imgEle.src = dogData.message;
    msg.textContent = "Image loaded!"
    },1000)


}


