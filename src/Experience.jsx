import { Box, OrbitControls, Stage } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Model } from "./components/Model"
import { useRef, useState } from "react"
import Button from "./components/Button"
import axios from 'axios'
import audioFile from '../speech.mp3'
import { useEffect } from "react"

const Experience = () => {

    
    


    // set array length
    const [ARRAY_LENGTH, SET_ARRAY_LENGTH] = useState(6)
    const REGULAR_PIN_COUNT = 12;
    const BRAILLER_PIN_COUNT = 6;

    // create new array
    const stateArray = Array.from({ length: ARRAY_LENGTH }).map(() => {
        const regularPins = []
        const braillePins = []

        for (let i = 0; i < REGULAR_PIN_COUNT; i++) {
            regularPins.push(Math.max(0.5,Math.random() * 1.3));
        }

        for (let i = 0; i < BRAILLER_PIN_COUNT; i++) {
            braillePins.push(Math.max(0.5,Math.random() * 2.1));
        }

        return { regularPins: regularPins, braillePins: braillePins };

    });

    const [height, setHeight] = useState(stateArray[0])
    const [messages, setMessages] = useState("")
    const [loading, setLoading] = useState(true)
    const [messagesPar, setMessagesPar] = useState([])

    //state update
    const clickHandler = (index) => {
        setHeight(stateArray[index])
    }

    const playAudio = () => {
        setTimeout(()=>{ 
          let audio =  new Audio(audioFile)
          console.log(audio);
          audio.play()
          SET_ARRAY_LENGTH(ARRAY_LENGTH-1)
          audio.onended = () => {
            setTimeout(()=>{ 
              setLoading(true) 
            },4000)
          
          }
        },5000)
      }
      const getFile = async (response) => {
        await axios.post('//localhost:5000/audio',
          {
            message: response
          })
          .then((response) => {
            playAudio()
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      const sendReq = async () => {
    
        setLoading(false)
        await axios.post('//localhost:5000/find-complexity', {
          message: messages
        },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            setMessages(messages + response.data)
            setMessagesPar([...messagesPar, response.data])
            getFile(response.data)
    
          })
          .catch((error) => {
            console.log(error);
          })
      }

    //button mapping
    const buttonArray = Array.from({ length: ARRAY_LENGTH }).map((_,i) => {
        return <Button key={i} onClick={()=>{clickHandler(i)}}>{i}</Button>
    })

    return (
        <>
        { loading ? <> <div className="buttonContainer">
            {buttonArray}
            </div>

        <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [20, 15, 8], fov: 75 }}>
            <color attach="background" args={['skyblue']} />
            <Stage
                intensity={0.5}
                preset="rembrandt"
                shadows={{
                    type: 'contact',
                    color: 'skyblue',
                    opacity: 1
                }}
                adjustCamera={1}
                environment="city">
                <Model onClicked={sendReq} pinHeights={height}></Model>
            </Stage>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} makeDefault />
        </Canvas></> : <div className="loader"><h1>Loading</h1></div>}
        </>
        )
}
export default Experience