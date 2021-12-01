p1_name=localStorage.getItem('p1_name')
p2_name=localStorage.getItem('p2_name');
p1_s=0;
p2_s=0;
document.getElementById('p1_name').innerHTML=p1_name+":";
document.getElementById('p2_name').innerHTML=p2_name+":";

document.getElementById("p1_s").innerHTML=p1_s;
document.getElementById("p2_s").innerHTML=p2_s;
document.getElementById("player_answer").innerHTML="answer turn="+p2_name;
function send() {
    get_word=document.getElementById('word').value 
word=get_word.toLowerCase()
character1=word.charAt(1)
length=Math.floor(word.length/2 )
character2=word.charAt(length)
length_minus_1=word.length-1
character3=word.charAt(length_minus_1)
remove1=word.replace(character1,"★")
remove2=remove1.replace(character2,"★")
remove3=remove2.replace(character3,"★")
qw="<h4 id='word_display'>Q."+remove3+"</h4>"
input_box="<br> Answer:<input type='text' id='input_check_box'>"
check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
document.getElementById('output').innerHTML=qw+input_box+check_button
document.getElementById('word').innerHTML=" "
}