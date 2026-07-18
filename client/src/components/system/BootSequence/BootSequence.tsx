import styles from "./BootSequence.module.css";

import ProgressBar from "../ProgressBar/ProgressBar";
import TerminalLine from "../TerminalLine/TerminalLine";

import { useBootSequence } from "../../../hooks/useBootSequence";

function BootSequence() {

    const {
        messages,
        progress,
    } = useBootSequence();

    return (

        <div className={styles.container}>

            <h1 className={styles.logo}>
                InGen OS
            </h1>

            <div className={styles.terminal}>

                <div className={styles.header}>

                    <span></span>

                    <span className={styles.title}>
                        InGen BIOS v7.4.1
                    </span>

                    <span></span>

                </div>

                {messages.map((message,index)=>(

                    <TerminalLine
                        key={index}
                        text={message.text}
                        status={message.status}
                    />

                ))}

                <ProgressBar value={progress}/>

            </div>

        </div>

    );

}

export default BootSequence;