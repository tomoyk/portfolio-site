// Initialization
var DEBUG = 0;
window.onresize = resize;
window.onload = function(){  
  // UNDER CONSTRUCTION
  var bck_vdo = document.getElementById("backvideo");
  var win_width = window.innerWidth;
  var win_height = window.innerHeight;

  // Change video file  
  if(win_width > 960 || win_height > 720){
    if(DEBUG>=1) console.log( "Video-src: " + bck_vdo.getAttribute("src") );
    bck_vdo.setAttribute("src", "./media/Coastline_3581_720p.mp4");
  }else if(win_width > 1920 || win_height > 1080){
    if(DEBUG>=1) console.log( "Video-src: " + bck_vdo.getAttribute("src") );
    bck_vdo.setAttribute("src", "./media/Coastline_3581_1080p.mp4");    
  }
  
  resize();
  
  // Play video
  bck_vdo.play();
}

// Resize elements
function resize(){
  // Get window info
  var win_width = window.innerWidth;
  var win_height = window.innerHeight;
  var vdo = document.getElementById("backvideo");

  // Define global variable
  var vdo_width,vdo_height,diff_width,diff_heigh;

  // Define functions
  function getSize(){
    // Get video info
    vdo_width = vdo.clientWidth;
    vdo_height = vdo.clientHeight;

    // Get difference from window to video
    diff_width = win_width - vdo_width;
    diff_height = win_height - vdo_height;
  }
  function getInfo(msg){
    console.log("["+msg+"]");
    console.log("_Video-width: " + vdo_width + ", Video-height: " + vdo_height);
    console.log("_Window-width: " + win_width + ", Window-height: " + win_height);
    console.log("_Diff-width: " + diff_width +", Diff-height: "+ diff_height);
  }
  function fitHeight(){
    if(DEBUG>=1) console.log("[[[ fitHeight ]]]");
    vdo.style.height = win_height + "px";
    vdo.style.width = "auto";
  }
  function fitWidth(){
    if(DEBUG>=1) console.log("[[[ fitWidth ]]]");
    vdo.style.height = "auto";
    vdo.style.width = win_width + "px";
  }

  // Control checkbox(menu)
  var chk = document.getElementById("menu");
  if(!chk.checked){
    chk.checked = true;
  }

  // Get window and video size
  getSize();
  
  // Debug
  if(DEBUG>=2) getInfo("BEFORE");

  // Fit video to window
  do{
    if( vdo_width * (win_height/vdo_height) < win_width ){
      fitWidth();
    }else{
      fitHeight();
    }
    getSize();

  } while(diff_width >= 0 && diff_height >= 0);
  // while(diff_width > 0 || diff_height > 0);

  // Debug
  if(DEBUG>=2) getInfo("AFTER");

  // Cetering video
  if(diff_width<=0){
    if(DEBUG>=1) console.log("[A] Margin-left: "+ diff_width/2);
    vdo.style.marginLeft = -Math.abs(diff_width/2) + "px";
    vdo.style.marginTop = 0;

  }else if(diff_height<=0){
    if(DEBUG>=1) console.log("[B] Margin-top: "+ diff_height/2);
    vdo.style.marginTop = -Math.abs(diff_height/2) + "px";
    vdo.style.marginLeft = 0;
  }

  // Centering phrase
  var footer = document.getElementById("footer");
  var phrase = document.getElementById("phrase");
  if(DEBUG>=1) console.log("centering: " + footer.clientHeight );
  phrase.style.paddingBottom = footer.clientHeight + "px";

  if(DEBUG>=1) console.log("----- ----- ----- ----- ----- -----");
}
