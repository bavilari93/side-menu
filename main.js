$(() => {
    const navLinks = document.getElementById("nav").querySelectorAll("a");
    const mainSection = document.querySelectorAll("main section"); 
    let lastId; 
    let cur=[];

    window.addEventListener('scroll', event =>{
    	let fromTop = window.scrollY; 
    	navLinks.forEach(link=>{
    		let section = document.querySelector(link.hash);	
    	if(
    		section.offsetTop <= fromTop && 
    		section.offsetTop + section.offsetHeight > fromTop
    		){

    		link.classList.add("current");
    	}else{
    		link.classList.remove('current');
    	}
    	})
    })


})