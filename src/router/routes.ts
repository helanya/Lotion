/** 固定路由 */
const routes = [
  {
    name: 'Root',
    path: '/',
    redirect: 'workspace',
  },
  {
    name: 'Workspace',
    path: '/workspace',
    component: () => import('@/views/workspace/index.vue'),
  },
]

export default routes
