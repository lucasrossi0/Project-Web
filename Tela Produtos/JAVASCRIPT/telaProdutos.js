const carrinho = document.querySelectorAll('.btn-cart');
let produtos = [
    {
        nome: "Camiseta Darkness Nation",
        preco: 89.99,
        nocarrinho: 0,
        tag: "brandao-camiseta.jpg",
    },
    {
        nome: "Calção preto Venom",
        preco: 49.99,
        nocarrinho: 0,
        tag: "roupa.jpeg",
    }, 
    {
        nome: "Pré treino - Jack 3D",
        preco: 119.99,
        nocarrinho: 0,
        tag: "jack-3d.jpeg",
    },
    {
        nome: "Luvas oficiais mma UFC",
        preco: 199.99,
        nocarrinho: 0,
        tag: "luvas.jpeg",
    },
    {
        nome: "Luvas de Boxe Everlast",
        preco: 119.99,
        nocarrinho: 0,
        tag: "luvas-boxe.png",
    },
    {
        nome: "Calcao preto Venom",
        preco: 49.99,
        nocarrinho: 0,
        tag: "roupa.jpeg",
    },
    {
        nome: "Pré treino - Jack 3D",
        preco: 119.99,
        nocarrinho: 0,
        tag: "jack-3d.jpeg",
    },
    {
        nome: "Luvas oficiais mma UFC",
        preco: 199.99,
        nocarrinho: 0,
        tag: "luvas.jpeg",
    },
    {
        nome: "Camiseta Darkness Nation",
        preco: 89.99,
        nocarrinho: 0,
        tag: "brandao-camiseta.jpg",
    },
    {
        nome: "Protetor Bucal duplo Venom + Estojo",
        preco: 19.99,
        nocarrinho: 0,
        tag: "protetor-bucal.png",
    },
    {
        nome: "Capacete de proteção",
        preco: 229.99,
        nocarrinho: 0,
        tag: "capacete0boxe.png",
    },
    {
        nome: "Bandagem para luta",
        preco: 29.99,
        nocarrinho: 0,
        tag: "bandagemMma.png",
    },
    {
        nome: "Creatina monohidratada Creapure",
        preco: 49.99,
        nocarrinho: 0,
        tag: "creatina-darkness.png",
    },
    {
        nome: "Boneco de pancada",
        preco: 349.99,
        nocarrinho: 0,
        tag: "bonceo-de-pancada.png",
    },
    {
        nome: "Manopla de treinamento Everlast",
        preco: 279.99,
        nocarrinho: 0,
        tag: "manoplas-de-treinamento.png",
    },
    {
        nome: "Caneleira de muay thai MKS",
        preco: 279.99,
        nocarrinho: 0,
        tag: "caneleira-muay-thai.png",
    }
];
for (let a = 0; a < carrinho.length; a ++) {
    carrinho[a].addEventListener('click', () => {
        carrinhoNumero(produtos[a]);
        totalCusto(produtos[a]);
    })
};
function carregandoNumeroCarrinho () {
    let produtoNumero = localStorage.getItem('carrinhoNumero');
    if (produtoNumero) {
        document.querySelector('#span').textContent = produtoNumero;
    }
}
function carrinhoNumero(produtos) {
    let produtoNumero = localStorage.getItem('carrinhoNumero');
    produtoNumero = parseInt(produtoNumero);
    if (produtoNumero) {
        localStorage.setItem('carrinhoNumero', produtoNumero + 1);
        document.querySelector('#span').textContent = produtoNumero + 1;
    } else {
        localStorage.setItem('carrinhoNumero', 1);
        document.querySelector('#span').textContent = 1;
    }
    setItems(produtos);
};
function setItems (produtos) {
    let carrinho = localStorage.getItem('carrinhoNumero');
    carrinho = JSON.parse(carrinho);
    if (carrinho != null) {
        if (carrinho[produtos.tag] == undefined) {
            carrinho = {
                ...carrinho,
                [produtos.tag]: produtos
            }
        }
        carrinho[produtos.tag].nocarrinho += 1;
    } else {
        produtos.nocarrinho = 1;
        carrinho = {
            [produtos.tag]: produtos
        }
    }
    localStorage.setItem('carrinhoNumero', JSON.stringify(carrinho));
}
function totalCusto (produtos) {
}
carregandoNumeroCarrinho();