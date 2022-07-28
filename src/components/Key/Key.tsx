import * as Tone from 'tone'
import { KeyProp } from '../../interfaces';

const synth = new Tone.Synth().toDestination();


const Key = (props: KeyProp) => {
    
    const handleKeyClick = () => {
        synth.triggerAttackRelease(props.sound, props.soundLength);
    }

    return (
        <>
            <div onClick={handleKeyClick} className="key">
                <span>{props.sound}</span>
            </div>
        </>
    )
}

export default Key;