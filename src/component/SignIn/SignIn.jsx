import React from 'react';
import {css} from 'styled-components/macro';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { Error, Form, Input, SignInContainer,SignUpContainer,SignUpNow } from '.'
import { Title } from '.'
import ButtonR from '../Button/Button';
// --- firebase
import { auth,provider } from '../../database/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

import { useForm } from "react-hook-form";


const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const GoogleSignIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                email:user.email,
                photo:user.photoURL,
                name:user.displayName,
            }))
        }).catch((error) => alert(error));
    }

    const onSubmit = (data) => {
        auth.createUserWithEmailAndPassword(
            data.email,
            data.password,
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message)
        });
    }
    
    const SignIn = () => {

    }


    return (
        <SignInContainer>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Title>Sign In</Title>
                <Input {...register("email", { required: true })} type="email" placeholder="Email address" />
                {/* errors will return when field validation fails  */}
                {errors.email && <Error>Email is required</Error>}
                <Input {...register("password", { required: true })} type="password" placeholder="Password"  />
                {/* errors will return when field validation fails  */}
                {errors.password && <Error>Password is required</Error>}
                <ButtonR  size=".89rem" padding="7px 17px" bgColor="#e50914" width="100%"
                    css={` margin-top:.5rem; border-radius:5px; height:35px;`}
                >Sign In  </ButtonR>
                <SignUpContainer>New to Etflix? <SignUpNow type="submit" > Sign Up Now <ArrowForwardIos fontSize="small" /></SignUpNow> </SignUpContainer>
            </Form>
            <ButtonR  size=".89rem" padding="7px 17px" bgColor="#4285F4" width="100%" css={` height:35px; border-radius:5px; :hover{ background-color:#4285F4 !important; } `}
                onClick={GoogleSignIn}
            >Sign In with Google </ButtonR>
        </SignInContainer>
    )
}

export default SignIn
