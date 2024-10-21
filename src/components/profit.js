import React, { useEffect, useState } from "react";

import "../Project1.css";
export default function Profit() {
  // const[data,setData]=useState([])

  // useEffect(()=>{
  //  fetch('http://localhost:8082/profit')
  //  .then(res =>res.json())
  //  .then(data =>setData(data))
  //  .catch(err=>console.log(err))
  // })

  //    مصفوفه نسب الفوائد اولا المدعوم
  var durationRealEstates = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ]; // المده بالسنوات
  var arr1 = [
    4.0, 4.0, 4.06, 4.12, 4.18, 4.24, 4.3, 4.36, 4.43, 4.49, 4.56, 4.62, 4.62,
    4.62, 4.62, 4.62, 4.62,
  ]; //نسب الفوائد للمدعوم
  let arr11 = [
    3.78, 3.78, 3.84, 3.9, 3.95, 4.01, 4.07, 4.13, 4.19, 4.25, 4.31, 4.37, 4.37,
    4.37, 4.37, 4.37, 4.37,
  ]; //ضمانات
  //مصفوفه نسب الفوائد ثانيا غير المدعوم
  var durationRealEstates2 = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30,
  ];
  var arr2 = [
    4.55, 4.4, 4.46, 4.52, 4.58, 4.65, 4.7, 4.76, 4.81, 4.86, 4.92, 4.98, 5.08,
    5.13, 5.17, 5.23, 5.28, 5.75, 5.75, 5.75, 5.75, 5.75,
  ]; // الغير مدعوم راتب اقل من 10 الف
  var arr3 = [
    4.05, 3.9, 3.96, 4.02, 4.08, 4.15, 4.2, 4.26, 4.31, 4.36, 4.42, 4.48, 4.58,
    4.63, 4.67, 4.73, 4.78, 5.15, 5.15, 5.15, 5.15, 5.15,
  ]; //الغير مدعوم راتب فوق 10 الف

  // for (let i = 0; i<arr11.length; i++) {
  //     var p2=arr11[i]
  //     console.log(p2)

  // }

  return (
    <div className=" grid-container" style={{ gap: "10px"  ,   marginTop: "20px" }}>
      <div
        className="calculation-flex flex-2dir input-css flex-dir"
        id="input-loan-form"
        style={{ marginTop: "10px", marginRight: "0px" }}
      >
        <table style={{ direction: "rtl" }}>
          <thead>
            <tr>
              <th style={{ width: "100%", textAlign: "center" }}>
                بنك الراجحي
              </th>
            </tr>
            <tr
              style={{ color: "white", background: "rgba(34, 42, 69, 0.96)" }}
            >
              <th>السنوات</th>

              <th>المدعوم </th>
              <th>ضمانات </th>
              <th>غير مدعوم </th>
              <th>راتب فوق 10 غير مدعوم </th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>9-6</td>
             
              <td>3.60</td>
              <td>3.44</td>
              <td>4.09</td>
              <td>4.09</td>
            </tr>
            
            <tr>
              <td>10</td>
              
              <td>3.60</td>
              <td>3.44</td>
              <td>3.94</td>
              <td>3.94</td>
            </tr>
            
            <tr>
              <td>11</td>
              
              <td>3.66</td>
              <td>3.50</td>
              <td>3.99</td>
              <td>3.99</td>
            </tr>
            
            <tr>
              <td>12</td>
             
              <td>3.70</td>
              <td>3.54</td>
              <td>4.04</td>
              <td>4.04</td>
            </tr>
            
            <tr>
              <td>13</td>
           
              <td>3.75</td>
              <td>3.58</td>
              <td>4.09</td>
              <td>4.09</td>
            </tr>
            
            <tr>
              <td>14</td>
              
              <td>3.81</td>
              <td>3.64</td>
              <td>4.14</td>
              <td>4.14</td>
            </tr>
            
            <tr>
              <td>15</td>
              
              <td>3.86</td>
              <td>3.69</td>
              <td>4.19</td>
              <td>4.19</td>
            </tr>
            
            <tr>
              <td>16</td>
              
              <td>3.92</td>
              <td>3.75</td>
              <td>4.24</td>
              <td>4.24</td>
            </tr>
            
            <tr>
              <td>17</td>
             
              <td>3.98</td>
              <td>3.80</td>
              <td>4.29</td>
              <td>4.29</td>
            </tr>
            
            <tr>
              <td>18</td>
           
              <td>4.04</td>
              <td>3.86</td>
              <td>4.34</td>
              <td>4.34</td>
            </tr>
            
            <tr>
              <td>19</td>
              
              <td>4.10</td>
              <td>3.92</td>
              <td>4.39</td>
              <td>4.39</td>
            </tr>
            
            <tr>
              <td>20</td>
            
              <td>4.16</td>
              <td>3.98</td>
              <td>4.44</td>
              <td>4.44</td>
            </tr>
            
            <tr>
              <td>21</td>
           
              <td>4.16</td>
              <td>3.98</td>
              <td>4.54</td>
              <td>4.54</td>
            </tr>
            
            <tr>
              <td>22</td>
             
              <td>4.16</td>
              <td>3.98</td>
              <td>4.59</td>
              <td>4.59</td>
            </tr>
            
            <tr>
              <td>23</td>
            
              <td>4.16</td>
              <td>3.98</td>
              <td>4.63</td>
              <td>4.63</td>
            </tr>
            
            <tr>
              <td>24</td>
             
              <td>4.16</td>
              <td>3.98</td>
              <td>4.69</td>
              <td>4.69</td>
            </tr>
            
            <tr>
              <td>25</td>
              
              <td>4.16</td>
              <td>3.98</td>
              <td>4.74</td>
              <td>4.74</td>
            </tr>
            
            <tr>
              <td>26</td>
             
              <td>4.73</td>
              <td>4.53</td>
              <td>4.99</td>
              <td>4.99</td>
            </tr>
            
            <tr>
              <td>27</td>
              
              <td>4.79</td>
              <td>4.58</td>
              <td>4.99</td>
              <td>4.99</td>
            </tr>
            
            <tr>
              <td>28</td>
              
              <td>4.85</td>
              <td>4.64</td>
              <td>4.99</td>
              <td>4.99</td>
            </tr>
            
            <tr>
              <td>29</td>
             
              <td>4.91</td>
              <td>4.69</td>
              <td>4.99</td>
              <td>4.99</td>
            </tr>
            
            <tr>
              <td>30</td>
             
              <td>4.96</td>
              <td>4.75</td>
              <td>4.99</td>
              <td>4.99</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="calculation-flex flex-2dir input-css flex-dir"
        id="input-loan-form"
        style={{ marginTop: "10px", marginRight: "0px" }}
      >
        <table style={{ direction: "rtl" }}>
          <thead>
            <tr>
              <th style={{ width: "100%", textAlign: "center" }}>بنك الاهلي</th>
            </tr>
            <tr
              style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
            >
              <th>السنوات</th>

              <th>المدعوم </th>
              <th>خارج الببك مدعوم </th>

              <th> خارج البنك غير مدعوم </th>
              <th>غير مدعوم </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6-9</td>
              <td>3.75</td>
              <td>3.75</td>
              <td>4.61</td>
              <td>4.31</td>
            </tr>

            <tr>
              <td>10</td>
              <td>3.79</td>
              <td>3.79</td>
              <td>4.37</td>
              <td>4.07</td>
            </tr>

            <tr>
              <td>11</td>
              <td>3.84</td>
              <td>3.84</td>
              <td>4.40</td>
              <td>4.10</td>
            </tr>

            <tr>
              <td>12</td>
              <td>3.89</td>
              <td>3.89</td>
              <td>4.42</td>
              <td>4.12</td>
            </tr>

            <tr>
              <td>13</td>
              <td>3.95</td>
              <td>3.95</td>
              <td>4.48</td>
              <td>4.18</td>
            </tr>

            <tr>
              <td>14</td>
              <td>4.00</td>
              <td>4.00</td>
              <td>4.54</td>
              <td>4.24</td>
            </tr>

            <tr>
              <td>15</td>
              <td>4.06</td>
              <td>4.06</td>
              <td>4.61</td>
              <td>4.31</td>
            </tr>

            <tr>
              <td>16</td>
              <td>4.12</td>
              <td>4.12</td>
              <td>4.67</td>
              <td>4.37</td>
            </tr>

            <tr>
              <td>17</td>
              <td>4.18</td>
              <td>4.18</td>
              <td>4.73</td>
              <td>4.43</td>
            </tr>

            <tr>
              <td>18</td>
              <td>4.24</td>
              <td>4.24</td>
              <td>4.77</td>
              <td>4.47</td>
            </tr>

            <tr>
              <td>19</td>
              <td>4.30</td>
              <td>4.30</td>
              <td>4.87</td>
              <td>4.57</td>
            </tr>

            <tr>
              <td>20</td>
              <td>4.36</td>
              <td>4.36</td>
              <td>4.93</td>
              <td>4.63</td>
            </tr>

            <tr>
              <td>21</td>
              <td>4.43</td>
              <td>4.43</td>
              <td>5.00</td>
              <td>4.70</td>
            </tr>

            <tr>
              <td>22</td>
              <td>4.49</td>
              <td>4.49</td>
              <td>5.07</td>
              <td>4.77</td>
            </tr>

            <tr>
              <td>23</td>
              <td>4.55</td>
              <td>4.55</td>
              <td>5.14</td>
              <td>4.84</td>
            </tr>

            <tr>
              <td>24</td>
              <td>4.62</td>
              <td>4.62</td>
              <td>5.21</td>
              <td>4.91</td>
            </tr>

            <tr>
              <td>25</td>
              <td>4.67</td>
              <td>4.67</td>
              <td>5.28</td>
              <td>4.98</td>
            </tr>

            <tr>
              <td>26</td>
              <td>4.73</td>
              <td>4.73</td>
              <td>5.35</td>
              <td>5.05</td>
            </tr>

            <tr>
              <td>27</td>
              <td>4.79</td>
              <td>4.79</td>
              <td>5.42</td>
              <td>5.12</td>
            </tr>

            <tr>
              <td>28</td>
              <td>4.84</td>
              <td>4.84</td>
              <td>5.49</td>
              <td>5.19</td>
            </tr>

            <tr>
              <td>29</td>
              <td>4.90</td>
              <td>4.90</td>
              <td>5.56</td>
              <td>5.26</td>
            </tr>

            <tr>
              <td>30</td>
              <td>4.95</td>
              <td>4.95</td>
              <td>5.63</td>
              <td>5.33</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="calculation-flex flex-2dir input-css flex-dir"
        id="input-loan-form"
        style={{ marginTop: "10px", marginRight: "0px" }}
      >
        <table style={{ direction: "rtl" }}>
          <thead>
            <tr>
              <th style={{ width: "100%", textAlign: "center" }}>بنك البلاد</th>
            </tr>
            <tr
              style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
            >
              <th>السنوات</th>

              <th>المدعوم </th>
              <th>خارج البنك المدعوم </th>
              <th>غير مدعوم </th>
              <th>خارج البنك غير مدعوم </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9-6</td>
              <td>3.79</td>
              <td>3.99</td>
              <td>3.79</td>
              <td>4.09</td>
            </tr>

            <tr>
              <td>10</td>
              <td>3.82</td>
              <td>4.02</td>
              <td>3.79</td>
              <td>4.09</td>
            </tr>

            <tr>
              <td>11</td>
              <td>3.84</td>
              <td>4.04</td>
              <td>3.81</td>
              <td>4.11</td>
            </tr>

            <tr>
              <td>12</td>
              <td>3.85</td>
              <td>4.05</td>
              <td>3.84</td>
              <td>4.14</td>
            </tr>

            <tr>
              <td>13</td>
              <td>3.87</td>
              <td>4.07</td>
              <td>3.86</td>
              <td>4.16</td>
            </tr>

            <tr>
              <td>14</td>
              <td>3.89</td>
              <td>4.09</td>
              <td>3.88</td>
              <td>4.18</td>
            </tr>

            <tr>
              <td>15</td>
              <td>3.92</td>
              <td>4.12</td>
              <td>3.89</td>
              <td>4.19</td>
            </tr>

            <tr>
              <td>16</td>
              <td>3.94</td>
              <td>4.14</td>
              <td>3.91</td>
              <td>4.21</td>
            </tr>

            <tr>
              <td>17</td>
              <td>3.95</td>
              <td>4.15</td>
              <td>3.94</td>
              <td>4.24</td>
            </tr>

            <tr>
              <td>18</td>
              <td>3.97</td>
              <td>4.17</td>
              <td>3.96</td>
              <td>4.26</td>
            </tr>

            <tr>
              <td>19</td>
              <td>3.99</td>
              <td>4.19</td>
              <td>3.98</td>
              <td>4.28</td>
            </tr>

            <tr>
              <td>20</td>
              <td>4.09</td>
              <td>4.29</td>
              <td>3.99</td>
              <td>4.29</td>
            </tr>

            <tr>
              <td>21</td>
              <td>4.09</td>
              <td>4.29</td>
              <td>4.01</td>
              <td>4.31</td>
            </tr>

            <tr>
              <td>22</td>
              <td>4.09</td>
              <td>4.29</td>
              <td>4.04</td>
              <td>4.34</td>
            </tr>

            <tr>
              <td>23</td>
              <td>4.09</td>
              <td>4.29</td>
              <td>4.06</td>
              <td>4.36</td>
            </tr>

            <tr>
              <td>24</td>
              <td>4.09</td>
              <td>4.29</td>
              <td>4.08</td>
              <td>4.38</td>
            </tr>

            <tr>
              <td>25</td>
              <td>4.09</td>
              <td>4.29</td>
              <td>4.09</td>
              <td>4.39</td>
            </tr>

            <tr>
              <td>26</td>
              <td>4.19</td>
              <td>4.39</td>
              <td>4.19</td>
              <td>4.49</td>
            </tr>

            <tr>
              <td>27</td>
              <td>4.19</td>
              <td>4.39</td>
              <td>4.19</td>
              <td>4.49</td>
            </tr>

            <tr>
              <td>28</td>
              <td>4.19</td>
              <td>4.39</td>
              <td>4.19</td>
              <td>4.49</td>
            </tr>

            <tr>
              <td>29</td>
              <td>4.19</td>
              <td>4.39</td>
              <td>4.19</td>
              <td>4.49</td>
            </tr>

            <tr>
              <td>30</td>
              <td>4.19</td>
              <td>4.39</td>
              <td>4.19</td>
              <td>4.49</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="calculation-flex flex-2dir input-css flex-dir"
        id="input-loan-form"
        style={{ marginTop: "15px", marginRight: "0px" }}
      >
        <table style={{ direction: "rtl" }}>
          <thead>
            <tr>
              <th style={{ width: "100%", textAlign: "center" }}>
                بنك الانماء
              </th>
            </tr>
            <tr
              style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
            >
              <th>السنوات</th>

              <th>المدعوم </th>
              <th>غير مدعوم </th>
              <th>غير معتمد غير مدعوم </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9-6</td>
              <td>2.99</td>
              <td>2.99</td>
              <td>4.85</td>
            </tr>

            <tr>
              <td>10</td>
              <td>3.52</td>
              <td>3.52</td>
              <td>4.85</td>
            </tr>

            <tr>
              <td>11</td>
              <td>3.71</td>
              <td>3.71</td>
              <td>4.90</td>
            </tr>

            <tr>
              <td>12</td>
              <td>3.71</td>
              <td>3.71</td>
              <td>4.95</td>
            </tr>

            <tr>
              <td>13</td>
              <td>3.71</td>
              <td>3.71</td>
              <td>5.00</td>
            </tr>

            <tr>
              <td>14</td>
              <td>3.71</td>
              <td>3.71</td>
              <td>5.05</td>
            </tr>

            <tr>
              <td>15</td>
              <td>3.71</td>
              <td>3.71</td>
              <td>5.10</td>
            </tr>

            <tr>
              <td>16</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.15</td>
            </tr>

            <tr>
              <td>17</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.20</td>
            </tr>

            <tr>
              <td>18</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.25</td>
            </tr>

            <tr>
              <td>19</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.35</td>
            </tr>

            <tr>
              <td>20</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.65</td>
            </tr>

            <tr>
              <td>21</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.70</td>
            </tr>

            <tr>
              <td>22</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>5.85</td>
            </tr>

            <tr>
              <td>23</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>6.00</td>
            </tr>

            <tr>
              <td>24</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>6.15</td>
            </tr>

            <tr>
              <td>25</td>
              <td>3.99</td>
              <td>3.99</td>
              <td>6.30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="calculation-flex flex-2dir input-css flex-dir"
        id="input-loan-form"
        style={{ marginTop: "15px", marginRight: "0px" }}
      >
        <table style={{ direction: "rtl" }}>
          <thead>
            <tr>
              <th style={{ width: "100%", textAlign: "center" }}>بنك ساب</th>
            </tr>
            <tr
              style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
            >
              <th>السنوات</th>

              <th>المدعوم </th>
              <th>غير مدعوم </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9-6</td>
              <td>3.45</td>
              <td>3.45</td>
            </tr>

            <tr>
              <td>10</td>
              <td>3.45</td>
              <td>3.45</td>
            </tr>

            <tr>
              <td>11</td>
              <td>3.45</td>
              <td>3.45</td>
            </tr>

            <tr>
              <td>12</td>
              <td>3.55</td>
              <td>3.55</td>
            </tr>

            <tr>
              <td>13</td>
              <td>3.55</td>
              <td>3.55</td>
            </tr>

            <tr>
              <td>14</td>
              <td>3.60</td>
              <td>3.60</td>
            </tr>

            <tr>
              <td>15</td>
              <td>3.60</td>
              <td>3.60</td>
            </tr>

            <tr>
              <td>16</td>
              <td>3.65</td>
              <td>3.65</td>
            </tr>

            <tr>
              <td>17</td>
              <td>3.65</td>
              <td>3.65</td>
            </tr>

            <tr>
              <td>18</td>
              <td>3.75</td>
              <td>3.75</td>
            </tr>

            <tr>
              <td>19</td>
              <td>3.75</td>
              <td>3.75</td>
            </tr>

            <tr>
              <td>20</td>
              <td>3.79</td>
              <td>3.79</td>
            </tr>

            <tr>
              <td>21</td>
              <td>3.95</td>
              <td>3.95</td>
            </tr>

            <tr>
              <td>22</td>
              <td>3.98</td>
              <td>3.98</td>
            </tr>

            <tr>
              <td>23</td>
              <td>4.01</td>
              <td>4.01</td>
            </tr>

            <tr>
              <td>24</td>
              <td>4.04</td>
              <td>4.04</td>
            </tr>

            <tr>
              <td>25</td>
              <td>4.06</td>
              <td>4.06</td>
            </tr>

            <tr>
              <td>26</td>
              <td></td>
              <td>4.12</td>
            </tr>

            <tr>
              <td>27</td>
              <td></td>
              <td>4.16</td>
            </tr>

            <tr>
              <td>28</td>
              <td></td>
              <td>4.19</td>
            </tr>

            <tr>
              <td>29</td>
              <td></td>
              <td>4.23</td>
            </tr>

            <tr>
              <td>30</td>
              <td></td>
              <td>4.26</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
