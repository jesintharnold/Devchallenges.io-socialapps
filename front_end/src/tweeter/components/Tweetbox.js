/* eslint-disable no-unused-vars */
import { useState } from "react";
import tweeterApp from "../../Assets/tweeter.svg";
import Tweetdropdown from "./Tweetdropdown";

const Tweetbox = () => {
	const [drop, setDrop] = useState(false);
	const [data, setData] = useState({
		private: false,
		text: "What’s happening?",
	});

	return (
		<div className="bg-navbar rounded-xl flex flex-col flex-shrink-0 flex-grow-0 py-2 px-4 shadow-tweet">
			<span className="text-poppins text-sm font-semibold mb-2">Tweet something</span>
			<hr className="text-gray-500  mb-2" />
			<div className="flex flex-grow-0 flex-shrink-0 w-full gap-4 mt-2">
				<img
					src={
						"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
					}
					className="h-10 w-10  rounded object-cover justify-self-start"
					alt="not found"
					loading="lazy"
				/>
				<form className="flex flex-col w-full">
					<textarea
						rows="3"
						maxLength="200"
						placeholder="What’s happening?"
						className="placeholder:text-tweeter-likes resize-none outline-none border-none"
					/>
					<div className="flex justify-between mt-2 items-center">
						<div className="text-tweeter-blue-highlight flex gap-3 text-sm">
							<label
								htmlFor="image_upload"
								className="inline-flex items-center p-0  cursor-pointer"
							>
								<span className="material-icons-outlined text-2xl">image</span>
								<input type="file" id="image_upload" className="hidden" />
							</label>
							<Tweetdropdown />
						</div>
						<button className="bg-tweeter-blue-highlight text-sans text-sm -tracking-tighter text-white rounded-sm px-3 py-1">
							Tweet
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Tweetbox;
