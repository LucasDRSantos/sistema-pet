var lista_animais = []
var lista_pessoas = []
var cadastro_chipID = []
var cadastro_cpf = []

function cadrastrarAnimal() { //função cadrastrar animal 
    var animal = {
        nome: null,
        chipId: null,
        especie: null,
        Raças: null,
        sexo: null,
        idade: null,
        peso: null,
        situação: null,
        status: null,
        adota: null,
    }

    animal.nome = prompt("digite o nome do animal ")
    animal.chipId = prompt("Digite o chipID: ") // verificação de ChipID
    for (var i = 0; i < cadastro_chipID.length; i++) {
        if (animal.chipId == cadastro_chipID[i]) {
            alert("ChipID ja foi registrado !")
            return
        }
    }
    cadastro_chipID.push(animal.chipId);

    animal.especie = Number(prompt(" Escolha a especie do animal \n 1- cachorro \n 2-gato \n 3-outros"))
    switch (animal.especie) {
        case 1:
            animal.especie = "cachorro"
            break;
        case 2:
            animal.especie = "gato"
            break;
        case 3:
            animal.especie = prompt("Digite a especie do animal")
            break;
        default:
            alert("opção invalida !")
            return
    }
    animal.Raças = prompt("Digite a raça do animal: ")
    animal.sexo = Number(prompt(" escolha o sexo: \n 1-Macho \n 2-Femea"))
    switch (animal.sexo) {
        case 1:
            animal.sexo = "Macho"
            break;
        case 2:
            animal.sexo = "Femea"
            break;
        default:
            alert("opção invalida !")
            return
    }
    animal.idade = prompt("Digite a idade: ")
    animal.status = "disponivel"
    animal.peso = prompt("digite o peso do animal: ")
    animal.situação = prompt("O animal esta vivo ou morto ?")

    lista_animais.push(animal)
    console.log(animal.nome + "  Animal cadrastrado !")
    console.log("Nome do animal: " + animal.nome + "\n" + "especie: " + animal.especie + "\n" + "Racas: " + animal.Raças + "\n" + "Sexo do animal: " + animal.sexo + "\n" + "Idade: " + animal.idade + "\n" + "Peso: " + animal.peso + "\n" + "ChipId: " + animal.chipId + "\n" + "situação: " + animal.situação + "\n" + "status: " + animal.status)

}

function listaAnimais() {
    for (var i = 0; i < lista_animais.length; i++)
        if (lista_animais[i].status == "disponivel" && lista_animais[i].situação == "vivo") {
            console.log("________________LISTA ANIMAIS________________")
            console.log("Nome: " + lista_animais[i].nome);
            console.log("Especie: " + lista_animais[i].especie);
            console.log("Raças: " + lista_animais[i].Raças);
            console.log("Sexo do animal: " + lista_animais[i].sexo);
            console.log("Idade: " + lista_animais[i].idade);
            console.log("ChipID: " + lista_animais[i].chipId);
            console.log("Situacao: " + lista_animais[i].situação)
            console.log("status: " + lista_animais[i].status)
        }
    return console.log(lista_animais)
}

function buscarAnimalNome() {
    var auxbusca = prompt("digite o nome: ")
    var busca = false
    for (var i = 0; i < lista_animais.length; i++) {
        if (auxbusca === lista_animais[i].nome) {
            console.log("_____________" + "Busca por nome com sucesso!" + "_____________")
            console.log("nome: " + lista_animais[i].nome)
            console.log("chipId: " + lista_animais[i].chipId)
            console.log("especie: " + lista_animais[i].especie)
            console.log("racas: " + lista_animais[i].Raças)
            console.log("sexo: " + lista_animais[i].sexo)
            console.log("idade: " + lista_animais[i].idade)
            console.log("peso: " + lista_animais[i].peso)
            console.log("situacao: " + lista_animais[i].situação)
            console.log("status: " + lista_animais[i].status)
            busca = true;
        }
    }
    if (!busca && i != lista_animais.length - 1) {
        alert("ficha inexistente !")
    }
}

function buscarAnimalChipID() {
    var auxbuscachip = prompt("digite o chipID: ")
    var busca = false
    for (var i = 0; i < lista_animais.length; i++) {
        if (auxbuscachip === lista_animais[i].chipId) {
            console.log("_____________" + "Busca por chipID com sucesso!" + "_____________")
            console.log("nome: " + lista_animais[i].nome)
            console.log("chipId: " + lista_animais[i].chipId)
            console.log("especie: " + lista_animais[i].especie)
            console.log("racas: " + lista_animais[i].Raças)
            console.log("sexo: " + lista_animais[i].sexo)
            console.log("idade: " + lista_animais[i].idade)
            console.log("peso: " + lista_animais[i].peso)
            console.log("situacao: " + lista_animais[i].situação)
            console.log("status: " + lista_animais[i].status)
            busca = true;
        }
    }
    if (!busca && i != lista_animais.length - 1) {
        alert("ficha inexistente !")
    }
}

function cadastrarPessoa() {
    var pessoa = {
        nome: null,
        cpf: null,
        telefone: null,
        estado: null,
        cidade: null,
        Rua: null,
        cep: null,
        adota: null,
    }
    pessoa.nome = prompt("Digite seu nome:")
    pessoa.cpf = prompt("Digite seu cpf: ") //verificação de cpfs
    for (var i = 0; i < cadastro_cpf.length; i++) {
        if (pessoa.cpf === cadastro_cpf[i]) {
            alert("CPF ja foi registrado !")
            return
        }
        cadastro_cpf.push(pessoa.cpf)
    }


    pessoa.telefone = prompt("Digite seu telefone:")
    pessoa.estado = prompt("Digite seu estado: ")
    pessoa.cidade = prompt("Digite sua cidade:")
    pessoa.Rua = prompt("Digite sua rua:")
    pessoa.cep = prompt("Digite seu cep")

    lista_pessoas.push(pessoa)
    console.log(pessoa.nome + "  voce foi cadrastrado !")
    console.log("Nome: " + pessoa.nome + "\n" + "cpf: " + pessoa.cpf + "\n" + "Telefone: " + pessoa.telefone + "\n" + "Estado: " + pessoa.estado + "\n" + "Cidade: " + pessoa.cidade + "\n" + "Rua: " + pessoa.Rua + "\n" + "Cep: " + pessoa.cep)

}

function listapessoas() {
    for (var i = 0; i < lista_pessoas.length; i++) {
        console.log("________________LISTA PESSOAS________________")
        console.log("Nome: " + lista_pessoas[i].nome);
        console.log("CPF: " + lista_pessoas[i].cpf);
        console.log("telefone: " + lista_pessoas[i].telefone);
        console.log("estado: " + lista_pessoas[i].estado);
        console.log("cidade: " + lista_pessoas[i].cidade);
        console.log("Rua: " + lista_pessoas[i].Rua);
        console.log("cep: " + lista_pessoas[i].cep);
        console.log("adotado" + lista_pessoas[i].adota)
    }
}

function buscarPessoaNome() {
    var auxbusca = prompt("Digite o nome: ")
    var busca = false
    for (var i = 0; i < lista_pessoas.length; i++) {
        if (auxbusca === lista_pessoas[i].nome) {
            console.log("_____________" + "Busca por nome com sucesso!" + "_____________")
            console.log("nome: " + lista_pessoas[i].nome)
            console.log("cpf: " + lista_pessoas[i].cpf)
            console.log("telefone: " + lista_pessoas[i].telefone)
            console.log("estado: " + lista_pessoas[i].estado)
            console.log("cidade: " + lista_pessoas[i].cidade)
            console.log("rua: " + lista_pessoas[i].Rua)
            console.log("cep: " + lista_pessoas[i].cep)
            busca = true;
        }
    }
    if (!busca && i != lista_animais.length - 1) {
        alert("ficha inexistente !")
    }
}

function buscarPessoaCpf() {
    var auxbusca = prompt("Digite o cpf: ")
    var busca = false
    for (var i = 0; i < lista_pessoas.length; i++) {
        if (auxbusca === lista_pessoas[i].cpf) {
            console.log("_____________" + "Busca do cpf com sucesso!" + "_____________")
            console.log("nome: " + lista_pessoas[i].nome)
            console.log("cpf: " + lista_pessoas[i].cpf)
            console.log("telefone: " + lista_pessoas[i].telefone)
            console.log("estado: " + lista_pessoas[i].estado)
            console.log("cidade: " + lista_pessoas[i].cidade)
            console.log("rua: " + lista_pessoas[i].Rua)
            console.log("cep: " + lista_pessoas[i].cep)
            busca = true;
        }
    }
    if (!busca && i != lista_animais.length - 1) {
        alert("ficha inexistente !")
    }
}

function adotaAnimal() {
    var valida_cpf = prompt("informe seu cpf para valida: !")
    var cpfAutenticado = false
    for (var i = 0; i < lista_pessoas.length; i++) {
        if (valida_cpf == lista_pessoas[i].cpf) {
            console.log("cpf encontrado")
            console.log("Nome: " + lista_pessoas[i].nome + "\n" + "cpf encontrado: " + lista_pessoas[i].cpf)
            cpfAutenticado = true

            var valida_chiID = prompt("informe seu o chipID para valida: !")
            var chipIDAutenticado = false
            for (var j = 0; j < lista_animais.length; j++) {
                if (valida_chiID == lista_animais[j].chipId) {
                    console.log("chipID encontrado")
                    console.log("Nome: " + lista_animais[j].nome + "\n" + "chipID encontrado: " + lista_animais[j].chipId)
                    chipIDAutenticado = true

                    lista_pessoas[i].adota = lista_animais[j].nome
                    lista_animais[j].adota = lista_pessoas[i].nome
                    lista_animais[j].status = "indisponivel"
                    console.log("nome: " + lista_pessoas[i].nome + "\n" + "animal adotado " + lista_animais[j].nome)

                }
            }
            if (!chipIDAutenticado && j != lista_animais.length - 1) {
                alert("ficha inexistente !")
            }
        }
    }
    if (!cpfAutenticado && i != lista_pessoas.length - 1) {
        alert("ficha inexistente !")
    }
}

function listaAnimaisAdotados() {
    for (var i = 0; i < lista_animais.length; i++) {
        if (lista_animais[i].status == "indisponivel" && lista_animais[i].situação == "vivo") {
            console.log("nome: " + lista_animais[i].nome)
            console.log("chipId: " + lista_animais[i].chipId)
            console.log("especie: " + lista_animais[i].especie)
            console.log("racas: " + lista_animais[i].Raças)
            console.log("sexo: " + lista_animais[i].sexo)
            console.log("idade: " + lista_animais[i].idade)
            console.log("peso: " + lista_animais[i].peso)
            console.log("situacao: " + lista_animais[i].situação)
            console.log("status: " + lista_animais[i].status)
        }
    }
}

function removerAnimal() {}

function edita() {}

function menu(ativa) {
    switch (ativa) {
        case 1:
            cadrastrarAnimal();
            break
        case 2:
            listaAnimais();
            break
        case 3:
            buscarAnimalNome()
            break
        case 4:
            buscarAnimalChipID()
            break
        case 5:
            cadastrarPessoa();
            break
        case 6:
            listapessoas()
            break
        case 7:
            buscarPessoaNome()
            break
        case 8:
            buscarPessoaCpf()
            break
        case 9:
            adotaAnimal()
            break
        case 10:
            listaAnimaisAdotados()
            break
        case 11:
            alert("Sistema encerrado !");
            break
        default:
            alert("opição inválida !");
            break
    }
}
do {
    var ativa = Number(
        prompt(
            "Menu do sistema: \n 1-Cadastrar animal \n 2-lista de animais \n 3-Busca animal por nome: \n 4-Busca animal por chipID  \n 5-cadrastrar pessoas  \n 6-lista de pessoas \n 7-busca pessoa por nome \n 8-busca pessoas por cpf \n 9-adota animal: \n 10-lista animais adotados \n 11-sair "

        )
    );
    menu(ativa);
}
while (ativa !== 11);