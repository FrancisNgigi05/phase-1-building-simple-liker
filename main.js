document.addEventListener('DOMContentLoaded', function(){
  // Defining text characters for the empty and full hearts for you to use later.
  const EMPTY_HEART = '♡';
  const FULL_HEART = '♥';
  
  // Your JavaScript code goes here!
  
  // Get the heart that will be clicked by the user
  const clickedHeart = document.querySelector('.like-glyph')
  
  // Get the modal to be hidden by the .hidden class
  let hideErrorInModal = document.getElementById('modal');
  
  // hide the modal by adding the .hidden className
  hideErrorInModal.classList.add('hidden');
  
  // The click counter variable
  let clickCounter = 0;

  // The functionality to be taken when the heart is clicked
  clickedHeart.addEventListener('click', function() {
    // checking if the element was clickable and yes it is clickable
    console.log('clicked');

    // every time a click is done there it will be counted
    clickCounter++;
    // checking if the when the button is clicked the clickCounter increments and yes it does
    console.log(clickCounter);

    // time to get in the server to get the response in the server when the heart is clicked
    // Invoking the server
    mimicServerCall()
      
      // Tasks to occur when the server gives a sussess response
      .then(function() {
        // the thing to happen when heart is clicked
        // keeping track of the number of times an element is clicked to know what action to take
        if(clickCounter % 2 === 1) {
          clickedHeart.textContent = FULL_HEART;
          clickedHeart.classList.add('activated-heart');
          alert('You Liked!')
        }
        else {
          clickedHeart.textContent = EMPTY_HEART;
          clickedHeart.classList.remove('activated-heart');
          alert('You unliked!');
        }
      })
      // Tasks to occur when the server give a failure response
      .catch(function(error) {
        alert("Error: ", error);

        hideErrorInModal.classList.remove('hidden');

        setTimeout(function() {
          hideErrorInModal.classList.add('hidden');
        }, 3000);
      })
  });
  
  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------
  
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

})

