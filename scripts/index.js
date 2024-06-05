class User 
{
    constructor() 
    {
        this.submit = document.querySelector("#submit-button");
        //fname
        this.firstNameInput = document.forms['main']['fname-text'];
        this.firstNameLabel = document.querySelector('#fname-label');
        //lname
        this.lastNameInput = document.forms['main']['lname-text'];
        this.lastNameLabel = document.querySelector('#lname-label');
        //email
        this.emailInput = document.forms['main']['email-text'];
        this.emailLabel = document.querySelector('#email-label');
        //query
        this.queryInput = document.forms['main']['query-text'];
        // this.queryLabel = document.querySelector('#query-label');
        // wip (index of both queries to validate if some() === true)
        //message
        this.messageInput = document.forms['main']['message-text'];
        this.messageLabel = document.querySelector('#message-label');
        ///consent
        this.consentInput = document.forms['main']['consent-text'];
        this.consentLabel = document.querySelector('#consent-label');
    }

    displayError(input, label) 
    {
        input.style.color = 'red';
        input.style.border = '1px solid red';
        label.style.display = 'flex';
    }

    validator() 
    {
        let errorStatus = true;
        this.submit.addEventListener('click', () => 
        {
            //fname
            this.firstNameInput.value === '' ? this.displayError(this.firstNameInput, this.firstNameLabel) : console.error();
            //lname
            this.lastNameInput.value === '' ? this.displayError(this.lastNameInput, this.lastNameLabel) : console.error();
            //email
            this.emailInput.value === '' ? this.displayError(this.emailInput, this.emailLabel) : console.error();
            //query
            // this.queryInput.value === '' ? this.displayError(this.queryInput, this.queryLabel) : console.error();
            //message
            this.messageInput.value === '' ? this.displayError(this.messageInput, this.messageLabel) : console.error();
            //consent
            this.consentInput.checked === false ? this.displayError(this.consentInput, this.consentLabel) : console.error();
            
        });
    }
}

const user = new User();
user.validator();
