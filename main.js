"use strict";
var members = [
	{
		id: 1,
		fullname: 'Ronaldo',
		title: 'Prince',
		photo: "img/7.jpg",
	  	cover: "https://image.ibb.co/ctMTiF/1.jpg",
	  	description: "description1",
	  	social: {
		    facebook: "https://www.facebook.com/adonis.s.zhang",
		    twitter: "https://twitter.com/Brother_Yang",
		    instagram: "https://www.instagram.com/xinyzhang9/"
		  }
	},
	{
	  id: 2,
	  fullname: "Phoebe Salinger",
	  title: "Developer",
	  photo: "https://randomuser.me/api/portraits/women/63.jpg",
	  cover: "https://image.ibb.co/mfRTiF/4.jpg",
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
	  fullname: "Alper Kamu",
	  title: "Software Engineer",
	  photo: "https://randomuser.me/api/portraits/men/62.jpg",
	  cover: "https://image.ibb.co/jVDVxa/3.jpg",
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
	  fullname: "Yuri Konev",
	  title: "Game Developer",
	  photo: "https://randomuser.me/api/portraits/men/52.jpg",
	  cover: "https://image.ibb.co/b8vcca/2.jpg",
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
	  fullname: "Cameron Howe",
	  title: "QA Engineer",
	  photo: "https://randomuser.me/api/portraits/women/59.jpg",
	  cover: "https://image.ibb.co/jXXOHa/5.jpg",
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
	  fullname: "Yuri Konev",
	  title: "Game Developer",
	  photo: "https://randomuser.me/api/portraits/men/52.jpg",
	  cover: "https://image.ibb.co/b8vcca/2.jpg",
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
	  fullname: "Cameron Howe",
	  title: "QA Engineer",
	  photo: "https://randomuser.me/api/portraits/women/59.jpg",
	  cover: "https://image.ibb.co/jXXOHa/5.jpg",
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