// $('body').prepend($
//     ('<div>').addClass('cool')
// )

function addButton(parent_selector){
    $(parent_selector).append(
            $('<button>')
                .text('save')
                .addClass('btn green')
                .click(function(){
                    alert($('input').val());
                })

    );
}

function addInput(parent_selector){
    $(parent_selector).append(
                $('<input>')
                .attr('placeholder','hghj')
                    
    );
}

addInput('body');
addButton('body');