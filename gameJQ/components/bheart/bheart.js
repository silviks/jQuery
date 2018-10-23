class bheart{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    render(){
        var div=$('<div>',{class:"bheart"});
        $('#map').append(div);
    }
}