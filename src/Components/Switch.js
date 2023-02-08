import './switch.css';

function Switch(props) {
    return (
        <div className={`switchBackground ${props.state === "1"? "background-on" : "background-off"}`} onClick={() => {
            let newValue = "0";
            if (localStorage.getItem("manuallyDocs") === "0") newValue = "1";
            localStorage.setItem("manuallyDocs", newValue);
            props.setState(newValue);
        }}>
            <div className={`switch ${props.state === "1"? "switch-on" : "switch-off"}`}  />
        </div>
    )
}

export default Switch;