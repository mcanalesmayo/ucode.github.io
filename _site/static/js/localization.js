$(document).ready(function() {
  var i18nOpts = {
    lng: 'es',
    fallbackLng: 'es',
    resGetPath: 'static/locales/__lng__.json'
  };

  var translate = function() {
    $('.i18container').i18n();
    $('[id^="i18_"]').i18n();
  };

  $("[id^='set_lang']").each(function() {
    var $this = $(this);
    $this.on('click', function() {
      i18n.setLng($this.data('locale'), translate);
    });
  });

  $.i18n.init(i18nOpts, translate);
});
