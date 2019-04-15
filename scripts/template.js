String.prototype.extract = function(first, second)
{
  string = this;
  var idx = string.indexOf(first);
  if (idx != -1)
  {
    string = string.substring(idx+first.length);
    if (second)
    {
      idx = string.indexOf(second);
      if (idx != -1) return string.substring(0, idx);
    }
    return string;
  }
  return null;
}

function addHead()
{
  var url = window.location.href;
  var api = url.extract("api=", "#");
  if (api == null) api = "C";

  document.title = "AeonWave Audio eXtensions library documentation";
  document.write(" <div id=\"stretch\" class=\"stretch\">");
  document.write(" <table class=\"main\" align=\"right\" border=\"0\">");
  document.write(" <!-- thead>");
  document.write("  <tr>");
  document.write("   <th class=\"header\" bockground=\"images/tdheader.png\" colspan=\"2\">");
  document.write("   </th>");
  document.write("  </tr>");
  document.write(" </thead -->");
  document.write(" <tfoot>");
  document.write("  <tr>");
  document.write("   <td class=\"copyright\">");
  document.write("    (C) Copyright 2005-2018 by Adalin B.V.");
  document.write("   </td>");
  document.write("   <td class=\"footer\">");
  document.write("    AeonWave Audio eXtensions Library&nbsp;<br>");
  document.write("     All Rights Reserved.&nbsp;");
  document.write("   </td>");
  document.write("  </tr>");
  document.write(" </tfoot");
  document.write(" <tbody>");
  document.write("  <tr class=\"menu\">");
  document.write("   <td class =\"menu\"><div><ul>");

  document.write("     <a href=\"home.html?api=C++\"><h1 class=\"menu\">C++ classes</h1></a>");
  if (api == "C++") {
    document.write("     <li><a id=\"menu\" href=\"home.html?api=C++\">Home</a></li>");

    document.write("     <li><a id=\"menu\" href=\"aeonwave.html?api=C++\">AeonWave</a></li>");
    document.write("     <li><a id=\"menu\" href=\"sensor.html?api=C++\">Sensor</a></li>");
    document.write("     <li><a id=\"menu\" href=\"frame.html?api=C++\">Frame</a></li>");
    document.write("     <li><a id=\"menu\" href=\"emitter.html?api=C++\">Emitter</a></li>");
    document.write("     <li><a id=\"menu\" href=\"buffer.html?api=C++\">Buffer</a></li>");
    document.write("     <li><a id=\"menu\" href=\"dsp.html?api=C++\">DSP</a></li>");
    document.write("     <li><a id=\"menu\" href=\"vector.html?api=C++\">Vector</a></li>");
    document.write("     <li><a id=\"menu\" href=\"matrix64.html?api=C++\">Matrix64</a></li>");
    document.write("     <li><a id=\"menu\" href=\"matrix.html?api=C++\">Matrix</a></li>");
    document.write("     <p>");
    document.write("     <li><a id=\"menu\" href=\"support.html?api=C++\">support</a></li>");
    document.write("     <li><a id=\"menu\" href=\"strings.html?api=C++\">strings</a></li>");
    document.write("     <p>");
    document.write("     <a href=\"home.html\"><h1 class=\"menu\">C functions</h1></a>");

  } else {
    document.write("     <a href=\"home.html\"><h1 class=\"menu\">C functions</h1></a>");
    document.write("     <li><a id=\"menu\" href=\"home.html\">Home</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_support.html\">Support</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_driver.html\">Driver</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_mixer.html\">Mixer</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_filter.html\">Filter</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_effect.html\">Effect</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_buffer.html\">Buffer</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_emitter.html\">Emitter</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_scenery.html\">Scenery</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_sensor.html\">Sensor</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_matrix.html\">Matrix</a></li>");
    document.write("     <li><a id=\"menu\" href=\"aax_audioframe.html\">AudioFrame</a></li>");
  }
  document.write("     <p><li><a id=\"menu\" href=\"aaxs_file_format.html\">AAXS Files</a></li>");
  document.write("     <li><a id=\"menu\" href=\"occlusion.html\">Occlusion</a></li>");
 
  document.write("    </ul></div></td>");
  document.write("   <td class=\"default\" width=\"680\" rowspan=\"2\">");
  document.write("    <div class=\"default\">");

  if (history.length > 1) {
    document.write("<div onclick=\"history.forward()\"><img src=\"images/fwd.png\" style=\"cursor: pointer\" align=\"right\" alt=\"Fwd\"></div>");
  }
  if (history.length > 0) {
    document.write("<div onclick=\"history.back()\"><img src=\"images/back.png\" style=\"cursor: pointer\" align=\"left\" alt=\"Back\"></div>");
  }
}

function addFooter( sideText )
{
  document.write("   </div></td>");
  document.write("  </tr>");
  document.write("  <tr class=\"comment\">");
  document.write("   <td class=\"comment\">");
  document.write( sideText );
  document.write("   </td>");
  document.write("  </tr>");
  document.write(" </tbody>");
  document.write(" </table></div>");

  var url = window.location.href.toString();
  var ref = url.extract("#");
  if (ref != null) {
    document.getElementById(ref).scrollIntoView({ behavior: 'smooth' });
  }
}

function addHeader( title, fnClass, titleText )
{
  document.write("  <H4 id=\""+title+"\"><!-- a href=\"aax_"+fnClass.toLowerCase()+"_"+title.toLowerCase()+".html\" -->"+titleText+"<!-- /a --></H4>");
}

function addFunction( title, fnClass, name )
{
  document.write("  <a href=\"aax_"+fnClass.toLowerCase()+"_"+title.toLowerCase()+".html#aax"+fnClass+name+"\">aax"+fnClass+name+"</a><br>");
}

function addSharedFunction( title, fnClass, name )
{
  shared_name = name.toLowerCase().replace("get","set");
  document.write("  <a href=\"aax_"+shared_name.replace("deregister","register")+".html#aax"+fnClass+name+"\">aax"+fnClass+name+"</a><br>");
}

function addFEFunction( FEtype, FEext, FE )
{
  if (FE) FE_ = "_"+FE;
  else FE_ = "";
  FE = FE || "";

  if (FEext) {
    document.write("  <a href=\"aax_"+FEtype.toLowerCase()+"_"+FEext.toLowerCase()+FE_.toLowerCase()+".html\">"+FEtype+" "+FEext+" "+FE+"</a><br>");
  } else {
    document.write("  <a href=\"aax_"+FEtype.toLowerCase()+FE_.toLowerCase()+".html\">"+FEtype+" "+FE+"</a><br>");
  }
}

function addDefine( title, fnClass, name )
{
  document.write("  <a href=\"aax_"+fnClass.toLowerCase()+"_"+title.toLowerCase()+".html#aax"+fnClass+name+"\">aax"+fnClass+name+"</a><br>");
}

