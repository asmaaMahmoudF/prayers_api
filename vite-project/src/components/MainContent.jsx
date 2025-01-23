import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Paryer.jsx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import { useForkRef } from "@mui/material";
import "moment/dist/locale/ar-dz";
moment.locale("ar");
export default function MainContent() {
	// STATES
	const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
	const [timings, setTimings] = useState({
		Fajr: "04:20",
		Dhuhr: "11:50",
		Asr: "15:18",
		Sunset: "18:03",
		Isha: "19:33",
	});

	const [remainingTime, setRemainingTime] = useState("");

	const [selectedCity, setSelectedCity] = useState({
		displayName: "مكة المكرمة",
		apiName: "Makkah al Mukarramah",
	});

	const [today, setToday] = useState("");

	const avilableCities = [
		{
			displayName: "مكة المكرمة",
			apiName: "Makkah al Mukarramah",
		},
		{
			displayName: "الرياض",
			apiName: "Riyadh",
		},
		{
			displayName: "الدمام",
			apiName: "Dammam",
		},
	];

	const prayersArray = [
		{ key: "Fajr", displayName: "الفجر" },
		{ key: "Dhuhr", displayName: "الظهر" },
		{ key: "Asr", displayName: "العصر" },
		{ key: "Sunset", displayName: "المغرب" },
		{ key: "Isha", displayName: "العشاء" },
	];
	const getTimings = async () => {
		console.log("calling the api");
		const response = await axios.get(
			`https://api.aladhan.com/v1/timingsByCity?country=SA&city=${selectedCity.apiName}`
		);
		setTimings(response.data.data.timings);
	};
	useEffect(() => {
		getTimings();
	}, [selectedCity]);

	useEffect(() => {
		let interval = setInterval(() => {
			console.log("calling timer");
			setupCountdownTimer();
		}, 1000);

		const t = moment();
		setToday(t.format("MMM Do YYYY | h:mm"));

		return () => {
			clearInterval(interval);
		};
	}, [timings]);


	const setupCountdownTimer = () => {
		const momentNow = moment();

		let prayerIndex = 2;

		if (
			momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
		) {
			prayerIndex = 1;
		} else if (
			momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
		) {
			prayerIndex = 2;
		} else if (
			momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
		) {
			prayerIndex = 3;
		} else if (
			momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
		) {
			prayerIndex = 4;
		} else {
			prayerIndex = 0;
		}

		setNextPrayerIndex(prayerIndex);

		// now after knowing what the next prayer is, we can setup the countdown timer by getting the prayer's time
		const nextPrayerObject = prayersArray[prayerIndex];
		const nextPrayerTime = timings[nextPrayerObject.key];
		const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

		let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

		if (remainingTime < 0) {
			const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
			const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
				moment("00:00:00", "hh:mm:ss")
			);

			const totalDiffernce = midnightDiff + fajrToMidnightDiff;

			remainingTime = totalDiffernce;
		}
		//console.log(remainingTime);

		const durationRemainingTime = moment.duration(remainingTime);

		setRemainingTime(
			`${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
		);
		console.log(
			"duration issss ",
			durationRemainingTime.hours(),
			durationRemainingTime.minutes(),
			durationRemainingTime.seconds()
		);
	};
	const handleCityChange = (event) => {
		const cityObject = avilableCities.find((city) => {
			return city.apiName == event.target.value;
		});
		console.log("the new value is ", event.target.value);
		setSelectedCity(cityObject);
	};

	return (
		<>
			{/* TOP ROW */}
			<Grid container>
				<Grid xs={6}>
					<div>
						<h2>{today}</h2>
						<h1>{selectedCity.displayName}</h1>
					</div>
				</Grid>

				<Grid xs={6}>
					<div>
						<h2>
							متبقي حتى صلاة{" "}
							{prayersArray[nextPrayerIndex].displayName}
						</h2>
						<h1>{remainingTime}</h1>
					</div>
				</Grid>
			</Grid>
			{/*== TOP ROW ==*/}

			<Divider style={{ borderColor: "white", opacity: "0.1" }} />

			{/* PRAYERS CARDS */}
			<Stack
				direction="row"
				justifyContent={"space-around"}
				style={{ marginTop: "50px" }}
			>
				<Prayer
					name="الفجر"
					time={timings.Fajr}
					image="https://cdn-cm.freepik.com/resources/5c64457a-0002-4567-8594-79b428dc3890.jpg?token=exp=1737602692~hmac=caff2bd0a2df6caa3bc04dc4c97d93bace1655c66be5b6d14bf9065340713623"
				/>
				<Prayer
					name="الظهر"
					time={timings.Dhuhr}
					image="https://cdn-cm.freepik.com/resources/477b4b7f-0c8b-46ed-9e6a-a2f84f84b38e.jpg?token=exp=1737602696~hmac=034ddae45c56287e44728b83060baac1c7a8f032cbb62a77149edced90c3c61f"
				/>
				<Prayer
					name="العصر"
					time={timings.Asr}
					image="https://cdn-cm.freepik.com/resources/c2f8ab7d-5510-4b6f-8b9a-6417fc82f15c.jpg?token=exp=1737602690~hmac=e70f3069f15316e08186dffc12cebfc45a2351af491e461cb7e330df4a65a35e"
				/>
				<Prayer
					name="المغرب"
					time={timings.Sunset}
					image="https://cdn-cm.freepik.com/resources/45029b30-8ea2-43ac-bcfc-8e576bf2053f.jpg?token=exp=1737602699~hmac=15cf5f4c5c20c4ac9001bb5b656aba1d1a22cba5052c0d86b8e9803a0a0ce379"
				/>
				<Prayer
					name="العشاء"
					time={timings.Isha}
					image="https://cdn-cm.freepik.com/resources/a8c21b31-706e-4107-aec8-65621b21b89f.jpg?token=exp=1737602687~hmac=3d93bdea2dcd0f6a9893d02ff29f8307600557306ba720f4993eedc82aa6ec0a"
				/>
			</Stack>
			{/*== PRAYERS CARDS ==*/}

			{/* SELECT CITY */}
			<Stack
				direction="row"
				justifyContent={"center"}
				style={{ marginTop: "40px" }}
			>
				<FormControl style={{ width: "20%" }}>
					<InputLabel id="demo-simple-select-label">
						<span style={{ color: "white" }}>المدينة</span>
					</InputLabel>
					<Select
						style={{ color: "white" }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Age"
						onChange={handleCityChange}
					>
						{avilableCities.map((city) => {
							return (
								<MenuItem
									value={city.apiName}
									key={city.apiName}
								>
									{city.displayName}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Stack>
		</>
	);
}