App.views.OtherPage = Backbone.View.extend({

	initialize:function () {
		this.template = _.template(App.utils.TemplateUtils.get('page'));
	},

	render:function (eventName) {
		$(this.el).html(this.template());
		return this;
	},
	events: {
		"click .home": "home"
	},

	home: function(event){
		Backbone.history.navigate("#home" , {trigger:true})
	}
});