let theUl = document.getElementById("myUL");
let theLis = theUl.children;
for (let i = 0; i < theLis.length; i++) {
    theLis[i].innerHTML += `<span class="close">x</span>`;
    let theLiDangXet = theLis[i];
    theLiDangXet.children[0].addEventListener("click", function() {
        theLiDangXet.remove();
    });

    theLiDangXet.addEventListener("click", function() {
        if (theLiDangXet.className === "") {
            theLiDangXet.className = "checked";
        }
        else {
            theLiDangXet.className = "";
        }
    });
}


function newElement() {
    let input = document.querySelector('input');
    console.log(input)
    let val = input.value;
    console.log(val);

    let li = document.createElement("li");
    let text = document.createTextNode(val);
    li.addEventListener("click", function() {
        li.classList.toggle("checked");
    });
    li.appendChild(text);
    const element = document.getElementById("myUL");
    element.appendChild(li);

    let nutX = document.createElement("span");
    nutX.innerHTML = "x";
    nutX.className = "close";
    nutX.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(nutX);
    input.value = "";
 }




