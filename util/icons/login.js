import React, { Component } from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

 export default class Login extends Component {
  render() {
     return (
       <Svg height="32" width="32">
      
    <Path d="M50,5C25.1,5,5,25.1,5,50c0,24.9,20.1,45,45,45s45-20.1,45-45C95,25.1,74.9,5,50,5z M50,27.5c5.5,0,10,4.5,10,10   c0,5.5-4.5,10-10,10s-10-4.5-10-10C40,32,44.5,27.5,50,27.5z M27.5,72.5C27.5,60.1,37.6,50,50,50c12.4,0,22.5,10.1,22.5,22.5H27.5z   "/>
      </Svg>
     );
 }
}
