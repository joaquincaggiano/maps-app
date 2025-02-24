import "dotenv/config";

export default {
  expo: {
    name: "maps-app",
    slug: "maps-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY_IOS
      },
      supportsTablet: true,
      bundleIdentifier: "com.joaquincaggianodev.mapsapp"
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY_ANDROID
        }
      },
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.joaquincaggianodev.mapsapp"
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
};
