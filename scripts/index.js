class Page 
{
    constructor() 
    {
        this.fName = document.querySelectorAll("input[type=text]");
    }
    
    validator() 
    {
        this.fName.forEach(element => 
        {
        });
    }

}

const test = new Page();
test.validator();
