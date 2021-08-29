import React from "react"
import { reduxForm, Field } from "redux-form"
import { required } from "../../utilites/validators/validators";
import { Input } from "../common/FormsControl/FormsControl";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name={"login"} component={Input}
                validate={[required]} />
            </div>
            <div>
                <Field placeholder="password" name={"password"} component={Input}
                validate={[required]} />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;