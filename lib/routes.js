FlowRouter.route('/', {
	name: 'home',
	action: function(params, queryparams){
		BlazeLayout.render('mainTemplate',{top: 'topbar', main: 'home'});
	}
})

FlowRouter.route('/home', {
	name: 'home',
	action: function(params, queryparams){
		BlazeLayout.render('mainTemplate',{top: 'topbar', main: 'home'});
	}
})