const padding = (v1, v2) => v1.style.padding = v2

const margin = (v1, v2) => v1.style.margin = v2

const background = (v1, v2) => v1.style.background = v2

const color = (v1, v2) => v1.style.color = v2

const textSize = (v1, v2) => v1.style.fontSize = v2

const textAlign = (v1, v2) => v1.style.textAlign = v2

const chanceText = (v1, v2) => v1.innerText = `${v2}`

const border = (v1, v2) => v1.style.border = v2

const borderRadius = (v1, v2) => v1.style.borderRadius = v2

const width = (v1, v2) => v1.style.width = v2

const height = (v1, v2) => v1.style.height = v2


export { 
    padding, 
    margin, 
    background, 
    color,
    textSize, 
    textAlign,
    chanceText, 
    border,
    borderRadius,
    width,
    height
}



/*
    Estilizações:
        - Padding
        - Margin
        - Background
        - Color
        - TextSize
        - ChanceText
        - Border
        - BorderRadius
        - Width
        - Heigth
        
    Futuramente
        - FontFamily
        - Display 
        - Grid pronto
        - Flexbox pronto
        - Slide
        - Parallax
        - 3D

    
    # Basta apenas importar as funções e separa-las por variáveis, por exemplo:

    // Variáveis
    const header = document.querySelector('header')
    const h1 = document.querySelector('#logo')
    
    // Header - <header> -------
    padding(header, 2rem)
    margin(header, 2rem)

    // h1 - #logo ------
    background(h1, red)

    # Dicas

        - Essa biblioteca aceita todo tipo de tamanho (rem, px, em, ...)
        - As cores podem ser tanto por nome, como hexa (#000)
        - Adicione na tag <script prefer> 


*/