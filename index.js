let cadastroevento=[]
let idade=25
let datadoevento=10
let podecadastrar=true
let qtdparticipantes=50


if (datadoevento>10){
console.log ('data do evento nao coincide com a atual')
podecadastrar=false
}

if (idade<18){
console.log('idade menor do que permitido cadastro nao realizado')
podecadastrar=false
}

if (qtdparticipantes<100){
console.log('cadastro nao permitido quantidade execedida')
podecadastrar=false
}

if (podeCadastrar=true){
    cadastroevento.push(cadastroevento)
    console.log('cadastramento efetuado com sucesso')
    } else{
    console.log('Houve problemas para realizar o cadastro')
    }

    console.log('cadastroevento ')
for (let i=0;i<cadastroevento.idade.qtdparticipantes;i){
console.log(cadastroevento[i])
}