import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';

function sobre() {
    return (<div>
        <Head>
            <title>Sobre</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Logo abaixo temos a historia da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        Sobre<br />
        <Jumbotron fluid className="head-sobre">
            <style>{`.head-sobre{
            padding-top: 40px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }`}</style>
            <Container>
                <h1 className="text-center">Sobre a Sibre</h1>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="sobre">
            <style>{`.sobre{
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
                        <h2 className="featurette-heading">Segunda Igreja Batista no Recanto das Emas - DF.</h2>
                        <p className="lead">Sibre foi organizada igreja em 2003 após 11 anós como congregação sendo
                        ajudada pela Segunda Igreja Batista do Plano Piloto que adquiriu um lote para a
                        congregação localizada à QD 105 AE 01 Avenida Vargem da Bênção, onde começamos a
                        construção do atual templo com a ajuda de um grupo de irmãos americanos vindos ao
                        Brasil com esta finalidade. O Seminarista Alexandre juntamente com sua esposa, Sra.
                        Raquel Mousinho de Moura Fé, permaneceu conosco até 2003.
                        De lá para cá passamos por muitas dificuldades mas, nossas vitórias e
                        conquistas foram muito maiores e em tudo reconhecemos o amor, a fidelidade e o cuidado
                        do Senhor Jesus para com as nossas vidas, e a colaboração de nossos irmãos desta
                        congregação, dos que por aqui passaram e de nossa amada Segunda Igreja Batista do Plano
                        Piloto. Pois, como vemos nas Sagradas Escrituras:
                        “E sabemos que todas as coisas contribuem juntamente para o bem daqueles
                        que amam a Deus, daqueles que são chamados por seu decreto.” (Romanos 8:28)
                        Além disso, reconhecemos que somos apenas instrumentos nas mãos do
                        Senhor, e somente a Ele rendemos toda honra, glória e louvores por todos os seus feitos em
                        nosso meio.
                        “Porque Deus é quem efetua em vós tanto o querer como o realizar, segundo a
sua vontade.” (Filipenses 2:13).</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img002.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Toda honra seja dada ao Senhor Jesus Cristo.</h2>
                        <p className="lead">Ao único que é digno de receber
                        A honra e a glória, a força e o poder
                        Ao Rei eterno imortal, invisível mas real
                                A Ele, ministramos o louvor</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img007.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}

export default sobre;