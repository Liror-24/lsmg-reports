import './shared.css';
import { Multiselect } from "multiselect-react-dropdown";


function FormItem(props) {
    return (
        <div>
            <p className='boxTitle'>{props.title}</p>
            {
                (props.type === 'text') &&
                <input type='text' placeholder={props.placeholder} value={props.value}/>
            }
            {
                (props.type === 'multiselect') &&
                <Multiselect options={props.array} isObject={false}/>
            }
           
        </div>
    )
}

function getStringDate() {
    const now = new Date().toLocaleString("en-US", { timeZone: 'America/New_York' });
    const current = new Date(now);
    return`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
}

function getDoctorsList() {
    fetch("../data/doctorsDB.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
         })
}

function Form() {
    //getDoctorsList();
    const stringDate = getStringDate();
    return (
        <div className="Wrapper">
            <h3>Write Report</h3>
            <FormItem title='Report Date' value={stringDate} type='text'/>
            <FormItem title="Dr.'s involved" placeholder='Select one' type='multiselect' />
            <FormItem title='List of injuries' placeholder='Injury 1' type='text'/>
            <FormItem title='Debrief' placeholder='Debrief' type='text'/>
            <FormItem title='Aftercare' placeholder='Aftercare' type='text'/>
        </div>
    )
}

export default Form;