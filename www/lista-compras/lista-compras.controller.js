appModule.controller('ListaComprasController', function ListaComprasController($scope) {
    this.itens = [
        { produto: 'Cerveja', quantidade: 12, comprado: false },
        { produto: 'Leite', quantidade: 2, comprado: false}
    ];
})