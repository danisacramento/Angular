export class Tarefa{
    private nome: string;
    private responsavel: string;

    public getResponsavel(): string{
        return this.responsavel;
    }
    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }
    public setResponsavel(responsavel: string):void{
        this.responsavel = responsavel;
    }
}