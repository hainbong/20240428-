

const LoginButton = (props) =>{

    return(
        <div>
            <button className={props.className}>{props.text}</button>
            <button className={props.className}>{props.text}</button>
        </div>
    );
}

export default LoginButton;
