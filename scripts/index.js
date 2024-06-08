class User {
    constructor() {
        this.submit = document.querySelector("#submit-button");
        this.Inputborder = document.forms['main'].getElementsByTagName("input");
        this.labels = document.forms['main'].getElementsByTagName("label");
        this.messageInput = document.getElementById("message");
        this.requiredText = document.forms['main'].getElementsByClassName("required");
        this.queryBorder = document.querySelectorAll(".radio-wrapper");
        this.accessToken = 0;
        this.listener();
        this.modalToast = document.querySelector(".success-toast");
    }

    displayError(input, requiredText) {
        input.style.border = '1px solid hsl(0, 66%, 54%)';
        requiredText.style.display = 'flex';
    }

    hideError(input, requiredText) {
        input.style.border = '1px solid hsl(186, 15%, 59%)';
        requiredText.style.display = 'none';
    }

    inputHandler(input, requiredText) {
        input.value.trim() === '' ? this.displayError(input, requiredText) : this.hideError(input, requiredText), (this.accessToken++);
    }

    radioHandler(supportInput, generalInput, supportBorder, generalBorder, requiredText) {
        !supportInput.checked && !generalInput.checked ? this.displayError(supportBorder, requiredText) || this.displayError(generalBorder, requiredText) : this.accessToken++;
    }

    checkHandler(input, requiredText) {
        !input.checked ? this.displayError(input, requiredText) : this.accessToken++;
    }

    modal()
    {
        console.log(this.accessToken)
        // this.modalToast.style.display = 'block';
    }

    listener() {
        this.submit.addEventListener('click', (event) => {
            event.preventDefault();
            this.validator();
            this.modal(); // needs validator
        });
    }

    validator() {
        this.inputHandler(this.Inputborder[0], this.requiredText[0]); // fname
        this.inputHandler(this.Inputborder[1], this.requiredText[1]); // lname
        this.inputHandler(this.Inputborder[2], this.requiredText[2]); // email
        this.radioHandler(this.Inputborder[3], this.Inputborder[4], this.queryBorder[0], this.queryBorder[1], this.requiredText[3]); // radio
        this.inputHandler(this.messageInput, this.requiredText[4]); // message
        this.checkHandler(this.Inputborder[5], this.requiredText[5]); // consent
    }
}

const user = new User();
