import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

import {
    googleSignInStart,
    emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            alert("You must enter an email address!");
            return;
        }
        if (!password) {
            alert("You must enter a password!");
            return;
        }

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password for email.");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email.");
                    break;
                default:
                    console.log("user sign in encountered an error", error);
            }
        }
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType="google"
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
