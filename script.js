document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordionheader');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the clicked header
            this.classList.toggle('active');

           
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse
                content.classList.remove('show');
            } else {
                // we can close all the accordion if we only want one to open
                document.querySelectorAll('.accordioncontent').forEach(item => {
                    item.style.maxHeight = null;
                    item.previousElementSibling.classList.remove('active');
                    item.classList.remove('show');
                });

                content.style.maxHeight = content.scrollHeight + 'px'; 
                content.classList.add('show');
            }
        });
    });
});
