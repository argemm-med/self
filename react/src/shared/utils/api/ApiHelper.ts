import type { Options } from 'ky'
import ky from 'ky'
import type { HttpMethod } from 'ky/distribution/types/options'

import { EnvData } from 'shared/data/env.data'

const BASE_URL = EnvData.apiUrl

interface Response<T> {
  readonly result: T
  readonly resultCode: 'SUCCESS' | 'FAIL' | 'EXCEPTION'
  readonly details: string
  readonly resultDetail: string
}

interface FetchOptions extends Options {
  url: string
  method?: HttpMethod
  json?: unknown
}

export const ApiHelper = async <T>({ url, ...options }: FetchOptions): Promise<T> => {
  const response = await ky(url, {
    ...options,
    prefixUrl: `${ BASE_URL }`,
    method: options.method ? options.method : 'get',
  })
    .json<Response<T>>()
    .catch(async (err) => await Promise.reject(new Error(err.message)))
  if (response.resultCode === 'SUCCESS') return response.result
  throw Error(`Api Helper Error: ${ JSON.stringify(response) }`)
}
