$('.tab-single').on('click', function() {
    $('.panel-single').hide();
    let position = this.href.split('#')[1];
    position = '#' + position;
    $(position).show('slow');
    return false;
});