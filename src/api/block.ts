import { mockRequest } from '@/service'

export interface IBlocks {
  id: string
  emoji?: string
  coverUrl?: string
  title?: string
}

export function getBlocks() {
  return mockRequest.get<IBlocks[]>({
    url: '/blocks',
  })
}
