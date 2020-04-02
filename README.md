# TurkeyCovidData
The source of this information is the [ministry of health.](https://covid19.saglik.gov.tr)

## Installation

```bash
git clone https://github.com/Cihatata/TurkeyCovidDataAPI.git 
cd TurkeyCovidDataAPI
npm install  
node app.js 
```
## API
```
Request  '/'
Request  '/provinces' 
```
```Javascript
Response  
{ 
  "total_tests":106799,
  "tests_done_today":15679,
  "deaths":277,
  "intensive_care":979,
  "intubated_patients":692,
  "recoverd":333,<br/>
  "confirmed_cases":14396,
  "confirmed_cases_today":2148,
  "deaths_today":63,
  "date":"2020-4-1"
}
```
