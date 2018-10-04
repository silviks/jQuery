

// database
var offers=[
    {
        title:'Vacation to Neverlands',
        destination:'New York',
        period:{
            from:'2018-10-5',
            to:'2018-10-10'
        },
        photos:[
            'http://picsum.photos/400/300?=image=1'
        ],
        price:1000
    },
    {
        title:'One family Hollyday',
        destination:'London',
        period:{
            from:'2019-01-01',
            to:'2019-01-01'
        },
        photos:[
            'http://picsum.photos/400/300?image=2'
        ],
        price:2000
    },
    {
        title:'Go alone',
        destination:'Chisinau',
        period:{
            from:'2020-01-01',
            to:'2021-01-01'
        },
        photos:[
            'http://picsum.photos/400/300?image=3'
        ],
        price:100000
    },
];

/////// logic///////


function showTeasers(name){
    var $offers_div=$('#offers');
    // elimina copii carcasul ramine
    $offers_div.empty();
    $(offers).each(function(i,offer){

        if(  name===undefined ||
             name.lenght==0   ||
              offer.destination.toLowerCase().startsWith(name.toLowerCase()) ){ 
        $offers_div.append(
            $('<div>').append( 
                $('<h3>').html(
                    $('<a>')
                            .html(offer.title + ' <small>' + offer.period.from + ' - ' + offer.period.to + '</small>')
                            .attr('href','#')
                            .on('click',showFull)
                            .data('i',i)
                )
              )
            );
        }
        
    });
}

function showFull(){
    var i=$(this).data('i');
    var offer=offers[i];
    
    alert(offer.title);
}

$('#filtres input').on('keyup',function(){
    // selecteaza elementul curent,activ
    var name=$(this).val();
   showTeasers(name);
})

showTeasers();