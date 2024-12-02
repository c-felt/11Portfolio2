//Put current year in footer
const theYear = new Date();
console.log(theYear.getFullYear());
document.querySelector('#year').textContent = theYear.getFullYear();



// get me a list of all the items to watch
const myListOfItems = document.querySelectorAll('section')

// a comma deliniated list of name/value pairs controlling how the observer works
let observerOptions = {
    //null is the default and references the viewport
    root: null,
    //alters the viewport. negative values decrease the size.
    rootMargin: '0px 0px 0px 0px',
    //0 is barely showing, 1 is fully showing
    threshold: .25
  }

// AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            hiliteNav(singleItem.target)
        }
    })
}, observerOptions)

// function to hilight the current navigation items
function hiliteNav(x) {
	document.querySelector('.active').classList.remove('active');
	let theid = x.getAttribute('id');
	let newActiveLink = document.querySelector(`[href="#${theid}"]`)
	newActiveLink.parentElement.classList.add('active');
}

//call the function for each element in the list
myListOfItems.forEach(item => {
    myObserver.observe(item)
});

document.addEventListener("DOMContentLoaded", function() {
    const messageTextarea = document.getElementById("message");
    
    messageTextarea.addEventListener("focus", function() {
        // Clear the default text when the textarea is focused
        if (this.value === "Send me a Message!") {
            this.value = ""; // Clear the text
        }
    });

    messageTextarea.addEventListener("blur", function() {
        // Restore the default text if the textarea is empty when it loses focus
        if (this.value === "") {
            this.value = "Send me a Message!"; // Restore the default text
        }
    });
});