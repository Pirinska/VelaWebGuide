//arrow interactions
$(document).ready(function(){
    $('.surgery-header').click(function(){
        var targetContent = $($(this).attr('data-target'));
        var arrowIcon = $(this).find('.arrow-icon');
        
        if (targetContent.css('display') === 'none') {
            targetContent.show();
            arrowIcon.addClass('rotated');
        } else {
            targetContent.hide();
            arrowIcon.removeClass('rotated');
        }
    });
});
//checklist interaction
$(document).ready(function(){
    $('#addNoteBtn').click(function(){
        var noteText = $('#journalInput').val();
        if(noteText) {
            var noteHtml = `
                <div class="note">
                    <p>${noteText}</p>
                </div>
            `;
            $('#notesSection').prepend(noteHtml);
            $('#journalInput').val('');
        } else {
            alert('Please enter a note.');
        }
    });
});

//homepage tabs interaction
$(document).ready(function(){
    $('.nav-tabs .nav-link').on('click', function() {
        $('.nav-tabs .nav-link').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').removeClass('show active');
        $($(this).attr('href')).addClass('show active');
        return false;
    });
});

