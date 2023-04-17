import React from 'react';
import { Field, InjectedFormProps, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { LoginState } from './store/types';

interface Props {

}

const Login: React.FC<InjectedFormProps<{}, Props> & Props> = (props: Props) => {
    console.log(props)
    const submit = () => {

    }
    return (
        <>
            <form className="form-login" onSubmit={submit}>
                <h1 className="text-center">Đăng nhập</h1>
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

const Form = reduxForm<{}, Props>({
    form: 'formLogin',
    enableReinitialize: true,
})(Login);

const selector = formValueSelector('formLogin');

const mapStateToProps = (state: LoginState) => {
    console.log(state)
    const { username, password } = selector(state, 'username', 'password');

    return {
        username,
        password,

        initialValues: {
            username: '',
            password: '',
        },
    };
};

export default connect(mapStateToProps)(Form);
