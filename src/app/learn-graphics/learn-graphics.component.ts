import { Component } from '@angular/core';
import * as THREE from 'three';
import { NgZone } from '@angular/core';

@Component({
    selector: 'learn-graphics',
    template: `
    <!--
    <div [ngStyle]="{'width': '300px', 'height': '300px'}">
    <svg viewBox="0 0 250 250">
    <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
    <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30" />
    <path d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
        L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/>
    </svg>
    </div>
    -->
    `,
    styles: [``]
})
export class LearnGraphicsComponent {

    constructor(private zone: NgZone) { }

    ngAfterViewInit(): void {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const material = new THREE.MeshBasicMaterial({ 
            color: 0x0091FF, 
            wireframe: true
        });

        const spheres: THREE.Mesh[] = [];
        for(let i = 1; i < 4; i++) {
            let g = new THREE.SphereGeometry(i, 8, 8);
            let m = new THREE.Mesh(g, material);
            spheres.push(m);
            scene.add(m)
        }

        camera.position.z = 5;

        const animate = () => {
            this.zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));

            spheres.forEach(s => {
                s.rotation.x += Math.random() * 0.0038;
                s.rotation.y += Math.random() * 0.008;
                s.rotation.z += Math.random() * 0.021;
                s.scale.x += 0.001;
                s.scale.y += 0.001;
                s.scale.z += 0.001;
            });

            renderer.render(scene, camera);
        };

        this.zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));
    }

}
