import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';

import { Jumbotron, Container } from 'reactstrap';

function Home({data}) {
    return (
        <div>
            <Head>
                <title>Sibre</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Site da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />

            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>{`.descr-top{
                background-image: url(/month.jpg);
                background-repeat: no-repeat;
                background-position: center;
                padding-top: 100px;
                padding-buttom:80px;
                color: #FFF;
                text-align: center;
                margin-bottom: 0ren ! important;                
            }`}</style>
                <Container><h2 className="display-5">Um lugar de comunhão, louvor e adoração a Deus</h2>
                    <p className="lead mb-4">Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração." Jeremias 29:12-13!"</p>
                    <Link href="/contato">
                        <a className="btn btn-outline-light btn-lg">Entre em Contato</a>
                    </Link>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
            padding-top: 10px;
            padding-buttom:60px;
            background: #FFF;
            margin-bottom: 0ren ! important;

            }.circulo1{
            width:140px;
            height: 140px;
            background-image: url(/culto.png);           
            }.centralizar{
            margin: 0 auto !important;
            float: none !important;

            }.circulo2{
            width:140px;
            height: 140px;
            background-image: url(/nino2.png);
            }.centralizar2{
            margin: 0 auto !important;
            float: none !important;

            }.circulo3{
            width:140px;
            height: 140px;
            background-image: url(/psicologo.png);
            }.centralizar3{
            margin: 0 auto !important;
            float: none !important;
            }`}</style>

                <Container className="text-center">
                    <div>
                        <h3 className="display-6"> Segunda Igreja Batista no Recanto das Emas</h3>
                        <p className="lead pb-4">"Servi ao Senhor com alegria!"</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo1 centralizar" />
                            <h2 className="mt-4 mb-4">Nossos Encontros</h2>
                            <Link href="/comunhao">
                                <a className="btn btn-light"><p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p></a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo2 centralizar2" />
                            <h2 className="mt-4 mb-4">Ação Social</h2>
                            <Link href="/acao_social">
                                <a className="btn btn-light"><p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p></a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo3 centralizar3" />
                            <h2 className="mt-4 mb-4">Apoio Psicológico</h2>
                            <Link href="/apoio_Psicologico">
                                <a className="btn btn-light"><p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p></a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <RodaPe />
        </div>

    );
}

export async function getServerSideProps(){
 const response = await fetch(`http://sibre2020-com-br.umbler.net/contato`);
const data = await response.json();
console.log(data);
return {props: {data}}
}
export default Home;