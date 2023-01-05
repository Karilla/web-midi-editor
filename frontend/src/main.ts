import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import Konva from 'konva'

let stage = new Konva.Stage({
  container: 'container',
  width: 200,
  height :500
})

let layer = new Konva.Layer()

let shape = new Konva.Circle({
  x: stage.width() /2,
  y: stage.height() / 2,
  radius: 20,
  fill: 'red',
  stroke: 'green'
})

layer.add(shape)

stage.add(layer)