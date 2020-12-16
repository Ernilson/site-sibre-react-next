import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';

function Encontros() {
    return (<div>
        <Head>
            <title>Comunhão</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Logo abaixo temos a historia da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        <br />
        <Jumbotron fluid className="head-comunhao">
            <style>{`.head-comunhao{
            padding-top: 40px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }`}</style>
            <Container>
                <h1 className="text-center">Comunhão</h1>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="comunhao">
            <style>{`.comunhao{
            padding-top: 20px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }.featurette-divider{
            margin: 5rem 0;            
        }`}</style>
            <Container>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good.</h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/culto2.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good.</h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/subr2.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good.</h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img001.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}

export default Encontros;