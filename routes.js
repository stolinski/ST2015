Router.configure({
    layoutTemplate: 'Layout'
});

Router.route('/', function() {
    this.render('home');
    this.render('Nav', {to: 'nav'});
}, {
    name: 'home'
});

Router.route('/about', function() {
    this.render('about');
    this.render('Nav', {to: 'nav'});
}, {
    name: 'about'
});

Router.route('/projects', function() {
    this.render('projects');
    this.render('Nav', {to: 'nav'});
}, {
    name: 'projects'
});

Router.route('/contact', function() {
    this.render('contact');
    this.render('Nav', {to: 'nav'});
}, {
    name: 'contact'
});


Router.onAfterAction(function() {
        Session.set('page', this.route.getName());
        $('body').removeClass();
        $('body').addClass(this.route.getName());
        document.title = 'Scott Tolinski - ' + this.route.getName().capitalize();
    }
);
