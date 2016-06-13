function _calc_boot (hostpath, name, lang) {
  var language = lang || 'en';
  var base = ("../") + hostpath;
  // var base = ("https:" == document.location.protocol ? "https://" : "http://") + hostpath;
  if (hostpath.substring(0, 1) == '.') {base = hostpath;}


  // Load pmsfljQuery unless it's already loaded on this page.
  if (typeof(pmsfljQuery) == 'undefined') {
    document.write(unescape("%3Cscript src=\"" + base + "/js/jquery.js\" type=\"text/javascript\"%3E%3C/script%3E"));
  }

  // Load the calculator.
  window.pmsfl_calc_base = base;
  document.write(unescape("%3Cscript src=\"" + base + "/calc/" + name + "." + language + ".js\" type=\"text/javascript\"%3E%3C/script%3E"));


  // Load pmsfljQuery unless it's already loaded on this page.
  // if (typeof(pmsfljQuery) == 'undefined') {
  //   document.write(unescape("<script src=\"" + base + "/js/jquery.js\" type=\"text/javascript\"></script>"));
  // }

  // Load the calculator.
  // window.pmsfl_calc_base = base;
  // document.write(unescape("<script src=\"" + base + "/calc/" + name + "." + language + ".js\" type=\"text/javascript\"></script>"));
}
