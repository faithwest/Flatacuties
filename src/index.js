document.addEventListener("DOMContentLoaded", () => {
    const displayBar = document.getElementById("character-bar");
   const selectedAnim=null
    const anims = [
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
        image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        votes: 0
      },
      {
        id: 5,
        name: "Mme. Panda",
        image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        votes: 0
      }
    ];
  
    function displayAnimList() {
      anims.forEach((anim) => {
        const animName = document.createElement("p");
        animName.textContent = anim.name; 
        animName.addEventListener("click", () => {
          displayAnimDetails(anim);
        });
  
        displayBar.appendChild(animName); // Use appendChild
      });
    }
  
    // Call the function to display thelist
  displayAnimList();
  });
  function displayAnimDetails(anim){
    if(!anim){
        return
    }
    console.log(anim)
   selectedAnim=anim
    const animNameElement = document.getElementById("name");
    const animImageElement = document.getElementById("image");
    const animVotesElement = document.getElementById("vote-count");
    animNameElement.textContent = anim.name ;
   animImageElement.src = anim.image;
   animVotesElement.textContent = anim.votes ;
   
  
  
    const voteForm = document.getElementById("votes-form");
    voteForm.addEventListener("submit",(e) => {
       e.preventDefault();
      const voteForminput = document.getElementById("votes");
      console.log(voteForminput)
      if(voteForminput.value==0)return
        const votes = parseInt(voteForminput.value) || 0;
        console.log(voteForminput.value)
        console.log(anim,votes)
       animVotesElement.innerText = selectedAnim.votes+votes;
       selectedAnim.votes += votes;
       displayAnimDetails();
        voteForminput.value = "";
  
    } );
  
  
  }
  let resetbtn= document.getElementById("reset-btn");
  resetbtn.addEventListener("click",function(){
  resetVotes();
  } );
  function resetVotes() {
    if (!selectedAnim) {
      return; // No selected, nothing to reset
    }
  
    // Reset the votes for the selected to zero
    selectedAnim.votes = 0;
  
    // Update the vote count displayed in the UI to '0'
    const animVotesElement = document.getElementById("vote-count");
    animVotesElement.textContent = "0";
  }
  
  
  