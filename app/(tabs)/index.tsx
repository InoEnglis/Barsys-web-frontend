import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const scale = width / 375;

const data = [
  
  { id: 1, title: 'Belison', image: 'https://firebasestorage.googleapis.com/v0/b/firbaseapp-ded85.appspot.com/o/bel.jpg?alt=media&token=cb4968ac-b3d6-4258-bb3f-8817e187d17a' },
  { id: 2, title: 'Belison', image: 'https://firebasestorage.googleapis.com/v0/b/firbaseapp-ded85.appspot.com/o/bel.jpg?alt=media&token=cb4968ac-b3d6-4258-bb3f-8817e187d17a' },
  { id: 3, title: 'Bugasong', image: 'https://firebasestorage.googleapis.com/v0/b/firbaseapp-ded85.appspot.com/o/bugs.jpg?alt=media&token=fbafcd94-c0df-45dc-8231-bc39c99d5c40' },
  { id: 4, title: 'Bugasong', image: 'https://firebasestorage.googleapis.com/v0/b/firbaseapp-ded85.appspot.com/o/bugs.jpg?alt=media&token=fbafcd94-c0df-45dc-8231-bc39c99d5c40' },
  { id: 5, title: 'Patnongon', image: 'https://firebasestorage.googleapis.com/v0/b/firbaseapp-ded85.appspot.com/o/pat.jpg?alt=media&token=bba15132-29fb-4d89-b52d-582b0eea6079 ' },
  { id: 6, title: 'Patnongon', image: 'https://firebasestorage.googleapis.com/v0/b/firbaseapp-ded85.appspot.com/o/pat.jpg?alt=media&token=bba15132-29fb-4d89-b52d-582b0eea6079 ' },
];
const horizontalScale = (size) => (width < 768 ? size * scale : size * 1.2);
const verticalScale = (size) => (height < 1024 ? size * scale : size * 1.1);
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;


export default function HomeScreen() {
  const navigation = useNavigation();

  const [windowDimensions, setWindowDimensions] = useState({ width, height });
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

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

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition > 100 && !headerVisible) {
      setHeaderVisible(true);
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {headerVisible && (
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
      )}
      {isSmallScreen && menuOpen && (
        <View style={styles.mobileNav}>
          <TouchableOpacity
            style={styles.mobileNavItem}
            onPress={() => {
              navigation.navigate("explore");
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
              navigation.navigate("NewPage");
              setMenuOpen(false);
            }}
          >
            <Text style={styles.mobileNavText}>Find ID</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.greetContainer}>
          <Text style={styles.Title}>BarDocs</Text>
          <View style={styles.welcomeContainer}>
            <Text style={styles.greetWelcome}>WELCOME</Text>
            <View style={styles.greetListContainer}>
              <Text style={styles.text}>
                REQUEST
                <Text style={styles.period}>.</Text>
              </Text>
              <Text style={styles.text}>
                GUIDE
                <Text style={styles.period}>.</Text>
              </Text>
              <Text style={styles.text}>
                COMPLETE
                <Text style={styles.period}>.</Text>
              </Text>
            </View>
            <View style={styles.greetPhraseContainer}>
              <Text style={styles.greetPhrase}>
                Addressing Baranggay needs with Speed and Care.
              </Text>
            </View>
          </View>
          {/* carousel */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          >
            {data.map((item) => (
              <View key={item.id} style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={[
            styles.cardsGrid,
            { flexDirection: isSmallScreen ? "column" : "row" },
          ]}
        >
          <View
            style={[
              styles.card,
              isSmallScreen ? styles.fullWidthCard : styles.halfWidthCard,
            ]}
          >
            <Ionicons
              name="star"
              size={32}
              color="#007BFF"
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Featured Content</Text>
            <Text style={styles.cardText}>
              Check out our latest updates and exciting new features that make
              your experience better.
            </Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.card,
              isSmallScreen ? styles.fullWidthCard : styles.halfWidthCard,
            ]}
          >
            <Ionicons
              name="rocket"
              size={32}
              color="#007BFF"
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Having Trouble?</Text>
            <Text style={styles.cardText}>
              Ask for help to our support team.
            </Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <View
            style={[
              styles.serviceItems,
              { flexDirection: isSmallScreen ? "column" : "row" },
            ]}
          >
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                style={[
                  styles.serviceItem,
                  isSmallScreen
                    ? styles.fullWidthService
                    : styles.thirdWidthService,
                ]}
              >
                <Ionicons
                  name={
                    item === 1
                      ? "document-text"
                      : item === 2
                      ? "calendar"
                      : "bar-chart"
                  }
                  size={28}
                  color="#007BFF"
                />
                <Text style={styles.serviceTitle}>Service {item}</Text>
                <Text style={styles.serviceDescription}>
                  Quick description of this amazing service offered by BarSyS.
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 BarSyS. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFDDD6",
  },
  greetContainer: {
    borderColor: "white",
    borderWidth: 1,
    flex: 1,
    marginTop: 20,
    backgroundColor: "#DFDDD6",
  },
  greetList: {
    justifyContent: "center",
  },
  greetListText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  greetListContainer: {
    flexDirection: "row",
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    gap: 20,
  },
  greetPhraseContainer: {
    justifyContent: "center",
    marginBottom:0,
  },
  greetPhrase: {
    textAlign: "center",
    fontWeight: "200",
    fontSize: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },

  welcomeContainer: {
    height: 400,
    marginBottom:-120,
  },
  period: {
    fontSize: 24,
    fontWeight: "bold",
    position: "relative",
    top: -3,
    marginLeft: 3,
  },
  greetWelcome: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: width > 600 ? 50 : width * 0.1, // Use scaling based on window width
    transform: [
      {
        scaleX: width > 600 ? 2 : 1.5, // Horizontal scaling
      },
      {
        scaleY: width > 600 ? 2.5 : 1.8, // Vertical scaling
      },
    ],
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    position: "relative",
    top: -20,
    transform: "scale(2.2,2)",
    maxWidth: 99,
    left: "47%",
    backgroundColor: "#DFDDD6",
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
  heroSection: {
    padding: moderateScale(16),
    backgroundColor: "#fff",
    marginBottom: verticalScale(16),
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  profileImage: {
    width: horizontalScale(48),
    height: horizontalScale(48),
    borderRadius: 24,
    marginRight: horizontalScale(12),
  },
  greetingText: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  searchInput: {
    height: verticalScale(10),
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: horizontalScale(16),
    backgroundColor: "#fff",
    width: verticalScale(100),
    fontSize: moderateScale(15),
    flex: 1,
  },
  searchButton: {
    marginLeft: horizontalScale(8),
    backgroundColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(10),
    width: horizontalScale(28),
  },
  contentContainer: {
    padding: moderateScale(16),
  },
  sectionTitle: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#333",
    marginBottom: verticalScale(8),
  },
  sectionText: {
    fontSize: moderateScale(16),
    color: "#666",
    marginBottom: verticalScale(24),
    lineHeight: moderateScale(22),
  },
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: horizontalScale(35),
    marginBottom: verticalScale(24),
  },
  card: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginLeft:horizontalScale(5),
    padding: moderateScale(20),
    marginBottom: verticalScale(4),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "flex-start",
    marginHorizontal: horizontalScale(4),
  },
  halfWidthCard: {
    width: `${50 - 2}%`,
  },
  fullWidthCard: {
    width: `${100 - 2}%`,
  },
  cardIcon: {
    marginBottom: verticalScale(12),
  },
  cardTitle: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#333",
    marginBottom: verticalScale(8),
  },
  cardText: {
    fontSize: moderateScale(14),
    color: "#666",
    marginBottom: verticalScale(16),
    lineHeight: moderateScale(20),
  },
  cardButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: horizontalScale(26),
    paddingVertical: verticalScale(4),
    borderRadius: 6,
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: moderateScale(14),
  },
  featuredSection: {
    marginBottom: verticalScale(24),
  },
  serviceItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -horizontalScale(8),
  },
  serviceItem: {
    backgroundColor: "#fff",
    padding: moderateScale(16),
    borderRadius: 8,
    marginBottom: verticalScale(16),
    alignItems: "center",
    marginHorizontal: horizontalScale(8),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  thirdWidthService: {
    width: `${33.33 - 2}%`,
  },
  fullWidthService: {
    width: `${100 - 2}%`,
  },
  serviceTitle: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    marginVertical: verticalScale(8),
  },
  serviceDescription: {
    fontSize: moderateScale(14),
    color: "#666",
    textAlign: "center",
  },
  footer: {
    padding: moderateScale(24),
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    marginTop: verticalScale(16),
  },
  footerText: {
    color: "#666",
    fontSize: moderateScale(14),
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15,
  },
  item: {
    width:200,
    height: 400,
    marginRight: 30,
    marginLeft:22, 
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 5, 
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
  },

});                                                                                                                                                                                   