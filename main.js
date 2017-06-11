"use strict";

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
			style:null,
			details:{
				description: null,
				social:{
					facebook: null,
					twitter: null,
					instagram: null,
				}
			}
		}
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
			this.others = document.querySelector('.thumb:not(' + this.thumbID(index) + ')');
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
				_this.selected.setAttribute('style',+_this.style);
			},200);
			setTimeout(function(){
				_this.isShowDetail = true;
				_this.selected.style.top = '90px';
			},200);
		}
	},
	created: function created(){
		this.coverPhoto = this.members[0].cover
	}
})