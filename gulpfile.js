var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
  mix.sass('app.scss')
    .copy('resources/html/assets/css/ionicons.css', 'public/css/vendor/ionicons.css')
    .copy('resources/html/assets/js/ie10-viewport-bug-workaround.js', 'public/js/ie.js')
    .copy('vendor/bower_components/jquery/dist/jquery.min.js', 'public/js/vendor/jquery.js')
    .copy('vendor/bower_components/jquery/dist/jquery.min.map', 'public/js/vendor/jquery.min.map')
    .copy('vendor/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', 'public/js/vendor/bootstrap.js')
    .copy('vendor/bower_components/font-awesome/css/font-awesome.min.css', 'public/css/vendor/font-awesome.css')
    .copy('vendor/bower_components/font-awesome/fonts', 'public/css/fonts');
});
