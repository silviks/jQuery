
$.getScript('components/map/Map.js',function(){
    var m=new Map(10,10);
    
    $('head').append(
        $('<link>',{rel:'stylesheet',href:'components/map/map.css'})
    );

    $.getScript('components/devil/MikeDuze.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/devil/mike-duze.css'})
        );
        var d=new MikeDuze(1,1);
        d.render();
    });

    $.getScript('components/pacman/pacman.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/pacman/pacman.css'})
        );
        var d=new Pacman(1,1);
        d.render();
    });

    $.getScript('components/coin/coin.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/coin/coin.css'})
        );
        var d=new coin(1,1);
        d.render();
    });

    $.getScript('components/heart/heart.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/heart/heart.css'})
        );
        var d=new heart(1,1);
        d.render();
    });

    $.getScript('components/bomb/bomb.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/bomb/bomb.css'})
        );
        var d=new bomb(1,1);
        d.render();
    });

    $.getScript('components/brick/brick.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/brick/brick.css'})
        );
        var d=new brick(1,1);
        d.render();
    });

    $.getScript('components/sushi/sushi.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/sushi/sushi.css'})
        );
        var d=new sushi(1,1);
        d.render();
    });

    $.getScript('components/bheart/bheart.js',function(){
        $('head').append(
            $('<link>',{rel:'stylesheet',href:'components/bheart/bheart.css'})
        );
        var d=new bheart(1,1);
        d.render();
    });



    m.render();
});