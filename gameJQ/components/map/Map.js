class Map{
    constructor(w,h){
        this.w=w;
        this.h=h;
    }
    render(){
        var divs=[];
        for(var y=0; y<this.h; y++){
            for(var x=0; x<this.w;x++){
                // creeaza 1 patrat(secor)
                divs.push
                    ($('<div>')
                        .css('top',y*50+'px')
                        .css('left',x*50+'px')
                    );
            }
        }
        $('#map').append(divs);
    }
}