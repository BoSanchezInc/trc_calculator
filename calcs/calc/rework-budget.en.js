function PMSFLWrite (s) {
  if (s.match(/url\s*\(/)) {
    var r = 'url($1' + window.pmsfl_calc_base + '/images';
    s = s.replace(/url\s*\((['"])?[\.\/]*images/, r);
  } else if (s.match(/src=".*\/images\//)) {
    var r = 'src="' + window.pmsfl_calc_base + '/images';
    s = s.replace(/src=".*\/images/, r);
  }
  document.write(s);
}
PMSFLWrite("<style type=\"text/css\">\n");
PMSFLWrite(".pmsfl-calculator {\n");
PMSFLWrite("width:100% !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("background-image:url(../../images/calculators/hd_bg.gif) !important;\n");
PMSFLWrite("background-position:top !important;\n");
PMSFLWrite("background-repeat:no-repeat !important;\n");
PMSFLWrite("background-color:#ffffff !important;\n");
PMSFLWrite("border:#cecece thin solid !important;\n");
PMSFLWrite("border-top:#fcd85d 2px solid !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("position: relative !important;\n");
PMSFLWrite("z-index: 0 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy  {\n");
PMSFLWrite("width:518px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("background-image:url(../../images/calculators/tooth_bg.gif) !important;\n");
PMSFLWrite("background-position:top !important;\n");
PMSFLWrite("background-repeat:no-repeat !important;\n");
PMSFLWrite("background-color:#ffffff !important;\n");
PMSFLWrite("border:#cecece thin solid !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("position: relative !important;\n");
PMSFLWrite("z-index: 0 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-inner {\n");
PMSFLWrite("padding-left: 25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-bottom:15px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-top {\n");
PMSFLWrite("padding-right:170px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-inner {\n");
PMSFLWrite("padding-left: 25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-bottom:15px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h1 {\n");
PMSFLWrite("font-size:18px !important;\n");
PMSFLWrite("padding-top:25px !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-toothfairy h1 {\n");
PMSFLWrite("color:#ffffff !important;\n");
PMSFLWrite("font-size:18px !important;\n");
PMSFLWrite("padding-top:25px !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h2 {\n");
PMSFLWrite("font-size:18px !important;\n");
PMSFLWrite("color:#fea100 !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy h2 {\n");
PMSFLWrite("font-size:22px !important;\n");
PMSFLWrite("color:#0084cd !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h3 {\n");
PMSFLWrite("font-size:16px !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("padding-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h4 {\n");
PMSFLWrite("font-size:14px !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("padding:0px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h5 {\n");
PMSFLWrite("font-size:14px !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h6 {\n");
PMSFLWrite("font-size:16px !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("padding-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator p {\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("line-height:20px !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("font-size:14px !important;\n");
PMSFLWrite("padding-bottom:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy p {\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("line-height:20px !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("font-size:14px !important;\n");
PMSFLWrite("padding-bottom:20px !important;\n");
PMSFLWrite("color:#ffffff !important;\n");
PMSFLWrite("margin-bottom:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator a {\n");
PMSFLWrite("color:#fea100 !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy a {\n");
PMSFLWrite("color:#fea100 !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator  .small {\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("line-height:16px !important;\n");
PMSFLWrite("width:100% !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-toothfairy  .small {\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("line-height:16px !important;\n");
PMSFLWrite("width:100% !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator td {\n");
PMSFLWrite("padding: 8px 0px 5px 0px !important;\n");
PMSFLWrite("vertical-align: top !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("line-height:16px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("border-top:#CCCCCC thin dotted !important;\n");
PMSFLWrite("height:1px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy td {\n");
PMSFLWrite("padding: 8px 0px 5px 0px !important;\n");
PMSFLWrite("vertical-align: top !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("line-height:16px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("border-top:#CCCCCC thin dotted !important;\n");
PMSFLWrite("height:1px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-blank-row {\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-indent {\n");
PMSFLWrite("padding-left: 0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-indent {\n");
PMSFLWrite("padding-left: 0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of2 {\n");
PMSFLWrite("width:375px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-col-1of2 {\n");
PMSFLWrite("width:375px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of2 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-col-2of2 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of3 {\n");
PMSFLWrite("width:375px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of3 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("text-align:right !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-allow-needs .calc-col-2of3 {\n");
PMSFLWrite("width: 100px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of3 {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of4 {\n");
PMSFLWrite("width:380px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of4 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("text-align:right !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of4 {\n");
PMSFLWrite("width:80px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-4of4 {\n");
PMSFLWrite("width:5px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of5 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of5 {\n");
PMSFLWrite("width:160px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of5 {\n");
PMSFLWrite("width:220px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-4of5 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-5of5 {\n");
PMSFLWrite("width:80px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of7 {\n");
PMSFLWrite("width:150px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of7 {\n");
PMSFLWrite("width:5px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of7 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-4of7 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-5of7 {\n");
PMSFLWrite("width:5px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-6of7 {\n");
PMSFLWrite("width:20px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-7of7 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-help-details {\n");
PMSFLWrite("margin-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-help-details {\n");
PMSFLWrite("margin-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-spacer {\n");
PMSFLWrite("height: 25px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-spacer {\n");
PMSFLWrite("height: 25px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .error {\n");
PMSFLWrite("border: 1px solid red !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .error {\n");
PMSFLWrite("border: 1px solid red !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .attention {\n");
PMSFLWrite("background-color: #ffff99 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .attention {\n");
PMSFLWrite("background-color: #ffff99 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-help-button {\n");
PMSFLWrite("width: 14px !important;\n");
PMSFLWrite("height: 13px !important;\n");
PMSFLWrite("background: url(../../images/calculators/more.gif) no-repeat !important;\n");
PMSFLWrite("text-decoration: none !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-help-open {\n");
PMSFLWrite("background: url(../../images/calculators/less.gif) no-repeat !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-submit {\n");
PMSFLWrite("text-align:left !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-submit {\n");
PMSFLWrite("text-align:left !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator input[type=submit] {\n");
PMSFLWrite("padding:3px 5px 3px 5px !important;\n");
PMSFLWrite("background: url(../../images/calculators/calculate_bg.gif) no-repeat !important;\n");
PMSFLWrite("color:#ffffff !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("width:76px !important;\n");
PMSFLWrite("*width:76px !important;\n");
PMSFLWrite("_width:76px !important;\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("border:none !important;\n");
PMSFLWrite("font-size:11px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-toothfairy input[type=submit] {\n");
PMSFLWrite("padding:3px 5px 3px 5px !important;\n");
PMSFLWrite("background: url(../../images/calculators/calculate_bg_tooth.gif) no-repeat !important;\n");
PMSFLWrite("color:#ffffff !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("width:76px !important;\n");
PMSFLWrite("*width:76px !important;\n");
PMSFLWrite("_width:76px !important;\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("border:none !important;\n");
PMSFLWrite("font-size:11px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator select {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy select {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator select.calc-wide {\n");
PMSFLWrite("width: auto !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy select.calc-wide {\n");
PMSFLWrite("width: auto !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator select.calc-narrow {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("/* was 15px */\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy select.calc-narrow {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("/* was 15px */\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-college-cost select.calc-narrow {\n");
PMSFLWrite("width:80px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output {\n");
PMSFLWrite("margin-bottom:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-output {\n");
PMSFLWrite("margin-bottom:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-output p {\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output table {\n");
PMSFLWrite("width: 460px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-output table {\n");
PMSFLWrite("width: 460px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output ul, .pmsfl-calculator ul {\n");
PMSFLWrite("margin:5px 0px 10px 15px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-output ul, .pmsfl-calculator ul {\n");
PMSFLWrite("margin:5px 0px 10px 15px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output li, .pmsfl-calculator li {\n");
PMSFLWrite("list-style:disc !important;\n");
PMSFLWrite("list-style-image:none !important;\n");
PMSFLWrite("background:none !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-output li, #pmsfl-calculator-toothfairy li {\n");
PMSFLWrite("list-style:disc !important;\n");
PMSFLWrite("list-style-image:none !important;\n");
PMSFLWrite("background:none !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-footer-note {\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("font-style:italic !important;\n");
PMSFLWrite("padding-top:20px !important;\n");
PMSFLWrite("padding-left:25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("line-height:14px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;8*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-dialog-layer {\n");
PMSFLWrite("position:absolute !important;\n");
PMSFLWrite("z-index: 50 !important;\n");
PMSFLWrite("bottom: 7px !important;\n");
PMSFLWrite("left: 20px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("padding:0px !important;\n");
PMSFLWrite("padding-top:10px !important;\n");
PMSFLWrite("/*opacity: 1.0 !important;\n");
PMSFLWrite("filter: alpha(opacity=100) !important; */\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-embed-layer {\n");
PMSFLWrite("width: 475px !important;\n");
PMSFLWrite("height: 171px !important;\n");
PMSFLWrite("background: url(../../images/calculators/embed_bg.png) no-repeat !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-embed-layer {\n");
PMSFLWrite("width: 475px !important;\n");
PMSFLWrite("height: 171px !important;\n");
PMSFLWrite("background: url(../../images/calculators/embed_bg.png) no-repeat !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-disclaim-layer {\n");
PMSFLWrite("width: 479px !important;\n");
PMSFLWrite("height: 138px !important;\n");
PMSFLWrite("background: url(../../images/calculators/disclaim_bg.png) no-repeat !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-disclaim-layer {\n");
PMSFLWrite("width: 479px !important;\n");
PMSFLWrite("height: 138px !important;\n");
PMSFLWrite("background: url(../../images/calculators/disclaim_bg.png) no-repeat !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-dialog-layer .calc-dialog-close {\n");
PMSFLWrite("padding-top:0px !important;\n");
PMSFLWrite("padding-left:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-dialog-layer .calc-dialog-close {\n");
PMSFLWrite("padding-top:0px !important;\n");
PMSFLWrite("padding-left:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-footer-bar {\n");
PMSFLWrite("background:url(../../images/calculators/footer_bg.jpg) no-repeat right !important;\n");
PMSFLWrite("font-size: 11px !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("padding-left:25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-top:12px !important;\n");
PMSFLWrite("padding-bottom:0px !important;\n");
PMSFLWrite("margin: 0 -25px -27px -25px !important;\n");
PMSFLWrite("*margin: 0 -25px -27px -25px !important; /* ie6 7 hack */\n");
PMSFLWrite("height:32px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-footer-bar {\n");
PMSFLWrite("background:url(../../images/calculators/footer_bg.jpg) no-repeat right !important;\n");
PMSFLWrite("font-size: 11px !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("padding-left:25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-top:12px !important;\n");
PMSFLWrite("padding-bottom:0px !important;\n");
PMSFLWrite("margin: 0 -25px -27px -25px !important;\n");
PMSFLWrite("*margin: 0 -25px -27px -25px !important; /* ie6 7 hack */\n");
PMSFLWrite("height:32px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-SP-footer-bar {\n");
PMSFLWrite("background:url(../../images/calculators/footer_bg.jpg) no-repeat right !important;\n");
PMSFLWrite("font-size: 10px !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("padding-left:40px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-top:12px !important;\n");
PMSFLWrite("padding-bottom:0px !important;\n");
PMSFLWrite("margin: 0 -25px -27px -25px !important;\n");
PMSFLWrite("*margin: 0 -25px -27px -25px !important; /* ie6 7 hack */\n");
PMSFLWrite("height:32px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-PT-footer-bar {\n");
PMSFLWrite("background:url(../../images/calculators/footer_pt_bg.jpg) no-repeat !important;\n");
PMSFLWrite("font-size: 10px !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("padding-left:15px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-top:12px !important;\n");
PMSFLWrite("padding-bottom:0px !important;\n");
PMSFLWrite("margin: 0 -25px -15px -25px !important;\n");
PMSFLWrite("*margin: 0 -25px -15px -25px !important; /* ie6 7 hack */\n");
PMSFLWrite("height:32px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-embed-info p {\n");
PMSFLWrite("width: 400px !important;\n");
PMSFLWrite("padding-top:0px !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("padding-left:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-embed-info p {\n");
PMSFLWrite("width: 400px !important;\n");
PMSFLWrite("padding-top:0px !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("padding-left:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-dialog-layer .calc-embed-info textarea {\n");
PMSFLWrite("width:410px !important;\n");
PMSFLWrite("height:75px !important;\n");
PMSFLWrite("padding-top:5px !important;\n");
PMSFLWrite("margin-top:11px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-dialog-layer .calc-embed-info textarea {\n");
PMSFLWrite("width:410px !important;\n");
PMSFLWrite("height:75px !important;\n");
PMSFLWrite("padding-top:5px !important;\n");
PMSFLWrite("margin-top:11px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator  .calc-disclaimer-link {\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("text-decoration:underline !important;\n");
PMSFLWrite("padding-left:5px !important;\n");
PMSFLWrite("padding-right:5px !important;\n");
PMSFLWrite("position:relative !important;\n");
PMSFLWrite("top:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy  .calc-disclaimer-link {\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("text-decoration:underline !important;\n");
PMSFLWrite("padding-left:5px !important;\n");
PMSFLWrite("padding-right:5px !important;\n");
PMSFLWrite("position:relative !important;\n");
PMSFLWrite("top:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator  .calc-PT-footer-bar .calc-disclaimer-link {\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("text-decoration:underline !important;\n");
PMSFLWrite("display: block !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-embed-link {\n");
PMSFLWrite("position:relative !important;\n");
PMSFLWrite("top: -21px !important;\n");
PMSFLWrite("*top: -24px !important;  /* ie7 hack */\n");
PMSFLWrite("_top: -22px !important; /* ie6 hack */\n");
PMSFLWrite("left: 230px !important;\n");
PMSFLWrite("background-color:#fafafa !important;\n");
PMSFLWrite("border: #cccccc thin solid !important;\n");
PMSFLWrite("display:block !important;\n");
PMSFLWrite("width: 135px !important;\n");
PMSFLWrite("height:13px !important;\n");
PMSFLWrite("*height:12px !important;  /* ie6 7 hack */\n");
PMSFLWrite("color: #666666 !important;\n");
PMSFLWrite("padding:3px 3px 3px 5px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("#pmsfl-calculator-toothfairy .calc-embed-link {\n");
PMSFLWrite("position:relative !important;\n");
PMSFLWrite("top: -21px !important;\n");
PMSFLWrite("*top: -24px !important;  /* ie7 hack */\n");
PMSFLWrite("_top: -22px !important; /* ie6 hack */\n");
PMSFLWrite("left: 230px !important;\n");
PMSFLWrite("background-color:#fafafa !important;\n");
PMSFLWrite("border: #cccccc thin solid !important;\n");
PMSFLWrite("display:block !important;\n");
PMSFLWrite("width: 135px !important;\n");
PMSFLWrite("height:13px !important;\n");
PMSFLWrite("*height:12px !important;  /* ie6 7 hack */\n");
PMSFLWrite("color: #666666 !important;\n");
PMSFLWrite("padding:3px 3px 3px 5px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-PT-logo-link {\n");
PMSFLWrite("display: block !important;\n");
PMSFLWrite("margin-bottom: 10px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("</style>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-rework-budget\" class=\"pmsfl-calculator\">\n");
PMSFLWrite("<div class=\"calc-outer\">\n");
PMSFLWrite("<div class=\"calc-inner\">\n");
PMSFLWrite("<h1>Rework Your Budget</h1>\n");
PMSFLWrite("\n");
PMSFLWrite("<p>\n");
PMSFLWrite("Knowing where your money goes is an eye-opening experience and an\n");
PMSFLWrite("education in itself.  This calculator will help you by tracking your expenses. Keep a log and jot down whatever\n");
PMSFLWrite("you spend. In this way, you will be able to take control of your\n");
PMSFLWrite("money and your current financial situation.\n");
PMSFLWrite("</p>\n");
PMSFLWrite("\n");
PMSFLWrite("<form>\n");
PMSFLWrite("<table style=\"width:100%;\">\n");
PMSFLWrite("<tbody>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-col-1of3\"><h3>Monthly Income</h3></td>\n");
PMSFLWrite("<td colspan=\"2\">&#160;</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Income #1\n");
PMSFLWrite("<!--<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/> If you get paid once a week, multiply your check\n");
PMSFLWrite("amount by 52 and divide by 12 for your monthly\n");
PMSFLWrite("income. If you get paid every two weeks, multiply by 26\n");
PMSFLWrite("and divide by 12.\n");
PMSFLWrite("</span>-->\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td class=\"calc-col-2of3\">₱</td>\n");
PMSFLWrite("<td class=\"calc-col-3of3\"><input name=\"income_1\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Income #2\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>List here any secondary sources of income such as a\n");
PMSFLWrite("spouse\'s income or income from a second job.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input name=\"income_2\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Interest\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Include only interest income that can be used to pay for\n");
PMSFLWrite("monthly expenses, and not interest earned on retirement\n");
PMSFLWrite("accounts or other investments.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input name=\"income_interest\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Pension\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>If you receive money from a pension account, enter\n");
PMSFLWrite("it here.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input name=\"income_pension\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Other\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Include any other regular sources of money (income)\n");
PMSFLWrite("that you can include in your monthly financial outlook.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input name=\"income_other\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"3\"><h3>Fixed Monthly Expenses</h3></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Housing  (rent/mortgage)\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Your rent/mortgage allowance should include your\n");
PMSFLWrite("total monthly spending on housing including insurance,\n");
PMSFLWrite("taxes etc.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdfixed\" name=\"expense_rent\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Food\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Include all food-related expenses including cooking\n");
PMSFLWrite("supplies. But don\'t include money spent on eating at\n");
PMSFLWrite("restaurants and that should be included in your\n");
PMSFLWrite("entertainment budget.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdfixed\" name=\"expense_food\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Transportation (car payment &amp; car insurance)\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>This amount is your monthly car loan or lease\n");
PMSFLWrite("payment. If your car is already paid off, you can enter\n");
PMSFLWrite("zero for the amount.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdfixed\" name=\"expense_car_p\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Medical\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>If your medical insurance isn\'t deducted from your\n");
PMSFLWrite("paycheck, include it here. Also include your average\n");
PMSFLWrite("monthly expenditures for prescriptions, co-pays and\n");
PMSFLWrite("other medical-related payments.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdfixed\" name=\"expense_medical\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Education\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Include tuition, books, fees and any other\n");
PMSFLWrite("educational expenses.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdfixed\" name=\"expense_edu\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"3\" class=\"calc-indent\">\n");
PMSFLWrite("<a class=\"sdfixed calc-add-field\" href=\"#\">Add another item</a>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">Total fixed expenses:</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><span id=\"pmsfl-calculator-rework-budget-fixedt\">0.00</span></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"3\"><h3>Flexible Monthly Expenses</h3></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Entertainment\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Include movies, concerts, the ballet, and any money you spend on\n");
PMSFLWrite("having a good time. Include money you spend eating at\n");
PMSFLWrite("restaurants in this category, not in food expenses.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdflex\" name=\"expense_ent\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Credit cards\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>If you don\'t pay your entire credit card balance\n");
PMSFLWrite("off every month, enter the amount you do pay each\n");
PMSFLWrite("month. If you do pay your balance off each month, enter\n");
PMSFLWrite("zero for the amount.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdflex\" name=\"expense_cc\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">\n");
PMSFLWrite("Childcare\n");
PMSFLWrite("<a href=\"#\" class=\"calc-help-button\">&#160;&#160;&#160;&#160;&#160;</a>\n");
PMSFLWrite("\n");
PMSFLWrite("<span class=\"calc-help-details\" style=\"display:none\">\n");
PMSFLWrite("<br/>Include not only day care but also diapers,\n");
PMSFLWrite("formula, and other baby-related expenses.\n");
PMSFLWrite("</span>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><input class=\"sdflex\" name=\"expense_childcare\" type=\"text\" value=\"\" size=\"10\"/></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"3\" class=\"calc-indent\">\n");
PMSFLWrite("<a class=\"sdflex calc-add-field\" href=\"#\">Add another item</a>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-indent\">Total flexible expenses:</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><span id=\"pmsfl-calculator-rework-budget-flext\">0.00</span></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"2\">&#160;</td>\n");
PMSFLWrite("<td class=\"calc-submit\">\n");
PMSFLWrite("<input type=\"submit\" name=\"submit\" value=\"Calculate\"/>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("</tbody>\n");
PMSFLWrite("</table>\n");
PMSFLWrite("</form>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-errors\" style=\"display:none\">\n");
PMSFLWrite("<div id=\"pmsfl-calculator-rework-budget-err1\">Please enter a valid peso amount for the highlighted field.</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-rework-budget-msg1\">Saving</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-rework-budget-msg2\">Debt</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-rework-budget-msg3\">Enter a label for this new expense item.</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-rework-budget-msg4\">Other</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-output\" style=\"display:none\">\n");
PMSFLWrite("<h2>Results</h2>\n");
PMSFLWrite("<div>\n");
PMSFLWrite("<table>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>Total Income</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><span id=\"pmsfl-calculator-rework-budget-income\"></span></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>Total Expenses</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td><span id=\"pmsfl-calculator-rework-budget-expenses\"></span></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>Bottom Line</td>\n");
PMSFLWrite("<td>₱</td>\n");
PMSFLWrite("<td>\n");
PMSFLWrite("<span id=\"pmsfl-calculator-rework-budget-bottomline\"></span>&#160;\n");
PMSFLWrite("(<span id=\"pmsfl-calculator-rework-budget-bottomstatus\"></span>)\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("</table>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-recalculate-text\" style=\"display:none\">Recalculate</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-dialog-layer calc-embed-layer\" style=\"display:none\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("<a href=\"#\" class=\"calc-dialog-close\">\n");
PMSFLWrite("<img src=\"../../images/close_x.gif\"\n");
PMSFLWrite("width=\"17px\" height=\"17\" border=\"0\" align=\"right\" style=\"padding-right:13px;\"/>\n");
PMSFLWrite("</a>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-embed-info\">\n");
PMSFLWrite("<p>\n");
PMSFLWrite("To embed this calculator into your site copy the following text\n");
PMSFLWrite("and paste it into your HTML page:<br />\n");
PMSFLWrite("<textarea></textarea>\n");
PMSFLWrite("</p>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-dialog-layer calc-disclaim-layer\" style=\"display:none\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("<a href=\"#\" class=\"calc-dialog-close\">\n");
PMSFLWrite("<img src=\"../../images/close_x.gif\"\n");
PMSFLWrite("width=\"17px\" height=\"17\" border=\"0\" align=\"right\" style=\"padding-right:13px;\"/>\n");
PMSFLWrite("</a>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-footer-note\">\n");
PMSFLWrite("Note: This interactive calculator is intended as an educational\n");
PMSFLWrite("tool, not investment advice. The information presented is not\n");
PMSFLWrite("intended to advise you of strategies applicable to your specific\n");
PMSFLWrite("situation but rather to highlight issues for your own\n");
PMSFLWrite("consideration. Therefore, you should always consult your financial\n");
PMSFLWrite("or tax advisor. Your own goals will help you develop a specific\n");
PMSFLWrite("financial strategy.\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<a href=\"http://trulyrichclub.com\" target=\"_top\"><img src=\"../../images/pmsfl_logo.gif\"\n");
PMSFLWrite("border=\"0\" alt=\"TrulyRichClub\"\n");
PMSFLWrite("style=\"margin-top:20px; margin-bottom:5px;\"/></a>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-footer-bar\">\n");
PMSFLWrite("&#169; 2010 Visa.  All rights reserved.\n");
PMSFLWrite("<a href=\"#\" class=\"calc-disclaimer-link\">Disclaimer</a>\n");
PMSFLWrite("<a href=\"#\" class=\"calc-embed-link\">Embed this Calculator</a>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
function PmsflId (name) {
  return 'pmsfl-calculator-' + name;
}
function PmsflHelper (id) {
  this.name = id;
  this.id = PmsflId(id);
}
PmsflHelper.prototype = {
  val: function (name, defaultv) {
    var value = pmsfljQuery('#' + this.id + ' form :input[name=' + name + ']').val();
    if (!value || String(value).lentgh == 0) {return defaultv;}
    return value;
  },
  parseFloat: function (name, defaultv) {
    var value = this.cleanNumberString(this.val(name, defaultv));
    var hint_ds = pmsfljQuery('#' + this.id + ' .pmsfl-calculator-hint-decimal-sep').html();
    var ds = hint_ds ? hint_ds : '.';
    return (+(value.replace(ds, '.'))) * 1.0;
  },
  parseInt: function (name, defaultv) {
    var value = this.cleanNumberString(this.val(name, defaultv));
    return parseInt(value);
  },
  set: function (name, val, fmt) {
    if (fmt == undefined) {fmt = true;}
    var v = ((fmt && val.toString().match(/^[\d\.]+$/)) ? this.fmtNumber(val) : val);
    return pmsfljQuery('#' + this.id + '-' + name).html(v);
  },
  show: function (sub) {
    if (sub) {
      pmsfljQuery('#' + this.id + ' .calc-output .calc-output-cond').hide();
      pmsfljQuery('#' + this.id + ' .calc-output .calc-output-' + sub).show();
    }

    pmsfljQuery('#' + this.id + ' .calc-output:hidden').slideDown("normal");
    this.scrollTo(pmsfljQuery('#' + this.id + ' .calc-output'));
    this.showingResults = true;
  },
  msg: function (num, replacements, prefix) {
    var prefix_ = prefix || '-msg';
    var message = pmsfljQuery('#' + this.id + prefix_ + num).html();
    var r = null;

    if (replacements) {
      for (var i in replacements) {
        r = replacements[i]
        r = (r.toString().match(/^[\d\.]+$/) ? this.fmtNumber(r) : r);
        message = message.replace('{' + i + '}', r);
      }
    }

    return message;
  },
  alert: function (errno, field, replacements) {
    if (field) {
      var e = pmsfljQuery('#' + this.id + ' form :input[name=' + field + ']').addClass('error');
      e.focus();
      this.scrollTo(e);
    }
    alert(this.msg(errno, replacements, '-err'));
    return false;
  },
  prompt: function (message, default_result) {
    var result = prompt(message, "");
    if (!result || result.length == 0) {result = default_result;}
    return this.encodeHTML(result);
  },
  encodeHTML: function (s) {
    return s.split("&").join("&amp;").split( "<").join("&lt;").split(">").join("&gt;");
  },
  fmtNumber: function (n) {
    var hint_ds = pmsfljQuery('#' + this.id + ' .pmsfl-calculator-hint-decimal-sep').html();
    var hint_ts = pmsfljQuery('#' + this.id + ' .pmsfl-calculator-hint-thousands-sep').html();
    var ds = hint_ds ? hint_ds : '.';
    var ts = hint_ts ? hint_ts : ',';
    var re = new RegExp('(-?[0-9]+)([0-9]{3})');
    var s  = String(n).replace(/[.]/g, ds);
    while(re.test(s)) {s = s.replace(re, '$1' + ts + '$2');}
    return s;
  },
  countInputs: function (re) {
    var count = 0;
    pmsfljQuery('#' + this.id + ' form :input').each(function() {
      if (this.name.match(re) != null) {count += 1;}
    });
    return count;
  },
  scrollTo: function (element) {
    pmsfljQuery('html,body').animate({scrollTop: element.offset().top - 50}, 1000);
  },
  cleanNumberString: function (numToClean) {
    var hint_ts = pmsfljQuery('#' + this.id + ' .pmsfl-calculator-hint-thousands-sep').html();
    var ts = hint_ts ? hint_ts : ',';
    var ts_re = new RegExp('[$' + ts + ']+', 'g');
    return String(numToClean).replace(ts_re, '');
  },
  mortgagePayment: function (rate, term, amount) {
    var i = rate / 1200.0;
    var x = Math.pow(1 + i, term * -1);
    return amount * i / (1-x);
  },
  openDialogLayer: function (section) {
    var dialog = pmsfljQuery('#' + this.id + ' ' + section);
    dialog.show();
    this.scrollTo(dialog);
  },
  setUpFooterLinks: function () {
    var self = this;
    var base = window.pmsfl_calc_base;
    var base_no_proto = base.replace(/^https?:\/\//, '');
    var embed = pmsfljQuery('#' + this.id + ' .calc-embed-info');
    var embed_instr = '<script type="text/javascript" src="' + base + '/js/boot.js"></script>' + "\n";
    embed_instr += '<script type="text/javascript">_calc_boot("' + base_no_proto + '", "' + this.name + '");</script>';
    embed_instr = this.encodeHTML(embed_instr);
    embed.find('textarea').html(embed_instr);
    if (window['calcs_for_iphone']) {
      pmsfljQuery('#' + this.id + ' .calc-embed-link').hide();
      pmsfljQuery('#' + self.id + ' .calc-disclaimer-link').click(function() {
        document.location = 'http://disclaimer';
      });
    } else {
      pmsfljQuery('#' + this.id + ' .calc-embed-link').click(function() {
        pmsfljQuery('#' + self.id + ' .calc-disclaim-layer').hide();
        self.openDialogLayer('.calc-embed-layer');
        return false;
      });
      pmsfljQuery('#' + self.id + ' .calc-disclaimer-link').click(function() {
        pmsfljQuery('#' + self.id + ' .calc-embed-layer').hide();
        self.openDialogLayer('.calc-disclaim-layer');
        return false;
      });
      pmsfljQuery('#' + this.id + ' .calc-dialog-close').click(function() {
        pmsfljQuery('#' + self.id + ' .calc-dialog-layer').hide();
        return false;
      });
    }
  },
  wantDateJS: function () {
    if (!Date.CultureInfo) {
      var base = window.pmsfl_calc_base;
      document.write(unescape("%3Cscript src=\"" + base + "/js/date.js\" type=\"text/javascript\"%3E%3C/script%3E"));
    }
  }
};
function PmsflCalc (name, options) {
  var helper = new PmsflHelper(name);

  if (pmsfljQuery.browser.msie && typeof(pmsflIESelect) == 'undefined') {
    var base = window.pmsfl_calc_base;
    document.write(unescape("%3Cscript src=\"" + base + "/js/ieselect.js\" type=\"text/javascript\"%3E%3C/script%3E"));
    pmsfljQuery(document).ready(function() {pmsflIESelect(helper.id);});
  }

  options.helper = helper;
  pmsfljQuery('#' + helper.id + ' .calc-help-button').click(function() {
    pmsfljQuery(this).toggleClass('calc-help-open');
    pmsfljQuery(this).next('.calc-help-details').toggle();
    return false;
  });
  if (window['calcs_for_iphone']) {
    pmsfljQuery('#' + helper.id + ' .calc-tips-link').click(function() {
      pmsfljQuery(this).parent().next('.calc-tips-dialog').show();
      return false;
    });
    pmsfljQuery('#' + helper.id + ' .calc-tips-close').click(function() {
      pmsfljQuery(this).parents('.calc-tips-dialog').hide();
    });
  } else {
    pmsfljQuery('#' + helper.id + ' .calc-tips-link').click(function() {
      var href = pmsfljQuery(this).attr('href');
      var target = 'school';
      var ops = 'toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=no,width=650, height=525';
      window.open(href, target, ops);
      return false;
    });
  }
  pmsfljQuery('#' + helper.id + ' input[name=submit]').click(function() {
    pmsfljQuery('#' + helper.id + ' form :input').removeClass('error');
    options['calculate'] ? options.calculate(helper) : options(helper);

    if (helper['showingResults']) {
      var text = pmsfljQuery('#' + helper.id + ' .calc-recalculate-text').html();
      pmsfljQuery(this).val(text);
      pmsfljQuery(this).addClass('calc-recalculate');
    }

    return false;
  });
  if (options && options['addField']) {
    pmsfljQuery('#' + helper.id + ' .calc-add-field').click(function() {
      var name = options.addField(helper, pmsfljQuery(this));
      var e = pmsfljQuery('#' + helper.id + ' input[name=' + name + ']').focus();
      helper.scrollTo(e);
      return false;
    });
  }
  helper.setUpFooterLinks();
  if (options && options['ready']) {options.ready();}
}
PmsflCalc('rework-budget', {
  calculate: function (helper) {
    var amount        = 0.0;
    var total_income  = 0.0;
    var total_expense = 0.0;
    var bailout       = false;

    pmsfljQuery('#' + helper.id + ' input[type=text]').each(function() {
      if (!this.name.match(/^(income|expense)_/)) {return;}
      amount = helper.parseFloat(this.name, '0.0');

      if (isNaN(amount)) {
        bailout = true;
        return helper.alert(1, this.name);
      }

      if (this.name.match(/^income_/)) {
        total_income += amount;
      } else if (this.name.match(/^expense_/)) {
        total_expense += amount;
      }
    });

    if (bailout) {return false;}
    var bottom_line = 0.0;
    var bottom_status = "";

    if (total_income >= total_expense) {
      bottom_line = total_income - total_expense;
      bottom_status = helper.msg(1);
    } else {
      bottom_line = total_expense - total_income;
      bottom_status = helper.msg(2);
    }

    helper.set('income', total_income.toFixed(2));
    helper.set('expenses', total_expense.toFixed(2));
    helper.set('bottomstatus', bottom_status);
    helper.set('bottomline', bottom_line.toFixed(2));
    helper.show();
  },
  updateBudgetTotal: function (class_name, update_name) {
    var total  = 0.0;
    var helper = this.helper;

    pmsfljQuery('#' + helper.id + ' input.' + class_name).each(function() {
      var val = helper.parseFloat(this.name, '0.0');
      if (!isNaN(val)) {total += val;}
    });

    helper.set(update_name, total.toFixed(2));
  },
  addField: function (helper, element) {
    var self  = this;
    var place = element.parent().parent();
    var count = helper.countInputs(/^expense_/) + 2;
    var html  = place.prev().html();
    html = html.replace(/expense_\w+/, 'expense_' + count);
    place.before('<tr>' + html + '</tr>');
    place = element.parent().parent().prev();
    var input = place.find('input:last');
    var klass = input.attr('class');
    var total = (klass == 'sdfixed' ? 'fixedt' : 'flext');
    input.change(function() {self.updateBudgetTotal(klass, total);});
    place.find('td:first').html('<input type="text" name="label' + count + '"/>');
    place = element.parent().parent().prev();
    place.find(':input').val('');
    return 'label' + count;
  },
  ready: function () {
    var self   = this;
    var helper = this.helper;

    pmsfljQuery('#' + helper.id + ' input.sdfixed').change(function() {
      self.updateBudgetTotal('sdfixed', 'fixedt');
    });

    pmsfljQuery('#' + helper.id + ' input.sdflex').change(function() {
      self.updateBudgetTotal('sdflex', 'flext');
    });
  }
});
