"use strict";
var members = [
	{
		id: 1,
		fullname: 'Cristiano Ronaldo',
		title: 'FORWARD',
		photo: "http://barca.am/upload/footballers/020c7e31f9c2ebe4f86cb5d7b7948f59.png",
	  	cover: "https://s-media-cache-ak0.pinimg.com/564x/33/a9/f1/33a9f1dc9bbed779f610e6f0da830a05.jpg",
	  	description: "description1",
	  	social: {
		    facebook: "https://www.facebook.com/adonis.s.zhang",
		    twitter: "https://twitter.com/Brother_Yang",
		    instagram: "https://www.instagram.com/xinyzhang9/"
		  }
	},
	{
	  id: 2,
	  fullname: "Lionel Messi",
	  title: "FORWARD",
	  photo: "img/messi.jpg",
	  cover: "https://s-media-cache-ak0.pinimg.com/564x/41/9d/b3/419db3eadff1a2ff32e5c82bccebf4bb.jpg",
	  description: "description2",	  
	  social: {
	    facebook: "https://www.facebook.com/knyttneve",
	    twitter: "https://www.twitter.com/knyttneve",
	    instagram: "https://www.instagram.com/midlake",
	    github: "https://github.com/knyttneve"
	  }
	}, 
	{
	  id: 3,
	  fullname: "Neymar Jr",
	  title: "FORWARD",
	  photo: "img/neymar.jpg",
	  cover: "https://s-media-cache-ak0.pinimg.com/564x/4c/55/eb/4c55eb34a9769bc6cfd6904919dc7f94.jpg",
	  description: "description3",
	  social: {
	    facebook: "https://www.facebook.com/knyttneve",
	    twitter: "https://www.twitter.com/knyttneve",
	    instagram: "https://www.instagram.com/midlake",
	    github: "https://github.com/knyttneve"
	  }
	}, 
	{
	  id: 4,
	  fullname: "Antoine Griezmann",
	  title: "FORWARD",
	  photo: "img/gezi.jpeg",
	  cover: "https://s-media-cache-ak0.pinimg.com/564x/6f/3e/cc/6f3eccf2aef689b1bd2ab2b8d3255b56.jpg",
	  description: "description4",
	  social: {
	    facebook: "https://www.facebook.com/knyttneve",
	    twitter: "https://www.twitter.com/knyttneve",
	    instagram: "https://www.instagram.com/midlake",
	    github: "https://github.com/knyttneve"
	  }
	}, 
	{
	  id: 5,
	  fullname: "Luka Modrić",
	  title: "MIDFIELDER",
	  photo: "img/modric.jpg",
	  cover: "https://s-media-cache-ak0.pinimg.com/564x/75/3a/a0/753aa04c0a6cd5dc4bd2f81ffb26f436.jpg",
	  description: "description5",
	  social: {
	    facebook: "https://www.facebook.com/knyttneve",
	    twitter: "https://www.twitter.com/knyttneve",
	    instagram: "https://www.instagram.com/midlake",
	    github: "https://github.com/knyttneve"
	  }
	},
	{
	  id: 6,
	  fullname: "Gianluigi Buffon",
	  title: "GOALKEEPER",
	  photo: "img/buffon.jpg",
	  cover: "https://s-media-cache-ak0.pinimg.com/564x/a2/e1/a6/a2e1a612933ac92d91d07d88572ce4c4.jpg",
	  description: "description6",
	  social: {
	    facebook: "https://www.facebook.com/knyttneve",
	    twitter: "https://www.twitter.com/knyttneve",
	    instagram: "https://www.instagram.com/midlake",
	    github: "https://github.com/knyttneve"
	  }
	}, 
	{
	  id: 7,
	  fullname: "Sergio Ramos",
	  title: "DEFENDER",
	  photo: "img/ramos.jpg",
	  cover: "https://s-media-cache-ak0.pinimg.com/564x/0e/82/3b/0e823bd700767b11ab7072be9e2bfb27.jpg",
	  description: "description7",
	  social: {
	    facebook: "https://www.facebook.com/knyttneve",
	    twitter: "https://www.twitter.com/knyttneve",
	    instagram: "https://www.instagram.com/midlake",
	    github: "https://github.com/knyttneve"
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

			this.style = 'position:absolute;left:'+this.selected.offsetLeft + 'px;top:'+this.selected.offsetTop + 'px;';
			this.others = document.querySelectorAll('.thumb:not(' + this.thumbID(index) + ')');
			this.others.forEach(function(ele,i){
				setTimeout(function(){
					ele.classList.add('thumb-disable');
					if(_this.others.length-1 == i){
						_this.showDetails();
					}
				},100*i+1)
			});
		},
		backToMembers: function backToMembers(){
			this.isShowDetail = false;
			this.selected.setAttribute('style','');
			this.others.forEach(function(ele,i){
				setTimeout(function(){
					ele.classList.remove('thumb-disable');
				},100*i+1)
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