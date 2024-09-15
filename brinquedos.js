function Brinquedo(cor) {
    this.cor = cor;
}

function Brinquedos(cor, tipo, preco) {
    this.tipo = tipo;
    let _preco = preco;

    this.tipoBrinquedo = function() {
        console.log(this.tipo);
    }

    this.getDesconto = function() {
        return _preco
    }

    this.setDesconto = function(desconto) {
        _preco = desconto;
    }

    this.desconto = function() {
        const valorDesconto = _preco * 0.1;
        const precoDesconto = _preco - valorDesconto;
        
        _preco = precoDesconto;
    }

    Brinquedo.call(this, cor);
}

function Urso(cor) {
    Brinquedos.call(this, cor, "Urso de Pelúcia", 350)

    this.desconto = function() {
        const preco = this.getDesconto();
        const precoDesconto = preco * 0.2;
        const novoValor = preco - precoDesconto;
        this.setDesconto(novoValor);
    }
}

function Escorregador(cor) {
    Brinquedos.call(this, cor, "Escorregador", 1500)
}

const brinquedo1 = new Brinquedos("Azul", "Carro de controle remoto", 550);
const brinquedo2 = new Urso("Marrom");
const brinquedo3 = new Escorregador("Vermelho");

brinquedo1.desconto();
console.log(brinquedo1.getDesconto());

brinquedo2.desconto();
console.log(brinquedo2.getDesconto());

brinquedo3.desconto();
console.log(brinquedo3.getDesconto());