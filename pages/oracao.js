import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';

import { Jumbotron, Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

function Oracao() {

    const [oracao, setOracao] = useState({
        nome: '',
        email: '',        
        msg: ''
    });

    const onchangeInput = e => setOracao({ ...oracao, [e.target.name]: e.target.value });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const envMsg = async e => {
        e.preventDefault();
       
       if(!validate()) return;
       setResponse({formSave: true})

        try {
            const res = await fetch(`https://sibre2020-com-br.umbler.net/oracao`, {
                method: `POST`,
                body: JSON.stringify(oracao),
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
                });
            }
        } catch (err) {            
            setResponse({
                formSave: false,
                type: 'success',
                message: ' Mensagem enviada com sucesso!',
                formSuccess: true
                
            });     
        }
    }

    const validate = () => {
        if(!oracao.nome) return setResponse({type: 'error', message: 'Preenchemento do campo Nome é obrigatório!'});
        if(!oracao.msg) return setResponse({type: 'error', message: 'Preenchemento da mensagem é obrigatório!'});
        return true;
    }
    
    return (
        <div>
            <Head>
                <title>Oração</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Orai uns pelos outros. Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            <Jumbotron fluid className="head-oracao">
                <style>{`.head-oracao{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
                <Container>
                    <h1 className="display-8 text-center">Oração</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="form-oracao">
                <style>{`.head-oracao{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
                <Container>
                    <div className="row featurette">
                        <div className="col-md-6">
                        {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div> : ""}
                        {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div> : ""}
                            <Form onSubmit={envMsg}>
                                <FormGroup>
                                    <Label for="nome">Nome:</Label>
                                    <Input type="text" name="nome" id="nome" placeholder="Digite Seu Nome..."
                                        onChange={onchangeInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input type="email" name="email" id="email" placeholder="Digite Seu Email..."
                                        onChange={onchangeInput} />
                                </FormGroup>                                
                                <FormGroup>
                                    <Label for="msg">Mensagem:</Label>
                                    <Input type="textarea" name="msg" id="mgs" placeholder="Digite aqui seu pedido de oração"
                                        onChange={onchangeInput} />
                                </FormGroup>
                                {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviar...
                                  </Button> : <Button type="submit" outline color="warning">Enviar</Button>}
                            </Form>
                        </div>
                        <div className="col-md-6">
                            <h3 className="featurette-heading">Orai sem cessar </h3>
                            <p className="lead">A oração dos justos podem muito em seus efeitos - Tiago 5:16.</p>
                            <hr />
                            <address>
                                <strong>Orai</strong><br />
                                Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.<br />
                                Porque, aquele que pede, recebe; e, o que busca, encontra; e, ao que bate, abrir-se-lhe-á.<br />
                                E qual dentre vós é o homem que, pedindo-lhe pão o seu filho, lhe dará uma pedra?<br />
                                E, pedindo-lhe peixe, lhe dará uma serpente? <br />
                                Se vós, pois, sendo maus, sabeis dar boas coisas aos vossos filhos, quanto mais vosso Pai, 
                                que está nos céus, dará bens aos que lhe pedirem? <br />

                                Mateus 7:7-11 <br />                           
                            </address>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <RodaPe />
        </div>
    )
}

export default Oracao;