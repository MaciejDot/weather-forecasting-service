export const fetchResocureThrowOnError = (resocure: string) => 
{
    return fetch(resocure).then(res => {
        if(res.ok)
            return res.json()
        throw new Error("api fetch was unsuccesfull")
        })
}