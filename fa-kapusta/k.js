// detemninam cind apare elem modal

$('#customer-cart').on('shown.bs.modal',function(){
    setTimeout(function(){
        $('.modal-body')
            .append($('<p>')
            .text('Publicitate'));
    },2000);
});

// cind apasa pe a din dropdawn ->alert

$('.dropdown-menu a').on('click',function() {
    var q=$(this).text();
    $('#customer-cart .dropdown button .q').text(q);

    var price=$('.price').text();
    $('.total').html(price*q);
});

// this->parent()/closest->find(selector)
