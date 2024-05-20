import React, {useState} from "react";

function GaleriaDeFotos(){
    const [imagens, setImagens] = useState([
        'https://via.placeholder.com/150', 
        'https://via.placeholder.com/150', 
        'https://via.placeholder.com/150' 
    ]);

    const adicionarImagem = () =>{
        setImagens([...imagens,  'https://via.placeholder.com/150']);   
    };

    return(
        <div className="container">
        <div className="div">
            <h2>Galeria de Imagens</h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <div className="gallery">
                {imagens.map((imagem,index) =>(
                    <img key={index} src={imagem} alt={`Imagem${index + 1}`}style={{margin:'5px'}}/>
                ))}
                </div>
            </div>
            <button onClick={adicionarImagem} style={{marginTop:'10px'}}>Adicionar Imagem   </button>
        </div>
        </div>
    )
}

export default GaleriaDeFotos;