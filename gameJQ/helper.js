
function loadStyle(url){
        $('head').append(
            $('<link>',{
                rel:'stylesheet',
                href:url
        })
    );

}
// coordonatele aleatorii
function randCoord(){

        return parseInt(Math.random()*9.9);
    }
