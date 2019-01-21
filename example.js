// https://michelelarson.com/prettier-config/

const months = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sept',
	'oct',
	'nov',
	'dec',
];

const myObject = {
	name: 'Ally',
};

const doSomething = withThis => {
	return withThis;
};

const exampleJsx = ({ data }) => {
	return (
		<div
			className='jsx-template'
			onClick={doSomething.bind(this)}
			id={id}
			data={data}
			key={id}>
			<h1>Here is a title</h1>
		</div>
	);
};

export default exampleJsx;
