
// AFRAME.registerComponent("hide-on-hit-test-start", {
//     init: function () {
//         var self = this;
//         this.el.sceneEl.addEventListener("ar-hit-test-start", function () {
//             self.el.object3D.visible = false;
//         });
//         this.el.sceneEl.addEventListener("exit-vr", function () {
//             self.el.object3D.visible = true;
//         });
//     }
// });

document.addEventListener('markerFound', (e) => {
    let target = e.target.children[0];
    if (target.className == "video") {
        document.getElementById(target.id).play();
    }
    if (target.className == "link") {
        document.getElementById(target.id).addEventListener("click", openLink);
    }
});

document.addEventListener('markerLost', (e) => {
    let target = e.target.children[0];
    if (target.className == "video") {
        document.getElementById(target.id).pause();
    }
    if (target.className == "link") {
        document.getElementById(target.id).removeEventListener("click", openLink);
    }
});

function openLink() {
    console.log("abrir link");
    window.open("https://www.google.com/", '_blank').focus();
}
