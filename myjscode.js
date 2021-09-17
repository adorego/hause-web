const scrollOffset = 100;

const elementInView = (el, offset = 0) => {
  //console.log('Parametro:', el);
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = (elem) => {
  //console.log('Parametro:', elem);
  elem.classList.add('scrolled');
};
 
const hideScrollElement = (elem) => {
  elem.classList.remove('scrolled');
};
 
const handleScrollAnimation = (nodeListElems) => {
  //console.log('Parametro handleScrollAnimation:', nodeListElems);
  for(let i=0; i < nodeListElems.length; i++){
    const currentElem = nodeListElems[i];
    if (elementInView(currentElem, scrollOffset)) {
      displayScrollElement(currentElem);
    } else {
      hideScrollElement(currentElem);
    }
  }
  
  
};
 
window.addEventListener('scroll', () => {
  const scrollElements = document.querySelectorAll(".js-scroll");
  handleScrollAnimation(scrollElements);
});

