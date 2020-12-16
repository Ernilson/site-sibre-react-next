import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';

import { Jumbotron, Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Contato = () => {
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        amsg: '',
        msg: ''
    });

    const onchangeInput = e => setContato({ ...contato, [e.target.name]: e.target.value });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const envMsg = async e => {
        e.preventDefault();
        //console.log(contato); 
        if(!validate()) return;
        setResponse({formSave: true})
        try {
            const res = await fetch(`http://sibre2020-com-br.umbler.net/contato`, {
                method: `POST`,
                body: JSON.stringify(contato),
                headers: { 'Content-Type': 'application/json' }
            });
            const responseEnv = await res.json();
            console.log(responseEnv);            
            if (responseEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message
                })
            } else {
                setResponse({
                    formSave: true,
                    type: 'success',
                    message: responseEnv.message
                })
                
            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro ao enviar a mensagem, por favor tente novamente mais tarde!'
            });
        }
        limpaCampo();
    }

    const validate = () => {
        if(!contato.nome) return setResponse({type: 'error', message: 'Preenchemento do campo Nome é obrigatório!'});
        if(!contato.msg) return setResponse({type: 'error', message: 'Preenchemento da mensagem é obrigatório!'});
        return true;
    }

    const limpaCampo = () =>{
        setContato.contato.nome('');
        setContato.contato.email('');
        setContato.contato.msg('');
    }

    return (<div>
        <Head>
            <title>Contato</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        <Jumbotron fluid className="head-contato">
            <style>{`.head-contato{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
            <Container>
                <h1 className="display-8 text-center">Contato</h1>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="form-contato">
            <style>{`.head-contato{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
            <Container>
                <div className="row featurette">
                    <div className="col-md-6">
                        {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div> : ""}
                        {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div> : ""}
                        <Form onSubmit={envMsg}>
                            <FormGroup>
                                <Label for="nome"><span className="text-danger">*</span> Nome:</Label>
                                <Input type="text" name="nome" id="nome" placeholder="Digite Seu Nome..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="email" name="email" id="email" placeholder="Digite Seu Email..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="amsg">Assunto da Mensagem:</Label>
                                <Input type="text" name="amsg" id="amgs" placeholder="Digite o assunto..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="msg"><span className="text-danger">*</span> Mensagem:</Label>
                                <Input type="textarea" name="msg" id="mgs" placeholder="Digite sua mensagem..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                             {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviar...
                             </Button> : <Button type="submit" outline color="warning">Enviar</Button>}
                             
                            
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <h3 className="featurette-heading">Nossas atividade </h3>
                        <p className="lead">Domingos das 09:00 as 11:00 hrs, Quartas ás 20:00hrs, Sexta as 16:00hrs.</p>
                        <hr />
                        <address>
                            <strong>Endereço</strong><br />
                            Quadra 105 Area Especial 01 <br />
                            Av. Vargem das Benção Recanto das Emas- DF<br />
                            (61)991323236 <br />
                        </address>
                    </div>

                </div>
            </Container>
        </Jumbotron>
       
    </div>)
}

export default Contato;