class User 
{
    constructor() 
    {
        this.submit = document.querySelector("#submit-button");
        this.inputs = document.forms['main'].getElementsByTagName("input");
        this.labels = document.forms['main'].getElementsByTagName("label");
        this.requiredText = document.forms['main'].getElementsByClassName("required");        
        this.queryLabels = document.forms['main'].getElementsByClassName(".radio-wrapper");        
        this.accessCount = 0;        
    }

    displayError(input, requiredText) 
    {
        input.style.border = '1px solid red';
        requiredText.style.display = 'block';
    }
    inputHandler(input, requiredText)
    {
        (input.value === '' || null) ? this.displayError(input, requiredText) : this.accessCount += 1;
    }
    checkHandler(input, requiredText)
    {
        (input.checked === false) ? this.displayError(input, requiredText) : this.accessCount += 1;
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
                this.inputHandler(this.inputs[0], this.requiredText[0]); //fname
                this.inputHandler(this.inputs[1], this.requiredText[1]); //lname
                this.inputHandler(this.inputs[2], this.requiredText[2]); //email

                this.checkHandler(this.inputs[3], this.queryLabels[0]); //query1
                this.checkHandler(this.inputs[4], this.queryLabels[1]); //query2
                
                this.inputHandler(this.inputs[5], this.requiredText[4]); //message
                this.checkHandler(this.inputs[6], this.requiredText[5]); //consent

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
