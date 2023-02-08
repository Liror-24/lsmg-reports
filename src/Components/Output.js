import './shared.css';
import './output.css';

function Output(props) {
    return (
        <div className="Wrapper">
            <h3 style={{marginLeft: '10px'}}>Output</h3>
            <div className='boxOutput'>
                <span>{props.patient.name} - ICU Report - {props.date}</span>
            </ div>
            <div className='boxOutput'>
                <span>**Report written by:** {props.state === "0" && props.leadDoctor.length > 0 && <span>Dr. {props.leadDoctor}</span>}
                {props.state === "1" && props.leadPublic.length > 0 && <span>Dr. {props.leadPublic}</span>}</span><br />
                <span>**Date of Report:** {props.date}</span><br />
                <br />
                <span>**Dr.'s involved**</span><br />
                {props.state === "0" && props.leadDoctor.length > 0 && <span>Dr. {props.leadDoctor}</span>}
                {props.state === "1" && props.leadPublic.length > 0 && <span>Dr. {props.leadPublic}</span>}<br />
                <span>{
                    props.state === "0" &&
                    (props.selectedDoctors).map((item) => (
                        <span>Dr. {item}<br/></span>
                    ))
                }
                {
                    props.state === "1" && props.selectedPublic.length > 0 &&
                    (props.selectedPublic.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </span>
                <br />
                <span>**Patient Name - State ID:** {props.patient.name} - {props.patient.id}</span><br /><br />
                { (props.injuries !== "") && <span>**List of Injuries/ailments:**<br /></span>}
                <span>{
                    (props.injuries.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                <span>**Debrief:**</span><br />
                <span>{
                    (props.debrief.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                { (props.aftercare !== "") && <span>**Aftercare:** <br /></span>}
                <span>{
                    (props.aftercare.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                { (props.contacts !== "") &&
                <span>Emergency contacts: <br /></span> }
                <span>{
                    (props.contacts.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span><br />
                <span>{
                    (props.additionalInfo.split(`\n`)).map((item) => (
                        <span>{item}<br/></span>
                    ))
                }
                </ span>
            </ div>
        </div>
    )
}

export default Output;