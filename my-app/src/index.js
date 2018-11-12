import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/form/form'
import * as serviceWorker from './serviceWorker';

const component =<Form title='Login' text='Entre com seu e-mail'>
    <Form.Label htmlFor='email'>Email</Form.Label>
    <Form.Input type='text'/>
    <Form.Label htmlFor='password'>Senha</Form.Label>
    <Form.Input type='password'/>
    <Form.button disabled> Enviar </Form.button>
    <Form.Link href='#'> link lindo da mamãe</Form.Link>
</Form>



ReactDOM.render( component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
