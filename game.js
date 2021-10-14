let health = 100
let hits = 0

function slap() {

  if (health > 0){
    document.getElementById('message').innerText = ``
    health -= 5
  } else {
    alert('Snoop Froggy Frog has left the building.')
  } 

 
Hits()
update()
}



function kick() {
if (health > 0){
  document.getElementById('message').innerText = ``
  health -= 10
} else {
  alert('Snoop Froggy Frog has left the building.')
} 


Hits()
update()
}

function heal() {
   health += 20
  if (health >= 100 ){
    health = 100
    document.getElementById('message').innerText = `Snoop Froggy Frog is Healthy again!`
} 
update()
hitsReset()
}


function update(){
  document.getElementById('health').innerText = `${health}`
  document.getElementById('hits').innerText = `${hits}`
}
  update()


//function drawHealth(){
//  slap()
//  console.log(health)
//}


function Hits() {

  hits++
}

function hitsReset() {
  hits = 0
}
