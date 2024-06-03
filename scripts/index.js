class Page 
{
    constructor() 
    {
        const theme = getComputedStyle(document.body)
        const errorValidationColor = theme.getPropertyValue('--primary-clr-red')
        this.fName = document.querySelectorAll("input[type=text]");
    }
    
    validator() 
    {
        this.fName.forEach(element => 
        {
            element.style.border = '1px solid red'
        });
    }

}

const test = new Page();
test.validator();
