import '../Lista/Lista.css'

function criarLista(bacon){

    return(
        <li className="li">{bacon}</li>
    )
}


function Lista(){
    const vetLista = ['Futebol','Natação','Volei', 'Badmington']
   
    return(
        <>

          <ul className="ul"> 
           {vetLista.map((item)=>criarLista(item))   }
          
           </ul> 
 
        </>
    )

}
export default Lista