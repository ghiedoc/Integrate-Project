/**
 * Paano yung mga subcontent(description) parang katulad din
 * ba nung nasa baba keme
 */

// Counting Numbers
if (sessionStorage.getItem("ID") === "1") {
    var titles = ["Count 1-100", "Skip Counting", "Comparisons", "Place Values", "Ordinal Numbers"];
    var imageLoc = [
        "../Math Page/img-math/counting numbers/Counting Num.png",
        "../Math Page/img-math/counting numbers/Skip Counting.png",
        "../Math Page/img-math/counting numbers/Comparisons.png",
        "../Math Page/img-math/counting numbers/Place Values.png",
        "../Math Page/img-math/counting numbers/Ordinal Num.png",
    ];
    var subcontent = [
        "Counting numbers are used to count objects. It is the act of determining the quantity or the total number of objects in a set or a group.",
        "Skip counting is a method of counting forward by numbers other than 1. You can do the counting while skipping a number or numbers in between. It is helpful to count quick.",
        "Comparisons is to examine the differences between numbers, quantities, or values to decide if it is greater than, smaller than or equal to another quantity.",
        "Place value is how much each digit is worth, based on what place it has in a number. Each place or spot in a number has its own place value.",
        "An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th etc. Most ordinal numbers end in \"th\" except for, first (1st) and second(2nd)."    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }

    // Addition
} else if (sessionStorage.getItem("ID") === "2") {
    var titles = ["Introduction to Addition", "Visual Represetation", "Addends, Sum, and Basic Computation", "Vertical Addition", "Addition with regrouping", "Addition without regrouping", "Word Problems"];
    var imageLoc = [
        "../Math Page/img-math/addition/Addition.PNG",
        "../Math Page/img-math/addition/Visual Rep.PNG",
        "../Math Page/img-math/addition/Basic Computation.PNG",
        "../Math Page/img-math/addition/Vetical Add.PNG",
        "../Math Page/img-math/addition/Regrouping.PNG",
        "../Math Page/img-math/addition/Without Regrouping.PNG",
        "../Math Page/img-math/addition/Word Problem.PNG",
    ];
    var subcontent = [
        "Addition is taking two or more numbers and adding them together",
        "Visual Representation consists of materials (mostly with pictures or images) to help interpret the numbers",
        "Basic Computation is when things are put together, we do addition. Sum is the result of adding two or more numbers. Addends is any of the numbers that are added together",
        "Vertical Addition is addition by writing one number below the other and then adding one column at a time. ",
        "Regrouping is when the numbers you are adding come out to two-digit numbers if they are not in the furthermost left column",
        "Without Regrouping adding digit number without carrying. In two-digit number, one number is in ones place and other number is in tens place.",
        "Word Problem is a few sentences describing a 'real-life' scenario where a problem needs to be solved by way of a mathematical calculation."
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }
    // Subtraction
} else if (sessionStorage.getItem("ID") === "3") {
    var titles = ["Subracting using Objects", "Subtracting Sentence", "Subtracting Minuend and Subtrahend", "Subtraction with regrouping", "Subtraction without regrouping"];
    var imageLoc = [
        "../Math Page/img-math/subtraction/Subtracting Obj.PNG",
        "../Math Page/img-math/subtraction/Subtracting Sentence.PNG",
        "../Math Page/img-math/subtraction/Minuend Subtrahend.PNG",
        "../Math Page/img-math/subtraction/With regrouping.PNG",
        "../Math Page/img-math/subtraction/Without regrouping.PNG",
    ];
    var subcontent = [
        "A subtracting objects is a kind of subtracting numbers that uses objects like shapes, animals, foods and other related things that can be counted as well. ",
        "A subtracting sentence is like subtracting objects but in this scenario the students will be given a word problem or sentence problem and supported by some images so that it can be easily to understand by the students",
        "The number in a subtraction sentence from which we subtract another number is called a minuend. A subtraction sentence consists of 3 numbers Minuend, Subtrahend and Difference Minuend is the first number in a subtraction sentence. We subtract subtrahend from the minuend to get the difference",
        "A subtraction with regrouping is a process of exchanging one’s and tens into ten ones. We use regrouping in subtraction when the minuend is smaller than the subtrahend",
        "A subtraction without regrouping is like a normal subtraction, no borrowing of numbers and no regrouping of numbers. ",
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }

    // Fraction
} else if (sessionStorage.getItem("ID") === "4") {
    var titles = ["Introduction to Fraction", "Parts of Fraction", "Writing of fractions"];
    var imageLoc = [
        "../Math Page/img-math/fraction/Intro to Fraction.png",
        "../Math Page/img-math/fraction/Parts of Fraction.png",
        "../Math Page/img-math/fraction/Writing Frac.png",
    ];
    var subcontent = [
        "Fractions are numbers that represent a part of the whole. When an object or a group of objects is divided into equal parts, then each individual part is a fraction.",
        "Fraction is composed of two numbers: the numerator is the top part of the fraction that represents how many parts it has, while the bottom part is the denominator which represents the number of equal parts that a whole has.",
        "Fraction can also be written in word form. Write the numerator, add a hyphen and then spell out the denominator. In word form, the fraction ½ would be spelled out as one-half."    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }


    // Money
} else if (sessionStorage.getItem("ID") === "5") {
    var titles = ["Introduction to Money", "Bills and Coins", "Computing Money"];
    var imageLoc = [
        "../Math Page/img-math/money/Intro to Money.png",
        "../Math Page/img-math/money/Bills and Coins.png",
        "../Math Page/img-math/money/Counting Money.png",
    ];
    var subcontent = [
        "The very first step of a child in learning about the concept of money. You will learn the definition and what is the importance of money.",
        "This is where we will discuss the different bills and coins of the Philippine Peso Currency. You will learn the different amount from 1 peso to 1000 pesos!",
        "Now that we learn the basics of Philippine Peso bills and coins. It is time to put it to practice by computing different money problems."
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }

    // Shapes
} else if (sessionStorage.getItem("ID") === "6") {
    var titles = ["Introduction to Shapes", "Basic Shapes", "Regular Polygons", "Irregular Polygons", "Identifying Shapes"];
    var imageLoc = [
        "../Math Page/img-math/shapes/sub1.png",
        "../Math Page/img-math/shapes/sub2.png",
        "../Math Page/img-math/shapes/sub3.png",
        "../Math Page/img-math/shapes/sub4.png",
        "../Math Page/img-math/shapes/sub5.png",

    ];
    var subcontent = [
        "The object of art is to give life a shape! That’s why shapes are everywhere! In this topic, you will be introduced to the concept of Shapes and why is it important to learn it.",
        "Learning from the basic strengthens your foundation. In this topic, you will be familiarized with the basic shapes and its example. ",
        "Polygons are fashionable at the moment - particularly in arcades! In this topic, basic introduction to polygons will be discussed, focusing to the regular polygons and its example.",
        "Now that you already know Regular Polygons, it’s Irregular Polygons time! In this topic, you will be able to know irregular polygons and differentiate it from the regular polygons.",
        "Understanding shapes will enable students to be more in tune to the world around them and see the connections between objects, as well as being better able to appreciate artistic works.",

    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }

    // Time
} else if (sessionStorage.getItem("ID") === "7") {
    var titles = ["Telling Time", "Reading Time in Minutes", "Quarter Hour and Half Hour"];
    var imageLoc = [
        "../Math Page/img-math/time/Telling time.png",
        "../Math Page/img-math/time/time in minutes.png",
        "../Math Page/img-math/time/Quarter and Halft Hour.png",
    ];
    var subcontent = [
        "Telling time will tell you how to read a clock. It aims to keep track of the hours.",
        "Help students learn how to tell time to the quarter hour and half hour. The point on a clock's face marking either 15 minutes after or 15 minutes before an hour and 30 minutes after or 30 minutes before an hour. ",
        "This lesson will let you know the difference between minutes and hour. It will allow you to learn to read the clock in hour and minutes left before the next hour.s",
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }

    // Measurement
} else if (sessionStorage.getItem("ID") === "8") {
    var titles = ["Capacity", "Height and length", "Measuring and comparing length"];
    var imageLoc = [
        "../Math Page/img-math/measurement/Capacity.png",
        "../Math Page/img-math/measurement/h and l.png",
        "../Math Page/img-math/measurement/Measurement.png",
    ];
    var subcontent = [
        "Heavy is a great weight or difficult to lift or move. Light is the opposite of heavy, it has small weight and easy to lift or move.",
        "The measurement from base to top or of a standing person from head to foot. The measurement or extent of something from end to end, the greater of two or the greatest of three dimensions of a body.",
        "The action of measuring something. The size, length, or amount of something, as established by measuring. Compare the two lengths of the objects by first ensuring that both objects are measured in the same measuring unit, such as centimeters.",
        "The maximum amount that something can contain. Fully occupying the available area or space."
    ];
    for (var temp = 1; temp <= titles.length; temp++) {
        Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
    }

}

function Populate(temp, Head_title, image_location, subcontent_text) {
    //lesson content
    let container = document.createElement('div');
    container.className = "container-math";
    container.setAttribute("onclick", "showIDLesson(" + temp + ")");

    //div > row
    let container_row = document.createElement('div');
    container_row.className = "row";

    //div > column_img
    let container_column_img = document.createElement('div');
    container_column_img.className = "column-img";

    //content of column_img
    let imgsrc = document.createElement("img");
    imgsrc.className = "image";
    imgsrc.setAttribute("src", image_location);
    container_column_img.appendChild(imgsrc);

    //div  > column_desc
    let container_column_desc = document.createElement('div');
    container_column_desc.className = "column-desc";

    //content of column_desc
    let title = document.createElement("h1");
    var titletext = document.createTextNode(Head_title);
    title.appendChild(titletext);


    let hrline = document.createElement("hr");

    let textcontent = document.createElement("h3");
    var content = document.createTextNode(subcontent_text);
    textcontent.appendChild(content);
    //

    //appendingChild to container_column_desc
    container_column_desc.appendChild(title);
    container_column_desc.appendChild(hrline);
    container_column_desc.appendChild(textcontent);

    //appendingChild to container and container_row
    container.appendChild(container_row);
    container_row.appendChild(container_column_img);
    container_row.appendChild(container_column_desc);
    document.body.appendChild(container);
}

function showIDLesson(id) {
    // alert(id);
    sessionStorage.setItem("lessonID", id);
    window.location.href = "../Math Page/vid-math.html";

}