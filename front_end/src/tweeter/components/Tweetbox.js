/* eslint-disable no-unused-vars */
import { useState } from "react";
import tweeterApp from "../../Assets/tweeter.svg";

const reply = [
	{ icon: "", name: "Everyone " },
	{ icon: "", name: "People you follow" },
];

const Tweetbox = () => {
	const [drop, setDrop] = useState(false);
	const [data, setData] = useState({
		private: false,
		text: "What’s happening?",
	});

	return (
		<div className="bg-navbar rounded-lg flex flex-col flex-shrink-0 flex-grow-0 py-2 px-4">
			<span className="text-poppins text-sm font-semibold">Tweet something</span>
			<hr className="text-gray-500" />
			<div className="flex flex-grow-0 flex-shrink-0 w-full">
				<img src={tweeterApp} className="h-7" />
				<div className="flex flex-col w-full">
					<textarea
						placeholder="What’s happening?"
						className="placeholder:text-tweeter-likes"
					/>
					<div>
						<div className="flex gap-4 relative text-tweeter-blue-highlight">
							<span className="material-icons-round ">image</span>
							<div>
								<span className="material-icons-outlined">
									{data.private ? "" : ""}
								</span>
								<span>
									{data.private
										? "Everyone can reply"
										: "People you follow can reply"}
								</span>
							</div>

							{drop ? (
								<div className="absolute">
									<div>
										Who can reply?
										<span>Choose who can reply to this Tweet.</span>
									</div>
									{reply.map(({ icon, name }, index) => (
										<div
											key={index}
											className="flex px-1 py-2 rounded-lg  cursor-pointer hover:bg-gray-200 items-center"
											onClick={() => "Logout function"}
										>
											<span className="material-icons-outlined">{`${icon}`}</span>
											<span className="ml-2 font-sans font-medium">
												{`${name}`}
											</span>
										</div>
									))}
								</div>
							) : (
								<></>
							)}
						</div>
						<button className="bg-tweeter-blue-highlight text-sans text-sm -tracking-tighter">
							Tweet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tweetbox;
