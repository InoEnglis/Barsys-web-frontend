import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const scale = width / 375;

const horizontalScale = (size) => (width < 768 ? size * scale : size * 1.2);
const verticalScale = (size) => (height < 1024 ? size * scale : size * 1.1);
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export default function HomeScreen() {
  const navigation = useNavigation();

  const [windowDimensions, setWindowDimensions] = useState({ width, height });
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateDimensions = () => {
      const { width, height } = Dimensions.get("window");
      setWindowDimensions({ width, height });
    };

    const dimensionsListener = Dimensions.addEventListener(
      "change",
      updateDimensions
    );

    return () => {
      dimensionsListener.remove();
    };
  }, []);

  const isSmallScreen = windowDimensions.width < 768;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>BarDocs</Text>
        </View>

        {isSmallScreen ? (
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuOpen(!menuOpen)}
          >
            <Ionicons
              name={menuOpen ? "close" : "menu"}
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.desktopNav}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate("index")}
            >
              <Text style={styles.navItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate("explore")}
            >
              <Text style={styles.navItemText}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate("explore")}
            >
              <Text style={styles.navItemText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate("explore")}
            >
              <Text style={styles.navItemText}>Find ID</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {isSmallScreen && menuOpen && (
        <View style={styles.mobileNav}>
          <TouchableOpacity
            style={styles.mobileNavItem}
            onPress={() => {
              navigation.navigate("index");
              setMenuOpen(false);
            }}
          >
            <Text style={styles.mobileNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mobileNavItem}
            onPress={() => {
              navigation.navigate("newtab");
              setMenuOpen(false);
            }}
          >
            <Text style={styles.mobileNavText}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mobileNavItem}
            onPress={() => {
              navigation.navigate("NewPage");
              setMenuOpen(false);
            }}
          >
            <Text style={styles.mobileNavText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mobileNavItem}
            onPress={() => {
              navigation.navigate("explore");
              setMenuOpen(false);
            }}
          >
            <Text style={styles.mobileNavText}>Find ID</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.clock}>
      <Ionicons name="time" size={30} color="#777" style={styles.HistoryClock} />
      <Text style={styles.historyText}>History</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Enter Refence ID"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find ID</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFDDD6",
    minHeight: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(12),
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    height: 10,
    marginBottom: 10,
    borderBottomColor: "#eee",
  },
  clock:{
    marginTop:10,
    flexDirection:'row-reverse',
    marginRight:horizontalScale(20),
  },
  HistoryClock:{
    color:'black',
    marginTop:10,
  },
  historyText:{
    fontWeight:'bold',
    marginRight:6,
    marginTop:13,

  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: "#007BFF",
  },
  menuButton: {
    padding: moderateScale(8),
  },
  desktopNav: {
    flexDirection: "row",
  },
  navItem: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(8),
  },
  navItemText: {
    color: "#333",
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  mobileNav: {
    backgroundColor: "#fff",
    padding: moderateScale(16),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  mobileNavItem: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  mobileNavText: {
    fontSize: moderateScale(16),
    color: "#333",
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(30),
    marginBottom:300,
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "80%",
    maxHeight:40,
    maxWidth: 600,
    paddingHorizontal: moderateScale(15),
    marginBottom: verticalScale(10),
    height: verticalScale(50),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: horizontalScale(10),
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: moderateScale(16),
  },
  searchButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(2),
    borderRadius: 8,
    marginTop: verticalScale(2),
    width: "20%",
    maxWidth: 100,
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: moderateScale(16),
  },
});