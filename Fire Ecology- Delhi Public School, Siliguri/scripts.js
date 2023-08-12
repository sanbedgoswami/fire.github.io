navchange();

window.addEventListener('scroll', navchange)
function navchange(){
const scrdist = 50;
const scrpos = window.scrollY;
if(scrpos > scrdist){
  document.getElementById("navbar").style.backgroundColor = "rgba(172, 172, 172, 0.4)";
  document.getElementById("navbar").style.color = "black";
} else{
  document.getElementById("navbar").style.backgroundColor = "rgba(172, 172, 172, 0)";
  document.getElementById("navbar").style.color = "white";
}
}
function checkfordisp() {
    sf = document.getElementById("searchbar");
    sbtn = document.getElementById("sbtn");
    console.log(sf);
    console.log(sbtn);

    currentstyle = window
      .getComputedStyle(document.getElementById("searchbar"))
      .getPropertyValue("display");
    homestyle = window
      .getComputedStyle(document.getElementById("homesec"))
      .getPropertyValue("display");
    aboutstyle = window
      .getComputedStyle(document.getElementById("aboutsec"))
      .getPropertyValue("display");
    faqstyle = window
      .getComputedStyle(document.getElementById("faqsec"))
      .getPropertyValue("display");

    if (currentstyle == "none") {
      sf.style.display = "block";
      sbtn.style.display = "block";
    } else {
      sf.style.display = "none";
      sbtn.style.display = "none";
    }
  }

  function togglemenuoff() {
    menupos = window.getComputedStyle(document.getElementById("menu")).getPropertyValue("left");
    menu = document.getElementById("menu");
    mbtn = document.getElementById("togmenu");
    menu.style.left = "-10000px";
    mbtn.setAttribute("onclick", "togglemenuon()");
    document.body.style.overflowY = "auto";
  }
  function togglemenuon() {
    menupos = window.getComputedStyle(document.getElementById("menu")).getPropertyValue("left");
    menu = document.getElementById("menu");
    mbtn = document.getElementById("togmenu");
    menu.style.left = "0px";
    mbtn.setAttribute("onclick", "togglemenuoff()");
    document.body.style.overflowY = "hidden";
  }
  if(navigator.onLine){
    document.getElementById("userprompt").setAttribute("placeholder", "Ask Something...");
  } else{
    document.getElementById("userprompt").setAttribute("placeholder", "You are offline.");
    document.getElementById("userprompt").setAttribute("disabled", "true");
  }
  function botshow(){
    document.getElementById("botwin").style.display="flex";
    document.getElementById("botbtn").setAttribute("onclick", "bothide()");
    document.body.style.overflow="hidden";
    document.getElementById("botbtn").style.display="none";
  }
  function bothide(){
    document.getElementById("botwin").style.display="none";
    document.getElementById("botbtn").setAttribute("onclick", "botshow()");
    document.body.style.overflow="auto";
    document.getElementById("botbtn").style.display="flex";
  }

  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    const question = faq.querySelector(".question");
    const answer = faq.querySelector(".answer");

    question.addEventListener("click", () => {
      faq.classList.toggle("active");
      const isActive = faq.classList.contains("active");

      if (isActive) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.querySelector("svg").style.transform = "rotate(180deg)";
      } else {
        answer.style.maxHeight = "0";
        question.querySelector("svg").style.transform = "rotate(0deg)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
const userInput = document.getElementById("searchbar");
const searchButton = document.getElementById("sbtn"); // Get the search button with id "sbtn"

userInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
event.preventDefault();
Searcher();
}
});

searchButton.addEventListener("click", function () {
Searcher();
});

function Searcher() {
const query = userInput.value;
const searchRegex = new RegExp(query, "gi");
const elementsWithQuery = document.querySelectorAll("*");

elementsWithQuery.forEach((element) => {
const textContent = element.textContent;
if (searchRegex.test(textContent)) {
togglemenuoff();
element.scrollIntoView({ behavior: "smooth", block: "start" });
userInput.style.backgroundColor = "green";
setTimeout(() => {
  userInput.style.backgroundColor = "white";
}, 500);
return;
} else {
userInput.style.backgroundColor = "red";
setTimeout(() => {
  userInput.style.backgroundColor = "white";
}, 500);
return false;
}
});
}
});