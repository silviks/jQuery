
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

    m.render();
});