<h1>How to Run Simulator:</h1>
<ol>
  <li>git clone</li>
  <li>cd react-native-coding-challenge</li>
  <li>yarn</li>
  <li>npm run ios</li>
</ol>

<h1>App Architecture:</h1>
<p>The mini-weather-app has three main screens:</p>
<ul>
  <li>HomeScreen</li>
    <ul>
      <li>CityList Component</li>
      <ul>
        <li>CityItem Component</li>
      </ul>
    </ul>
  <li>CityForecastScreen</li>
    <ul>
      <li>Initial landing screen</li>
    </ul>
  <li>AddCityScreen</li>
</ul>

<h1>Any Trade-Offs Made:</h1>
<p>Rendering Images without template strings in React Native: https://github.com/facebook/react-native/issues/2481</p>
<p>External storage module used: https://github.com/react-native-community/async-storage</p>
