import './shared.css';
import './Form.css';
import { Multiselect } from "multiselect-react-dropdown";
import data from '../data/doctorsDB.json';
import Switch from './Switch';

const multiselectStyle = {
    inputField: {
      color: "white",
    },
    option: {
        color: "black"
    },
    chips: {
        background: "#086F63",
        fontSize: "14px"
    }
  };;

function FormItem(props) {
    return (
        <div className='wrapperItem'>
            <p className='boxTitle'>{props.title}</p>
            {
                (props.type === 'text') &&
                <input type='text' placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={props.onChange}/>
            }
            {
                (props.type === 'select') &&
                <Multiselect options={props.array} displayValue="fullData" selectedValues={props.selectedValues} selectionLimit="1" onSelect={props.onChange} onRemove={props.onChange}
                style={multiselectStyle}/>
            }
            {
                (props.type === 'multiselect') &&
                <Multiselect options={props.array} displayValue="fullData" onSelect={props.onChange} onRemove={props.onChange}
                style={multiselectStyle}/>
            }
            {
                (props.type === 'double-text') &&
                <div style={{display: "flex"}}>
                    <span style={{flex: "60%"}}>
                        <label>Name:</label><br />
                        <input type='text' placeholder={props.placeholder.name} onChange={props.onChangeName} style={{width: "90%", marginTop: "5px"}}/>
                    </ span>
                    <span style={{flex: "30%"}}>
                        <label>State ID:</label><br />
                        <input type='text' placeholder={props.placeholder.id} onChange={props.onChangeID} style={{width: "90%", marginTop: "5px"}}/>
                    </ span>
                </ div>
            }
            {
                (props.type === 'textarea') &&
                <textarea placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={props.onChange} style={{minHeight: `${props.height}`}}/>
            }
        </div>
    )
}

function getDoctorsList() {
    return data.map((item) => {
        let result = item.name;
        if (item.stateId > 0) result += (" - " + item.stateId.toString());
        return {name: item.name,  fullData: result};
    })
}

function Form(props) {
    const doctorArray = getDoctorsList();
    const handleDate = (event) => {
        props.setDate(event.target.value);
    };
    const handleSelectedLead = (item) => {
        props.setLeadDoctor(item.map((el) => el.name));
        if (item.length > 0) {
            localStorage.setItem("leadDoctor", item[0].fullData);
            localStorage.setItem("leadDoctorName", item[0].name);
        }
        else {
            localStorage.setItem("leadDoctor", '');
            localStorage.setItem("leadDoctorName", '');
        }
    };
    const handleSelectedDoctors = (item) => {
        props.setSelectedDoctors(item.map((el) => el.name));
    };
    const handlePatientName = (event) => {
        props.setPatient({name: event.target.value, id: props.patient.id});
    }
    const handlePatientID = (event) => {
        props.setPatient({name: props.patient.name, id: event.target.value});
    }
    const handleInjuries = (event) => {
        if (props.injuries === "") {
            event.target.value = `\u2022 ` + event.target.value;
        }
        else if (event.target.value[event.target.value.length - 1] === `\n`) {
            event.target.value +=  `\u2022 `;
        }
        else if (event.target.value[event.target.value.length - 1] === `\u2022`) {
            event.target.value = event.target.value.substring(0,event.target.value.length-1);
        }
        props.setInjuries(event.target.value);
    }
    const handleDebrief = (event) => {
        props.setDebrief(event.target.value);
    };
    const handleAftercare = (event) => {
        if (props.aftercare === "") {
            event.target.value = `\u2022 ` + event.target.value;
        }
        else if (event.target.value[event.target.value.length - 1] === `\n`) {
            event.target.value +=  `\u2022 `;
        }
        else if (event.target.value[event.target.value.length - 1] === `\u2022`) {
            event.target.value = event.target.value.substring(0,event.target.value.length-1);
        }
        props.setAftercare(event.target.value);
    }
    const handleContacts = (event) => {
        props.setContacts(event.target.value);
    };
    const handleAdditionalInfo = (event) => {
        props.setAdditionalInfo(event.target.value);
    };
    const handleSelectedLeadPublic = (event) => {
        props.setLeadPublic(event.target.value);
        localStorage.setItem("leadPublic", event.target.value);
    };
    const handleSelectedPublic = (event) => {
        if (props.selectedPublic === "") {
            event.target.value = `\u2022 Dr. ` + event.target.value;
        }
        else if (event.target.value[event.target.value.length - 1] === `\n`) {
            event.target.value +=  `\u2022 Dr. `;
        }
        else if (event.target.value[event.target.value.length - 1] === `\u2022`) {
            event.target.value = event.target.value.substring(0,event.target.value.length-1);
        }
        props.setSelectedPublic(event.target.value);
    }

    return (
        <div className="Wrapper">
            <h3>Write Report</h3>
            <span className='boxTitle' style={{display: "flex"}}><span style={{marginRight: "10px"}}>Enter doctor names manually? </span><Switch state={props.state} setState={props.setState}/></span>
            <FormItem title='Report Date' defaultValue={props.date} type='text' onChange={handleDate}/>
            {
                localStorage.getItem("manuallyDocs") === "0" &&
                <div>
                    <FormItem title="Report written by" placeholder='Select one' type='select' array={doctorArray} onChange={handleSelectedLead} selectedValues={localStorage.getItem("leadDoctor") && localStorage.getItem("leadDoctor").length > 0 && [{name: localStorage.getItem("leadDoctorName"), fullData: localStorage.getItem("leadDoctor")}]}/>
                    <FormItem title="Other Dr.'s involved" placeholder='Select one' type='multiselect' array={doctorArray} onChange={handleSelectedDoctors}/>
                </ div>
            }
            {
                localStorage.getItem("manuallyDocs") === "1" &&
                <div>
                    <FormItem title="Report written by" placeholder='Person Person (totally legit person name)' type='text' defaultValue={localStorage.getItem("leadPublic")} onChange={handleSelectedLeadPublic}/>
                    <FormItem title="Other Dr.'s involved" placeholder={`\u2022 Dr. Name Name`} type='textarea' onChange={handleSelectedPublic} height='16px'/>
                </ div>
            }
            <FormItem title="Patient" placeholder={props.patient} type='double-text' onChangeName={handlePatientName} onChangeID={handlePatientID}/>
            <FormItem title='List of Injuries/ailments' placeholder={`\u2022 Injury`} type='textarea' onChange={handleInjuries} height='44px'/>
            <FormItem title='Debrief' placeholder='Debrief' type='textarea' onChange={handleDebrief} height='200px'/>
            <FormItem title='Aftercare' placeholder={`\u2022 Aftercare`} type='textarea' onChange={handleAftercare} hegith='44px'/>
            <FormItem title='Emergency contacts' placeholder='Charlie Human - 415-789-6457' type='textarea' onChange={handleContacts} height='36px'/>
            <FormItem title='Additional Information' placeholder='Blah blah' type='textarea' onChange={handleAdditionalInfo} height='100px'/>
        </div>
    )
}

export default Form;