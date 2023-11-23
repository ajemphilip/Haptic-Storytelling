import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/haptic.glb");
  let eventSwitch = true;

  const pin1 = useRef()
  const pin2 = useRef()
  const pin3 = useRef()
  const pin4 = useRef()
  const pin5 = useRef()
  const pin6 = useRef()

const cube1 = useRef() 
const cube2 = useRef() 
const cube3 = useRef() 
const cube4 = useRef() 
const cube5 = useRef() 
const cube6 = useRef() 
const cube7 = useRef() 
const cube8 = useRef() 
const cube9 = useRef() 
const cube10 = useRef() 
const cube11 = useRef() 
const cube12 = useRef() 

  const braillePinRefArray = [pin1,pin2,pin3,pin4,pin5,pin6]
  const normalPinRefArray = [cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9,cube10,cube11,cube12]

  let brailleArrayChoice = 0;
  let normalArrayChoice = 0;

  useEffect(()=>{
    brailleArrayChoice = Math.round(Math.random() * 5)
    normalArrayChoice = Math.round(Math.random() * 11)
    braillePinRefArray[brailleArrayChoice].current.__r3f.handlers= {onClick:props.onClicked};
    normalPinRefArray[normalArrayChoice].current.__r3f.handlers= {onClick:props.onClicked};
   console.log();
  },[props.pinHeights])
  
  useFrame(()=> {
    if(eventSwitch){
      braillePinRefArray[brailleArrayChoice].current.scale.y += 0.001
      normalPinRefArray[normalArrayChoice].current.scale.y += 0.001
      if( braillePinRefArray[brailleArrayChoice].current.scale.y > 2 || normalPinRefArray[normalArrayChoice].current.scale.y > 2){
        eventSwitch = false;
      }
    } 
    
    else{
      braillePinRefArray[brailleArrayChoice].current.scale.y -= 0.001
      normalPinRefArray[normalArrayChoice].current.scale.y -= 0.001
      if( braillePinRefArray[brailleArrayChoice].current.scale.y < 0.3 || normalPinRefArray[normalArrayChoice].current.scale.y < .03){
        eventSwitch = true;
      }
    }   
  })

  return (
   <>
      
      <mesh
        ref={pin1}
        onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Pin1.geometry}
        material={materials["Material.001"]}
        position={[1.092, 0, 2.085]}
        scale={[1, props.pinHeights.braillePins[0], 1]}
      />
      <mesh
       ref={pin2}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Pin2.geometry}
        material={materials["Material.001"]}
        position={[-1.008, 0, 2.085]}
        scale={[1, props.pinHeights.braillePins[1], 1]}
      />
      <mesh
       ref={pin3}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Pin3.geometry}
        material={materials["Material.001"]}
        position={[1.092, 0, -0.015]}
        scale={[1, props.pinHeights.braillePins[2], 1]}
      />
      <mesh
       ref={pin4}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Pin4.geometry}
        material={materials["Material.001"]}
        position={[-1.008, 0, -0.015]}
        scale={[1, props.pinHeights.braillePins[3], 1]}
      />
       <mesh
        ref={pin5}
        onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Pin5.geometry}
        material={materials["Material.001"]}
        position={[1.092, 0, -2.115]}
        scale={[1, props.pinHeights.braillePins[4], 1]}
      />
      <mesh
       ref={pin6}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Pin6.geometry}
        material={materials["Material.001"]}
        position={[-1.008, 0, -2.115]}
        scale={[1, props.pinHeights.braillePins[5], 1]}
      />
      <mesh
      ref={cube1}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        material={materials["Material.001"]}
        position={[1.999, 0, 3.022]}
        scale={[1, props.pinHeights.regularPins[0], 1]}
      />
      <mesh
      ref={cube2}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube2.geometry}
        material={materials["Material.001"]}
        position={[0.042, 0, 2.965]}
        scale={[1, props.pinHeights.regularPins[1], 1]}
      />
      <mesh
      ref={cube3}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube3.geometry}
        material={materials["Material.001"]}
        position={[-1.915, 0, 3.022]}
        scale={[1, props.pinHeights.regularPins[2], 1]}
      />
      <mesh
      ref={cube4}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube4.geometry}
        material={materials["Material.001"]}
        position={[1.972, 0, 1.074]}
        scale={[1, props.pinHeights.regularPins[3], 1]}
      />
      <mesh
      ref={cube5}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube5.geometry}
        material={materials["Material.001"]}
        position={[0.042, 0, 1.086]}
        scale={[1, props.pinHeights.regularPins[4], 1]}
      />
       <mesh
       ref={cube6}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube6.geometry}
        material={materials["Material.001"]}
        position={[-1.888, 0, 1.074]}
        scale={[1, props.pinHeights.regularPins[5], 1]}
      />
      <mesh
      ref={cube7}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube7.geometry}
        material={materials["Material.001"]}
        position={[1.972, 0, -1.026]}
        scale={[1, props.pinHeights.regularPins[6], 1]}
      />
       <mesh
       ref={cube8}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube8.geometry}
        material={materials["Material.001"]}
        position={[0.042, 0, -1.014]}
        scale={[1, props.pinHeights.regularPins[7], 1]}
      />
      <mesh
      ref={cube9}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube9.geometry}
        material={materials["Material.001"]}
        position={[-1.888, 0, -1.026]}
        scale={[1, props.pinHeights.regularPins[8], 1]}
      />
       <mesh
       ref={cube10}
       onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube10.geometry}
        material={materials["Material.001"]}
        position={[2.058, 0, -3]}
        scale={[1, props.pinHeights.regularPins[9], 1]}
      />
      <mesh
      ref={cube11}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube11.geometry}
        material={materials["Material.001"]}
        position={[0.042, 0, -2.917]}
        scale={[1, props.pinHeights.regularPins[10], 1]}
      />
      <mesh
      ref={cube12}
      onClick={()=> {}}
        castShadow
        receiveShadow
        geometry={nodes.Cube12.geometry}
        material={materials["Material.001"]}
        position={[-1.974, 0, -3]}
        scale={[1, props.pinHeights.regularPins[11], 1]}
      />
   </>
  );
}

useGLTF.preload("/haptic.glb");