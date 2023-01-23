function Next(){
    user_name= document.getElementById("user_name").value 
    localStorage.setItem("user_name", user_name)
    window.location = "Kwitter_room.html"
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e){
keyPressed = e.keyCode
if(keyPressed == '13')
		{
			Next();
			console.log("User logged in");
		}
	}