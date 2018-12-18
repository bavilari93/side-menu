$(()=>{
const url = window.location.href;
const  activePage = url;
const alinks = $("#nav > a");
console.log(alinks);

alinks.each((e)=>{
	console.log($(e));
	const linkPage = $(this).href;
	console.log(linkPage);
	if(activePage === linkPage){
		$(this).style.color= "pink";
	}
})

})