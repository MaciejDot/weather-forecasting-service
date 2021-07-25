export const fetchResocureThrowOnError = (resocure: string) => 
{
    return fetch(resocure).then(res => {
        if(res.ok)
            return res.json()
        throw {message: "api fetch was unsuccesfull"}
        })
}