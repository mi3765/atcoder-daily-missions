"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { Problem } from "./components/Problem";
import { UpdateButton } from "./components/UpdateButton";
import { Button } from "@material-tailwind/react";

export default function Home() {
	return (
		<>
			<Problem />
		</>
	);
}
