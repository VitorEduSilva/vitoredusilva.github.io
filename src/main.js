let gyroContainer;
let hitTestContainer;
let markersContainer;
let lightBoxContainer;
let gaze;

// fetch("../example.json").then(response => {
//     return response.json();
// }).then(data => setPageContent(data));

const queryString = window.location.search;

let urlParams = new URLSearchParams(queryString);

function setPageContent() {
    gyroContainer.setAttribute('visible', false);
    hitTestContainer.setAttribute('visible', false);
    markersContainer.setAttribute('visible', false);
    lightBoxContainer.setAttribute('visible', false);
    gaze.setAttribute('visible', false);


    let markerLoader = document.getElementById("arjs-loader");
    markerLoader.style = "display: none";
    
    let artype = urlParams.get('artype');
    
    switch (artype) {
        case "gyro":
            gyroContainer.setAttribute('visible', true);
            break;
            
        case "plane":
            hitTestContainer.setAttribute('visible', true);
            break;

        case "marker":
            markersContainer.setAttribute('visible', true);
            break;

        case "lightbox":
            lightBoxContainer.setAttribute('visible', true);
            gaze.setAttribute('visible', true);
            break;
    }
}

AFRAME.registerComponent("hide-on-hit-test-start", {
    init: function () {
        var self = this;
        this.el.sceneEl.addEventListener("ar-hit-test-start", function () {
            self.el.object3D.visible = false;
        });
        this.el.sceneEl.addEventListener("exit-vr", function () {
            self.el.object3D.visible = true;
        });
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const sceneEl = document.querySelector("a-scene");

    gyroContainer = document.querySelector("#gyroContainer");
    hitTestContainer = document.querySelector("#hitTestContainer");
    markersContainer = document.querySelector("#markersContainer");
    lightBoxContainer = document.querySelector("#lightBoxContainer");
    gaze = document.querySelector("#gaze");

    this.setPageContent();

    sceneEl.addEventListener("enter-vr", function () {
        
        if (this.is("ar-mode")) {
            // Entered AR

            // Hit testing is available
            this.addEventListener(
                "ar-hit-test-start",
                function () {

                },
                { once: true }
            );

            // Has managed to start doing hit testing
            this.addEventListener(
                "ar-hit-test-achieved",
                function () {

                },
                { once: true }
            );

            // User has placed an object
            this.addEventListener(
                "ar-hit-test-select",
                function () {

                },
                { once: true }
            );
        }
    });

});


// document.addEventListener('markerFound', (e) => {
//     let target = e.target.children[0];
//     if (target.className == "video") {
//         document.getElementById(target.id).play();
//     }
//     // if (target.className == "link") {
//     //     document.getElementById(target.id).addEventListener("click", openLink);
//     // }
// });

// document.addEventListener('markerLost', (e) => {
//     let target = e.target.children[0];
//     if (target.className == "video") {
//         document.getElementById(target.id).pause();
//     }
//     // if (target.className == "link") {
//     //     document.getElementById(target.id).removeEventListener("click", openLink);
//     // }
// });

function openLink() {
    console.log("abrir link");
    window.open("https://www.google.com/", '_blank').focus();
}
