
$.getScript('components/map/Map.js',function(){
    loadStyle ('components/map/map.css');
        var m=new Map(10,10);
      
            

      
    
var d;
    $.getScript('components/devil/MikeDuze.js',function(){
        
        loadStyle ('components/devil/mike-duze.css');
            d=new MikeDuze(randCoord(),randCoord());
            // d.move();
            $.getScript('components/pacman/pacman.js',function(){
                loadStyle ('ccomponents/pacman/pacman.css');
                var p=new pacman(randCoord(),randCoord() );
                   
                d.hunt(p);
            });
    });

  

    // $.getScript('components/coin/coin.js',function(){
    //     loadStyle ('components/coin/coin.css');
    //     var c=new coin(1,1);
    //     c.render();
    // });

    // $.getScript('components/heart/heart.js',function(){
    //     loadStyle ('components/heart/heart.css');
    //     var h=new heart(1,1);
    //     h.render();
    // });

    // $.getScript('components/bomb/bomb.js',function(){
    //     loadStyle ('components/bomb/bomb.css');
    //     var b=new bomb(1,1);
    //     b.render();
    // });

    // $.getScript('components/brick/brick.js',function(){
    //     loadStyle ('components/brick/brick.css');
    //     var br=new brick(1,1);
    //     br.render();
    // });

    // $.getScript('components/sushi/sushi.js',function(){
    //     loadStyle ('components/sushi/sushi.css');
    //     var s=new sushi(1,1);
    //     s.render();
    // });

    // $.getScript('components/bheart/bheart.js',function(){
    //     loadStyle ('components/bheart/bheart.css');
    //     var bh=new bheart(1,1);
    //     bh.render();
    // });


});