"use strict";(self.webpackChunkweather_forecast=self.webpackChunkweather_forecast||[]).push([[419],{3419:function(e,t,r){r.r(t),r.d(t,{loader:function(){return _}});var a=r(4165),n=r(5861),u=r(2791),s=r(9434),i=r(7689),o=r(3924),c=r(8385),p=r(2733),m=r(8521),l=r(9501),d=r(184);t.default=function(){var e=(0,i.f_)().weather,t=(0,s.I0)();return(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(p.Z,{}),children:(0,d.jsx)(i.KP,{resolve:e,children:function(e){var r=e.data,a=r.daily,n=r.daily_units,u=r.hourly,s=r.current_weather,i=e.city,o=u.weathercode,p=u.time,l=u.temperature_2m,h=n.temperature_2m_max,_=n.windspeed_10m_max;return t(c.r.locate(i)),(0,d.jsx)(m.Z,{daily:a,units:{temperature_unit:h,windspeed_unit:_},current_weather:s,hourly:{hourlyWeatherCodes:o,hourlyTimes:p,hourlyTemperatures:l},searched:!0})}})})};var h=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,u,s,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.searchedCityDetail,n=[Number(r.split("&").at(2).split("=").at(1)),Number(r.split("&").at(3).split("=").at(1)),r.split("&").at(1).split("=").at(1)],u=n[0],s=n[1],i=n[2],e.next=4,(0,l.Z)("https://api.open-meteo.com/v1/forecast?latitude=".concat(u,"&longitude=").concat(s,"&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windspeed_10m_min&current_weather=true&timezone=auto"));case 4:return o=e.sent,e.abrupt("return",{data:o,city:i});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.params;return(0,o.PQ)({weather:h(t)})}}}]);
//# sourceMappingURL=419.3734d84d.chunk.js.map