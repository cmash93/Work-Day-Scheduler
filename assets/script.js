$(document).ready(function() {

    var hour;
    var timeInterval;
    $('.saved').hide()

    timeInterval = setInterval(() => {

        $('#currentDay').text(moment().format('dddd, MMMM Do, h:mm:ss a'));

        $('*[data-store]').each(() => {
            currentTime = moment();
            hour = moment().hour($(this).attr('data-store'))

            if (hour < currentTime) {
                $(this).next().addClass('past')
            }
            else if (hour.hour() === currentTime.hour()) {
                $(this).next().addClass('present')
            }
            else if (hour > currentTime) {
                $(this).next().addClass("future");
            }
        });

    })

    $('*[data-store]').each(function() {
        $(this).val(localStorage.getItem('item-' + $(this).attr('data-store')))
    });

    $('.saveBtn').on('click', function() {
        localStorage.setItem('item-' + $(this).val(), $('*[data-store]').val())

        var saved = document.createElement('p');
        saved.setAttribute('class', 'saved')
        saved.textContent = 'Saved!'
        $('.saved').fadeIn(1000)
        $('.saved').fadeOut(2000)
        saved.style.position = 'absolute';
        saved.style.marginLeft = '42rem';
        saved.style.marginTop = '5rem';

        $('header').append(saved)
        
    });




});


