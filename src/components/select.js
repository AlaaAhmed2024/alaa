

import React, { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const zone = [
  { value: 'الشمالية', label: 'المنطقة الشمالية' },
  { value: 'الجنوبية', label: 'المنطقة الجنوبية' },
  { value: 'الشرقية', label: 'المنطقة الشرقية' },
];

const city = {
  الشمالية: [
    { value: 'عرعر', label: 'عرعر' },
    { value: 'طريف', label: 'طريف' },
  ],
  الجنوبية: [
    { value: 'أبها', label: 'أبها' },
    { value: 'خميس مشيط', label: 'خميس مشيط' },
  ],
  الشرقية: [
    { value: 'الدمام', label: 'الدمام' },
    { value: 'الخبر', label: 'الخبر' },
  ],
};

const alhia = {
  عرعر: [
    { value: 'حي المروج', label: 'حي المروج' },
    { value: 'حي الروابي', label: 'حي الروابي' },
  ],
  طريف: [
    { value: 'حي الفيصلية', label: 'حي الفيصلية' },
    { value: 'حي العزيزية', label: 'حي العزيزية' },
  ],
  أبها: [
    { value: 'حي الوردتين', label: 'حي الوردتين' },
    { value: 'حي السد', label: 'حي السد' },
  ],
  'خميس مشيط': [
    { value: 'حي الرصراص', label: 'حي الرصراص' },
    { value: 'حي شكر', label: 'حي شكر' },
  ],
  الدمام: [
    { value: 'حي الشاطئ', label: 'حي الشاطئ' },
    { value: 'حي الفيصلية', label: 'حي الفيصلية' },
  ],
  الخبر: [
    { value: 'حي العقربية', label: 'حي العقربية' },
    { value: 'حي العليا', label: 'حي العليا' },
  ],
};

function Dropdown() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const handleRegionChange = (option) => {
    setSelectedRegion(option);
    setSelectedCity(null); // عند تغيير المنطقة نحذف المدينة
    setSelectedDistricts([]); // ونحذف الأحياء
  };

  const handleCityChange = (option) => {
    setSelectedCity(option);
    setSelectedDistricts([]); // عند تغيير المدينة نحذف الأحياء
  };

  const handleDistrictChange = (options) => {
    setSelectedDistricts(options || []);
  };

  const availableCities = selectedRegion ? city[selectedRegion.value] : [];
  const availableDistricts = selectedCity ? alhia[selectedCity.label] || [] : [];

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'right' }}>
      <label>المنطقه</label>
      <Select
        options={zone}
        onChange={handleRegionChange}
        placeholder="اختر المنطقة..."
        isSearchable
      />

      <label style={{ marginTop: '20px' }}>المدينه</label>
      <Select
        options={availableCities}
        onChange={handleCityChange}
        placeholder="اختر المدينة..."
        isSearchable
        isDisabled={!selectedRegion}
        value={selectedCity} // نعيد تعيين القيمة لما تنمسح
      />

      <label style={{ marginTop: '20px' }}>الحي</label>
      <CreatableSelect
        options={availableDistricts}
        onChange={handleDistrictChange}
        placeholder="اختر أو اكتب الحي..."
        isMulti
        isSearchable
        isDisabled={!selectedCity}
        value={selectedDistricts} // نعيد تعيين القيمة لما تنمسح

        
         formatCreateLabel={(selectedDistricts) => selectedDistricts} 
      />

      {/* {(selectedDistricts.length > 0 || selectedCity || selectedRegion) && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          ✅ اخترت:
          {selectedRegion ? ` ${selectedRegion.label}` : ''}
          {selectedCity ? ` - ${selectedCity.label}` : ''}
          {selectedDistricts.length > 0 ? ` - ${selectedDistricts.map((d) => d.label).join(', ')}` : ''}
        </div>
      )} */}
    </div>
  );
}

export default Dropdown;










// import React, { useState } from 'react';
// import Select from 'react-select';



// const zone = [
//   { value: 'الشمالية', label: 'المنطقة الشمالية' },
//   { value: 'الجنوبية', label: 'المنطقة الجنوبية' },
//   { value: 'الشرقية', label: 'المنطقة الشرقية' },
//     { value: 'الغربية', label: 'المنطقة الغربية' },
// ];

// const city = {
//   الشمالية: [
//     { value: 'عرعر', label: 'عرعر' },
//     { value: 'طريف', label: 'طريف' },
//     { value: 'رفحاء', label: 'رفحاء' },
//      { value: 'رفحاء', label: 'رفحاء' },
//       { value: 'رفحاء', label: 'رفحاء' },
//   ],
//   الجنوبية: [
//     { value: 'أبها', label: 'أبها' },
//     { value: 'خميس مشيط', label: 'خميس مشيط' },
//     { value: 'نجران', label: 'نجران' },
//     { value: 'نجران', label: 'نجران' },
//   ],
//   الشرقية: [
//     { value: 'الدمام', label: 'الدمام' },
//     { value: 'الخبر', label: 'الخبر' },
//     { value: 'الأحساء', label: 'الأحساء' },
//     { value: 'الأحساء', label: 'الأحساء' },
//   ],
// };

// function Dropdown() {
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [selectedCities, setSelectedCities] = useState([]);

//   const handleRegionChange = (option) => {
//     setSelectedRegion(option);
//     setSelectedCities([]); // إعادة تعيين المدن عند تغيير المنطقة
//   };

//   const handleCityChange = (options) => {
//     setSelectedCities(options || []); // لو الخيارات فاضية، خليها مصفوفة فاضية
//   };

//   const availableCities = selectedRegion ? city[selectedRegion.value] : [];

//   return (
//     <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'right' }}>
//       <h3>  المنطقة</h3>
//       <Select
//         options={zone}
//         onChange={handleRegionChange}
//         placeholder="اختر المنطقة..."
//         isSearchable
//       />

//       {selectedRegion && (
//         <>
//           <h3 style={{ marginTop: '20px' }}>  المدينة</h3>
//           <Select
//             options={availableCities}
//             onChange={handleCityChange}
//             placeholder="اختر المدينة..."
//             isMulti //  هنا السحر!
//             isSearchable
//           />
//         </>
//       )}

//       {selectedCities.length > 0 && (
//         <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
//           ✅ اخترت: {selectedRegion.label} -{' '}
//           {selectedCities.map((city) => city.label).join(', ')}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dropdown;



// import React, { useState } from 'react';
// import Select from 'react-select';
// import CreatableSelect from 'react-select/creatable';

// const zone = [
//   { value: 'الشمالية', label: 'المنطقة الشمالية' },
//   { value: 'الجنوبية', label: 'المنطقة الجنوبية' },
//   { value: 'الشرقية', label: 'المنطقة الشرقية' },
// ];

// const city = {
//   الشمالية: [
//     { value: 'عرعر', label: 'عرعر' },
//     { value: 'طريف', label: 'طريف' },
//   ],
//   الجنوبية: [
//     { value: 'أبها', label: 'أبها' },
//     { value: 'خميس مشيط', label: 'خميس مشيط' },
//   ],
//   الشرقية: [
//     { value: 'الدمام', label: 'الدمام' },
//     { value: 'الخبر', label: 'الخبر' },
//   ],
// };

// const alhia = {
//   عرعر: [
//     { value: 'حي المروج', label: 'حي المروج' },
//     { value: 'حي الروابي', label: 'حي الروابي' },
//   ],
//   طريف: [
//     { value: 'حي الفيصلية', label: 'حي الفيصلية' },
//     { value: 'حي العزيزية', label: 'حي العزيزية' },
//   ],
//   أبها: [
//     { value: 'حي الوردتين', label: 'حي الوردتين' },
//     { value: 'حي السد', label: 'حي السد' },
//   ],
//   'خميس مشيط': [
//     { value: 'حي الرصراص', label: 'حي الرصراص' },
//     { value: 'حي شكر', label: 'حي شكر' },
//   ],
//   الدمام: [
//     { value: 'حي الشاطئ', label: 'حي الشاطئ' },
//     { value: 'حي الفيصلية', label: 'حي الفيصلية' },
//   ],
//   الخبر: [
//     { value: 'حي العقربية', label: 'حي العقربية' },
//     { value: 'حي العليا', label: 'حي العليا' },
//   ],
// };

// function Dropdown() {
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [selectedDistricts, setSelectedDistricts] = useState([]);

//   const handleRegionChange = (option) => {
//     setSelectedRegion(option);
//     setSelectedCity(null);
//     setSelectedDistricts([]);
//   };

//   const handleCityChange = (option) => {
//     setSelectedCity(option);
//     setSelectedDistricts([]);
//   };

//   const handleDistrictChange = (options) => {
//     setSelectedDistricts(options || []);
//   };

//   const availableCities = selectedRegion ? city[selectedRegion.value] : [];
//   const availableDistricts = selectedCity ? alhia[selectedCity.label] || [] : [];

//   return (
//     <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'right' }}>

//       <label>  المنطقة</label>
//       <Select
//         options={zone}
//         onChange={handleRegionChange}
//         placeholder="اختر المنطقة..."
//         isSearchable
//       />

//       <label style={{ marginTop: '20px' }}>المدينه</label>
//       <Select
//         options={availableCities}
//         onChange={handleCityChange}
//         placeholder="اختر المدينة..."
//         isSearchable
//         isDisabled={!selectedRegion}
//       />

//       <label style={{ marginTop: '20px' }}>  الحي:</label>
//       <CreatableSelect
//         options={availableDistricts}
//         onChange={handleDistrictChange}
//         placeholder="اختر أو اكتب الحي..."
//         isMulti
//         isSearchable
//         isDisabled={!selectedCity}
//       />

//       {/* {selectedDistricts.length > 0 && (
//         <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
//           ✅ اخترت: {selectedRegion ? selectedRegion.label : '---'} -{' '}
//           {selectedCity ? selectedCity.label : '---'} -{' '}
//           {selectedDistricts.map((d) => d.label).join(', ')}
//         </div>
//       )} */}


//     </div>
//   );
// }

// export default Dropdown;