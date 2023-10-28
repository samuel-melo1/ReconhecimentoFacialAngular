import { Log } from './models/log';

export interface Page<T> {
  content: T[];         // A lista de itens (no seu caso, uma lista de logs)
  totalPages: number;   // O número total de páginas
  totalElements: number; // O número total de elementos
  size: number;         // O tamanho da página
  number: number;       // O número da página atual
}
