import React from 'react';
import { useTranslation } from 'react-i18next'; 
/* import * as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry' */

function NotFound() {

/* 	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
	camera.position.set( 0, 0, 100 );
	camera.lookAt( 0, 0, 0 );

	const scene = new THREE.Scene();

	const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

	const points = [];
	points.push( new THREE.Vector3( - 10, 0, 0 ) );
	points.push( new THREE.Vector3( 0, 10, 0 ) );
	points.push( new THREE.Vector3( 10, 0, 0 ) );

	const loader = new FontLoader();
	loader.load('../assets/fonts/Ultramoon.json', function (font) {
		const geometry = new TextGeometry('404 - NOT FOUND', {
			font: font,
			size: 80,
			height: 5,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 10,
			bevelSize: 8,
			bevelOffset: 0,
			bevelSegments: 5
		});

		
		scene.add( geometry );
	});

	renderer.render( scene, camera ); */
	const { t } = useTranslation();

	return (
		<div className="Home">
			<h1>{t('error.404').toUpperCase()}</h1>
		</div>
	);
}

export default NotFound;
