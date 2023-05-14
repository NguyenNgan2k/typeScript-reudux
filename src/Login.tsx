import React, { useEffect } from 'react';
import { Field, InjectedFormProps, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { LoginState } from './store/types';

interface IFormLogin {
    username: string;
    password: string;
}

interface Props {
    username:string;
}

const Login: React.FC<InjectedFormProps<IFormLogin, Props> & Props> = (props) => {

    const { handleSubmit, username} = props;

    const submit = (values: IFormLogin) => {
        console.log(values)
    }

    return (
        <>
            <form className="form-login" onSubmit={handleSubmit(submit)}>
                <h1 className="text-center">Đăng nhậps</h1>
                <Field
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="SĐT/Số CMT/ CCCD"
                    autoComplete="username"
                    component='input'
                    style={{ marginRight: '15px' }}
                />

                <Field
                    name="password"
                    type="password"
                    id="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    autoComplete="current-password"
                    component='input'
                />
                <div style={{ marginTop: '15px' }}>
                    <button
                        type="submit"
                        style={{ height: '40px', backgroundColor: '#ffffff' }}
                    >
                        Đăng nhập
                    </button>
                </div>
            </form>
        </>
    );
}

const Form = reduxForm<IFormLogin, Props>({
    form: 'formLogin',
    enableReinitialize: true,
})(Login);

const selector = formValueSelector('formLogin');

const mapStateToProps = (state: LoginState) => {
    const {
        username,
        password
    } = selector(
      state,
      'username',
      'password'
    );
    return {
        username,
        password,
        initialValues: {
           
        },
    };
  };
export default connect(mapStateToProps)(Form);
