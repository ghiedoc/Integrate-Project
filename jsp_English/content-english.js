let url = "";

if (sessionStorage.getItem("ID") == 1 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://www.youtube.com/embed/DXcX6EYdqU0?controls=0';
    youtubeVid(url);
    createNextBtn1(1);
}

else if (sessionStorage.getItem("ID") == 1 && sessionStorage.getItem("lessonID") == 2) {
    url = "https://www.youtube.com/embed/BG7oqAQsv-k?controls=0";
    youtubeVid(url);
    createNextBtn1(2);
}

else if (sessionStorage.getItem("ID") == 1 && sessionStorage.getItem("lessonID") == 3) {
    url = "https://www.youtube.com/embed/eeJEVtIvSwo?controls=0";
    youtubeVid(url);
    createNextBtn1(3);
}

else if (sessionStorage.getItem("ID") == 1 && sessionStorage.getItem("lessonID") == 4) {
    url = "https://www.youtube.com/embed/iMmjeJKpvxY?controls=0";
    youtubeVid(url);
    createNextBtn1(4);
}

else if (sessionStorage.getItem("ID") == 1 && sessionStorage.getItem("lessonID") == 5) {
    url = "https://www.youtube.com/embed/-J7HcVLsCrY?controls=0";
    youtubeVid(url);
    createAssessmentBtn();
}
//2
else if (sessionStorage.getItem("ID") == 2 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://www.youtube.com/embed/zCz3xerrr1o?controls=0';
    youtubeVid(url);
    createNextBtn2(1);
}

else if (sessionStorage.getItem("ID") == 2 && sessionStorage.getItem("lessonID") == 2) {
    url = "https://www.youtube.com/embed/IoCHarKoNfI?controls=0";
    youtubeVid(url);
    createNextBtn2(2);
}

else if (sessionStorage.getItem("ID") == 2 && sessionStorage.getItem("lessonID") == 3) {
    url = "https://www.youtube.com/embed/JX082BcOsG8?controls=0";
    youtubeVid(url);
    createNextBtn2(3);
}

else if (sessionStorage.getItem("ID") == 2 && sessionStorage.getItem("lessonID") == 4) {
    url = "https://www.youtube.com/embed/9C1qj06xduo?controls=0";
    youtubeVid(url);
    createNextBtn2(4);
}

else if (sessionStorage.getItem("ID") == 2 && sessionStorage.getItem("lessonID") == 5) {
    url = "https://www.youtube.com/embed/Sw2KZki-eaA?controls=0";
    youtubeVid(url);
    createAssessmentBtn();
}


//3
else if (sessionStorage.getItem("ID") == 3 && sessionStorage.getItem("lessonID") == 1) {

}

else if (sessionStorage.getItem("ID") == 3 && sessionStorage.getItem("lessonID") == 2) {

}

else if (sessionStorage.getItem("ID") == 3 && sessionStorage.getItem("lessonID") == 3) {

}

else if (sessionStorage.getItem("ID") == 3 && sessionStorage.getItem("lessonID") == 4) {

}

else if (sessionStorage.getItem("ID") == 3 && sessionStorage.getItem("lessonID") == 5) {

}




//4
else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://www.youtube.com/embed/tquecIG-Pws?controls=0';
    youtubeVid(url);
    createNextBtn4(1);
}

else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 2) {
    url = "https://www.youtube.com/embed/ZY3U25QMxS8?controls=0";
    youtubeVid(url);
    createNextBtn4(2);
}

else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 3) {
    url = "https://www.youtube.com/embed/BRZajMzxjeY?controls=0";
    youtubeVid(url);
    createNextBtn4(3);
}

else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 4) {
    url = "https://www.youtube.com/embed/xePbH2sN_ZI?controls=0";
    youtubeVid(url);
    createNextBtn4(4);
}

else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 5) {
    url = "https://www.youtube.com/embed/m_QkDFf-Hu8?controls=0";
    youtubeVid(url);
    createNextBtn4(5);
}
else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 6) {
    url = "https://www.youtube.com/embed/H2Z4p0au1yk?controls=0";
    youtubeVid(url);
    createNextBtn4(6);
}
else if (sessionStorage.getItem("ID") == 4 && sessionStorage.getItem("lessonID") == 7) {
    url = "https://www.youtube.com/embed/_VK-kXkXTBc?controls=0";
    youtubeVid(url);
    createAssessmentBtn();
}


//5
else if (sessionStorage.getItem("ID") == 5 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EYjuOWR-kk9OiiDdQeTE4jQBBI2iSqSWAiZqUgLfiCT3Rg?e=b8ZSWR';
    powerpoint(url);
    createNextBtn5(1);

}

else if (sessionStorage.getItem("ID") == 5 && sessionStorage.getItem("lessonID") == 2) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EQCt_HGsysZDnVWY3LHiO5YBSeg4UbRRXknj23F3yOwPPw?e=L6gXbB';
    powerpoint(url);
    createNextBtn5(2);
}

else if (sessionStorage.getItem("ID") == 5 && sessionStorage.getItem("lessonID") == 3) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EW8NZ-loncFLu4JYdlXC274Bs3GGkuAqnkXouOG0k40zaw?e=y8WdIJ';
    powerpoint(url);
    createNextBtn5(3);
}

else if (sessionStorage.getItem("ID") == 5 && sessionStorage.getItem("lessonID") == 4) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/ER-CnJNsYJtKoY7APwpyFdcB9Mh3EKCqyyvmbARng_h9zQ?e=b9JUan';
    powerpoint(url);
    createNextBtn5(4);
}

else if (sessionStorage.getItem("ID") == 5 && sessionStorage.getItem("lessonID") == 5) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EY9D8dpGyPtAlCLvzZ8rCTAB09lybdl2iGr95YG2cThx7w?e=ADV7tI';
    powerpoint(url);
    createAssessmentBtn();
}


//6
else if (sessionStorage.getItem("ID") == 6 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://www.youtube.com/embed/JSD-nq8iA1g?controls=0';
    youtubeVid(url);
    createNextBtn6(1);
}

else if (sessionStorage.getItem("ID") == 6 && sessionStorage.getItem("lessonID") == 2) {
    url = "https://www.youtube.com/embed/RW9iXVpK4SA?controls=0";
    youtubeVid(url);
    createNextBtn6(2);
}

else if (sessionStorage.getItem("ID") == 6 && sessionStorage.getItem("lessonID") == 3) {
    url = "https://www.youtube.com/embed/9ngxGjtAaGI?controls=0";
    youtubeVid(url);
    createNextBtn6(3);
}

else if (sessionStorage.getItem("ID") == 6 && sessionStorage.getItem("lessonID") == 4) {
    url = "https://www.youtube.com/embed/Vk-pFf9V5rw?controls=0";
    youtubeVid(url);
    createNextBtn6(4);
}

else if (sessionStorage.getItem("ID") == 6 && sessionStorage.getItem("lessonID") == 5) {
    url = "https://www.youtube.com/embed/IYwq1DUrc3E?controls=0";
    youtubeVid(url);
    createAssessmentBtn();
}


//7
else if (sessionStorage.getItem("ID") == 7 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EVh4ehq0wQdKn98y2-wcn_ABUZqE9cwT1tzcqruYctA7sg?e=bJENc0';
    powerpoint(url);
    createNextBtn7(1);
}

else if (sessionStorage.getItem("ID") == 7 && sessionStorage.getItem("lessonID") == 2) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/Ee_cinlJaxNFgjat57T880IBBYKZhiU1KkPIQjK1dWjCsw?e=1XJu1B';
    powerpoint(url);
    createNextBtn7(2);
}

else if (sessionStorage.getItem("ID") == 7 && sessionStorage.getItem("lessonID") == 3) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EYTOXJGPrbRIlqD6cByyEYUBgyCU5f_l3-4P5Qz_AMsHhA?e=1bs0Ls';
    powerpoint(url);
    createNextBtn7(3);
}

else if (sessionStorage.getItem("ID") == 7 && sessionStorage.getItem("lessonID") == 4) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/ESHLU13VJwdMoTv0FkK65lwB_ygdy_bEs53M54QjNtG5Ew?e=yObc00';
    powerpoint(url);
    createNextBtn7(4);
}

else if (sessionStorage.getItem("ID") == 7 && sessionStorage.getItem("lessonID") == 5) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/Eewk_Bl_hghAqLi6kZFgl8QBP84NCKRx5-abtmLiPjtB3g?e=nMNVBJ';
    powerpoint(url);
    createAssessmentBtn();
}

//8
else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EaA8BiU1gY5Em-9k8O9hPmYBddzEklt_ybICdCP1mJOIYg?e=PbxEZS';
    powerpoint(url);
    createNextBtn8(1);
}

else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 2) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EQFcA_4tZJBIi_uBZ-YmKWgBBL8LTkEDuBrrUVQS0gPNww?e=8sd1Fy';
    powerpoint(url);
    createNextBtn8(2);
}

else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 3) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EWX004kcFrhEu4eNS-oD84sBb35Nq4SRzXxPa4loawvw6w?e=cJEQrW';
    powerpoint(url);
    createNextBtn8(3);
}

else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 4) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EfVhhmuiFDRCvnRt0W_T6tQBZcrZgeDT6yabP1KXuwb4Mw?e=0vvnU6';
    powerpoint(url);
    createNextBtn8(4);
}
else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 5) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EXPQWXeAxdBDk-xuInMABGMBbSyq1NHYrXhGqeAzk0Xo9Q?e=HxUK9L';
    powerpoint(url);
    createNextBtn8(5);
}
else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 6) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/Eez4nUc4hldBmfEJF0G64p8B5v_3rSkDPik5-1nkkWCJJA?e=ZmLJ6u';
    powerpoint(url);
    createNextBtn8(6);
}
else if (sessionStorage.getItem("ID") == 8 && sessionStorage.getItem("lessonID") == 7) {
    url = 'https://nationalueduph-my.sharepoint.com/:p:/g/personal/llanetaje_students_national-u_edu_ph/EV0F_Om9US9HqrS-5-n8WXgBetzMmDwMiLt4ok7aK175yA?e=Ii4OnE';
    powerpoint(url);
    createAssessmentBtn();
}

//9
else if (sessionStorage.getItem("ID") == 9 && sessionStorage.getItem("lessonID") == 1) {
    url = 'https://www.youtube.com/embed/8_s1CRs1rJk?controls=0';
    youtubeVid(url);
    createNextBtn9(1);
}

else if (sessionStorage.getItem("ID") == 9 && sessionStorage.getItem("lessonID") == 2) {
    url = "https://www.youtube.com/embed/FomVrsf-PJ0?controls=0";
    youtubeVid(url);
    createNextBtn9(2);
}

else if (sessionStorage.getItem("ID") == 9 && sessionStorage.getItem("lessonID") == 3) {
    url = "https://www.youtube.com/embed/0Wrv_ZviMEc?controls=0";
    youtubeVid(url);
    createNextBtn9(3);
}

else if (sessionStorage.getItem("ID") == 9 && sessionStorage.getItem("lessonID") == 4) {
    url = "https://www.youtube.com/embed/cu8j7YnunzQ?controls=0";
    youtubeVid(url);
    createNextBtn9(4)
}

else if (sessionStorage.getItem("ID") == 9 && sessionStorage.getItem("lessonID") == 5) {
    url = "https://www.youtube.com/embed/oes1PE58WQE?controls=0";
    youtubeVid(url);
    createAssessmentBtn();
}

else {

}

function youtubeVid(url) {
    let container = document.createElement('div');
    container.className = "container";
    container.setAttribute("style", "width:100%;height:80%");


    let framePane = document.createElement('iframe');
    framePane.setAttribute("style", "width:100%;height:100%");
    framePane.setAttribute("src", url);


    var el = document.getElementById('marker');
    el.setAttribute("style", "width:100%;height:100%");
    container.appendChild(framePane);

    el.appendChild(container);
}

function powerpoint(url) {
    var el = document.getElementById('container');
    el.innerHTML = '<iframe src="' + url + '/_layouts/15/Doc.aspx?sourcedoc={25063ca0-8135-448e-9bef-64f0ef613e66}&amp;action=embedview&amp;wdAr=1.4148802017654476" width="100%" height="100%" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';
}

function hi() {
    window.location.href = "../English Page/assessment_english.html";
}

function createAssessmentBtn() {
    var myDiv = document.getElementById("marker");
    // creating button element  
    var button = document.createElement('BUTTON');  // sa part na to sean check mo
    // creating text to be 
    //displayed on button 
    var text = document.createTextNode("Assessment");

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 43%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";
    // appending text to button 
    button.appendChild(text);
    button.onclick = hi;
    // appending button to div 
    myDiv.appendChild(button);
}

function createNextBtn1(i) {
    var myDiv = document.getElementById("marker");
    // creating button element  
    var button = document.createElement('BUTTON');  // sa part na to sean check mo
    // creating text to be 
    //displayed on button 
    var text = document.createTextNode("Next");

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";
    // appending text to button 
    button.appendChild(text);
    if (i == 1) {
        button.onclick = nextUrl1_1;
    } else if (i == 2) {
        button.onclick = nextUrl1_2;
    }
    else if (i == 3) {
        button.onclick = nextUrl1_3;
    }
    else if (i == 4) {
        button.onclick = nextUrl1_4;
    }
    //button.onclick = hello;
    // appending button to div 
    myDiv.appendChild(button);
}

function createNextBtn2(i){
    var myDiv = document.getElementById("marker");
    var button = document.createElement('BUTTON'); 
    var text = document.createTextNode("Next");
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";
    button.appendChild(text);
    if (i == 1) {
        button.onclick = nextUrl2_1;
    } else if (i == 2) {
        button.onclick = nextUrl2_2;
    }
    else if (i == 3) {
        button.onclick = nextUrl2_3;
    }
    else if (i == 4) {
        button.onclick = nextUrl2_4;
    }
    myDiv.appendChild(button);
}

function createNextBtn4(i){
    
    var myDiv = document.getElementById("marker");          
    var button = document.createElement('BUTTON');  
    var text = document.createTextNode("Next");
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn"; 
    button.appendChild(text); 
    if(i==1){
        button.onclick = nextUrl4_1;
    }else if (i==2){
         button.onclick = nextUrl4_2;
    }
    else if (i==3){
        button.onclick = nextUrl4_3;
    }
    else if (i==4){
        button.onclick =nextUrl4_4;
    }else if(i==5){
        button.onclick =nextUrl4_5;
    }else if(i==6){
        button.onclick =nextUrl4_6;
    }
    myDiv.appendChild(button);
}

function createNextBtn5(i){
    var myDiv = document.getElementById("marker");          
    var button = document.createElement('BUTTON'); 
    var text = document.createTextNode("Next"); 
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";
    button.appendChild(text); 
    if(i==1){
        button.onclick = nextUrl5_1;
    }else if (i==2){
         button.onclick = nextUrl5_2;
    }
    else if (i==3){
        button.onclick = nextUrl5_3;
    }
    else if (i==4){
        button.onclick =nextUrl5_4;
    }
    myDiv.appendChild(button);
}

function createNextBtn6(i) {
    var myDiv = document.getElementById("marker");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode("Next");
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";

    button.appendChild(text);

    if (i == 1) {
        button.onclick = nextUrl6_1;
    } else if (i == 2) {
        button.onclick = nextUrl6_2;
    } else if (i == 3) {
        button.onclick = nextUrl6_3;
    } else if (i == 4) {
        button.onclick = nextUrl6_4;
    }

    myDiv.appendChild(button);

}

function createNextBtn7(i) {
    var myDiv = document.getElementById("marker");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode("Next");
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";

    button.appendChild(text);

    if (i == 1) {
        button.onclick = nextUrl7_1;
    } else if (i == 2) {
        button.onclick = nextUrl7_2;
    } else if (i == 3) {
        button.onclick = nextUrl7_3;
    } else if (i == 4) {
        button.onclick = nextUrl7_4;
    } else if (i == 5) {
        button.onclick = nextUrl7_5;
    }

    myDiv.appendChild(button);
}

function createNextBtn8(i) {
    var myDiv = document.getElementById("marker");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode("Next");
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";

    button.appendChild(text);

    if (i == 1) {
        button.onclick = nextUrl8_1;
    } else if (i == 2) {
        button.onclick = nextUrl8_2;
    } else if (i == 3) {
        button.onclick = nextUrl8_3;
    } else if (i == 4) {
        button.onclick = nextUrl8_4;
    } else if(i == 5){
        button.onclick = nextUrl8_5;
    } else if(i == 6){
        button.onclick = nextUrl8_6;
    }
    myDiv.appendChild(button);
}

function createNextBtn9(i) {
    var myDiv = document.getElementById("marker");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode("Next");
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      ".createAssessmentBtn{ font-family: 'Segoe UI,', sans-serif;" +
      "color: white; margin: auto;font-size: 2.5rem; left: 46%; font-size: 20px; height: auto;" +
      "font-weight: bold; border: none; position: absolute; top:90%;" +
      "padding: 10px 30px; height: text-align: center;" +
      "text-decoration: none; display: inline-block;font-size: 25px;" +
      "cursor: pointer;border-radius: 34px; border-style: solid; background-color:#38a2cc;}";
    document.head.appendChild(style);
    button.className = "createAssessmentBtn";

    button.appendChild(text);

    if (i == 1) {
        button.onclick = nextUrl9_1;
    } else if (i == 2) {
        button.onclick = nextUrl9_2;
    } else if (i == 3) {
        button.onclick = nextUrl9_3;
    } else if (i == 4) {
        button.onclick = nextUrl9_4;

    }
    myDiv.appendChild(button);
}

function nextUrl1_1() {
    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";

}

function nextUrl1_2() {
    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl1_3() {
    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl1_4() {
    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";

}

function nextUrl2_1() {
    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl2_2() {
    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl2_3() {
    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl2_4() {
    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";

}

function nextUrl4_1() {
    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl4_2() {
    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl4_3() {
    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl4_4() {
    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl4_5() {
    sessionStorage.setItem("lessonID", 6);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl4_6() {
    sessionStorage.setItem("lessonID", 7);
    window.location.href = "../English Page/vid-eng.html";

}

function nextUrl5_1() {
    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl5_2() {
    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl5_3() {
    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";

}
function nextUrl5_4() {
    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";

}

function nextUrl6_1() {
    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl6_2() {
    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl6_3() {
    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl6_4() {
    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";
}

function nextUrl7_1() {
    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl7_2() {
    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl7_3() {
    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl7_4() {
    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl7_5() {
    sessionStorage.setItem("lessonID", 6);
    window.location.href = "../English Page/vid-eng.html";
}

function nextUrl8_1() {

    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl8_2() {

    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl8_3() {

    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl8_4() {

    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl8_5() {

    sessionStorage.setItem("lessonID", 6);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl8_6() {

    sessionStorage.setItem("lessonID", 7);
    window.location.href = "../English Page/vid-eng.html";
}

function nextUrl9_1() {

    sessionStorage.setItem("lessonID", 2);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl9_2() {

    sessionStorage.setItem("lessonID", 3);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl9_3() {

    sessionStorage.setItem("lessonID", 4);
    window.location.href = "../English Page/vid-eng.html";
}
function nextUrl9_4() {

    sessionStorage.setItem("lessonID", 5);
    window.location.href = "../English Page/vid-eng.html";
}


