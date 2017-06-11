"use strict";
var members = [
	{
		id: 1,
		fullname: 'Cristiano Ronaldo',
		title: 'FORWARD',
		photo: "img/cr7.png",
	  	cover: "img/cover1.jpg",
	  	description: "Cristiano Ronaldo is a player who is destined to make history. Thanks to his immense natural talent, the Portuguese forward is a commanding leader for Real Madrid and his national team. As a versatile attacker, Ronaldo is capable of playing on either wing as well as through the centre of the pitch, while ostensibly right-footed, is very strong with both feet.",
	  	social: {
		    facebook: "http://www.facebook.com/Cristiano",
		    twitter: "https://twitter.com/Cristiano",
		    instagram: "https://www.instagram.com/cristiano/"
		  }
	},
	{
	  id: 2,
	  fullname: "Lionel Messi",
	  title: "FORWARD",
	  photo: "img/messi.jpg",
	  cover: "img/cover2.jpg",
	  description: "Messi is an excellent, sensational, unique player. He is astoundingly creative, has amazing individual skill and is able to constantly put his rivals at unease. A natural left footer, he is stunningly versatile, and is known for his finishing, positioning, quick reactions, and ability to make attacking runs to beat the defensive line. ",	  
	  social: {
	    facebook: "http://www.facebook.com/LeoMessi",
	    twitter: null,
	    instagram: "http://instagram.com/leomessi",
	  }
	}, 
	{
	  id: 3,
	  fullname: "Neymar Jr",
	  title: "FORWARD",
	  photo: "img/neymar.jpg",
	  cover: "img/cover3.jpg",
	  description: "Fast, tricky, clever and skilful – Neymar is particular dangerous one on one, but he can shine in any attacking position, capable of showing his quality on the counter or finding spaces in a packed defence with his stunning turn of pace. Neymar is a lethal weapon against any defence.",
	  social: {
	    facebook: "http://www.facebook.com/neymarjr",
	    twitter: "http://twitter.com/neymarjr",
	    instagram: "http://instagram.com/neymarjr",
	  }
	}, 
	{
	  id: 4,
	  fullname: "Antoine Griezmann",
	  title: "FORWARD",
	  photo: "img/gezi.jpeg",
	  cover: "img/cover4.jpg",
	  description: "A quick, modern, and versatile left-footed forward, with an eye for goal, Griezmann has been described as a \'team player\', and is capable of occupying several offensive positions in or behind the main attacking line, due to his technical skills, ability to drop deep and link-up play between the forwards and midfielders, or score many goals: he has been deployed as a main striker, in a central role as an attacking midfielder.",
	  social: {
	    facebook: "https://www.facebook.com/antoine.griezmann/",
	    twitter: "https://twitter.com/antogriezmann",
	    instagram: "https://www.instagram.com/antogriezmann/",
	  }
	}, 
	{
	  id: 5,
	  fullname: "Luka Modrić",
	  title: "MIDFIELDER",
	  photo: "img/modric.jpg",
	  cover: "img/cover5.jpg",
	  description: "The Croatian has always had outstanding vision which allows him to play in several different positions. He started as an attacking midfielder who could play the final ball to forwards but in recent years he has played further back. He now helps out more with defensive tasks and plays the ball out from the back to begin the attack. He’s a versatile player who provides plenty of options for the team.",
	  social: {
	    facebook: "http://www.facebook.com/ModricLuka10",
	    twitter: "http://twitter.com/lm19official",
	    instagram: "http://www.instagram.com/lukam10/",
	  }
	},
	{
	  id: 6,
	  fullname: "Gianluigi Buffon",
	  title: "GOALKEEPER",
	  photo: "img/buffon.jpg",
	  cover: "img/cover6.jpg",
	  description: "Excellent positional sense, courage, power and class. Many qualities are required by a goalkeeper to excel in his role and Gianluigi Buffon has them all in abundance, leading him to be considered one of the best in the world. Since his emergence as a precocious talent in his youth, Buffon has been renowned for his concentration and calm composure under pressure, his work-rate, and longevity.",
	  social: {
	    facebook: "http://www.facebook.com/GianluigiBuffon?fref=ts",
	    twitter: "http://twitter.com/gianluigibuffon",
	    instagram: "http://www.instagram.com/gianluigibuffon/",
	  }
	}, 
	{
	  id: 7,
	  fullname: "Sergio Ramos",
	  title: "DEFENDER",
	  photo: "img/ramos.jpg",
	  cover: "img/cover7.jpg",
	  description: "Since he arrived at Madrid, Ramos has been one of the key players in defence and has played both as a central defender and as a right-back. He has always led by example in terms of hard work, commitment and ambition and has been chosen as the captain of the team. His defensive abilities are complemented by his speed, his powerful shooting and his goalscoring instincts.",
	  social: {
	    facebook: "http://www.facebook.com/SergioRamosOficial/",
	    twitter: "http://twitter.com/SergioRamos",
	    instagram: "http://www.instagram.com/sr4oficial/",
	  }
	}


]


Vue.component('thumb',{
	name: 'thumb',
	template: '<div class=\'thumb\'>\n <div class=\'thumb_photo\'>\n <img :src=\'photo\' alt=\'\' /></div>\n <div class=\'thumb_content\'>\n <h2 class=\'thumb_fullname\'>{{fullname}}</h2>\n <p class=\'thumb_title\'>{{title}}</p>\n </div>\n </div>',
	props: ['fullname','title','photo','test']

});

var app = new Vue({
	el: '#app',
	data: function data(){
		return {
			members: members,
			coverPhoto: null,
			isShowDetail: false,
			others: null,
			selected: null,
			selectedIndex: 0,
			style: null,
			details:{
				description: null,
				social: {
					facebook: null,
					twitter: null,
					instagram: null
				}
			}
		};
	},

	methods:{
		thumbID: function thumbID(index){
			return '#member-'+index;
		},
		changeCover: function changeCover(index){
			this.coverPhoto = this.members[index].cover;
		},
		selectMember: function selectMember(index){
			var _this = this;
			this.selected = document.querySelector(this.thumbID(index));
			this.selectedIndex = index-1;

			this.style = 'position:absolute;left:'+this.selected.offsetLeft + 'px;top:'+this.selected.offsetTop + 'px;';
			this.others = document.querySelectorAll('.thumb:not(' + this.thumbID(index) + ')');
			this.others.forEach(function(ele,i){
				setTimeout(function(){
					ele.classList.add('thumb-disable');
					if(_this.others.length-1 == i){
						_this.showDetails();
					}
				},100*i+50)
			});
		},
		backToMembers: function backToMembers(){
			this.isShowDetail = false;
			this.selected.setAttribute('style','');
			this.others.forEach(function(ele,i){
				setTimeout(function(){
					ele.classList.remove('thumb-disable');
				},100*i+50)
			});
		},
		showDetails: function showDetails(){
			var _this = this;
			setTimeout(function(){
				_this.selected.setAttribute('style',_this.style);
			},200);
			setTimeout(function(){
				_this.isShowDetail = true;
				_this.selected.style.top = '90px';
			},200);
		}
	},
	
	created: function created(){
		this.coverPhoto = this.members[0].cover;
	}
});