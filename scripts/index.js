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
        this.queryInput = document.getElementsByName('query-type');
        this.queryLabel = document.querySelector('#query-label');
        this.queryLabelGroup = document.querySelectorAll('.radio-wrapper');        
        //message
        this.messageInput = document.forms['main']['message-text'];
        this.messageLabel = document.querySelector('#message-label');
        ///consent
        this.consentInput = document.forms['main']['consent-text'];
        this.consentLabel = document.querySelector('#consent-label');
        this.accessCount = 0;
    }

    displayError(input, label) 
    {
        input.style.border = '1px solid red';
        label.style.display = 'flex';
    }
    inputHandler(input, label)
    {
        (input.value === '' || null) ? this.displayError(input, label) : this.accessCount += 1;
    }
    checkHandler(input, label)
    {
        (input.checked === false) ? this.displayError(input, label) : this.accessCount += 1;
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
                this.inputHandler(this.firstNameInput, this.firstNameLabel);
                //lname
                this.inputHandler(this.lastNameInput, this.lastNameLabel);
                //email
                this.inputHandler(this.emailInput, this.emailLabel);                
                //query                 
                this.checkHandler(this.queryInput[0], this.queryLabel);         
                console.log(this.queryInput[0].checked);
                console.log(this.queryInput[1].checked);
                //message
                this.inputHandler(this.messageInput, this.messageLabel);
                //consent
                this.checkHandler(this.consentInput, this.consentLabel);                
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
