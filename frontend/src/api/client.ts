// src/api/client.ts — o único sítio onde a app fala com a API.
import type { Problem } from '@/types'

export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

/** Erro de uma resposta HTTP que não é 2xx, com o corpo Problem Details (se houver). */
export class ApiError extends Error {
  readonly status: number
  readonly problem: Problem | null

  constructor(status: number, problem: Problem | null) {
    const text = problem?.detail ?? problem?.title ?? 'Erro da API'
    super(`${text} (HTTP ${status})`)
    this.name = 'ApiError'
    this.status = status
    this.problem = problem
  }
}

/** Parâmetros de query: vazios (undefined, null, '') não entram no URL. */
export type Query = Record<string, string | number | boolean | null | undefined>

function buildUrl(path: string, query?: Query): string {
  const url = new URL(path, API_URL)
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value))
    }
  }
  return url.toString()
}

/**
 * GET tipado: quem chama decide o T. O `as T` é a única promessa que fazemos
 * sobre a forma do JSON — feita aqui, uma vez, e os tipos fluem a partir daí.
 */
export async function get<T>(path: string, query?: Query): Promise<T> {
  const res = await fetch(buildUrl(path, query), {
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) {
    const problem = (await res.json().catch(() => null)) as Problem | null
    throw new ApiError(res.status, problem)
  }
  return (await res.json()) as T
}