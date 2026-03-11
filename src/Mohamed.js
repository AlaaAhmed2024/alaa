// // import image2 from "../src/logo-head.png";

//  export default function Mohamed() {
//   var fading_div = document.getElementById('fading_div');
//   var animationComplete = true;
//   window.onload=

//   {
//      if (animationComplete && fading_div.style.opacity !== '0') {
//           animationComplete = false;
//           for (var i = 1; i <= 100; i++) {
//               setTimeout((function (x) {
//                   return function () {
//                       function_fade_out(x)
//                   };
//               })(100 - i), i * 10);
//           }
//       }
//   }

//   function function_opacity(opacity_value)
//   {
//       fading_div.style.opacity = opacity_value / 100;
//       fading_div.style.filter = 'alpha(opacity=' + opacity_value + ')';
//   }

//   function function_fade_out(opacity_value)
//   {
//       function_opacity(opacity_value);
//       if (opacity_value == 1) {
//           fading_div.style.display = 'none';
//           animationComplete = true;
//       }

//   }

//   return (
//     <div>
//       <img id="fading_div" alt="logo" src={image2} />
//     </div>
//   );
// }


