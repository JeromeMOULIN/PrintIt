const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
//Ajout d'autant de bullet points qu'il y a d'image
let dotId = 0;
slides.forEach(item =>{
	let newDot = document.createElement('p');
	let bannerDots = document.getElementById('dots');
	newDot.classList.add('dot');
	newDot.setAttribute("id", dotId);
	if (newDot.id == 0) {
		newDot.classList.add('dot_selected')
	};
	bannerDots.appendChild(newDot);
	dotId++;
})
//Fix l'image de la banniere a l'index 0
let index = 0;
let bannerSlide = slides[index];

//Fonction qui permet la rotation du carousel et le changement du text
function changeContent (){
	if (index < 0){
		index = 3;
	}else if( index > slides.length-1){
		index = 0;
	}
	let bannerSlide = slides[index];
	let bannerImg = document.getElementById("bannerImg");
	srcImg = "./assets/images/slideshow/"+bannerSlide.image;
	bannerImg.setAttribute("src", srcImg)
	let bannerTxt = document.getElementById("bannerText");
	bannerTxt.innerHTML = bannerSlide.tagLine;

	//Sers a trouvé l'id de chaque dot et le comparer a l'index pour 
	//y ajouter la class de selection en fonction de l'imgage
	idDot = document.getElementsByClassName('dot');
	for(let i=0; i< idDot.length; i++){
		if(idDot[i].id == index){
			idDot[i].classList.add('dot_selected')
			
		}else{
			idDot[i].classList.remove('dot_selected')
		}
	}
}
//On recupere les flèches left & right et on leurs applique la fonction
let leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", () => {
	index = index --- 1; 
	changeContent(bannerSlide);
})

let rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", () => {
	index = index +++ 1;
	changeContent();
})



