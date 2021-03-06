/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Kyler Michaelson (https://sketchfab.com/kylermichaelson)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/midi-controller-keyboard-1d5198102a4746c48f68fc30817479ba
title: Midi Controller Keyboard
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/midi.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.mesh_3.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.mesh_4.geometry} material={materials.buttons} />
        <mesh geometry={nodes.mesh_5.geometry} material={materials.end_caps} />
        <mesh geometry={nodes.mesh_6.geometry} material={materials.keys} />
        <mesh geometry={nodes.mesh_7.geometry} material={materials.knoba} />
      </group>
    </group>
  )
}

useGLTF.preload('/midi.gltf')
