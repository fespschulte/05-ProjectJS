let option
let items = []

while(option != 3) {
    
    option = Number(prompt(`
    Olá usuário! Digite a opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `));
    
    switch(option) {
        case 1:
            let item = prompt("Digite o noome do item")
            items.push(item)
            break
        case 2:
            if (items.length == 0){
                alert("Não existem itens cadastrados")
            } else {
                alert(items)
            }
            break
        case 3:
            alert("Tchau!")
            break
        default:
            alert("Nenhuma opção válida!")
    }

}