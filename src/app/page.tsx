"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

const url = "https://kenkoooo.com/atcoder/resources/problems.json";

async function fetchData() {
	try {
		const response = await axios.get(url);
		const data = response.data;

		// 必要な情報を抽出
		for (const problem of data) {
			const problemId = problem.id;
			const findABC = problemId.includes("abc");
			const contestId = problem.contest_id;
			const title = problem.title;
			// 他にも必要な情報があれば適宜追加

			// 抽出した情報を表示
			if (findABC)
				console.log(
					`Problem ID: ${problemId}, Contest ID: ${contestId}, Title: ${title}`
				);
		}
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error("Error fetching data:", error.message);
		} else {
			console.error("An unknown error occurred");
		}
	}
}

export default function Home() {
	useEffect(() => {
		fetchData();
	}, []);
	return <></>;
}
