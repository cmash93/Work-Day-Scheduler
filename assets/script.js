$(document).ready(function() {

    var hour;
    var timeInterval;
    $('.saved').hide()

    timeInterval = setInterval(() => {
        $('#currentDay').text(moment().format('dddd, MMMM Do, h:mm:ss a')); 
        hour = parseInt(moment().format('H'));


        if (hour < 9){
            $('.description').removeClass("present past").addClass("future");
        }
        if (hour > 16){
            $('.description').removeClass("present future").addClass("past");
        }
        $( ".description" ).each(function() {
            var timeblockNum = parseInt($(this).data('store'));
            
            if (hour < timeblockNum){
                $( this ).removeClass("past present").addClass("future");
            }
            if (hour == timeblockNum){
                $( this ).removeClass("past future").addClass("present");
            }
            if (hour > timeblockNum){
                $( this ).removeClass("present future").addClass("past");
            }
        })

    }, 100)


    $('*[data-store]').each(function() {
        $(this).val(localStorage.getItem($(this).attr('data-store')))
    });

    $('.saveBtn').on('click', function() {
        var text = $(this).siblings('.description').val()
        var time =$(this).prev().attr('data-store');



        localStorage.setItem(time, text)

        var saved = document.createElement('p');
        saved.setAttribute('class', 'saved')
        saved.textContent = 'Saved!'
        $('.saved').fadeIn(1000)
        $('.saved').fadeOut(2000)
        saved.style.position = 'absolute';
        saved.style.marginTop = '6rem';
        saved.style.color = '#000000'

        $('header').append(saved)
        
    });
});


