
function onCreate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        "name": String(document.getElementById("cname").value),
        "age": String(document.getElementById("cage").value),
        "sex": String(document.getElementById("csex").value),
    })
    console.log(data);

    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        } 
    });

    xhr.open("POST", "http://localhost:3000/create");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

(function () {
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    console.log('Handlers is set')
})()