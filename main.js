$(() => {
    const navLinks = document.getElementById("nav").querySelectorAll("a");
    const mainSection = document.querySelectorAll("main section"); 

    window.addEventListener('scroll', event =>{
    	// top distance
    	let fromTop = window.scrollY; 
    	// iterate through nav links 
    	navLinks.forEach(link=>{
    		// section selection
    	let section = document.querySelector(link.hash);	
    	if(
    		// offsetTop the pixel from the top 
    		section.offsetTop <= fromTop && 
    		// returns the height of the element 
    		section.offsetTop + section.offsetHeight > fromTop
    		){
    		link.style.color ="pink";
    	}else{
    		link.style.color="white";
    	}
    	})
    })


})