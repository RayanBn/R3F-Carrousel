import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

const Card = ({
    url,
    ...props
}) => {
    const texture = new THREE.TextureLoader().load(url);

    return (
        <>
            <mesh
                {...props}
            >
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
            </mesh>
        </>
    )
}

const Carrousel = () => {
    const images = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
    ];
    const radius = 1.4;
    const groupRef = useRef()

    useFrame((_, delta) => {
        groupRef.current.rotation.y = groupRef.current.rotation.y + .3 * delta
    }, [])

    return (
        <>
            <group
                ref={groupRef}
            >
                {
                    images.map((url, index) => {
                        return (
                            <Card
                                key={index}
                                url={url}
                                position={[Math.sin((index / images.length) * Math.PI * 2) * radius, 0, Math.cos((index / images.length) * Math.PI * 2) * radius]}
                                rotation={[0, Math.PI + (index / images.length) * Math.PI * 2, 0]}
                            />
                        )
                    })
                }
            </group>
        </>
    )
}

export default Carrousel
