let url = "";

// UNIT 1": HUMAN BODY PARTS
if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/eyp-sgodg94?controls=0";
  youtubeVid(url);
  createNextBtn1(1);
} else if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url = "https://www.youtube.com/embed/k9OqTFZMs2s?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 2: LIVING THINGS
else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/SmlumMnd-eY?controls=0";
  youtubeVid(url);
  createNextBtn2(1);
} else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url = "https://www.youtube.com/embed/94DTODVYrx8?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 3: PLANTS
else if (
  sessionStorage.getItem("ID") == 3 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/caAg-2LjIVM?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 4: ANIMALS
else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/jcXIoN8Jq-8?controls=0";
  youtubeVid(url);
  createNextBtn4(1);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url = "https://www.youtube.com/embed/0Y4HF66NiPU?controls=0";
  youtubeVid(url);
  createNextBtn4(2);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 3
) {
  url = "https://www.youtube.com/embed/GOXQcm8mnXg?controls=0";
  youtubeVid(url);
  createNextBtn4(3);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 4
) {
  url = "https://www.youtube.com/embed/e8eBkUIC4-4?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 5: NON-LIVING THINGS
else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url = "https://www.youtube.com/embed/vz62QZlVpqw?controls=0";
  youtubeVid(url);
  createNextBtn5(1);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 2
) {
  // weather
  url = "https://www.youtube.com/embed/sn6GLgaTY0M?controls=0";
  youtubeVid(url);
  createNextBtn5(2);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 3
) {
  url = "https://www.youtube.com/embed/AUinjnfsDH8?controls=0";
  youtubeVid(url);
  createNextBtn5(3);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 4
) {
  url = "https://www.youtube.com/embed/CJkw3T1IzYk?controls=0";
  youtubeVid(url);
  createAssessmentBtn();
} else {
}

function youtubeVid(url) {
  let container = document.createElement("div");
  container.className = "container";
  container.setAttribute("style", "width:100%;height:80%");

  let framePane = document.createElement("iframe");
  framePane.setAttribute("style", "width:100%;height:100%");
  framePane.setAttribute("src", url);

  //video frame edit here
  var el = document.getElementById("marker");
  el.setAttribute("style", "width:60%;height:100%;margin:auto;");
  container.appendChild(framePane);

  el.appendChild(container);
}

function powerpoint(url) {
  var el = document.getElementById("container");
  el.setAttribute("style", "width:100%;height:100%");
  el.innerHTML =
    '<iframe src="' +
    url +
    '/_layouts/15/Doc.aspx?sourcedoc={25063ca0-8135-448e-9bef-64f0ef613e66}&amp;action=embedview&amp;wdAr=1.4148802017654476" width="1089px" height="793px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';
}

function hi() {
  window.location.href = "../Science Page/assessment_sci.html";
}

function nextButtonLoc() {
  window.location.href = "../Science Page/assessment_sci.html";
}

function createAssessmentBtn() {
  // creating button element
  var myDiv = document.getElementById("marker");
  // creating text to be
  var button = document.createElement("BUTTON");
  //displayed on button
  var text = document.createTextNode("Assessment");

  // button style
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
    "color: white; margin: auto;font-size: 2.5rem; left: 43%; font-size: 20px; height: auto" +
    "font-weight: bold; border: none; position: absolute; top:91%;" +
    "padding: 10px 30px; height: text-align: center;" +
    "text-decoration: none; display: inline-block;font-size: 25px" +
    "cursor: pointer;border-radius: 34px; border-style: solid; background-color: #613870;}";
  document.head.appendChild(style);
  button.className = "createAssessmentBtn";

  // appending text to button
  button.appendChild(text);
  button.onclick = hi;
  // appending button to div
  myDiv.appendChild(button);
}

//CREATE NEXT BUTTON
function createNextBtn1(i) {
  var myDiv = document.getElementById("marker");
  var button = document.createElement("BUTTON");
  var text = document.createTextNode("Next");
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
    "color: white; margin: auto;font-size: 2.5rem; left: 45%; font-size: 20px; height: auto" +
    "font-weight: bold; border: none; position: absolute; top:91%;" +
    "padding: 10px 30px; height: text-align: center;" +
    "text-decoration: none; display: inline-block;font-size: 25px" +
    "cursor: pointer;border-radius: 34px; border-style: solid; background-color: #613870;}";
  document.head.appendChild(style);
  button.className = "createAssessmentBtn";

  button.appendChild(text);
  if (i == 1) {
    button.onclick = nextUrl1_1;
  }
  myDiv.appendChild(button);
}

function createNextBtn2(i) {
  
  var myDiv = document.getElementById("marker");
  var button = document.createElement("BUTTON");
  var text = document.createTextNode("Next");
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
    "color: white; margin: auto;font-size: 2.5rem; left: 45%; font-size: 20px; height: auto" +
    "font-weight: bold; border: none; position: absolute; top:91%;" +
    "padding: 10px 30px; height: text-align: center;" +
    "text-decoration: none; display: inline-block;font-size: 25px" +
    "cursor: pointer;border-radius: 34px; border-style: solid; background-color: #613870;}";
  document.head.appendChild(style);
  button.className = "createAssessmentBtn";
  button.appendChild(text);
  if (i == 1) {
    button.onclick = nextUrl2_1;
  }
  myDiv.appendChild(button);
}

//3

function createNextBtn4(i) {
  var myDiv = document.getElementById("marker");
  var button = document.createElement("BUTTON");
  var text = document.createTextNode("Next");
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
    "color: white; margin: auto;font-size: 2.5rem; left: 45%; font-size: 20px; height: auto" +
    "font-weight: bold; border: none; position: absolute; top:91%;" +
    "padding: 10px 30px; height: text-align: center;" +
    "text-decoration: none; display: inline-block;font-size: 25px" +
    "cursor: pointer;border-radius: 34px; border-style: solid; background-color: #613870;}";
  document.head.appendChild(style);
  button.className = "createAssessmentBtn";
  button.appendChild(text);
  if (i == 1) {
    button.onclick = nextUrl4_1;
  } else if (i == 2) {
    button.onclick = nextUrl4_2;
  } else if (i == 3) {
    button.onclick = nextUrl4_3;
  }
  myDiv.appendChild(button);
}

function createNextBtn5(i) {
  var myDiv = document.getElementById("marker");
  var button = document.createElement("BUTTON");
  var text = document.createTextNode("Next");
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
    "color: white; margin: auto;font-size: 2.5rem; left: 45%; font-size: 20px; height: auto" +
    "font-weight: bold; border: none; position: absolute; top:91%;" +
    "padding: 10px 30px; height: text-align: center;" +
    "text-decoration: none; display: inline-block;font-size: 25px" +
    "cursor: pointer;border-radius: 34px; border-style: solid; background-color: #613870;}";
  document.head.appendChild(style);
  button.className = "createAssessmentBtn";

  button.appendChild(text);
  if (i == 1) {
    button.onclick = nextUrl5_1;
  } else if (i == 2) {
    button.onclick = nextUrl5_2;
  } else if (i == 3) {
    button.onclick = nextUrl5_3;
  }
  myDiv.appendChild(button);
}

//LINKS
function nextUrl1_1() {
  sessionStorage.setItem("lessonID", 2);
  window.location.href = "../Science Page/vid-sci.html";
}

function nextUrl2_1() {
  sessionStorage.setItem("lessonID", 2);
  window.location.href = "../Science Page/vid-sci.html";
}

//3

function nextUrl4_1() {
  sessionStorage.setItem("lessonID", 2);
  window.location.href = "../Science Page/vid-sci.html";
}
function nextUrl4_2() {
  sessionStorage.setItem("lessonID", 3);
  window.location.href = "../Science Page/vid-sci.html";
}
function nextUrl4_3() {
  sessionStorage.setItem("lessonID", 4);
  window.location.href = "../Science Page/vid-sci.html";
}

function nextUrl5_1() {
  sessionStorage.setItem("lessonID", 2);
  window.location.href = "../Science Page/vid-sci.html";
}
function nextUrl5_2() {
  sessionStorage.setItem("lessonID", 3);
  window.location.href = "../Science Page/vid-sci.html";
}
function nextUrl5_3() {
  sessionStorage.setItem("lessonID", 4);
  window.location.href = "../Science Page/vid-sci.html";
}
