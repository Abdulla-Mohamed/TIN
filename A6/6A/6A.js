
function convert(form)
{
    let choice = form.type.value;
    let number = form.input.value;
    if(choice === 'F')
    {
        let conversion = (number - 32)*(5/9);
        form.result.value = conversion;
    }
    else
    if(choice === 'C')
    {
        let conversion = (number * (9/5))+32;
        form.result.value = conversion;
    }

}