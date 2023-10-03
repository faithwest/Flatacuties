document.addEventListener("DOMContentLoaded", () => {
    const displayBar = document.getElementById("character-bar");
    
    const wilds = [
              {
                id: 1,
                name: "Mr. Cute",
                image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
                votes: 0
              },
              {
                id: 2,
                name: "Mx. Monkey",
                image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
                votes: 0
              },
              {
                id: 3,
                name: "Ms. Zebra",
                image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
                votes: 0
              },
              {
                id: 4,
                name: "Dr. Lion",
                image: "http://bestanimations.com/wilds/Mammals/Cats/Lions/animated-lion-gif-11.gif",
                votes: 0
              },
              {
                id: 5,
                name: "Mme. Panda",
                image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
                votes: 0
              }
            ];
          
          

//iterate through wilds list
      function displayWildList(){
    wilds.forEach(wild => {
    const wildName =document.createElement("p");
    wildName.textContent = wild.name;
    wildName.addEventListener ("click", () => {
    console.log("Btn click")
    displayWildDetails(wild)
    })
    displayBar.appendChild(wildName);
    });

}
// display wild list
displayWildList();
});

//display character details
function displayWildDetails (wild) {
    const wildNameElement= document.getElementById("name");
    wildNameElement.textContent = wild.name;
    const wildImageElement = document.getElementById("image");
    wildImageElement.src = wild.image;
    const wildVotesElement = document.getElementById("vote-count");
    wildVotesElement.textContent = wild.votes;
   
    const votesFm = document.getElementById("votes-form");//function to accept submission
    votesFm.addEventListener("submit", (e) => {
      e.preventDefault();
      const votesFmInput = document.getElementById("votes");
      const votes = parseInt(votesFmInput.value) || 0;
      wild.votes += votes;
      wildVotesElement.textContent = wild.votes;
      votesFmInput.value = "";

    });
    displayWildDetails();  
}



