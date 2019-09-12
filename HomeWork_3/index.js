function onCreate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        "name": String(document.getElementById("cname").value),
        "age": String(document.getElementById("cage").value),
        "sex": String(document.getElementById("csex").value),
        "position": String(document.getElementById("cposition").value)
    })
    console.log(data);

    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        }
    });

    xhr.open("POST", "http://localhost:2403/workers");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.response);
            result = JSON.parse(this.response);
            var resultTBody = document.createElement('tbody');
            //resultTBody.id = 'rTBody';
            result.map(function (workers) {
                resultTBody.appendChild(parseWorkersToTableRow(workers));
            });

            var table = document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('rTBody'));
            resultTBody.id = 'rTBody';
            console.log('success');
        }
    });

    xhr.open("GET", "http://localhost:2403/workers");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseWorkersToTableRow(workers) {
    var row = document.createElement('tr');

    id = document.createElement('td');
    id.innerText = workers['id'];
    row.appendChild(id);

    name1 = document.createElement('td');
    name1.innerText = workers['name'];
    row.appendChild(name1);

    age = document.createElement('td');
    age.innerText = workers['age'];
    row.appendChild(age);

    sex = document.createElement('td');
    sex.innerText = workers['sex'];
    row.appendChild(sex);

    position = document.createElement('td');
    position.innerText = workers['position'];
    row.appendChild(position);

    //Delete button
    deletetd = document.createElement('td');
    deletetd.id = workers['id'];
    deletebtn = document.createElement('button');
    deletebtn.className = "btn btn-danger";
    deletebtn.innerText = "Delete";
    deletebtn.addEventListener('click', onDelete);
    deletetd.appendChild(deletebtn)
    row.appendChild(deletetd);

    //Update button
    updatetd = document.createElement('td');
    updatetd.id = workers['id'];
    updatebtn = document.createElement('button');
    updatebtn.className = "btn btn-info";
    updatebtn.innerText = "Update";
    updatebtn.addEventListener('click', onUpdate);
    updatetd.appendChild(updatebtn);
    row.appendChild(updatetd);

    return row;
}

function onUpdate() {
    alert(this.parentNode.id);
    var url = location.href;
    location.href = '#update';
    history.replaceState(null,null, url);
}

function onDelete() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://localhost:2403/workers/"+this.parentNode.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
};

(function () {
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    onRead();
    console.log('Handlers is set')
})()