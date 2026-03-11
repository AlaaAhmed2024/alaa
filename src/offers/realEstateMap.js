



import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
} from "react-leaflet";
import axios from "axios";
import Select from "react-select";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  faPenToSquare,
  faTrash,
  faCircleHalfStroke,
  faMoon,
  faMagnifyingGlass,
  faBackward,
  faForward,
  faCaretRight,
  faCaretLeft,
  faDownload,
  faFileArrowDown,
  faLock,
  faX,
  faFileExcel,
  faFilePdf,
    faHashtag,
  faUser,
  faCalendarAlt,
  faHome,
  faLayerGroup,
  faStairs,
  faRulerCombined,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMapLocationDot,
  faLink,
  faStickyNote,
 

  faDollarSign,

  faBuilding,
  faWarehouse,
  faCity,
  faHotel,
  faHouseChimney,
  faHouseUser,

   faBed,
  faBath,
  faCouch,
  faDoorOpen,
  faUtensils,
 faUsers,
  faRoad,
  faCar,
  faTree,
  faBoxes,

  faUserNurse,
  faUserShield,
  faUserTie,
  faElevator,

    faSolarPanel,
  
  faHandsWash,
  faBalcony,          // غير موجود رسميًا، سنستخدم بديل مناسب
           // لموقف سيارات
  faBroom,            // بديل للغسيل
 

faObjectGroup,




} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorModeContext } from "../Context/ThemeContext";

function MapController({ coordinates }) {
  const map = useMap();
  useEffect(() => {
    if (!coordinates.length) {
      map.setView([24.774265, 46.738586], 6); // وسط السعودية
    } else {
      const bounds = L.latLngBounds(coordinates);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [coordinates, map]);
  return null;
}

const fallbackOffers = [
  {
    id: 1,
    offerNumber: 100,
    locationCoordinates: "24.7136,46.6753",
    aqarType: "شقة",
    area: 120,
    price: 350000,
    selectedRegion: "المنطقة الوسطي",
    selectedCity: "الرياض",
    selectedDistricts: "الملز",
    roomsCount: 3,
    majlesCount: 1,
    bathroomsCount: 2,
    maqlatCount: 1,
  },
  {
    id: 2,
    offerNumber: 101,
    locationCoordinates: "21.4858,39.1925",
    aqarType: "فيلا",
    area: 350,
    price: 1200000,
    selectedRegion: "المنطقة الغربية",
    selectedCity: "مكة المكرمة",
    selectedDistricts: "الشوقية",
    roomsCount: 5,
    majlesCount: 2,
    bathroomsCount: 4,
    maqlatCount: 2,
  },
];


const customSelectStyle = {
  control: (base) => ({
    ...base,
    minHeight: '40px',
    height: '40px',
    fontSize: ' .96rem !important',
  }),
  valueContainer: (base) => ({
    ...base,
    height: '40px',
    padding: '0 6px',
  }),
  input: (base) => ({
    ...base,
    margin: '0px',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: '32px',
  }),
};

const RealEstateMap = () => {


//  const [darkSide, setShwoDarkSide] = useState(

//         ()=>{

//    const savedMode = localStorage.getItem("darkMode");
//   if (savedMode === "true") return true;
//   if (savedMode === "false") return false;
//   return true; // الوضع الافتراضي
//     }
//   );

  const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark


      const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
  useEffect(() => {
    
  setShwoDarkSide(mode === "dark");
}, [mode]);
  
  function handelDarkSide() {
    // setShwoDarkSide(!darkSide);
    const newMode = !darkSide;
  setShwoDarkSide(newMode);
  localStorage.setItem("darkMode", newMode); // حفظ الوضع
  }

  if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
    var searchClass = "light-search";
  } else {
    var textMode = "فاتح";
    var classNameModel = "loan-form-dark";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var searchClass = "dark-search";
  }



  const navigate = useNavigate();

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedAqarType, setSelectedAqarType] = useState(null);
  const [offerNumber, setOfferNumber] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState("");
  const [roomsCount, setRoomsCount] = useState("");
  const [majlesCount, setMajlesCount] = useState("");
  const [bathroomsCount, setBathroomsCount] = useState("");
  const [maqlatCount, setMaqlatCount] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8090/offersAll")
      .then((res) => {
        const filtered = res.data.filter((o) => {
          if (!o.locationCoordinates) return false;
          const coords = o.locationCoordinates.split(",").map(Number);
          return coords.length === 2 && !coords.some(isNaN);
        });
        setOffers(filtered);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setOffers(fallbackOffers);
        setLoading(false);
        setError(true);
      });
  }, []);

  // --- لتحصل على جميع المناطق، المدن، الأحياء من بيانات العروض كاملة بدون فلترة ---
  // المناطق:
  const allRegions = [...new Set(offers.map((o) => o.selectedRegion).filter(Boolean))];
  const regionOptions = allRegions.map((r) => ({ label: r, value: r }));

  // المدن حسب المنطقة المختارة أو جميع المدن إذا لا يوجد اختيار منطقة
  const citiesOfSelectedRegion = selectedRegion
    ? [...new Set(offers.filter((o) => o.selectedRegion === selectedRegion.value).map((o) => o.selectedCity).filter(Boolean))]
    : [...new Set(offers.map((o) => o.selectedCity).filter(Boolean))];
  const cityOptions = citiesOfSelectedRegion.map((c) => ({ label: c, value: c }));

  // الأحياء حسب المدينة المختارة أو جميع الأحياء إذا لا يوجد اختيار مدينة
  const districtsOfSelectedCity = selectedCity
    ? [...new Set(offers.filter((o) => o.selectedCity === selectedCity.value).map((o) => o.selectedDistricts).filter(Boolean))]
    : [...new Set(offers.map((o) => o.selectedDistricts).filter(Boolean))];
  const districtOptions = districtsOfSelectedCity.map((d) => ({ label: d, value: d }));

  // أنواع العقار من كامل البيانات:
  const allTypes = [...new Set(offers.map((o) => o.aqarType).filter(Boolean))];
  const typeOptions = allTypes.map((t) => ({ label: t, value: t }));

  // فلترة العروض حسب القيم المختارة
  const filteredOffers = offers.filter((offer) => {
    const price = parseFloat(offer.price);
    const area = parseFloat(offer.area);
    const rooms = parseInt(offer.roomsCount || 0);
    const majles = parseInt(offer.majlesCount || 0);
    const baths = parseInt(offer.bathroomsCount || 0);
    const maqlat = parseInt(offer.maqlatCount || 0);

    // تنطبق شرط الفلترة
    return (
      (!selectedRegion || offer.selectedRegion === selectedRegion.value) &&
      (!selectedCity || offer.selectedCity === selectedCity.value) &&
      (selectedDistricts.length === 0 || selectedDistricts.some((d) => d.value === offer.selectedDistricts)) &&
      (!selectedAqarType || offer.aqarType === selectedAqarType.value) &&
      (!offerNumber || offer.id == offerNumber) &&
      (!priceFrom || price >= parseFloat(priceFrom)) &&
      (!priceTo || price <= parseFloat(priceTo)) &&
      (!areaFrom || area >= parseFloat(areaFrom)) &&
      (!areaTo || area <= parseFloat(areaTo)) &&
      (!roomsCount || rooms >= parseInt(roomsCount)) &&
      (!majlesCount || majles >= parseInt(majlesCount)) &&
      (!bathroomsCount || baths >= parseInt(bathroomsCount)) &&
      (!maqlatCount || maqlat >= parseInt(maqlatCount))
    );
  });

  // أيقونة السعر
  const customDivIcon = (price) =>
    new L.DivIcon({
      className: "",
      html: `
        <div style="
          background: #4CAF50;
          color: white;
          padding: 6px 6px;
          border-radius: 6px;
          font-weight: bold;
          font-size: 12px;
          white-space: nowrap;
          display: inline-block;
          box-shadow: 0 0 3px rgba(0,0,0,0.3);
        ">
          ${price.toLocaleString()} ريال
        </div>`,
    });

  return (



    
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", marginTop: "25px"   ,marginBottom:"50px" ,   backgroundColor: darkSide ? "#e1e5ed" : "#0f1a36",color: darkSide ? "black" : "white"}}     id={classNameModel}  >
      {/* حالة التحميل أو الخطأ */}
      {loading && <div style={{ padding: "10px", textAlign: "center" }}>جاري تحميل البيانات...</div>}
      {error && <div style={{ padding: "10px", color: "red", textAlign: "center" }}>تعذر الاتصال بالخادم، عرض بيانات افتراضية.</div>}

      {/* الفلاتر */}
      {/* <div
        style={{
          padding: "10px",
          background: "#f5f5f5",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          maxWidth: 960,
          margin: "0 auto 15px",
          boxSizing: "border-box",
        }}
      >
        <Select
          options={regionOptions}
          value={selectedRegion}
          onChange={(v) => {
            setSelectedRegion(v);
            setSelectedCity(null);
            setSelectedDistricts([]);
          }}
          placeholder="المنطقة"
          isClearable
        />
        <Select
          options={cityOptions}
          value={selectedCity}
          onChange={(v) => {
            setSelectedCity(v);
            setSelectedDistricts([]);
          }}
          placeholder="المدينة"
          isClearable
          isDisabled={!regionOptions.length}
        />
        <Select
          options={districtOptions}
          value={selectedDistricts}
          onChange={setSelectedDistricts}
          placeholder="الأحياء"
          isMulti
          isDisabled={!cityOptions.length}
        />
        <Select
          options={typeOptions}
          value={selectedAqarType}
          onChange={setSelectedAqarType}
          placeholder="نوع العقار"
          isClearable
        />
        <input
          type="number"
          placeholder="رقم العرض"
          value={offerNumber}
          onChange={(e) => setOfferNumber(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="السعر من"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="السعر إلى"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="المساحة من"
          value={areaFrom}
          onChange={(e) => setAreaFrom(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="المساحة إلى"
          value={areaTo}
          onChange={(e) => setAreaTo(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="عدد الغرف"
          value={roomsCount}
          onChange={(e) => setRoomsCount(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="عدد المجالس"
          value={majlesCount}
          onChange={(e) => setMajlesCount(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="عدد الحمامات"
          value={bathroomsCount}
          onChange={(e) => setBathroomsCount(e.target.value)}
          style={{ minWidth: "150px" }}
        />
        <input
          type="number"
          placeholder="عدد المقلط"
          value={maqlatCount}
          onChange={(e) => setMaqlatCount(e.target.value)}
          style={{ minWidth: "150px" }}
        />
      </div> */}


      <div className="filters-container" style={{ display: 'flex', flexWrap: 'wrap', gap: "5px", marginBottom: "10px" }}>
  <div className="input-wrapper-search">
    <Select
      options={regionOptions}
      value={selectedRegion}
      onChange={(v) => {
        setSelectedRegion(v);
        setSelectedCity(null);
        setSelectedDistricts([]);
      }}
      placeholder="المنطقة"
      isClearable
      className="w-auto"
       styles={customSelectStyle}
    />
    <span className="underline-input"></span>
  </div>

  <div className="input-wrapper-search">
    <Select
      options={cityOptions}
      value={selectedCity}
      onChange={(v) => {
        setSelectedCity(v);
        setSelectedDistricts([]);
      }}
      placeholder="المدينة"
      isClearable
       styles={customSelectStyle}
      isDisabled={!regionOptions.length}
      className="w-auto"
    />
    <span className="underline-input"></span>
  </div>

  <div className="input-wrapper-search">
    <Select
      options={districtOptions}
      value={selectedDistricts}
      onChange={setSelectedDistricts}
      placeholder="الأحياء"
      isMulti
      isDisabled={!cityOptions.length}
      className="w-auto"
       styles={customSelectStyle}
    />
    <span className="underline-input"></span>
  </div>

  <div className="input-wrapper-search">
    <Select
      options={typeOptions}
      value={selectedAqarType}
      onChange={setSelectedAqarType}
      placeholder="نوع العقار"
      isClearable
      className="w-auto"
      styles={customSelectStyle}
    />
    <span className="underline-input"></span>
  </div>

  {[
    { label: "رقم العرض", value: offerNumber, setValue: setOfferNumber },
    { label: "السعر من", value: priceFrom, setValue: setPriceFrom },
    { label: "السعر إلى", value: priceTo, setValue: setPriceTo },
    { label: "المساحة من", value: areaFrom, setValue: setAreaFrom },
    { label: "المساحة إلى", value: areaTo, setValue: setAreaTo },
    { label: "عدد الغرف", value: roomsCount, setValue: setRoomsCount },
    { label: "عدد المجالس", value: majlesCount, setValue: setMajlesCount },
    { label: "عدد الحمامات", value: bathroomsCount, setValue: setBathroomsCount },
    { label: "عدد المقلط", value: maqlatCount, setValue: setMaqlatCount },
  ].map((field, idx) => (
    <div className="input-wrapper-search" key={idx}>
      <input
        type="number"
        placeholder={field.label}
        value={field.value}
        onChange={(e) => field.setValue(e.target.value)}
        style={{ minWidth: "150px" }}
      />
      <span className="underline-input"></span>
    </div>
  ))}
</div>


      {/* الخريطة */}
      <div style={{ flex: 1 }}>
        <MapContainer center={[24.774265, 46.738586]} zoom={6} style={{ width: "100%",
          //  height: "calc(100vh - 320px)" 
                 height: "100vh" 
           
           }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapController coordinates={filteredOffers.map((o) => o.locationCoordinates.split(",").map(Number))} />
          {filteredOffers.map((offer, i) => {
            const coords = offer.locationCoordinates.split(",").map(Number);
            return (
              <Marker key={i} position={coords} icon={customDivIcon(offer.price)}>
                <Popup>
                  <strong>رقم العرض:</strong> {offer.id}
                  <br />
                  <strong>النوع:</strong> {offer.aqarType}
                  <br />
                  <strong>السعر:</strong> {offer.price} ريال
                  <br />
                  <strong>المساحة:</strong> {offer.area} م²
                  <br />
                  <strong>المنطقة:</strong> {offer.selectedRegion}
                  <br />
                  <strong>المدينة:</strong> {offer.selectedCity}
                  <br />
                  <strong>الحي:</strong> {offer.selectedDistricts}
                  <br />
                  <strong>الغرف:</strong> {offer.roomsCount}
                  <br />
                  <strong>المجالس:</strong> {offer.majlesCount}
                  <br />
                  <strong>الحمامات:</strong> {offer.bathroomsCount}
                  <br />
                  <strong>المقلط:</strong> {offer.maqlatCount}
                  <br />
                  <Button  variant="outline-info" style={{color:"#0d6efd" , padding:"4px" , marginTop:"5px"}}  onClick={() => navigate(`/offers/${offer.id}`)} > 
                    تفاصيل العرض
                  </Button>

                
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

            <div>
                  <button
                    className={backColor}
                    activeClassName="active_sidebar"
                    style={{
                      borderRadius: "30px",
                      maxWidth: "130px",
                      position: "fixed",
                      // left: "30px",
                      // bottom: "48px",
                            left: "22px",
                      bottom: "42px",
                      zIndex:"1000"
                    }}
                    onClick={handelDarkSide}
                  >


                    <div className="icon" style={{ marginRight: "5px" }}>
                      {
                        <FontAwesomeIcon
                          icon={ic1}
                          rotation={classRotate}
                          style={{ color: { classColor } }}
                        />
                      }
                    </div>
                    <div style={{ margin: "0 10px" }} className="link_text">
                      {textMode}
                    </div>
                  </button>
                </div>


    </div>
  );
};

export default RealEstateMap;
