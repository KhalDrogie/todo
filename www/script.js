/**
 * Created by Mowie on 24.10.16.
 */
$(document).ready(function(){
    $(document).on('click touch' , '#button' , function() {

            var toAdd = $('input[name=checkListItem]').val();
            $('.list').append('<div class="item">' + toAdd + '</div>'                 );
        }

    );
    $(document).on('click touch', '.item', function() {

        $(this).remove();

    });
});