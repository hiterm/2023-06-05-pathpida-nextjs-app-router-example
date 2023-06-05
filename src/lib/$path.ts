export const pagesPath = {
  "items": {
    _itemId: (itemId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/items/[itemId]' as const, query: { itemId }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/items' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
