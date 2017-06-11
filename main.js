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
			this.coverPhoto = this.members[index].cover
		}
	}
})