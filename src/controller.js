export default class Controller {
    #view;//variavel que sera utilizada apenas dentro da classe
    #worker;
    constructor({view, worker}) {
        this.#view = view;
        this.#worker = worker;
    }
    static init(deps) {
        const controller = new Controller(deps);
        return controller;
    }
    init(){};
}