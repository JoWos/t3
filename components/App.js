var contacts = [
	{
		id: 1,
		firstName: 'Janek',
		lastName: 'Nowak',
		email: 'jan.nowak@example.com',
	},
	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Kowal',
		email: 'adam.kowalski@example.com',
	},
	{
		id: 3,
		firstName: 'Bożena',
		lastName: 'Koziol',
		email: 'zbigniew.koziol@example.com'
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};


var App = React.createClass({
	render: function() {
		return (
			<div className='app'>
				<ContactForm contact={contactForm} />
				<Contacts items={contacts} />
			</div>
		);
	}
})
