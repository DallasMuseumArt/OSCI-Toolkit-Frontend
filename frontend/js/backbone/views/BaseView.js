// OsciTk Namespace Initialization //
if (typeof OsciTk === 'undefined'){OsciTk = {};}
if (typeof OsciTk.views === 'undefined'){OsciTk.views = {};}
// OsciTk Namespace Initializaiotn //

jQuery(function() {
	OsciTk.views.BaseView = Backbone.View.extend({
		constructor: function(options) {
			this.dispatcher = (options && options.dispatcher) ? options.dispatcher : null;
			if (this.dispatcher === null) this.dispatcher = this;
			Backbone.View.prototype.constructor.call(this, options);
		},
		addView: function(view, target) {
			view.parent = this;
			if (typeof target === "undefined") {
				this.$el.append(view.el);
			}
			else {
				this.$el.find(target).append(view.el);
			}
		},
		replaceView: function(view, target) {
			view.parent = this;
			if (typeof target === "undefined") {
				this.$el.html(view.el);
			}
			else {
				this.$el.find(target).html(view.el);
			}
		},
		changeModel: function(model) {
			this.model = model;
		}
	});
});