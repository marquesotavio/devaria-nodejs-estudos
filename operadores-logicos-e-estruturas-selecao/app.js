const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Este programa vai chegar se voce e maior de 18 anos e tem habilitação para saber se voce pode entrar no kart');
console.log('Alem das suas verificacoes, verificar se voce esta na lista de presença do horario');

readLine.question('Qual o ano do seu nasicmento?', ano =>{
    if(ano > 2004){
        console.log('Voce não tem 18 anos');
    }else{
        readLine.question("Voce tem habilitacao? (Sim/Nao)", temHabilitacao => {
            if(!(temHabilitacao.toLocaleUpperCase() === "SIM")){                
                console.log('Voce não tem habilitação par aentrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao Kart Rafael');
                            break;
                        default:
                            console.log('Seu nome não está na lista de presença');
                    }
                });
            }

        })
    }
})