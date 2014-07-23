import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoAppENV.locationType
});

Router.map(function() {
	this.resource('todos', { path: '/' });
});

export default Router;
