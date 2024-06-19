// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import { Svg, Path } from "react-native-svg";

// const { height, width } = Dimensions.get("window");
// const CustomDrawingCanvas = () => {
//   const [paths, setPaths] = useState([]);
//   const [currentPath, setCurrentPath] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);

//   const onTouchStart = () => {
//     setIsDrawing(true);
//     setCurrentPath([]);
//   };

//   const onTouchMove = (event) => {
//     if (!isDrawing) return;

//     const { locationX, locationY } = event.nativeEvent;
//     const newPoint = `${
//       currentPath.length === 0 ? "M" : "L"
//     } ${locationX.toFixed(0)},${locationY.toFixed(0)}`;
//     setCurrentPath((prevPath) => [...prevPath, newPoint]);
//   };

//   const onTouchEnd = () => {
//     setIsDrawing(false);
//     setPaths((prevPaths) => [...prevPaths, currentPath]);
//     setCurrentPath([]);
//     console.log(paths);
//   };

//   const handleClearButtonClick = () => {
//     setPaths([]);
//     setCurrentPath([]);
//   };

//   return (
//     <View style={styles.container}>
//       <View
//         style={styles.svgContainer}
//         onTouchStart={onTouchStart}
//         onTouchMove={onTouchMove}
//         onTouchEnd={onTouchEnd}
//       >
//         <Svg style={{ flex: 1 }}>
//           {paths.map((path, index) => (
//             <Path
//               key={`path-${index}`}
//               d={path.join(" ")}
//               stroke="red"
//               fill="transparent"
//               strokeWidth={3}
//               strokeLinejoin="round"
//               strokeLinecap="round"
//             />
//           ))}
//           {currentPath.length > 0 && (
//             <Path
//               d={currentPath.join(" ")}
//               stroke="red"
//               fill="transparent"
//               strokeWidth={3}
//               strokeLinejoin="round"
//               strokeLinecap="round"
//             />
//           )}
//         </Svg>
//       </View>
//       <TouchableOpacity
//         style={styles.clearButton}
//         onPress={handleClearButtonClick}
//       >
//         <Text style={styles.clearButtonText}>Clear</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   svgContainer: {
//     height: height * 0.3,
//     width: width * 0.9,
//     borderColor: "black",
//     backgroundColor: "white",
//     borderWidth: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   clearButton: {
//     marginTop: 20,
//     backgroundColor: "red",
//     padding: 10,
//     borderRadius: 5,
//   },
//   clearButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default CustomDrawingCanvas;


import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { captureRef } from "react-native-view-shot";

const { height, width } = Dimensions.get("window");

const CustomDrawingCanvas = React.forwardRef((props, ref) => {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const onTouchStart = () => {
    setIsDrawing(true);
    setCurrentPath([]);
  };

  const onTouchMove = (event) => {
    if (!isDrawing) return;

    const { locationX, locationY } = event.nativeEvent;
    const newPoint = `${
      currentPath.length === 0 ? "M" : "L"
    } ${locationX.toFixed(0)},${locationY.toFixed(0)}`;
    setCurrentPath((prevPath) => [...prevPath, newPoint]);
  };

  const onTouchEnd = () => {
    setIsDrawing(false);
    setPaths((prevPaths) => [...prevPaths, currentPath]);
    setCurrentPath([]);
  };

  const handleClearButtonClick = () => {
    setPaths([]);
    setCurrentPath([]);
  };

  React.useImperativeHandle(ref, () => ({
    saveDrawing: async () => {
      try {
        const uri = await captureRef(svgRef, {
          format: "png",
          quality: 1,
          result: "base64",
        });
        return `data:image/png;base64,${uri}`;
      } catch (error) {
        console.error("Failed to capture drawing", error);
        return null;
      }
    },
  }));

  const svgRef = React.useRef();

  return (
    <View style={styles.container}>
      <View
        ref={svgRef}
        style={styles.svgContainer}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Svg style={{ flex: 1 }}>
          {paths.map((path, index) => (
            <Path
              key={`path-${index}`}
              d={path.join(" ")}
              stroke="red"
              fill="transparent"
              strokeWidth={3}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
          {currentPath.length > 0 && (
            <Path
              d={currentPath.join(" ")}
              stroke="red"
              fill="transparent"
              strokeWidth={3}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          )}
        </Svg>
      </View>
      <TouchableOpacity
        style={styles.clearButton}
        onPress={handleClearButtonClick}
      >
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  svgContainer: {
    height: height * 0.3,
    width: width * 0.9,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButton: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomDrawingCanvas;
