import React from 'react';
import logo from '@assets/logo.svg';
import { Button } from 'antd';
import Bb from '@pages/Bb/Bb';
import './Aa.less';

function Aa() {
	const a = 12;
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx111</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React 123
				</a>
				<Bb />
				<Button type="primary">Button</Button>
			</header>
		</div>
	);
}

export default Aa;
