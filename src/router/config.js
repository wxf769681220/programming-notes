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
        path: '/javascript/array-1',
        component: Js.Array1
      },
      {
        path: '/javascript/array-2',
        component: Js.Array2
      },
      {
        path: '/javascript/function-1',
        component: Js.Function1
      },
      {
        path: '/javascript/function-2',
        component: Js.Function2
      },
      {
        path: '/javascript/function-3',
        component: Js.Function3
      },
      {
        path: '/javascript/function-4',
        component: Js.Function4
      },
      {
        path: '/javascript/function-5',
        component: Js.Function5
      },
      {
        path: '/javascript/window',
        component: Js.Window
      },
      {
        path: '/javascript/location',
        component: Js.Location
      },
      {
        path: '/javascript/navigator',
        component: Js.Navigator
      },
      {
        path: '/javascript/screen',
        component: Js.Screen
      },
      {
        path: '/javascript/history',
        component: Js.History
      },
      {
        path: '/javascript/dom-1',
        component: Js.Dom1
      },
      {
        path: '/javascript/dom-2',
        component: Js.Dom2
      },
      {
        path: '/javascript/dom-3',
        component: Js.Dom3
      },
      {
        path: '/javascript/dom-4',
        component: Js.Dom4
      },
      {
        path: '/javascript/dom-5',
        component: Js.Dom5
      },
      {
        path: '/javascript/dom-6',
        component: Js.Dom6
      },
      {
        path: '/javascript/form-1',
        component: Js.Form1
      },
      {
        path: '/javascript/form-2',
        component: Js.Form2
      },
      {
        path: '/javascript/form-3',
        component: Js.Form3
      },
      {
        path: '/javascript/json',
        component: Js.JSON
      },
      {
        path: '/javascript/ajax-1',
        component: Js.Ajax1
      },
      {
        path: '/javascript/ajax-2',
        component: Js.Ajax2
      },
      {
        path: '/javascript/ajax-3',
        component: Js.Ajax3
      },
      {
        path: '/javascript/ajax-4',
        component: Js.Ajax4
      },
      {
        path: '/javascript/ajax-5',
        component: Js.Ajax5
      }
    ]
  }
]

export default routes
