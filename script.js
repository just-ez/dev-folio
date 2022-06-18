var loader;

document.addEventListener("DOMContentLoaded", function() {
  loader = document.getElementById('loader');
  loadNow(1);
});

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    // document.getElementById('content').style.display = 'block';
}

  // create our new observer, we want the trigger point of elements to be when the element is 25% visible.
// you could create multiple observers with different thresholds if necessary
let observer = new IntersectionObserver( isElScrolledIntoView, {
  root: null,
  rootMargin: '0px',
  threshold: 0.25
});
// grab our elements, this will be a global class for animating elements
const elements = document.querySelectorAll('.item');
// loop over all elements and observe each of them
elements.forEach( element => {
observer.observe(element);
});
// create our "what to do with each observed element" function
function isElScrolledIntoView( entries ) {
// again loop over all entries (element)
entries.forEach( entry => {
  // check if the entry is intersecting at our set threshold
  if ( entry.isIntersecting ) {
    // set a class to toggle animation
    entry.target.classList.add('fade-in-element');
   
    // if we only want to play the animation once per page, let's also add a class for that
    entry.target.classList.add('scrolled-into-view-first-time');
  } else {
    // if we've stopped intersecting, let's remove the animation
    entry.target.classList.remove('fade-in-element');
    // entry.target.classList.add('scrolled-outof-view');
  }
});
}

