// UpdateButton.tsx

import React from "react";

type UpdateButtonProps = {
	onClick: () => void;
};

export const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => {
	return (
		<button
			className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
			onClick={onClick}
		>
			問題を更新
		</button>
	);
};
