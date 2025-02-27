function aparecePrompt(){
    let area = prompt("Olá! Escolha a opção: 1 - se prefere Front-End ou 2 - se prefere Back-End")
    
    if(area == "1"){
        let techFront = prompt("Escolha a opção: 1 - se prefere aprender React ou 2 - se prefere aprender Vue?")
        
    } else if(area == "2") {
        let techBack = prompt("Escolha a opção: 1 - se prefere aprender C# ou 2 - se prefere aprender Java?")
        
    } else {
        alert("Você não respondeu uma opção válida!")
    }

    let listaTechs = []

    let fullStack = prompt("Você prefere: 1 - seguir na área escolhida ou 2 - seguir se desenvolvendo para se tornar Fullstack?")
    
    let aprenderMais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 - sim ou 2 - não")

    while (aprenderMais == "1") {
        let novaTech = prompt("Tem mais alguma tecnologia que você deseja aprender?")
        listaTechs.push(novaTech)
        aprenderMais = prompt(`Legal que queira aprender ${novaTech}. Tem mais alguma tecnologia que você gostaria de aprender? 1 - sim ou 2 - não`)
    } 
    
    alert(`Agora sua lista de desejos está assim: ${listaTechs}.  Bons estudos para você! `)

}


