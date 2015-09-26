/////////////////////////////////
// Routing Configuration
/////////////////////////////////
Router.configure({
    layoutTemplate: 'Layout'
});

Router.route('/', function() {
    this.render('home');
}, {
    name: 'home'
});

Router.route('/about', function() {
    this.render('about');
}, {
    name: 'about'
});

Router.route('/projects', function() {
    this.render('projects');
}, {
    name: 'projects'
});

Router.route('/contact', function() {
    this.render('contact');
}, {
    name: 'contact'
});


Router.onAfterAction(function() {
    Session.set('page', this.route.getName());
    $('body').removeClass();
    $('body').addClass(this.route.getName());
    document.title = 'Scott Tolinski - ' + this.route.getName().capitalize();
});
