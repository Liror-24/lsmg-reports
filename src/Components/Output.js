import './shared.css';
import './output.css';

function Output(props) {
    return (
        <div className="Wrapper">
            <h3>Output</h3>
            <div className='boxOutput'>
                <span>{props.patient.name}|ICU Report|{props.date}</span>
            </ div>
            <div className='boxOutput'>
                <span>Report written by: Dr. {props.leadDoctor}</span><br />
                <span>Date of Report: {props.date}</span><br />
                <br />
                <span>Dr.'s involved</span><br />
                <span>Dr. {props.leadDoctor}</span><br />
                <span>{
                    (props.selectedDoctors).map((item) => (
                        <span>Dr. {item}<br/></span>
                    ))
                }</span>
                <br />
                <span>Patient Name - State ID: {props.patient.name} - {props.patient.id}</span><br /><br />
                <span>List of Injuries/ailments:</span><br />
                <span>{
                    (props.injuries.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                <span>Debrief:</span><br />
                <span>{
                    (props.debrief.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                <span>Aftercare:</span><br />
                <span>{
                    (props.aftercare.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                <span>Emergency contacts:</span><br />
                <span>{
                    (props.contacts.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
            </ div>
        </div>
    )
}

export default Output;