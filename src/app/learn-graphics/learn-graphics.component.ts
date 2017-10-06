import { Component } from '@angular/core';
import * as THREE from 'three';
import { NgZone, Output } from '@angular/core';

@Component({
    selector: 'learn-graphics',
    template: `<!-- <div id="fps"></div> -->`,
    styles: [``]
})
export class LearnGraphicsComponent {

    constructor(private zone: NgZone) { }

    ngAfterViewInit(): void {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        // const renderer = new THREE.WebGLRenderer();

        const size = { width: window.innerWidth, height: window.innerHeight };
        // const size = { width: window.innerWidth, height: window.innerHeight };
        renderer.setSize(size.width, size.height);
        document.body.appendChild(renderer.domElement);
        camera.position.z = 5;

        const material = new THREE.MeshBasicMaterial({
            color: 0x0091FF,
            wireframe: true
        });

        const spheres: THREE.Mesh[] = [];
        for (let i = 1; i < 4; i++) {
            let g = new THREE.SphereGeometry(i * 0.5, 8, 8);
            let m = new THREE.Mesh(g, material);
            spheres.push(m);
            scene.add(m)
        }

        let lf = window.performance.now();
        let fps = 0;

        const animate = () => {

            let cf = window.performance.now();
            let delta = window.performance.now() - lf;
            lf = cf;

            let fpsNow = 1000 / delta;
            fps = fps + (fpsNow - fps) * 0.01;

            document.getElementById("fps").innerHTML = '<strong>FPS </strong>' + fps.toString().slice(0,2);

            // requestAnimationFrame(() => animate());
            this.zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));

            spheres.forEach(s => {
                s.rotation.x += 0.0038;
                s.rotation.y += 0.008;
                s.rotation.z += 0.021;

                s.scale.x += 0.0001;
                s.scale.y += 0.0001;
                s.scale.z += 0.0001;
            });

            const calcs = 1000000;
            for(let i = 0; i < calcs; i++) {
                let t = (i * 740394) % 4;
            }

            renderer.render(scene, camera);
        };

        // requestAnimationFrame(() => animate());
        this.zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));
    }

}
