class Pacman{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    render(){
        var div=$('<div>',{class:"Pacman"});
        $('#map').append(div);
    }
}