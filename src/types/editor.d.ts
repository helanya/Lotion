export enum BlockType {
  Text = 'TEXT',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  Divider = 'DIVIDER',
  Quote = 'QUOTE',
}

export interface Block {
  id: string
  type: string
  value: string
}
