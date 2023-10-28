export class Log {
  id_log!: number;
  data_log!: string; // ou você pode usar um tipo de data, por exemplo: Date;
  pessoa!: Pessoa; // Suponha que você tenha um modelo Pessoa também
}

export class Pessoa {
  id_pessoa!: number;
  nome!: string;
  // Outros campos da entidade Pessoa
}
