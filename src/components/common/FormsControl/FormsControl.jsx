import classes from "./FormsControl.module.css";

const FormControl = ({ input, meta, children, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
}