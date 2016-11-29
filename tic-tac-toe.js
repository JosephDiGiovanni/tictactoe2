var canvas = document.getElementById("game-board")
var namespace = "http://www.w3.org/2000/svg"
var turn = 0
var shape1 = 0
var shape2 = 0
var shape3 = 0
var shape4 = 0
var shape5 = 0
var shape6 = 0
var shape7 = 0
var shape8 = 0
var shape9 = 0

function tls(){
if(shape1 == 0){
    if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 50)
okay.setAttribute("cy", 50)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape1 = shape1 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 40)
okay.setAttribute("y", 40)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape1 = shape1 + 2
}
}
}
function tcs(){
if(shape2 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 183)
okay.setAttribute("cy", 50)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape2 = shape2 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 173)
okay.setAttribute("y", 40)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape2 = shape2 + 2
}
}
}
function trs(){

if(shape3 == 0){
    if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 313)
okay.setAttribute("cy", 50)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape3 = shape3 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 306)
okay.setAttribute("y", 40)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape3 = shape3 + 2
}
}
}
function mls(){

if(shape4 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 50)
okay.setAttribute("cy", 183)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape4 = shape4 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 40)
okay.setAttribute("y", 173)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape4 = shape4 + 2
}
}
}
function mcs(){
if(shape5 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 183)
okay.setAttribute("cy", 183)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape5 = shape5 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 173)
okay.setAttribute("y", 173)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape5 = shape5 + 2
}
}
}
function mrs(){
if(shape6 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 316)
okay.setAttribute("cy", 183)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape6 = shape6 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 306)
okay.setAttribute("y", 173)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape6 = shape6 + 2
}
}
}
function bls(){
if(shape7 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 50)
okay.setAttribute("cy", 313)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape7 = shape7 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 40)
okay.setAttribute("y", 306)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape7 = shape7 + 2
}
}
}
function bcs(){
if(shape8 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 183)
okay.setAttribute("cy", 313)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape8 = shape8 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 173)
okay.setAttribute("y", 306)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape8 = shape8 + 2
}
}
}
function brs(){
if(shape9 == 0){
if (turn == 0){
var okay = document.createElementNS(namespace, "circle")
okay.setAttribute("cx", 316)
okay.setAttribute("cy", 316)
okay.setAttribute("r", 20)
okay.setAttribute("fill", "black")
canvas.appendChild(okay)
turn = turn + 1
shape9 = shape9 + 1
}else if (turn == 1){
var okay = document.createElementNS(namespace, "rect")
okay.setAttribute("x", 306)
okay.setAttribute("y", 306)
okay.setAttribute("height", 20)
okay.setAttribute("width", 20)
okay.setAttribute("fill", "white")
canvas.appendChild(okay)
turn = turn - 1
shape9 = shape9 + 2
}
}
}
function done(){

}
