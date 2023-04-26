import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

interface ServiceResult<T> {
  code: number
  message: string
  result: T | null
}

export default class CAxios {
  private instance: AxiosInstance
  constructor(options: AxiosRequestConfig) {
    this.instance = axios.create(options)
    this.setInterceptor()
  }

  private setInterceptor() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return error
      },
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      },
      (error: AxiosError) => {
        return error
      },
    )
  }

  request<T>(config: AxiosRequestConfig): Promise<ServiceResult<T>> {
    return this.instance(config)
  }

  get<T>(config: AxiosRequestConfig): Promise<ServiceResult<T>> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: AxiosRequestConfig): Promise<ServiceResult<T>> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export function createRequest(config: AxiosRequestConfig) {
  const instance = new CAxios(config)
  return instance
}
