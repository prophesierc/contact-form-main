class Page 
{
    constructor() 
    {

        this.requiredErrorMessage = document.querySelectorAll("#required-message");
        this.requiredErrorBorder = document.querySelectorAll("input[type=text], .radio-wrapper");
        this.submit = document.querySelector("#submit-button");
        this.errorMapping = Array.from(this.requiredErrorMessage).map((errorMessageElement, index) => {
            return {
                errorMessageElement: errorMessageElement,
                borderElement: this.requiredErrorBorder[index]
            };
        });
    }
    displayError() 
    {  
        this.requiredErrorMessage.forEach(textField => 
        {
            this.requiredErrorBorder.forEach(borderField => 
            {
                borderField.style.border = '1px solid red';
            });
            textField.style.display = 'flex';    
        });

    }

    validator()
    {
        console.log(this.errorMapping[0]);   
        this.errorMapping.forEach(Element => 
        {
            Element.style.color = 'green';   
        })
        
    }

    request()
    {
        this.submit.addEventListener('click', () => 
        {
            // this.displayError();
            this.validator();
        })
    }

}

const page = new Page();

page.request();
