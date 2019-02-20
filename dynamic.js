function getdata(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState=== 4 && xhr.status=="200"){
    callback(xhr.responceText)
  }
};
xhr.send(null);
}
getdata("dynamic.json",fumction(text){
  Let data=JSON.parse(text);
  console.log(data);
})

//  leftdiv
var left=document.querySelector(".leftdiv");
function personalinfo(pi){
  personalinfo(data.profile);
  })
var image=document.createElement("img");
//image.src="soop.png";
image.src=pi.image;
left.appendChild(image);
var name=document.createElement("h2");
name.
left.appendChild(name);




var <hr>=document.createElement(hr)
left.appendChild(hr)
var place=document.createElement("p")
place.textContent=pi.place
left.appendChild(place)
var mail=document.creatEmail("pi")
left.appendChild(pi);
var right=document.querySelector()
