import Label from "../atoms/Label";
import Input from "../atoms/Input";

function WrapperInput({msn, type, parametro, placeholder, className}) {
    return ( 
        <div className="">
            <Label msn={msn}/>
            <Input parametro={parametro} type={type} placeholder={placeholder} className={className}/>
        </div>
     );
}

export default WrapperInput;