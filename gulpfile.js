//  Node  Common JS Modules
// Browser ES Modules
const {src, dest} = require('gulp')

const static = function(cb){
   
   return( src('src/static/data/**')
    .pipe(dest('dist/data')))

   

}

exports.default = static