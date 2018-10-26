let mix = require('laravel-mix')

mix.setPublicPath('dist')
   .js('resources/js/treeview.js', 'js')
   .sass('resources/sass/treeview.scss', 'css')
