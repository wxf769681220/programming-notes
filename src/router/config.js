import Js from './jsRoutes'

const routes = [
  {
    path: '/',
    redirect: '/javascript/dataTypes'
  },
  {
    path: '/javascript',
    component: Js.JavaScript,
    children: [
      {
        path: '/javascript/dataTypes',
        component: Js.DataTypes
      },
      {
        path: '/javascript/operators',
        component: Js.Operators
      },
      {
        path: '/javascript/statements',
        component: Js.Statements
      },
      {
        path: '/javascript/referenceType-1',
        component: Js.ReferenceType1
      },
      {
        path: '/javascript/referenceType-2',
        component: Js.ReferenceType2
      },
      {
        path: '/javascript/referenceType-3',
        component: Js.ReferenceType3
      },
      {
        path: '/javascript/referenceType-4',
        component: Js.ReferenceType4
      },
      {
        path: '/javascript/object-1',
        component: Js.Object1
      },
      {
        path: '/javascript/object-2',
        component: Js.Object2
      },
      {
        path: '/javascript/object-3',
        component: Js.Object3
      }
    ]
  }
]

export default routes
