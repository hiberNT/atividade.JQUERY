$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
})
        
    $('#CANCELAR').click(function(){
        $('form').slideUp()
})
        
    $('form').on('submit',function(e){
        e.preventDefault()
        
        const taref = $('#tarefa').val()
        const novoItem = $('<li> </li>').text(taref)
                

        $(novoItem).click(function(){
            $(this).toggleClass('tarefaconcluido') //PARA ADICIONAR A LINHA QUANDO EU CLICAR NA PALAVRA
        })
        
        
        //$(novoItem).dblclick(function(){
           // $(this).remove()  //O uso de this em JavaScript (e em jQuery) se refere ao contexto atual no qual a função está sendo chamada. No contexto de manipuladores de eventos, como o evento de clique (click) ou clique duplo (dblclick), this se refere ao elemento no qual o evento ocorreu.
        //})

        const btApagar = $('<button class = "btapaga"> Apagar </button>')
        btApagar.click(function(){
            novoItem.remove()
        })

        btApagar.appendTo(novoItem)

        $(novoItem).appendTo('ul')
        
        })
        }) 






