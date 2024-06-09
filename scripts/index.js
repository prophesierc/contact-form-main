class User 
{
    constructor() 
    {
        this.submit = document.querySelector("#submit-button");
        this.Inputborder = document.forms['main'].getElementsByTagName("input");
        this.labels = document.forms['main'].getElementsByTagName("label");
        this.messageInput = document.getElementById("message");
        this.requiredText = document.forms['main'].getElementsByClassName("required");
        this.modalToast = document.querySelector(".success-toast");
        this.radio = document.getElementsByClassName("radio-wrapper");
        this.changeListener();
        this.listener();
    }

    changeListener()
    {
        this.radio[0].addEventListener('click', () => 
            {
                this.radio[1].style.backgroundColor = 'hsl(0, 0%, 100%';
                this.Inputborder[3].checked = true;
                this.radio[0].style.backgroundColor = 'hsl(148, 38%, 91%)';
            });
        this.radio[1].addEventListener('click', () => 
            {
                this.radio[0].style.backgroundColor = 'hsl(0, 0%, 100%';
                this.Inputborder[4].checked = true;
                this.radio[1].style.backgroundColor = 'hsl(148, 38%, 91%)';
            });
    }

    displayError(input, requiredText) 
    {
        input.style.border = '1px solid hsl(0, 66%, 54%)';
        requiredText.style.display = 'flex';
    }

    hideError(input, requiredText) 
    {
        input.style.border = '1px solid hsl(186, 15%, 59%)';
        requiredText.style.display = 'none';
    }

    inputHandler(input, requiredText) 
    {
        input.value.trim() === '' 
        ? this.displayError(input, requiredText) : this.hideError(input, requiredText);
    }

    radioHandler(generalInput, supportInput, requiredText) 
    {
        !generalInput.checked && !supportInput.checked 
        ? requiredText.style.display = 'flex' : this.hideError(supportInput, requiredText);
    }

    checkHandler(input, requiredText) 
    {
        !input.checked 
        ? this.displayError(input, requiredText) : this.hideError(input, requiredText);
    }

    modal()
    {
        const isRequiredTextDisplaying = (requiredText) => requiredText.style.display == 'flex';
        !Array.from(this.requiredText).some(isRequiredTextDisplaying) 
        ? (this.modalToast.style.display = 'block', this.submit.disabled = true,
        setTimeout(()=>
        {
            this.modalToast.style.animation = 'fadeOut 0.5s ease-out';
            this.modalToast.style.display = 'none';
            location.reload();
            
        }, 2000
        ))
        : (this.modalToast.style.display = 'none');

    }

    listener() 
    {
        this.submit.addEventListener('click', (event) => 
        {
            event.preventDefault();
            this.validator();
            this.modal();
        });
        this.changeListener();
    }
    

    validator() 
    {
        try
        {
            this.inputHandler(this.Inputborder[0], this.requiredText[0]); // fname
            this.inputHandler(this.Inputborder[1], this.requiredText[1]); // lname
            this.inputHandler(this.Inputborder[2], this.requiredText[2]); // email
            this.radioHandler(this.Inputborder[3], this.Inputborder[4], this.requiredText[3]); // radio
            this.inputHandler(this.messageInput, this.requiredText[4]); // message
            this.checkHandler(this.Inputborder[5], this.requiredText[5]); // consent
        }
        catch(err) 
        {
            console.log(err.message);
        }
    }
}

const user = new User();
