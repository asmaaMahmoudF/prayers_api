import { useEffect, useState } from "react";
import Prayer from "./components/Prayer.jsx";

function App() {
	const [prayerTimes, setPrayerTimes] = useState({})
	const [dataTimes, setDateTimes] = useState("")
	const [city, setCity]  = useState("Cairo")
	const cities =[
		{name: "Cairo", value: "Cairo"},
		{name: "Alexandria", value: "Alexandria"},
		{name: "Giza", value: "Giza"},
		{name: "Mansoura", value: "Mansoura"},
		{name: "Aswan", value: "Aswan"},
		{name: "Luxor", value: "Luxor"},

	]
useEffect(() => {

	const fetchPrayerTimes = async () => {
		try{
			const response = await fetch(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt`);
			const data = await response.json()
			
			setPrayerTimes(data.data.timings);
			setDateTimes(data.data.date.readable)

		}catch(error){
		console.error(error);
		}
	};
	fetchPrayerTimes();
},[city])


const formatTimes = (time) => {
	if(!time){
		return "00:00";
	}
	let [hours, mins] =time.split(":").map(Number)
	const perd = hours >= 12? "PM" : "AM";
	hours = hours % 12 || 12;
	return `${hours}:${mins < 10 ? "0" + mins : mins} ${perd}`
}


	return (
		<section>
			<div className="container">
				<div className="top_sec">
					<div className="city">
						<h3>Cities of Egypt </h3>
						<select name="" id="" onChange={(e) => setCity(e.target.value)}>
							{cities.map((city_Obj) => (
								<option key={city_Obj.value} value={city_Obj.value}>
									{city_Obj.name}
								</option>
							))}
						</select>
					</div>
					<div className="date">
						<h3>Date</h3>
						<h4>{dataTimes}</h4>
					</div>
				</div>
				<div>
					{prayerTimes && (
						<>
						<Prayer name="Al-Fajr" time={formatTimes(prayerTimes.Fajr)}/>
						<Prayer name="Al-Dhuhr" time={formatTimes(prayerTimes.Dhuhr)}/>
						<Prayer name="Al-Asr" time={formatTimes(prayerTimes.Asr)}/>
						<Prayer name="Al-Maghrib" time={formatTimes(prayerTimes.Maghrib)}/>
						<Prayer name="Al-Isha" time={formatTimes(prayerTimes.Isha)}/>
						</>
					)}
				</div>
			</div>
		</section>
	);
}

export default App;