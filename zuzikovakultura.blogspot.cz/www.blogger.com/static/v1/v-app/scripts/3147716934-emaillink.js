// Copyright 2003 Google Inc. All Rights Reserved.
function printEmail(addr, emailString) {
  var a = addr.substring(4, addr.length - 4);
  // class="email" makes this hcard compliant
  document.write("<a class='email' href='mailto:" + a + "'>" + emailString +
                 '</a>');
}
