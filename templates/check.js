function required(inputtx)
{
    if(inputtx.value.length==0)
    {
        alert("City name is required");
        return false;
    }
    return true;
}