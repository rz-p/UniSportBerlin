import {FC, default as React} from 'react';
import { Button, ButtonProps } from 'react-login-page';
import {login} from "../../actions/UserActions";
export const Submit: FC<ButtonProps> = (props) => {
  const { keyname = 'submit', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Submit';
  }
  return <Button type="submit" onClick={() => doUserLogIn()} keyname={keyname} {...elmProps}/>;
};

function doUserLogIn() {
/*
    login().then((response) => {
        console.log(response);
    }).catch(error => console.log(error))
*/
}

Submit.displayName = 'BaseLogin.Submit';