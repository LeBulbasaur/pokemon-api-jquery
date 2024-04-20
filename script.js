$(document).ready(function() {
    if($('#content').html().length === 0) {
        $('#content').load('./src/main.html');
    }   

    const displayButton = function() {
        if($(window).width() < 768) {
            $('.navbar-toggler').css('display', 'block');
            $('.navbar-toggler-hover').css('display', 'none');
            
        } else {
            $('.navbar-toggler').css('display', 'none');
            $('.navbar-toggler-hover').css('display', 'block');
        }
    }

    $(window).on('resize', function() {
        displayButton();
    });

    $('.navbar').hover(function() {
        if($(window).width() > 768) {
            $('#navbarNav').collapse('show');
        }
      }, function() {
        if($(window).width() > 768) {
            $('#navbarNav').collapse('hide');
        }
      });  

    $('a').click(function () {
        $('#content').load($(this).attr('href'));
        return false;
    });

    $('.theme-toggler').on('change', function() {
        if ($(this).prop('checked')) {
            $('html').attr('data-bs-theme', 'dark');
        } else {
            $('html').attr('data-bs-theme', 'light');
        }

        window.localStorage.setItem('theme', $(this).prop('checked') ? 'dark' : 'light');
    });

    displayButton();
    if (window.localStorage.getItem('theme') === 'dark') {
        $('.theme-toggler').prop('checked', true);
        $('html').attr('data-bs-theme', 'dark');
    } else {
        $('.theme-toggler').prop('checked', false);
        $('html').attr('data-bs-theme', 'light');
    }
})