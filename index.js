// Import stylesheets
import './styles.css';

// Submiting inputs

 document.getElementById("btn_submit").addEventListener("click",sizeGrid)




  //Submitting Reset
  document.getElementById("btn_reset").addEventListener("click", resetGrid);


// Reset Grid function
function resetGrid()
{
  document.getElementById("pixelCanvas").innerHTML="";
}

// Select color input
var colorPick=document.querySelector('#colorPicker');
var color_value=colorPick.value;
colorPick.addEventListener("input", updateFirst, false);
function updateFirst(){
}

// Select size input
function sizeGrid()
{
   var xCoordinates= document.getElementById('inputWidth');
  var yCoordinates= document.getElementById('inputHeight')
  makeGrid(xCoordinates.value,yCoordinates.value)
}

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {
  event.preventDefault();
  if (document.getElementById('tbl') != null) {
    return;
  } else {
    var body = document.getElementById('pixelCanvas');
    var tbl  = document.createElement('table');
    tbl.id = "tbl"; // Assign the id for the check
    for(var i = 0; i < x; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j<y; j++){
        var td= tr.insertCell()
        }
    }
    body.append(tbl);
    paint();
  }

};


// Select cells to be painted
function paint(){
  var table = document.getElementById('tbl')
  var tdss= document.getElementsByTagName('td')
  for (var i=0;i<tdss.length;i++){
    tdss[i].addEventListener("click",function(event){
      var selected=event.target
      selected.style.backgroundColor=colorPick.value
    })
  }
}
 


