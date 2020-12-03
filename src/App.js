import React, { useState } from 'react';
import produce from 'immer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	const [tabuleiro, setTabuleiro] = useState(['', '', '', '', '', '', '', '', '']);
	const [jogadorDaVez, setJogadorDaVez] = useState('x');
	const [placarX, setPlacarX] = useState(0);
	const [placarO, setPlacarO] = useState(0);
	const [empates, setEmpates] = useState(0);

	function jogou(numero) {
		if (tabuleiro[numero] !== '') {
			return;
		}
		const tabuleiroNovo = produce(tabuleiro, function (tabuleiro) {
			tabuleiro[numero] = jogadorDaVez;
			if (jogadorDaVez === 'x') {
				setJogadorDaVez('o');
			} else {
				setJogadorDaVez('x');
			}
		});
		setTabuleiro(tabuleiroNovo);
		if (ganhou(tabuleiroNovo, jogadorDaVez) === true) {
			alert(jogadorDaVez + ' ganhou');
			setTabuleiro(['', '', '', '', '', '', '', '', '']);
			if (jogadorDaVez === 'x') {
				setPlacarX(placarX + 1);
			} else if (jogadorDaVez === 'o') {
				setPlacarO(placarO + 1);
			}
		} else {
			if (empatou(tabuleiroNovo)) {
				alert('Empate');
				setTabuleiro(['', '', '', '', '', '', '', '', '']);
				setEmpates(empates + 1);
			}
		}
	}
	return (
		<Container>
			<div className="conteudo">
				<h1>JOGO DA VELHA</h1>
				<Row>
					<Col lg={{ span: 4, offset: 2 }}>
						<table className="tabuleiro">
							<tr>
								<td>
									<Button variant="light" onClick={() => jogou(0)}>
										{tabuleiro[0]}
									</Button>
								</td>
								<td>
									<Button variant="light" onClick={() => jogou(1)}>
										{tabuleiro[1]}
									</Button>
								</td>
								<td>
									<Button variant="light" onClick={() => jogou(2)}>
										{tabuleiro[2]}
									</Button>
								</td>
							</tr>
							<tr>
								<td>
									<Button variant="light" onClick={() => jogou(3)}>
										{tabuleiro[3]}
									</Button>
								</td>
								<td>
									<Button variant="light" onClick={() => jogou(4)}>
										{tabuleiro[4]}
									</Button>
								</td>
								<td>
									<Button variant="light" onClick={() => jogou(5)}>
										{tabuleiro[5]}
									</Button>
								</td>
							</tr>
							<tr>
								<td>
									<Button variant="light" onClick={() => jogou(6)}>
										{tabuleiro[6]}
									</Button>
								</td>
								<td>
									<Button variant="light" onClick={() => jogou(7)}>
										{tabuleiro[7]}
									</Button>
								</td>
								<td>
									<Button variant="light" onClick={() => jogou(8)}>
										{tabuleiro[8]}
									</Button>
								</td>
							</tr>
						</table>
					</Col>
					<Col lg={{ span: 4, offset: 1 }}>
						<div className="placar">
							<h2>Placar</h2>
							<Row>
								<Col>
									<p>Pontos X </p>
								</Col>
								<Col>
									<p>Pontos O </p>
								</Col>

								<Col>
									<p>Empates </p>
								</Col>
							</Row>
							<Row className="pontos">
								<Col>{placarX}</Col>
								<Col>{placarO}</Col>
								<Col>{empates}</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
			<div className="rodape">
				<a href="https://marianazambarda.com/" target="_blank">
					<p>Desenvolvido por: Mariana Zambarda</p>
				</a>
			</div>
		</Container>
	);
}

function ganhou(tabuleiro, jogador) {
	if (
		(tabuleiro[0] === jogador && tabuleiro[1] === jogador && tabuleiro[2] === jogador) ||
		(tabuleiro[3] === jogador && tabuleiro[4] === jogador && tabuleiro[5] === jogador) ||
		(tabuleiro[6] === jogador && tabuleiro[7] === jogador && tabuleiro[8] === jogador) ||
		(tabuleiro[0] === jogador && tabuleiro[3] === jogador && tabuleiro[6] === jogador) ||
		(tabuleiro[1] === jogador && tabuleiro[4] === jogador && tabuleiro[7] === jogador) ||
		(tabuleiro[2] === jogador && tabuleiro[5] === jogador && tabuleiro[8] === jogador) ||
		(tabuleiro[0] === jogador && tabuleiro[4] === jogador && tabuleiro[8] === jogador) ||
		(tabuleiro[6] === jogador && tabuleiro[4] === jogador && tabuleiro[2] === jogador)
	) {
		return true;
	} else {
		return false;
	}
}

function empatou(tabuleiro) {
	for (const casa of tabuleiro) {
		if (casa === '') {
			return false;
		}
	}
	return true;
}
export default App;
