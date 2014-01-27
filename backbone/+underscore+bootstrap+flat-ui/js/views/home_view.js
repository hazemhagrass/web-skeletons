App.views.HomeView = Backbone.View.extend({

	initialize:function () {
		this.template = _.template(App.utils.TemplateUtils.get('home'));
	},

	render:function (eventName) {
		$(this.el).html(this.template());
		return this;
	},

	events: {
		"click .otherPage": "otherPage"
	},

	otherPage: function(event){
		Backbone.history.navigate("#otherPage" , {trigger:true})
	}
});