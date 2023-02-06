const uri = 'www.google.com';
// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    //navigator.mediaDevices.getUserMedia({ video: { width: 960, height: 720} }).then(function (stream) {
    //    //video.src = window.URL.createObjectURL(stream);
    //    video.srcObject = stream;
    //    video.play();
    //});
    navigator.mediaDevices.getUserMedia({ video: { width: 960, height: 720 } }).then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

var canvas1 = document.getElementById('canvas1');
var context1 = canvas1.getContext('2d');

// Trigger photo take
/*
document.getElementById("snap").addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
});*/

function takePhoto() {
    const NameTextbox = document.getElementById('name');
    context1.drawImage(video, 0, 0, 640, 480);
    context.drawImage(video, 0, 0, 960, 720);
    //const canvas1 = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/jpeg");
    console.log(dataURL);
    const enrollTest = {
        img: dataURL,
        name: NameTextbox.value
    }

    fetch(uri + '/enroll/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollTest)
    })
        .then(response => response.json())
        .then(data => show(data))
    //.catch(error => console.error('Unable to add item.', error));

    //console.log(data);
};
function show(data) {
    //console.log(data);
    var h = document.createElement("H1");
    var t = document.createTextNode("status=" + data.status + ";message=" + data.message);
    h.appendChild(t);
    const app1 = document.getElementById("app1");
    var hs = app1.getElementsByTagName("H1");
    if (hs.length != 0) {
        //console.log(existingText.length);
        app1.removeChild(hs[hs.length - 1]);
    }
    app1.appendChild(h);
};
function takePhoto1() {
    const NameTextbox = document.getElementById('name');
    context1.drawImage(video, 0, 0, 640, 480);
    context.drawImage(video, 0, 0, 960, 720);
    //const canvas1 = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/jpeg");
    console.log(dataURL);
    const enrollTest = {
        img: dataURL,
        name: NameTextbox.value
    }

    fetch(uri + '/verify/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollTest)
    })
        .then(response => response.json())
        .then(data => show(data))
    //.catch(error => console.error('Unable to add item.', error));

    //console.log(data);
};
function takePhoto2() {
    const NameTextbox = document.getElementById('name');
    context1.drawImage(video, 0, 0, 640, 480);
    context.drawImage(video, 0, 0, 960, 720);
    //const canvas1 = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/jpeg");
    console.log(dataURL);
    const enrollTest = {
        img: dataURL,
        name: NameTextbox.value
    }

    fetch(uri + '/cardenroll/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollTest)
    })
        .then(response => response.json())
        .then(data => show(data))
    //.catch(error => console.error('Unable to add item.', error));

    //console.log(data);
};
function takePhoto3() {
    const NameTextbox = document.getElementById('name');
    context1.drawImage(video, 0, 0, 640, 480);
    context.drawImage(video, 0, 0, 960, 720);
    //const canvas1 = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/jpeg");
    console.log(dataURL);
    const enrollTest = {
        img: dataURL,
        name: NameTextbox.value
    }

    fetch(uri + '/cardverify/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollTest)
    })
        .then(response => response.json())
        .then(data => show(data))
    //.catch(error => console.error('Unable to add item.', error));

    //console.log(data);
};

