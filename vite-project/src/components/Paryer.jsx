import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, time, image }) {
	return (
		<Card sx={{ width: "16vw" }}>
			<CardMedia
				sx={{ height: 120 }}
				image={image}
				title="green iguana"
			/>
			<CardContent>
				<h2 gutterBottom variant="h5" component="div">{name}</h2>

				<Typography variant="h1" color="text.secondary" fontSize="90px" justifyContent={"space-around"}>
					{time}
				</Typography>
			</CardContent>
		</Card>
	);
}
