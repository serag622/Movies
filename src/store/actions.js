export  function Addtofavourties(data){
    return{
        type : 'PUSH',
        payload : data
    }
}

export function Deletefavourite(data){
    return{
        type:'DELETE',
        payload:data
    }
}