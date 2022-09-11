import { useRef } from "react";
const reply = [
	{ icon: "public", name: "Everyone " },
	{ icon: "people", name: "People you follow" },
];
const Tweetdropdown = () => {
	const inputRef = useRef();
	const drop = useRef();
	const image = useRef();

	const changeState = (e, icon, name) => {
		e.preventDefault();
		inputRef.current.value = name.toString();
		image.current.innerText = icon.toString();
		drop.current.classList.add("hidden");
	};

	const drop_change = (e) => {
		e.preventDefault();
		drop.current.classList.remove("hidden");
	};

	return (
		<label
			htmlFor="reply"
			className="cursor-pointer text-inherit flex items-center justify-center"
		>
			<div className="dropdown relative w-auto text-inherit">
				<div className="flex gap-2 items-center" onClick={(e) => drop_change(e)}>
					<span ref={image} className="material-icons-outlined block text-2xl">
						public
					</span>
					<input
						type="text"
						className="w-full h-full border-none outline-none text-inherit font-poppins cursor-pointer"
						readOnly
						ref={inputRef}
						value="Everyone"
						id="reply"
					/>
				</div>
				<div className="absolute p-3 hidden bg-navbar mt-5 rounded-lg" ref={drop}>
					<span className="text-gray-700 text-sm font-semibold p-0 mb-1 block">
						Who can reply?
					</span>
					<span className="text-gray-500 text-xs mb-2 block">
						Choose who can reply to this Tweet.
					</span>

					<div className="flex flex-col ">
						{reply.map(({ name, icon }, index) => (
							<div
								key={index}
								className="flex px-1 py-2 gap-1 rounded-lg  cursor-pointer hover:bg-gray-200 items-center"
								onClick={(e) => changeState(e, icon, name)}
							>
								<span className="material-icons-outlined text-black opacity-80">{`${icon}`}</span>
								<span className="ml-2 font-sans font-medium text-gray-700 text-sm">{`${name}`}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</label>
	);
};

export default Tweetdropdown;
