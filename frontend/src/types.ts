// src/types.ts — as formas da API, escritas à mão a partir dos serializers do Django.
// Na Aula 06 passam a ser geradas a partir do schema.yaml (openapi-typescript).

/** CategorySerializer: fields = ["id", "name", "slug"] */
export interface Category {
  id: number
  name: string
  slug: string
}

/** ProductSerializer (shop/serializers.py) */
export interface Product {
  id: number
  category: number // FK → Category.id
  category_name: string // source="category.name", só de leitura
  sku: string
  name: string
  price: string // DecimalField → string no JSON ("9.90"), nunca number
  stock: number
  is_active: boolean
  created_at: string // ISO 8601
}

/** O envelope do PageNumberPagination do DRF, para qualquer T. */
export interface Paginated<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

/**
 * Problem Details (RFC 9457). O DRF, por omissão, só envia { "detail": "..." };
 * os outros campos ficam opcionais para aceitar as duas formas.
 */
export interface Problem {
  type?: string
  title?: string
  status?: number
  detail?: string
  instance?: string
  [key: string]: unknown
}

/** Os estados de um ecrã que carrega dados. */
export type Status = 'idle' | 'loading' | 'error' | 'ok'