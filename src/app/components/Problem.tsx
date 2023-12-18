// Problem.tsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import { UpdateButton } from "./UpdateButton";

type ProblemType = {
	id: string;
	contest_id: string;
	title: string;
};

type NewProblemType = {
	problemId: string;
	contestId: string;
	title: string;
};

const url = "https://kenkoooo.com/atcoder/resources/problems.json";

export const Problem: React.FC = () => {
	const [randomProblem, setRandomProblem] = useState<NewProblemType | null>(
		null
	);

	const fetchData = async () => {
		try {
			const response = await axios.get(url);
			const data = response.data;

			// 必要な情報を抽出
			const filteredProblems = data
				.filter((problem: ProblemType) => problem.id.includes("abc"))
				.map((problem: ProblemType) => ({
					problemId: problem.id,
					contestId: problem.contest_id,
					title: problem.title,
				}));

			// ランダムに1つの要素を選択
			const randomIndex = Math.floor(Math.random() * filteredProblems.length);
			const randomProblem = filteredProblems[randomIndex];

			setRandomProblem(randomProblem);
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Error fetching data:", error.message);
			} else {
				console.error("An unknown error occurred");
			}
		}
	};

	const handleUpdateClick = () => {
		// ボタンがクリックされたときにデータを更新
		fetchData();
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{randomProblem && (
				<div className="bg-gray-200 m-10 p-6 rounded-md shadow-md flex flex-col items-center">
					<ul className="list-disc list-inside text-2xl">
						<li>Problem ID: {randomProblem.problemId}</li>
						<li>Contest ID: {randomProblem.contestId}</li>
						<li>Problem Title: {randomProblem.title}</li>
					</ul>
					<a
						href={`https://atcoder.jp/contests/${randomProblem.contestId}/tasks/${randomProblem.problemId}`}
						className="text-blue-500 underline inline-block text-3xl"
					>
						問題リンクへ
					</a>
					<UpdateButton onClick={handleUpdateClick} />
				</div>
			)}
		</>
	);
};
