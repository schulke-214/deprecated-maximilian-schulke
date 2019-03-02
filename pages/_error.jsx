import Link from 'next/link';

export default class ErrorPage extends React.Component {
	render() {
		console.log('embedd gif manually');
		return (
			<>
				<div>404</div>
				<div>
					<h1>Page not found</h1>
					<iframe
						src='https://giphy.com/embed/yoJC2Olx0ekMy2nX7W'
						width='480'
						height='264'
						frameBorder='0'
						className='giphy-embed'
						allowFullScreen
					/>
					<Link href='/'>
						<a>Go home</a>
					</Link>
				</div>
			</>
		);
	}
}
