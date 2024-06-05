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

        //if array/object of all inputs are filled => onclick submit modal
    }

    displayError(input, label) 
    {
        input.style.border = '1px solid red';
        label.style.display = 'flex';
    }
    refresh()
    {
        this.submit.addEventListener('click', () => 
        {
            document.location.reload();
        });
    }

    validator() 
    {
        let errorStatus = true;
        if (errorStatus === true)
        {
            this.submit.addEventListener('click', () => 
            {
                //fname
                (this.firstNameInput.value === '' || NaN || null) ? this.displayError(this.firstNameInput, this.firstNameLabel) : errorStatus === false;
                //lname
                (this.lastNameInput.value === '' || NaN || null) ? this.displayError(this.lastNameInput, this.lastNameLabel) : errorStatus === false;
                //email
                (this.emailInput.value === '' || NaN || null) ? this.displayError(this.emailInput, this.emailLabel) : errorStatus === false;
                //query
                // (this.queryInput.value === '') ? this.displayError(this.queryInput, this.queryLabel) : console.error(error);
                //message
                (this.messageInput.value === '' || NaN || null) ? this.displayError(this.messageInput, this.messageLabel) : errorStatus === false;
                //consent
                (this.consentInput.checked === false) ? this.displayError(this.consentInput, this.consentLabel) : errorStatus === false;
                errorStatus === false;
            }); 
        }
        else
        {
            this.refresh();
        }
    }
}

const user = new User();
user.validator();
