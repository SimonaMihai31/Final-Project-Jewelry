// get elements
const formElem = document.getElementById('form');
const firstNameElem = document.getElementById('first-name');
const lastNameElem = document.getElementById('last-name');
const emailNameElem = document.getElementById('email');
const messageElem = document.getElementById('message');

// check elems
// console.log(firstNameElem, lastNameElem, emailNameElem, messageElem, formElem);

class UI {
	constructor() {
		this.allElementsAreValid = true;
		this.submitNumbers = 0;
	}

	showError(elem, message) {
		elem.parentElement.classList.add('error');
		const smallElem = elem.parentElement.querySelector('small');
		smallElem.innerHTML = message;
	}

	showSuccess(elem) {
		elem.parentElement.classList.remove('error');
		elem.parentElement.classList.add('success');
	}

	showSubmitSuccessMessage() {
		if (this.allElementsAreValid && this.submitNumbers == 0) {
			let successMessage = document.createElement('p');
			successMessage.classList.add('success');
			successMessage.innerHTML =
      `
      <div class="alert alert-dismissible alert-secondary">
           <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong> Thank you for contacting us , ${firstNameElem.value}  ${lastNameElem.value} ! </strong> 
      </div>`
				// firstNameElem.value +
				// ' ' +
				// lastNameElem.value +
				;
			let divFirstInput = document.getElementById('first-input');
			formElem.insertBefore(successMessage, divFirstInput);

			setTimeout(() => {
				successMessage.remove();
			}, 5000);
			this.submitNumbers++;
		}
	}
	clearFields() {
		formElem.reset();
		firstNameElem.parentElement.classList.remove('success');
		lastNameElem.parentElement.classList.remove('success');
		emailNameElem.parentElement.classList.remove('success');
		messageElem.parentElement.classList.remove('success');
	}
}

formElem.addEventListener('submit', (e) => {
	e.preventDefault();

	let ui = new UI();
	console.log(ui.allElementsAreValid);

	if (firstNameElem.value === '') {
		ui.showError(firstNameElem, 'First name required');
		ui.allElementsAreValid = false;
	} else {
		ui.showSuccess(firstNameElem);
	}

	if (lastNameElem.value === '') {
		ui.showError(lastNameElem, 'Last name required');
		ui.allElementsAreValid = false;
	} else {
		ui.showSuccess(lastNameElem);
	}

	if (emailNameElem.value === '') {
		ui.showError(emailNameElem, 'Email required');
		ui.allElementsAreValid = false;
	} else {
		ui.showSuccess(emailNameElem);
	}

	if (messageElem.value === '') {
		ui.showError(messageElem, 'Message required');
		ui.allElementsAreValid = false;
	} else {
		ui.showSuccess(messageElem);
	}
	ui.showSubmitSuccessMessage();
	ui.clearFields();
});